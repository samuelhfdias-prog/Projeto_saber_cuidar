import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import type { AuthMode } from '../../../core/models';
import { AppStateComponent } from '../../../shared/components';
import { sanitizeText } from '../../../shared/utils';
import { validarForcaSenha } from '../../../shared/validators/custom.validators';

import { PatientService, UserService, AuthSessionService } from '../../../core/services';

type AuthControlName = 'name' | 'elderlyName' | 'email' | 'password';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AppStateComponent, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly userService = inject(UserService);
  private readonly patientService = inject(PatientService);
  private readonly authSession = inject(AuthSessionService);

  readonly mode: AuthMode = this.route.snapshot.data['mode'] === 'register' ? 'register' : 'login';
  readonly authForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: this.mode === 'register'
        ? [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(80),
            Validators.pattern(/^[A-Za-zÀ-ÿ' -]+$/)
          ]
        : []
    }),
    elderlyName: new FormControl('', {
      nonNullable: true,
      validators: this.mode === 'register'
        ? [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(80),
            Validators.pattern(/^[A-Za-zÀ-ÿ' -]+$/)
          ]
        : []
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email, Validators.maxLength(254)]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: this.mode === 'register'
        ? [Validators.required, Validators.maxLength(128), validarForcaSenha]
        : [Validators.required, Validators.minLength(6), Validators.maxLength(128)]
    })
  });
  submitAttempted = false;
  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
    if (this.authSession.estaAutenticado()) {
      void this.router.navigate(['/tabs/home'], { replaceUrl: true });
    }
  }

  get isRegister(): boolean {
    return this.mode === 'register';
  }

  get passwordAutocomplete(): 'current-password' | 'new-password' {
    return this.isRegister ? 'new-password' : 'current-password';
  }

  private readonly http = inject(HttpClient);

  continue(): void {
    this.submitAttempted = true;
    this.authForm.controls.name.setValue(sanitizeText(this.authForm.controls.name.value, 80));
    this.authForm.controls.elderlyName.setValue(sanitizeText(this.authForm.controls.elderlyName.value, 80));
    this.authForm.controls.email.setValue(sanitizeText(this.authForm.controls.email.value, 254).toLowerCase());

    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    const email = this.authForm.controls.email.value;
    const password = this.authForm.controls.password.value;
    const name = this.authForm.controls.name.value || 'Cuidador';
    const elderlyName = this.authForm.controls.elderlyName.value || 'Idoso';

    if (this.isRegister) {
      const randomCpf = Math.floor(Math.random() * 90000000000 + 10000000000).toString();
      
      const payload = {
        nome: name,
        nome_idoso: elderlyName,
        email: email,
        senha: password,
        cpf: randomCpf 
      };

      this.http.post(`${environment.apiUrl}/api/auth/register`, payload).subscribe({
        next: (res: any) => this.handleAuthSuccess(res),
        error: (err) => {
          console.error('Erro no registro', err);
          this.submitAttempted = false;
          if (err.status === 409) {
            alert('Esse e-mail já está cadastrado. Por favor, faça login ou use outro e-mail.');
          } else {
            alert('Erro ao realizar o cadastro. Verifique os dados e tente novamente.');
          }
        }
      });
    } else {
      const payload = {
        email: email,
        senha: password
      };

      this.http.post(`${environment.apiUrl}/api/auth/login`, payload).subscribe({
        next: (res: any) => this.handleAuthSuccess(res),
        error: (err) => {
          console.error('Erro no login', err);
          this.submitAttempted = false;
          if (err.status === 401) {
            alert('E-mail ou senha incorretos.');
          } else {
            alert('Erro ao realizar o login. Verifique sua conexão e tente novamente.');
          }
        }
      });
    }
  }

  private handleAuthSuccess(res: any): void {
    if (this.isRegister) {
      const caregiverName = this.authForm.controls.name.value || 'Cuidador';
      const elderlyName = this.authForm.controls.elderlyName.value || 'Idoso';
      
      const currentUser = this.userService.getCurrentUser();
      this.userService.setCurrentUser({
        ...currentUser,
        name: caregiverName
      });

      const currentPatient = this.patientService.getCurrentPatient();
    }

    const payload = res?.dados ?? res?.data ?? res;
    const accessToken = payload?.accessToken ?? payload?.token ?? 'mock-jwt-token';
    const refreshToken = payload?.refreshToken ?? 'mock-refresh-token';
    this.authSession.definirToken(accessToken, refreshToken);

    void this.router.navigateByUrl('/tabs/home');
  }

  fieldError(controlName: AuthControlName): string {
    const control = this.authForm.controls[controlName];

    if (!control.invalid || (!control.touched && !this.submitAttempted)) {
      return '';
    }

    if (control.hasError('required')) {
      return 'Campo obrigatorio.';
    }

    if (control.hasError('email')) {
      return 'Informe um e-mail valido.';
    }

    if (control.hasError('minlength')) {
      return controlName === 'password' ? 'Use pelo menos 6 caracteres.' : 'Use pelo menos 3 caracteres.';
    }

    if (control.hasError('maxlength')) {
      return controlName === 'email' ? 'Use no maximo 254 caracteres.' : 'Use um texto mais curto.';
    }

    if (control.hasError('pattern')) {
      return 'Use apenas letras, espacos, apostrofo ou hifen.';
    }

    if (control.hasError('senhaFraca')) {
      return 'A senha deve ter 8+ caracteres, com maiúscula, minúscula, número e símbolo.';
    }

    return 'Revise este campo.';
  }

  hasFieldError(controlName: AuthControlName): boolean {
    return this.fieldError(controlName).length > 0;
  }
}

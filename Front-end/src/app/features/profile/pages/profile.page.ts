import { ChangeDetectionStrategy, Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { PageShellComponent } from '../../../shared/components';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, PageShellComponent],
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  user: any = null;
  loading = true;
  error: string | null = null;

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.loading = true;
    this.error = null;
    this.cdr.markForCheck();

    this.authService.getMe().subscribe({
      next: (res) => {
        this.user = res.data;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.error = 'Não foi possível carregar as informações do perfil.';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  getInitials(name: string): string {
    if (!name) return '??';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/onboarding']);
  }
}

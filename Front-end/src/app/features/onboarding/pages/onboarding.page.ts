import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthSessionService } from '../../../core/services';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnboardingPage implements OnInit {
  private readonly authSession = inject(AuthSessionService);
  private readonly router = inject(Router);

  ngOnInit() {
    if (this.authSession.estaAutenticado()) {
      void this.router.navigate(['/tabs/home'], { replaceUrl: true });
    }
  }
}

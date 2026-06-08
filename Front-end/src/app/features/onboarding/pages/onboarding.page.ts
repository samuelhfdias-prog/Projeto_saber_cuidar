import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnboardingPage {}

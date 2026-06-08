import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { CareGuideStep } from '../../models';

@Component({
  selector: 'app-guide-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-step.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideStepComponent {
  @Input({ required: true }) step!: CareGuideStep;
  @Input() initiallyOpen = false;
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { GuideItem } from '../../models';

@Component({
  selector: 'app-guide-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './guide-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideCardComponent {
  @Input({ required: true }) item!: GuideItem;
}

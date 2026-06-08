import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { PageTheme } from '../../models';

@Component({
  selector: 'app-page-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageShellComponent {
  @Input() theme: PageTheme = 'home';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() icon = '';
}

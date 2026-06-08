import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warning-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarningCardComponent {
  @Input() title = 'Cuidados importantes';
  @Input() description = 'Observe estes pontos durante todo o procedimento.';
  @Input({ required: true }) items: readonly string[] = [];

  trackByText(_index: number, item: string): string {
    return item;
  }
}

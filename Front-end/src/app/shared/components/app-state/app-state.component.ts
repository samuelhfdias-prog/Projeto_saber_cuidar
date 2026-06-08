import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type AppStateType = 'loading' | 'empty' | 'error' | 'success';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-state.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppStateComponent {
  @Input() type: AppStateType = 'empty';
  @Input() title = '';
  @Input() message = '';

  get role(): 'alert' | 'status' {
    return this.type === 'error' ? 'alert' : 'status';
  }

  get icon(): string {
    const icons: Record<AppStateType, string> = {
      loading: '...',
      empty: 'i',
      error: '!',
      success: 'OK'
    };

    return icons[this.type];
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { trackById } from '../../../shared/utils';
import type { ElderRight, ElderViolenceType, ReportingChannel } from '../models';
import { ViolenceService } from '../services/violence.service';

@Component({
  selector: 'app-violence',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './violence.page.html',
  styleUrls: ['./violence.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViolencePage {
  private readonly violenceService = inject(ViolenceService);

  readonly guide = this.violenceService.getProtectionGuide();
  readonly criticalCount = this.guide.violenceTypes.filter((v) => v.severity === 'critical').length;
  readonly trackByViolenceId = trackById<ElderViolenceType>;
  readonly trackByChannelId = trackById<ReportingChannel>;
  readonly trackByRightId = trackById<ElderRight>;

  activeTab: Record<string, 'signs' | 'actions'> = {};

  trackByText(_index: number, item: string): string {
    return item;
  }

  getActiveTab(id: string): 'signs' | 'actions' {
    return this.activeTab[id] ?? 'signs';
  }

  setActiveTab(id: string, tab: 'signs' | 'actions'): void {
    this.activeTab = { ...this.activeTab, [id]: tab };
  }

  severityLabel(severity: string): string {
    switch (severity) {
      case 'critical': return 'Crítica';
      case 'high': return 'Alta';
      case 'moderate': return 'Moderada';
      default: return '';
    }
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { ActivityItem } from '../../../core/models';
import { BottomNavigationComponent } from '../../../shared/components';
import { trackById } from '../../../shared/utils';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [BottomNavigationComponent, CommonModule, RouterLink],
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesPage {
  private readonly activityService = inject(ActivityService);

  readonly activities = this.activityService.getActivities();
  readonly trackByActivityId = trackById<ActivityItem>;

  activityIconLabel(icon: string): string {
    return this.activityService.getActivityIconLabel(icon);
  }

  activityTone(icon: string): string {
    const tones: Record<string, string> = {
      'chatbubble-ellipses-outline': 'purple',
      'fitness-outline': 'green',
      'water-outline': 'blue'
    };
    return tones[icon] ?? 'neutral';
  }
}

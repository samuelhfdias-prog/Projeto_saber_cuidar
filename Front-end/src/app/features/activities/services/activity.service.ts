import { Injectable } from '@angular/core';

import { MOCK_ACTIVITIES } from '../../../core/data/care.mock';
import type { ActivityItem } from '../../../core/models';

const ACTIVITY_ICON_LABELS: Record<string, string> = {
  'chatbubble-ellipses-outline': 'MEM',
  'fitness-outline': 'EX',
  'water-outline': 'H2O'
};

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  getActivities(): readonly ActivityItem[] {
    return MOCK_ACTIVITIES;
  }

  getActivityIconLabel(icon: string): string {
    return ACTIVITY_ICON_LABELS[icon] ?? 'AT';
  }
}

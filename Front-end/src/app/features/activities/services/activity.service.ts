import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MOCK_ACTIVITIES } from '../../../core/data/care.mock';
import type { ActivityItem } from '../../../core/models';
import { environment } from '../../../../environments/environment';

const ACTIVITY_ICON_LABELS: Record<string, string> = {
  'chatbubble-ellipses-outline': 'MEM',
  'fitness-outline': 'EX',
  'water-outline': 'H2O'
};

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private readonly http = inject(HttpClient);
  
  getActivities(): Observable<ActivityItem[]> {
    return this.http.get<{dados: ActivityItem[]}>(`${environment.apiUrl}/api/educational/activities`).pipe(
      map(res => res.dados || (res as any))
    );
  }

  getActivityIconLabel(icon: string): string {
    return ACTIVITY_ICON_LABELS[icon] ?? 'AT';
  }
}

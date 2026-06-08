import { inject, Injectable } from '@angular/core';

import type { ActivityAction, ActivityLog } from '../models';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {
  private readonly userService = inject(UserService);
  private logs: ActivityLog[] = [];

  getLogs(elderlyId: string): ActivityLog[] {
    return this.logs
      .filter((l) => l.elderlyId === elderlyId)
      .sort((a, b) => new Date(b.performedAt).getTime() - new Date(a.performedAt).getTime());
  }

  getRecentLogs(elderlyId: string, limit = 5): ActivityLog[] {
    return this.getLogs(elderlyId).slice(0, limit);
  }

  log(
    elderlyId: string,
    action: ActivityAction,
    description: string,
    taskId?: string,
    details?: Record<string, unknown>
  ): ActivityLog {
    const user = this.userService.getCurrentUser();
    const entry: ActivityLog = {
      id: `log-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      elderlyId,
      taskId,
      action,
      description,
      performedByUserId: user.id,
      performedByName: user.name,
      performedByRole: user.role,
      performedAt: new Date().toISOString(),
      details
    };

    this.logs.unshift(entry);
    this.persist();
    return entry;
  }

  clearLogs(): void {
    this.logs = [];
    this.persist();
  }

  private persist(): void {}
}

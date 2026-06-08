import type { UserRole } from './app-user.model';

export type ActivityAction =
  | 'created_task'
  | 'completed_task'
  | 'uncompleted_task'
  | 'updated_task'
  | 'deleted_task'
  | 'created_observation'
  | 'check_in';

export interface ActivityLog {
  id: string;
  elderlyId: string;
  taskId?: string;
  action: ActivityAction;
  description: string;
  performedByUserId: string;
  performedByName: string;
  performedByRole: UserRole;
  performedAt: string;
  details?: Record<string, unknown>;
}

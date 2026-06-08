export type TaskStatus = 'done' | 'next' | 'late';

export type TaskCategory =
  | 'medication'
  | 'hydration'
  | 'hygiene'
  | 'exercise'
  | 'wellness'
  | 'observation'
  | 'routine'
  | 'exam'
  | 'therapy';

export type TaskPriority = 'normal' | 'attention' | 'priority';

export interface Task {
  id: string;
  elderlyId: string;
  title: string;
  detail: string;
  time: string;
  category: TaskCategory;
  priority: TaskPriority;
  status: TaskStatus;
  icon: string;
  guideId?: string;
  guideRoute?: string;
  createdByUserId: string;
  createdAt: string;
  completedByUserId?: string;
  completedAt?: string;
}

export interface TaskDraft {
  title: string;
  detail: string;
  time: string;
  category: TaskCategory;
  priority: TaskPriority;
  guideRoute?: string;
}

export interface TaskTemplate {
  id: string;
  title: string;
  category: TaskCategory;
  icon: string;
  guideRoute?: string;
}

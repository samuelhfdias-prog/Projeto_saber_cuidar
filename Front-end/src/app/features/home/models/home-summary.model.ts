export interface HomeRiskSummary {
  completedTasks: number;
  totalTasks: number;
  percent: number;
  label: string;
  tone?: 'success' | 'warning' | 'danger';
}

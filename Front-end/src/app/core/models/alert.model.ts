export type AlertTone = 'calm' | 'warning' | 'danger';

export interface Alert {
  id: string;
  title: string;
  detail: string;
  tone: AlertTone;
}

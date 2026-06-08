export type PageTheme = 'home' | 'guide' | 'ai' | 'exercise' | 'wellbeing';

export interface PageHeaderConfig {
  theme: PageTheme;
  title?: string;
  subtitle?: string;
  icon?: string;
}

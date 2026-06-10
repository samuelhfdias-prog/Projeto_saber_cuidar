export type PageTheme = 'home' | 'guide' | 'ai' | 'exercise' | 'wellbeing' | 'profile';

export interface PageHeaderConfig {
  theme: PageTheme;
  title?: string;
  subtitle?: string;
  icon?: string;
}

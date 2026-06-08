export type ViolenceSeverity = 'critical' | 'high' | 'moderate';

export interface ViolenceStatistic {
  value: string;
  label: string;
  trend: string;
}

export interface ElderViolenceType {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  emoji: string;
  severity: ViolenceSeverity;
  summary: string;
  details: readonly string[];
  signs: readonly string[];
  whatToDo: readonly string[];
  stat?: ViolenceStatistic;
  legalNote?: string;
  whoPerpetuates?: readonly string[];
  vulnerableGroups?: readonly string[];
}

export interface ElderRight {
  id: string;
  text: string;
}

export interface ReportingChannel {
  id: string;
  title: string;
  detail: string;
  actionLabel: string;
  href: string;
  tone: 'primary' | 'danger' | 'neutral' | 'pink';
}

export interface ElderProtectionGuide {
  title: string;
  subtitle: string;
  overview: string;
  violenceTypes: readonly ElderViolenceType[];
  warningSigns: readonly string[];
  immediateActions: readonly string[];
  channels: readonly ReportingChannel[];
  rights: readonly ElderRight[];
  reference: string;
}

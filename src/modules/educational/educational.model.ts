// ─────────────────────────────────────────────────────────────────────────────
// Enumerações de domínio
// ─────────────────────────────────────────────────────────────────────────────
export type ViolenceSeverity = 'crítica' | 'alta' | 'moderada';
export type StatisticTrend = 'crescente' | 'estável' | 'decrescente';

// ─────────────────────────────────────────────────────────────────────────────
// Entidades de Domínio
// ─────────────────────────────────────────────────────────────────────────────
export interface ViolenceStatistic {
  value: string;
  description: string;
  trend: StatisticTrend;
}

export interface ViolenceType {
  id: string;
  title: string;
  subtitle: string;
  iconIdentifier: string;
  severity: ViolenceSeverity;
  description: string;
  details: string[];
  warningSignals: string[];
  legalNote: string;
  recommendedActions: string[];
  commonPerpetrators?: string[];
  vulnerableGroups?: string[];
  statistic: ViolenceStatistic;
}


export interface EmergencyContact {
  name: string;
  description: string;
  phoneNumber: string;
  highlightColor: string;
  available24h: boolean;
  isFree: boolean;
}

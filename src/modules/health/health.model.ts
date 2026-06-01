// ─────────────────────────────────────────────────────────────────────────────
// Enumerações de domínio
// ─────────────────────────────────────────────────────────────────────────────

/** Categorias de observação aceitas pelo sistema. */
export type ObservationCategory = 'pele' | 'excreção' | 'comportamento' | 'vital';

/** Nível de risco retornado pela análise. */
export type AnalysisRiskLevel = 'low' | 'medium' | 'high';

// ─────────────────────────────────────────────────────────────────────────────
// Sub-tipos de dados inseridos por categoria
// ─────────────────────────────────────────────────────────────────────────────

export interface VitalSignsData {
  systolicPressure?: number;
  diastolicPressure?: number;
  temperature?: number;
  bloodGlucose?: number;
  oxygenSaturation?: number;
  heartRate?: number;
  respiratoryRate?: number;
}


export interface SkinObservationData {
  notes: string;
  location?: string;
  imageFileReference?: string;
}

export interface ExcretionObservationData {
  notes: string;
  frequency?: number;
  color?: string;
  consistency?: string;
}

export interface BehaviorObservationData {
  notes: string;
  agitationLevel?: number;
  hasConfusion?: boolean;
  refusedFood?: boolean;
}

/**
 * União dos tipos de dados de entrada por categoria.
 * O discriminante é a categoria da ObservationRecord.
 */
export type ObservationInputData =
  | VitalSignsData
  | SkinObservationData
  | ExcretionObservationData
  | BehaviorObservationData;

// ─────────────────────────────────────────────────────────────────────────────
// Resultado da Análise Simulada por IA
// ─────────────────────────────────────────────────────────────────────────────

export interface AnalysisResult {
  detectedRisk: AnalysisRiskLevel;
  diagnosticFindings: string[];
  clinicalRecommendations: string[];
  requiresImmediateAttention: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Entidade Principal
// ─────────────────────────────────────────────────────────────────────────────

export interface ObservationRecord {
  id: string;
  patientId: string;
  category: ObservationCategory;
  inputData: ObservationInputData;
  recordedAt: string;
  analysisResult: AnalysisResult;
}

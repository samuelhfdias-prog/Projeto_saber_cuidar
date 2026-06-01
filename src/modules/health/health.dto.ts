import { ObservationCategory, ObservationInputData, AnalysisResult, ObservationRecord } from './health.model';

// ─────────────────────────────────────────────────────────────────────────────
// DTOs de Entrada (Request Payloads)
// ─────────────────────────────────────────────────────────────────────────────

export interface CreateObservationRequestDto {
  patientId: string;
  category: ObservationCategory;
  inputData: ObservationInputData;
}

// ─────────────────────────────────────────────────────────────────────────────
// DTOs de Saída (Response Payloads)
// ─────────────────────────────────────────────────────────────────────────────

export interface AnalyzeObservationResponseDto {
  category: ObservationCategory;
  analysisResult: AnalysisResult;
  isPersisted: false;
}
export type SaveObservationResponseDto = ObservationRecord;

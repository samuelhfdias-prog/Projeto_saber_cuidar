import { PatientDashboard } from './patient.model';

// ─────────────────────────────────────────────────────────────────────────────
// DTOs de Saída (Response Payloads)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * DTO de resposta do endpoint GET /api/patients/:id/dashboard.
 * Reutilizado também na resposta do POST toggle para manter consistência.
 */
export type GetDashboardResponseDto = PatientDashboard;

/**
 * DTO de resposta do endpoint POST /api/patients/:id/tasks/:taskId/toggle.
 * Retorna o dashboard completo atualizado após o toggle para sincronismo
 * instantâneo com o estado do front-end Angular.
 */
export interface ToggleTaskResponseDto {
  /** Mensagem descritiva da alteração realizada. */
  message: string;
  /** Dashboard completo e atualizado com o novo status da tarefa e risco recalculado. */
  dashboard: PatientDashboard;
}

import { Request, Response } from 'express';
import { HealthService } from './health.service';
import { healthRepository } from './health.repository';
import { sendSuccess, sendError } from '../../shared/utils/response.helper';
import { CreateObservationRequestDto, AnalyzeObservationResponseDto, SaveObservationResponseDto } from './health.dto';
import { ObservationCategory } from './health.model';

const healthService = new HealthService(healthRepository);
const VALID_CATEGORIES: ObservationCategory[] = ['pele', 'excreção', 'comportamento', 'vital'];
function validateObservationPayload(body: Partial<CreateObservationRequestDto>): string | null {
  if (!body.patientId || typeof body.patientId !== 'string') {
    return 'Campo "patientId" é obrigatório e deve ser uma string.';
  }
  if (!body.category || !VALID_CATEGORIES.includes(body.category as ObservationCategory)) {
    return `Campo "category" é obrigatório. Valores aceitos: ${VALID_CATEGORIES.join(', ')}.`;
  }
  if (!body.inputData || typeof body.inputData !== 'object') {
    return 'Campo "inputData" é obrigatório e deve ser um objeto com os dados da observação.';
  }
  return null;
}
export function analyzeObservation(req: Request, res: Response): void {
  const validationError = validateObservationPayload(req.body);
  if (validationError) {
    sendError(res, validationError, 400, 'VALIDATION_ERROR');
    return;
  }

  const dto = req.body as CreateObservationRequestDto;

  try {
    const result = healthService.analyzeOnly(dto);
    sendSuccess<AnalyzeObservationResponseDto>(
      res,
      result,
      `Análise da categoria "${dto.category}" concluída. Risco detectado: ${result.analysisResult.detectedRisk}.`
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro inesperado na análise.';
    sendError(res, message, 500, 'ANALYSIS_ERROR');
  }
}

export function saveObservation(req: Request, res: Response): void {
  const validationError = validateObservationPayload(req.body);
  if (validationError) {
    sendError(res, validationError, 400, 'VALIDATION_ERROR');
    return;
  }

  const dto = req.body as CreateObservationRequestDto;

  try {
    const savedRecord = healthService.analyzeAndSave(dto);
    sendSuccess<SaveObservationResponseDto>(
      res,
      savedRecord,
      `Observação registrada com sucesso. ID: ${savedRecord.id}. Risco: ${savedRecord.analysisResult.detectedRisk}.`,
      201
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro inesperado ao salvar observação.';
    sendError(res, message, 500, 'SAVE_ERROR');
  }
}

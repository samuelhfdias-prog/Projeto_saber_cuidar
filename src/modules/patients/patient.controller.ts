import { Request, Response } from 'express';
import { PatientService } from './patient.service';
import { patientRepository } from './patient.repository';
import { sendSuccess, sendError } from '../../shared/utils/response.helper';
import { GetDashboardResponseDto, ToggleTaskResponseDto } from './patient.dto';

const patientService = new PatientService(patientRepository);
export function getDashboard(req: Request, res: Response): void {
  const { id } = req.params as Record<string, string>;

  if (!id) {
    sendError(res, 'Parâmetro "id" do paciente é obrigatório.', 400, 'MISSING_PATIENT_ID');
    return;
  }

  const dashboard = patientService.getDashboard(id);

  if (!dashboard) {
    sendError(
      res,
      `Paciente com ID "${id}" não encontrado no sistema.`,
      404,
      'PATIENT_NOT_FOUND'
    );
    return;
  }

  sendSuccess<GetDashboardResponseDto>(
    res,
    dashboard,
    `Dashboard do paciente "${dashboard.patient.name}" carregado com sucesso.`
  );
}
export function toggleTaskStatus(req: Request, res: Response): void {
  const { id: patientId, taskId } = req.params as Record<string, string>;

  if (!patientId || !taskId) {
    sendError(
      res,
      'Parâmetros "id" (paciente) e "taskId" são obrigatórios.',
      400,
      'MISSING_PARAMS'
    );
    return;
  }

  const result = patientService.toggleTaskStatus(patientId, taskId);

  if (!result) {
    sendError(
      res,
      `Paciente "${patientId}" ou Tarefa "${taskId}" não encontrada no sistema.`,
      404,
      'RESOURCE_NOT_FOUND'
    );
    return;
  }

  const responseData: ToggleTaskResponseDto = {
    message: result.message,
    dashboard: result.dashboard,
  };

  sendSuccess<ToggleTaskResponseDto>(res, responseData, result.message);
}

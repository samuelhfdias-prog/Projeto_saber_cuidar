import { Router } from 'express';
import { getDashboard, toggleTaskStatus } from './patient.controller';

/** Router Express do módulo de Pacientes. */
const patientRouter = Router();

/**
 * GET /api/patients/:id/dashboard
 * Retorna o dashboard completo do paciente com risco calculado.
 */
patientRouter.get('/:id/dashboard', getDashboard);

/**
 * POST /api/patients/:id/tasks/:taskId/toggle
 * Alterna o status de conclusão de uma tarefa e retorna o dashboard atualizado.
 */
patientRouter.post('/:id/tasks/:taskId/toggle', toggleTaskStatus);

export { patientRouter };

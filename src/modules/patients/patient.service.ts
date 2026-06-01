import { PatientRepository } from './patient.repository';
import { Task, PatientDashboard, RiskSnapshot, RiskLevel } from './patient.model';

/**
 * PatientService — encapsula toda a lógica de negócio relacionada a Pacientes e Tarefas.
 */
export class PatientService {
  constructor(private readonly repository: PatientRepository) {}

  // ───────────────────────────────────────────────────────────────────────────
  // Lógica de Negócio Privada
  // ───────────────────────────────────────────────────────────────────────────

  /**
   * Calcula o nível de risco do paciente com base na taxa de conclusão das tarefas.
   *
   * REGRAS DE NEGÓCIO (conforme especificação):
   * - Taxa >= 75% → risco "baixo"
   * - Taxa >= 50% → risco "moderado"
   * - Taxa < 50%  → risco "elevado"
   *
   * @param tasks Lista de tarefas do dia do paciente.
   * @returns Snapshot completo de risco com taxa de conclusão e contagens.
   */
  private calculateRiskSnapshot(tasks: Task[]): RiskSnapshot {
    if (tasks.length === 0) {
      return {
        level: 'baixo',
        completionRate: 100,
        totalTasks: 0,
        completedTasks: 0,
      };
    }

    const completedTasks = tasks.filter((t) => t.status === 'done').length;
    const completionRate = Math.round((completedTasks / tasks.length) * 100);

    let level: RiskLevel;
    if (completionRate >= 75) {
      level = 'baixo';
    } else if (completionRate >= 50) {
      level = 'moderado';
    } else {
      level = 'elevado';
    }

    return {
      level,
      completionRate,
      totalTasks: tasks.length,
      completedTasks,
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Métodos Públicos (chamados pelos Controllers)
  // ───────────────────────────────────────────────────────────────────────────

  /**
   * Recupera o dashboard completo de um paciente, incluindo suas tarefas do dia
   * e o nível de risco calculado dinamicamente.
   *
   * @param patientId ID do paciente.
   * @returns O dashboard completo ou `null` se o paciente não for encontrado.
   */
  getDashboard(patientId: string): PatientDashboard | null {
    const patient = this.repository.findPatientById(patientId);
    if (!patient) return null;

    const dailyTasks = this.repository.findTasksByPatientId(patientId);
    const riskSnapshot = this.calculateRiskSnapshot(dailyTasks);

    return { patient, dailyTasks, riskSnapshot };
  }

  /**
   * Alterna o status de conclusão de uma tarefa e retorna o dashboard atualizado.
   *
   * LÓGICA DE TOGGLE:
   * - Se a tarefa está 'done' → reverte para 'upcoming' (status padrão de pendência).
   * - Se a tarefa está em qualquer outro status → marca como 'done'.
   *
   * @param patientId ID do paciente dono da tarefa.
   * @param taskId ID da tarefa a ser alternada.
   * @returns O dashboard atualizado com o novo risco calculado, ou `null` em caso de erro.
   */
  toggleTaskStatus(
    patientId: string,
    taskId: string
  ): { dashboard: PatientDashboard; message: string } | null {
    // Valida existência do paciente
    const patient = this.repository.findPatientById(patientId);
    if (!patient) return null;

    // Valida existência da tarefa vinculada ao paciente
    const task = this.repository.findTaskByIds(patientId, taskId);
    if (!task) return null;

    // Aplica a lógica de toggle de status
    const previousStatus = task.status;
    const newStatus: Task['status'] = previousStatus === 'done' ? 'upcoming' : 'done';
    this.repository.updateTaskStatus(taskId, newStatus);

    // Recalcula o dashboard com o novo estado
    const updatedDashboard = this.getDashboard(patientId);
    if (!updatedDashboard) return null;

    const action = newStatus === 'done' ? 'concluída' : 'reaberta';
    const message = `Tarefa "${task.title}" ${action} com sucesso. Risco atualizado para: ${updatedDashboard.riskSnapshot.level}.`;

    return { dashboard: updatedDashboard, message };
  }
}

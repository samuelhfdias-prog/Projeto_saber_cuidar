import { PatientRepository } from './patient.repository';
import { Task, PatientDashboard, RiskSnapshot, RiskLevel } from './patient.model';


export class PatientService {
  constructor(private readonly repository: PatientRepository) {}




  
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




  
  getDashboard(patientId: string): PatientDashboard | null {
    const patient = this.repository.findPatientById(patientId);
    if (!patient) return null;

    const dailyTasks = this.repository.findTasksByPatientId(patientId);
    const riskSnapshot = this.calculateRiskSnapshot(dailyTasks);

    return { patient, dailyTasks, riskSnapshot };
  }

  
  toggleTaskStatus(
    patientId: string,
    taskId: string
  ): { dashboard: PatientDashboard; message: string } | null {

    const patient = this.repository.findPatientById(patientId);
    if (!patient) return null;

    const task = this.repository.findTaskByIds(patientId, taskId);
    if (!task) return null;

    const previousStatus = task.status;
    const newStatus: Task['status'] = previousStatus === 'done' ? 'upcoming' : 'done';
    this.repository.updateTaskStatus(taskId, newStatus);

    const updatedDashboard = this.getDashboard(patientId);
    if (!updatedDashboard) return null;

    const action = newStatus === 'done' ? 'concluída' : 'reaberta';
    const message = `Tarefa "${task.title}" ${action} com sucesso. Risco atualizado para: ${updatedDashboard.riskSnapshot.level}.`;

    return { dashboard: updatedDashboard, message };
  }
}

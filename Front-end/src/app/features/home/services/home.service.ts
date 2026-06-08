import { inject, Injectable } from '@angular/core';

import type { ActivityLog, EmergencyContact, Patient, Task, TaskDraft, TaskStatus, TaskTemplate } from '../../../core/models';
import { ActivityLogService, EmergencyService, PatientService, TaskService } from '../../../core/services';
import type { HomeRiskSummary } from '../models';

const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  done: 'Concluida',
  next: 'Pendente',
  late: 'Atencao'
};

const TASK_ICON_LABELS: Record<string, string> = {
  'medical-outline': 'RX',
  'water-outline': 'H2O',
  'bed-outline': 'BED',
  'fitness-outline': 'EX',
  'heart-outline': 'BE',
  'document-text-outline': 'OB',
  'checkmark-circle-outline': 'RT'
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly patientService = inject(PatientService);
  private readonly taskService = inject(TaskService);
  private readonly emergencyService = inject(EmergencyService);
  private readonly activityLogService = inject(ActivityLogService);

  getPatient(): Patient {
    return this.patientService.getCurrentPatient();
  }

  getTodayTasks(): Task[] {
    return this.taskService.getTodayTasks();
  }

  getEmergencyContacts(): readonly EmergencyContact[] {
    return this.emergencyService.getEmergencyContacts();
  }

  getRiskSummary(): HomeRiskSummary {
    const tasks = this.getTodayTasks();
    const completedTasks = tasks.filter((task) => task.status === 'done').length;
    const lateTasks = tasks.filter((task) => task.status === 'late').length;
    const totalTasks = tasks.length;

    let currentLabel = 'Idoso estável';
    let currentTone: 'success' | 'warning' | 'danger' = 'success';
    if (lateTasks >= 3) {
      currentLabel = 'Risco Elevado';
      currentTone = 'danger';
    } else if (lateTasks > 0) {
      currentLabel = 'Atenção Leve';
      currentTone = 'warning';
    }

    return {
      completedTasks,
      totalTasks,
      percent: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
      label: currentLabel,
      tone: currentTone
    };
  }

  getAttentionTasks(): Task[] {
    return this.getTodayTasks().filter((task) => task.status === 'late');
  }

  getRecentActivity(): ActivityLog[] {
    const patient = this.getPatient();
    return this.activityLogService.getRecentLogs(patient.id, 5);
  }

  getTaskTemplates(): readonly TaskTemplate[] {
    return this.taskService.getTaskTemplates();
  }

  addTask(draft: TaskDraft): Task {
    const patient = this.getPatient();
    return this.taskService.addTask(draft, patient.id);
  }

  toggleTaskStatus(taskId: string): TaskStatus | null {
    return this.taskService.toggleTaskStatus(taskId);
  }

  deleteTask(taskId: string): boolean {
    return this.taskService.deleteTask(taskId);
  }

  getTaskStatusLabel(status: TaskStatus): string {
    return TASK_STATUS_LABELS[status];
  }

  getTaskIconLabel(icon: string): string {
    return TASK_ICON_LABELS[icon] ?? 'OK';
  }

  getPriorityTone(index: number): 'neutral' | 'orange' | 'green' {
    if (index === 0) {
      return 'neutral';
    }

    return index < 3 ? 'orange' : 'green';
  }
}

import { inject, Injectable } from '@angular/core';

import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MOCK_SCHEDULE, MOCK_TODAY_TASKS } from '../data/care.mock';
import type { Task, TaskCategory, TaskDraft, TaskPriority, TaskStatus, TaskTemplate } from '../models';
import { ActivityLogService } from './activity-log.service';
import { UserService } from './user.service';
import { MedicamentoService } from './medicamento.service';
import { AlimentacaoService } from './alimentacao.service';

const CATEGORY_ICONS: Record<TaskCategory, string> = {
  medication: 'medical-outline',
  hydration: 'water-outline',
  hygiene: 'bed-outline',
  exercise: 'fitness-outline',
  wellness: 'heart-outline',
  observation: 'document-text-outline',
  routine: 'checkmark-circle-outline',
  exam: 'document-text-outline',
  therapy: 'fitness-outline'
};

const CATEGORY_ROUTES: Partial<Record<TaskCategory, string>> = {
  medication: '/guia/administracao-de-medicacao',
  hydration: '/guia/controle-de-hidratacao',
  hygiene: '/guia/banho-de-leito',
  exercise: '/tabs/health',
  wellness: '/tabs/profile'
};

export const TASK_TEMPLATES: readonly TaskTemplate[] = [
  { id: 'tpl-medication', title: 'Medicacao', category: 'medication', icon: 'medical-outline', guideRoute: '/guia/administracao-de-medicacao' },
  { id: 'tpl-hydration', title: 'Hidratacao', category: 'hydration', icon: 'water-outline', guideRoute: '/guia/controle-de-hidratacao' },
  { id: 'tpl-bed-bath', title: 'Banho no leito', category: 'hygiene', icon: 'bed-outline', guideRoute: '/guia/banho-de-leito' },
  { id: 'tpl-diaper', title: 'Troca de fralda', category: 'hygiene', icon: 'bed-outline', guideRoute: '/guia/troca-de-fralda' },
  { id: 'tpl-exercises', title: 'Exercicios leves', category: 'exercise', icon: 'fitness-outline', guideRoute: '/tabs/health' },
  { id: 'tpl-wellbeing', title: 'Bem-estar', category: 'wellness', icon: 'heart-outline', guideRoute: '/tabs/profile' },
  { id: 'tpl-checkin', title: 'Check-in', category: 'wellness', icon: 'heart-outline', guideRoute: '/tabs/profile' },
  { id: 'tpl-observation', title: 'Observacao', category: 'observation', icon: 'document-text-outline' },
  { id: 'tpl-feeding', title: 'Alimentacao assistida', category: 'routine', icon: 'checkmark-circle-outline', guideRoute: '/guia/alimentacao-assistida' }
];

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly userService = inject(UserService);
  private readonly activityLog = inject(ActivityLogService);
  private readonly medicamentoService = inject(MedicamentoService);
  private readonly alimentacaoService = inject(AlimentacaoService);

  private todayTasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  constructor() {}

  loadTodayTasks(elderlyId: number): void {
    forkJoin({
      meds: this.medicamentoService.listar(elderlyId).pipe(
        catchError(() => of({ data: { dados: [] } }))
      ),
      food: this.alimentacaoService.listar(elderlyId).pipe(
        catchError(() => of({ data: { dados: [] } }))
      )
    }).subscribe(({ meds, food }) => {
      const tasks: Task[] = [];
      
      const medicamentos = meds?.data?.dados || meds?.dados || [];
      const alimentacoes = food?.data?.dados || food?.dados || [];

      medicamentos.forEach((m: any) => {
        if (m.horario) {
          tasks.push({
            id: `med-${m.id}`,
            elderlyId: elderlyId.toString(),
            title: `Medicamento: ${m.nome_medicamento}`,
            detail: `${m.dosagem || ''} ${m.via_administracao || ''}`,
            time: m.horario,
            category: 'medication',
            priority: 'attention',
            status: 'next',
            icon: CATEGORY_ICONS['medication'],
            guideRoute: CATEGORY_ROUTES['medication'],
            createdByUserId: 'system',
            createdAt: new Date().toISOString()
          });
        }
      });

      alimentacoes.forEach((a: any) => {
        if (a.horario) {
          tasks.push({
            id: `food-${a.id}`,
            elderlyId: elderlyId.toString(),
            title: `Alimentacao: ${a.refeicao}`,
            detail: a.quantidade || '',
            time: a.horario,
            category: 'routine',
            priority: 'normal',
            status: 'next',
            icon: CATEGORY_ICONS['routine'],
            guideRoute: CATEGORY_ROUTES['routine'],
            createdByUserId: 'system',
            createdAt: new Date().toISOString()
          });
        }
      });

      this.todayTasks = tasks.sort((a, b) => a.time.localeCompare(b.time));
      this.tasksSubject.next(this.todayTasks);
    });
  }

  getTodayTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  getSchedule(): readonly Task[] {
    return MOCK_SCHEDULE;
  }

  getTaskTemplates(): readonly TaskTemplate[] {
    return TASK_TEMPLATES;
  }

  addTask(draft: TaskDraft, elderlyId: string): Task {
    const user = this.userService.getCurrentUser();
    const task: Task = {
      id: `task-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      elderlyId,
      title: draft.title,
      detail: draft.detail || `Previsto para ${draft.time}`,
      time: draft.time,
      category: draft.category,
      priority: draft.priority,
      status: 'next',
      icon: CATEGORY_ICONS[draft.category] || 'checkmark-circle-outline',
      guideRoute: draft.guideRoute || CATEGORY_ROUTES[draft.category],
      createdByUserId: user.id,
      createdAt: new Date().toISOString()
    };

    this.todayTasks.push(task);
    this.persist();

    this.activityLog.log(
      elderlyId,
      'created_task',
      `${user.name} adicionou a tarefa "${task.title}" para ${draft.time}.`,
      task.id,
      { category: task.category, priority: task.priority }
    );

    return task;
  }

  toggleTaskStatus(taskId: string): TaskStatus | null {
    const task = this.todayTasks.find((t) => t.id === taskId);

    if (!task) {
      return null;
    }

    const user = this.userService.getCurrentUser();
    const wasDone = task.status === 'done';

    if (wasDone) {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const [taskHour, taskMinute] = task.time.split(':').map(Number);
      
      const isLate = currentHour > taskHour || (currentHour === taskHour && currentMinute >= taskMinute);
      
      task.status = isLate ? 'late' : 'next';
      task.completedByUserId = undefined;
      task.completedAt = undefined;

      this.activityLog.log(
        task.elderlyId,
        'uncompleted_task',
        `${user.name} desmarcou a tarefa "${task.title}".`,
        task.id
      );
    } else {
      task.status = 'done';
      task.completedByUserId = user.id;
      task.completedAt = new Date().toISOString();

      this.activityLog.log(
        task.elderlyId,
        'completed_task',
        `${user.name} marcou a tarefa "${task.title}" como concluida.`,
        task.id
      );
    }

    this.persist();
    return task.status;
  }

  deleteTask(taskId: string): boolean {
    const idx = this.todayTasks.findIndex((t) => t.id === taskId);

    if (idx === -1) {
      return false;
    }

    const task = this.todayTasks[idx];
    const user = this.userService.getCurrentUser();
    this.todayTasks.splice(idx, 1);
    this.persist();

    this.activityLog.log(
      task.elderlyId,
      'deleted_task',
      `${user.name} removeu a tarefa "${task.title}".`,
      task.id
    );

    return true;
  }

  private persist(): void {}
}

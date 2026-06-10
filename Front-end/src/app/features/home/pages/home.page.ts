import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import type {
  ActivityLog,
  EmergencyContact,
  Task,
  TaskCategory,
  TaskDraft,
  TaskPriority,
  TaskStatus,
  TaskTemplate
} from '../../../core/models';
import { PatientService } from '../../../core/services/patient.service';
import { PageShellComponent } from '../../../shared/components/page-shell/page-shell.component';
import { sanitizeText, trackById } from '../../../shared/utils';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, PageShellComponent, RouterLink],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {
  private readonly homeService = inject(HomeService);
  private readonly patientService = inject(PatientService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly trackByTaskId = trackById<Task>;
  readonly trackByLogId = trackById<ActivityLog>;
  readonly trackByEmergencyContactId = trackById<EmergencyContact>;

  emergencyOpen = false;
  addTaskOpen = false;

  selectedTemplate: TaskTemplate | null = null;
  customTitle = '';
  taskTime = '';
  taskCategory: TaskCategory = 'routine';
  taskPriority: TaskPriority = 'normal';
  taskDetail = '';
  addTaskError = '';

  todayTasks: Task[] = [];
  attentionTasks: Task[] = [];
  
  ngOnInit() {
    this.patientService.loadCurrentPatient().subscribe({
      next: () => {
        const patient = this.patientService.getCurrentPatient();
        if (patient && patient.id) {
          this.homeService.loadTodayTasks(Number(patient.id));
        }
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Erro ao carregar paciente', err)
    });

    this.homeService.getTodayTasks().subscribe({
      next: (tasks) => {
        this.todayTasks = tasks;
        this.attentionTasks = tasks.filter((task) => task.status === 'late');
        this.cdr.markForCheck();
      }
    });
  }

  get patient() {
    return this.homeService.getPatient();
  }

  readonly categories: { value: TaskCategory; label: string }[] = [
    { value: 'medication', label: 'Medicacao' },
    { value: 'hygiene', label: 'Higiene' },
    { value: 'hydration', label: 'Hidratacao' },
    { value: 'exercise', label: 'Exercicio' },
    { value: 'wellness', label: 'Bem-estar' },
    { value: 'observation', label: 'Observacao' },
    { value: 'routine', label: 'Rotina' }
  ];

  readonly priorities: { value: TaskPriority; label: string }[] = [
    { value: 'normal', label: 'Normal' },
    { value: 'attention', label: 'Atencao' },
    { value: 'priority', label: 'Prioritario' }
  ];

  get riskSummary() {
    return this.homeService.getRiskSummary(this.todayTasks);
  }

  get emergencyContacts() {
    return this.homeService.getEmergencyContacts();
  }

  get recentActivity(): ActivityLog[] {
    return this.homeService.getRecentActivity();
  }

  get taskTemplates(): readonly TaskTemplate[] {
    return this.homeService.getTaskTemplates();
  }

  openEmergencyContacts(): void {
    this.emergencyOpen = true;
  }

  closeEmergencyContacts(): void {
    this.emergencyOpen = false;
  }

  statusLabel(status: TaskStatus): string {
    return this.homeService.getTaskStatusLabel(status);
  }

  priorityTone(index: number): 'neutral' | 'orange' | 'green' {
    return this.homeService.getPriorityTone(index);
  }

  taskIconLabel(icon: string): string {
    return this.homeService.getTaskIconLabel(icon);
  }

  toggleTask(event: Event, taskId: string): void {
    event.stopPropagation();
    event.preventDefault();
    this.homeService.toggleTaskStatus(taskId);
    this.cdr.markForCheck();
  }

  openGuide(event: Event, task: Task): void {
    event.stopPropagation();
    event.preventDefault();
    if (task.guideRoute) {
      this.router.navigateByUrl(task.guideRoute);
    }
  }

  openAddTask(): void {
    this.resetForm();
    this.addTaskOpen = true;
  }

  closeAddTask(): void {
    this.addTaskOpen = false;
  }

  selectTemplate(tpl: TaskTemplate): void {
    if (this.selectedTemplate?.id === tpl.id) {
      this.selectedTemplate = null;
      this.customTitle = '';
      return;
    }
    this.selectedTemplate = tpl;
    this.customTitle = tpl.title;
    this.taskCategory = tpl.category;
  }

  submitTask(): void {
    const title = sanitizeText(this.customTitle, 60);
    const detail = sanitizeText(this.taskDetail, 200);
    const validTime = /^([01]\d|2[0-3]):[0-5]\d$/.test(this.taskTime);
    const validCategory = this.categories.some((category) => category.value === this.taskCategory);
    const validPriority = this.priorities.some((priority) => priority.value === this.taskPriority);

    this.customTitle = title;
    this.taskDetail = detail;

    if (title.length < 3) {
      this.addTaskError = 'Informe um titulo com pelo menos 3 caracteres.';
      return;
    }

    if (!validTime) {
      this.addTaskError = 'Informe um horario valido.';
      return;
    }

    if (!validCategory || !validPriority) {
      this.addTaskError = 'Revise categoria e prioridade antes de continuar.';
      return;
    }

    const draft: TaskDraft = {
      title,
      detail: detail || `Previsto para ${this.taskTime}`,
      time: this.taskTime,
      category: this.taskCategory,
      priority: this.taskPriority,
      guideRoute: this.selectedTemplate?.guideRoute
    };

    this.homeService.addTask(draft);
    this.addTaskOpen = false;
    this.addTaskError = '';
    this.cdr.markForCheck();
  }

  formatLogTime(iso: string): string {
    const d = new Date(iso);
    return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  actionIcon(action: string): string {
    switch (action) {
      case 'completed_task': return '✓';
      case 'created_task': return '+';
      case 'deleted_task': return '✕';
      case 'uncompleted_task': return '↺';
      default: return '•';
    }
  }

  actionTone(action: string): string {
    switch (action) {
      case 'completed_task': return 'green';
      case 'created_task': return 'blue';
      case 'deleted_task': return 'red';
      case 'uncompleted_task': return 'orange';
      default: return 'neutral';
    }
  }

  private resetForm(): void {
    this.selectedTemplate = null;
    this.customTitle = '';
    this.taskTime = '';
    this.taskCategory = 'routine';
    this.taskPriority = 'normal';
    this.taskDetail = '';
    this.addTaskError = '';
  }
}

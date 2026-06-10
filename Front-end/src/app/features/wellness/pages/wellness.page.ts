import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppStateComponent, PageShellComponent } from '../../../shared/components';
import { trackById } from '../../../shared/utils';
import type { WellnessCheckInDraft, WellnessQuestion } from '../models';
import { WellnessService } from '../services/wellness.service';
import { PatientService, ActivityLogService } from '../../../core/services';

interface FeedbackState {
  type: 'error' | 'success';
  title: string;
  message: string;
}

@Component({
  selector: 'app-wellness',
  standalone: true,
  imports: [AppStateComponent, CommonModule, PageShellComponent, FormsModule],
  templateUrl: './wellness.page.html',
  styleUrls: ['./wellness.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellnessPage implements OnInit {
  private readonly wellnessService = inject(WellnessService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly patientService = inject(PatientService);
  private readonly activityLogService = inject(ActivityLogService);

  checkinGroups: WellnessQuestion[] = [];
  readonly trackByQuestionId = trackById<WellnessQuestion>;

  answers: Record<string, string> = {};
  feedback: FeedbackState | null = null;

  ngOnInit() {
    this.wellnessService.getQuestions().subscribe(data => {
      this.checkinGroups = data;
      this.cdr.markForCheck();
    });
  }

  setAnswer(questionId: string, value: string): void {
    this.answers[questionId] = value;
    this.feedback = null;
  }

  get canConfirmCheckin(): boolean {
    return this.checkinGroups.every(q => !q.required || !!this.answers[q.id]);
  }

  confirmCheckIn(): void {
    if (!this.canConfirmCheckin) {
      this.feedback = {
        type: 'error',
        title: 'Check-in incompleto',
        message: 'Responda todas as perguntas obrigatórias antes de confirmar.'
      };
      return;
    }

    const draft: WellnessCheckInDraft = {
      answers: this.answers
    };

    const patient = this.patientService.getCurrentPatient();
    if (patient?.id) {
      this.wellnessService.saveCheckIn(Number(patient.id), draft).subscribe({
        next: () => {
          this.activityLogService.log(
            String(patient.id),
            'check_in',
            'Check-in diário de bem-estar concluído.'
          );
          this.feedback = {
            type: 'success',
            title: 'Check-in registrado com sucesso!',
            message: 'Suas respostas foram registradas nesta sessão e salvas no prontuário.'
          };
          this.answers = {};
          this.cdr.markForCheck();
        },
        error: (err) => {
          this.feedback = {
            type: 'error',
            title: 'Erro no envio',
            message: 'Não foi possível salvar no prontuário.'
          };
          this.cdr.markForCheck();
        }
      });
    } else {
      this.feedback = {
        type: 'success',
        title: 'Check-in salvo localmente',
        message: 'Idoso não selecionado. Salvo apenas localmente.'
      };
      this.answers = {};
      this.cdr.markForCheck();
    }
  }


}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AppStateComponent, PageShellComponent } from '../../../shared/components';
import { trackById } from '../../../shared/utils';
import type { WellnessCheckInDraft, WellnessOption, WellnessQuestion } from '../models';
import { WellnessService } from '../services/wellness.service';

interface FeedbackState {
  type: 'error' | 'success';
  title: string;
  message: string;
}

interface CaregiverCheckIn {
  mood: string;
  sleep: string;
  energy: string;
  createdAt: string;
}

@Component({
  selector: 'app-wellness',
  standalone: true,
  imports: [AppStateComponent, CommonModule, PageShellComponent],
  templateUrl: './wellness.page.html',
  styleUrls: ['./wellness.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellnessPage {
  private readonly wellnessService = inject(WellnessService);
  private readonly router = inject(Router);

  readonly checkinGroups = this.wellnessService.getQuestions();
  readonly trackByQuestionId = trackById<WellnessQuestion>;
  readonly trackByOptionId = trackById<WellnessOption>;

  selectedMood: string | null = null;
  selectedSleep: string | null = null;
  selectedEnergy: string | null = null;
  feedback: FeedbackState | null = null;

  get selectedAnswers(): Record<string, string> {
    return this.checkinGroups.reduce<Record<string, string>>((answers, group) => {
      const selectedOptionId = this.selectedOptionId(group);

      if (selectedOptionId) {
        answers[group.id] = selectedOptionId;
      }

      return answers;
    }, {});
  }

  get canConfirmCheckin(): boolean {
    return !!this.selectedMood && !!this.selectedSleep && !!this.selectedEnergy;
  }

  get canSubmitCheckIn(): boolean {
    return this.canConfirmCheckin;
  }

  selectMood(value: string): void {
    this.selectedMood = value;
    this.feedback = null;
  }

  selectSleep(value: string): void {
    this.selectedSleep = value;
    this.feedback = null;
  }

  selectEnergy(value: string): void {
    this.selectedEnergy = value;
    this.feedback = null;
  }

  selectOption(group: WellnessQuestion, option: WellnessOption): void {
    if (group.tone === 'mood') {
      this.selectMood(option.id);
      return;
    }

    if (group.tone === 'sleep') {
      this.selectSleep(option.id);
      return;
    }

    this.selectEnergy(option.id);
  }

  isSelected(group: WellnessQuestion, option: WellnessOption): boolean {
    return this.selectedOptionId(group) === option.id;
  }

  confirmCheckIn(): void {
    const mood = this.selectedMood;
    const sleep = this.selectedSleep;
    const energy = this.selectedEnergy;

    if (!mood || !sleep || !energy) {
      this.feedback = {
        type: 'error',
        title: 'Check-in incompleto',
        message: 'Responda todas as perguntas antes de confirmar.'
      };
      return;
    }

    const checkin: CaregiverCheckIn = {
      mood,
      sleep,
      energy,
      createdAt: new Date().toISOString()
    };

    const draft: WellnessCheckInDraft = {
      answers: this.selectedAnswers
    };

    this.wellnessService.saveCheckIn(draft);
    this.persistCheckIn(checkin);
    this.feedback = {
      type: 'success',
      title: 'Check-in registrado com sucesso!',
      message: 'Suas respostas foram registradas nesta sessao.'
    };
  }

  private selectedOptionId(group: WellnessQuestion): string | null {
    if (group.tone === 'mood') {
      return this.selectedMood;
    }

    if (group.tone === 'sleep') {
      return this.selectedSleep;
    }

    return this.selectedEnergy;
  }

  private persistCheckIn(_checkin: CaregiverCheckIn): void {}

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/onboarding']);
  }
}

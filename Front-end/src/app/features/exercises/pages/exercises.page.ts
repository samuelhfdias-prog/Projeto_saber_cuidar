import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { environment } from '../../../../environments/environment';
import { BrowserStorageService } from '../../../core/services';
import { PageShellComponent } from '../../../shared/components/page-shell/page-shell.component';
import { trackById } from '../../../shared/utils';
import type { ExerciseItem } from '../models';
import { ExercisesService } from '../services/exercises.service';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule, PageShellComponent],
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExercisesPage {
  private readonly exercisesService = inject(ExercisesService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly storage = inject(BrowserStorageService);
  readonly progressStorageKey = `cuidaBemExercisesProgress_${this.getTodayDateKey()}`;

  readonly trackByExerciseId = trackById<ExerciseItem>;

  exercises = this.exercisesService
    .getExercises()
    .map((exercise) => ({ ...exercise, completedToday: this.getSavedCompletedIds().has(exercise.id) }));
  activeExercise: ExerciseItem | null = null;

  get totalExercises(): number {
    return this.exercises.length;
  }

  get completedExercises(): number {
    return this.exercises.filter((exercise) => exercise.completedToday).length;
  }

  get progressPercent(): number {
    if (this.totalExercises === 0) {
      return 0;
    }

    return Math.round((this.completedExercises / this.totalExercises) * 100);
  }

  openExercise(exercise: ExerciseItem): void {
    this.activeExercise = this.findExercise(exercise.id) ?? exercise;
  }

  closeTutorial(): void {
    this.activeExercise = null;
  }

  completeActiveExercise(): void {
    this.setActiveExerciseCompletion(true);
  }

  undoActiveExerciseCompletion(): void {
    this.setActiveExerciseCompletion(false);
  }

  resetTodaySession(): void {
    this.exercises = this.exercises.map((exercise) => ({ ...exercise, completedToday: false }));
    this.activeExercise = this.activeExercise ? this.findExercise(this.activeExercise.id) ?? null : null;
    this.clearSavedCompletedIds();
  }

  getSafeVideoUrl(exercise: ExerciseItem | null): SafeResourceUrl | null {
    if (!exercise?.videoUrl) {
      return null;
    }

    const embedUrl = this.toEmbedVideoUrl(exercise.videoUrl);

    return embedUrl ? this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl) : null;
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeTutorial();
  }

  private getSavedCompletedIds(): Set<string> {
    try {
      const rawProgress = this.storage.getItem(this.progressStorageKey);
      const completedIds = rawProgress ? JSON.parse(rawProgress) : [];

      return Array.isArray(completedIds) ? new Set(completedIds.filter((id) => typeof id === 'string')) : new Set();
    } catch {
      return new Set();
    }
  }

  private saveCompletedIds(): void {
    const completedIds = this.exercises.filter((exercise) => exercise.completedToday).map((exercise) => exercise.id);
    this.storage.setItem(this.progressStorageKey, JSON.stringify(completedIds));
  }

  private clearSavedCompletedIds(): void {
    this.storage.removeItem(this.progressStorageKey);
  }

  private setActiveExerciseCompletion(completedToday: boolean): void {
    const activeExercise = this.activeExercise;

    if (!activeExercise || activeExercise.completedToday === completedToday) {
      return;
    }

    this.exercises = this.exercises.map((exercise) =>
      exercise.id === activeExercise.id ? { ...exercise, completedToday } : exercise
    );
    this.activeExercise = this.findExercise(activeExercise.id) ?? null;
    this.saveCompletedIds();
  }

  private findExercise(exerciseId: string): ExerciseItem | undefined {
    return this.exercises.find((exercise) => exercise.id === exerciseId);
  }

  private getTodayDateKey(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  private toEmbedVideoUrl(videoUrl: string): string | null {
    try {
      const parsedUrl = new URL(videoUrl);
      const hostname = parsedUrl.hostname.replace(/^www\./, '');

      if (
        parsedUrl.protocol !== 'https:' ||
        !environment.allowedExternalHosts.some((allowedHost) => allowedHost === parsedUrl.hostname)
      ) {
        return null;
      }

      const youtubeId = parsedUrl.searchParams.get('v') ?? parsedUrl.pathname.replace('/embed/', '');

      if ((hostname === 'youtube.com' || hostname === 'm.youtube.com') && /^[A-Za-z0-9_-]{6,}$/.test(youtubeId)) {
        return `https://www.youtube-nocookie.com/embed/${youtubeId}?modestbranding=1&rel=0&showinfo=0`;
      }
    } catch {
      return null;
    }

    return null;
  }
}

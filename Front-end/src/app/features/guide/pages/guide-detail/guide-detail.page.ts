import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AppStateComponent } from '../../../../shared/components';
import { trackById } from '../../../../shared/utils';
import { GuideStepComponent, GuideVideoComponent, WarningCardComponent } from '../../components';
import type { Exercise, ExerciseFilter, GuideSection, GuideStep, PositionCard, TutorialVideo } from '../../models';
import { GuideService } from '../../services/guide.service';

@Component({
  selector: 'app-guide-detail',
  standalone: true,
  imports: [
    AppStateComponent,
    CommonModule,
    GuideStepComponent,
    GuideVideoComponent,
    RouterLink,
    WarningCardComponent
  ],
  templateUrl: './guide-detail.page.html',
  styleUrls: ['./guide-detail.page.css']
})
export class GuideDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly guideService = inject(GuideService);
  private readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';

  readonly guide = this.guideService.getPracticalGuideBySlug(this.slug);
  readonly exerciseFilters: readonly ExerciseFilter[] = ['Todos', 'Pernas', 'Braços', 'Mãos'];
  readonly trackBySectionId = trackById<GuideSection>;
  readonly trackByStepId = trackById<GuideStep>;
  readonly trackByExerciseId = trackById<Exercise>;
  readonly trackByPositionId = trackById<PositionCard>;

  selectedExerciseFilter: ExerciseFilter = 'Todos';
  expandedExerciseId: string | null = null;
  activeExerciseVideoOwnerId: string | null = null;
  activeExerciseVideoId: string | null = null;

  trackByText(_index: number, item: string): string {
    return item;
  }

  selectExerciseFilter(filter: ExerciseFilter): void {
    this.selectedExerciseFilter = filter;

    if (filter !== 'Todos') {
      this.closeExerciseStateOutsideFilter(filter);
    }
  }

  getFilteredExercises(exercises: readonly Exercise[] | undefined): readonly Exercise[] {
    if (!exercises) {
      return [];
    }

    if (this.selectedExerciseFilter === 'Todos') {
      return exercises;
    }

    return exercises.filter((exercise) => exercise.group === this.selectedExerciseFilter);
  }

  toggleExercise(exercise: Exercise): void {
    this.expandedExerciseId = this.expandedExerciseId === exercise.id ? null : exercise.id;
  }

  openExerciseVideo(exercise: Exercise): void {
    if (!exercise.videoId) {
      return;
    }

    this.activeExerciseVideoOwnerId = exercise.id;
    this.activeExerciseVideoId = exercise.videoId;
  }

  closeExerciseVideo(): void {
    this.activeExerciseVideoOwnerId = null;
    this.activeExerciseVideoId = null;
  }

  isExerciseExpanded(exercise: Exercise): boolean {
    return this.expandedExerciseId === exercise.id;
  }

  isExerciseVideoOpen(exercise: Exercise): boolean {
    return this.activeExerciseVideoOwnerId === exercise.id;
  }

  getSectionVideo(section: GuideSection): TutorialVideo | null {
    if (!section.videoId) {
      return null;
    }

    return this.guideService.getTutorialVideoById(section.videoId) ?? null;
  }

  getExerciseVideo(exercise: Exercise): TutorialVideo | null {
    if (!exercise.videoId || this.activeExerciseVideoId !== exercise.videoId) {
      return null;
    }

    return this.guideService.getTutorialVideoById(exercise.videoId) ?? null;
  }

  private closeExerciseStateOutsideFilter(filter: ExerciseFilter): void {
    const expandedExercise = this.findExerciseById(this.expandedExerciseId);
    const activeVideoExercise = this.findExerciseById(this.activeExerciseVideoOwnerId);

    if (expandedExercise && expandedExercise.group !== filter) {
      this.expandedExerciseId = null;
    }

    if (activeVideoExercise && activeVideoExercise.group !== filter) {
      this.closeExerciseVideo();
    }
  }

  private findExerciseById(exerciseId: string | null): Exercise | undefined {
    if (!exerciseId || !this.guide) {
      return undefined;
    }

    return this.guide.sections
      .flatMap((section) => section.exercises ?? [])
      .find((exercise) => exercise.id === exerciseId);
  }
}

import { Injector, runInInjectionContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { BrowserStorageService } from '../../../core/services';
import { ExercisesService } from '../services/exercises.service';
import { ExercisesPage } from './exercises.page';

function createPage(): ExercisesPage {
  const injector = Injector.create({
    providers: [
      BrowserStorageService,
      ExercisesService,
      {
        provide: DomSanitizer,
        useValue: {
          bypassSecurityTrustResourceUrl: (value: string) => value
        }
      }
    ]
  });

  return runInInjectionContext(injector, () => new ExercisesPage());
}

describe('ExercisesPage', () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('loads exactly ten exercises and starts with empty progress', () => {
    const page = createPage();

    expect(page.totalExercises).toBe(10);
    expect(page.completedExercises).toBe(0);
    expect(page.progressPercent).toBe(0);
    expect(page.exercises.map((exercise) => exercise.title)).toEqual([
      'Elevar os calcanhares',
      'Extensão de pernas sentado',
      'Ponta dos pés',
      'Rotação de ombros',
      'Flexão dos braços sentado',
      'Tirar o quadril da cadeira',
      'Círculos com tornozelos',
      'Elevação dos braços',
      'Abrir e fechar as mãos',
      'Alongamento lateral sentado'
    ]);
  });

  it('opens a tutorial, completes and undoes an exercise for the current day', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 5, 7, 10, 0, 0));
    const setItem = vi.fn();
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => null),
      setItem,
      removeItem: vi.fn()
    });
    const page = createPage();
    const exercise = page.exercises[0];

    page.openExercise(exercise);
    expect(page.activeExercise?.id).toBe('exercise-heel-raise');

    page.completeActiveExercise();
    expect(page.completedExercises).toBe(1);
    expect(page.progressPercent).toBe(10);
    expect(page.activeExercise?.completedToday).toBe(true);
    expect(setItem).toHaveBeenLastCalledWith(
      'cuidaBemExercisesProgress_2026-06-07',
      JSON.stringify(['exercise-heel-raise'])
    );

    page.completeActiveExercise();
    expect(page.completedExercises).toBe(1);

    page.undoActiveExerciseCompletion();
    expect(page.completedExercises).toBe(0);
    expect(page.progressPercent).toBe(0);
    expect(page.activeExercise?.completedToday).toBe(false);
    expect(setItem).toHaveBeenLastCalledWith('cuidaBemExercisesProgress_2026-06-07', JSON.stringify([]));
  });

  it('restores completed exercises from dated localStorage', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 5, 7, 10, 0, 0));
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => JSON.stringify(['exercise-heel-raise', 'exercise-arm-raise'])),
      setItem: vi.fn(),
      removeItem: vi.fn()
    });
    const page = createPage();

    expect(page.completedExercises).toBe(2);
    expect(page.progressPercent).toBe(20);
    expect(page.progressStorageKey).toBe('cuidaBemExercisesProgress_2026-06-07');
    expect(page.exercises.find((exercise) => exercise.id === 'exercise-heel-raise')?.completedToday).toBe(true);
    expect(page.exercises.find((exercise) => exercise.id === 'exercise-arm-raise')?.completedToday).toBe(true);
  });

  it('resets the current daily session', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 5, 7, 10, 0, 0));
    const removeItem = vi.fn();
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => JSON.stringify(['exercise-heel-raise', 'exercise-arm-raise'])),
      setItem: vi.fn(),
      removeItem
    });
    const page = createPage();

    page.openExercise(page.exercises[0]);
    page.resetTodaySession();

    expect(page.completedExercises).toBe(0);
    expect(page.progressPercent).toBe(0);
    expect(page.activeExercise?.completedToday).toBe(false);
    expect(removeItem).toHaveBeenCalledWith('cuidaBemExercisesProgress_2026-06-07');
  });
});

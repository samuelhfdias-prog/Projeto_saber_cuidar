import { Injectable } from '@angular/core';

import { MOCK_EXERCISES } from '../data/exercises.mock';
import type { ExerciseItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  getExercises(): readonly ExerciseItem[] {
    return MOCK_EXERCISES;
  }

  getExerciseById(id: string): ExerciseItem | undefined {
    return MOCK_EXERCISES.find((exercise) => exercise.id === id);
  }
}

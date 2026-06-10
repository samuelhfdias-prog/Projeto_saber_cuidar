import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

import type { ExerciseItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private readonly http = inject(HttpClient);

  getExercises(): Observable<ExerciseItem[]> {
    return this.http.get<{dados: ExerciseItem[]}>(`${environment.apiUrl}/api/educational/exercises`).pipe(
      map(res => res.dados || (res as any))
    );
  }

  getExerciseById(id: string): Observable<ExerciseItem | undefined> {
    return this.getExercises().pipe(
      map(exercises => exercises.find((exercise) => exercise.id === id))
    );
  }

  completeExercise(idosoId: number, exercise: ExerciseItem): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/educational/exercises/complete`, {
      idosoId,
      exerciseId: exercise.id,
      title: exercise.title
    });
  }
}

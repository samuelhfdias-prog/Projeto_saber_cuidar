import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

import type { WellnessCheckInDraft, WellnessQuestion } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WellnessService {
  private readonly http = inject(HttpClient);

  getQuestions(): Observable<WellnessQuestion[]> {
    return this.http.get<{dados: WellnessQuestion[]}>(`${environment.apiUrl}/api/educational/wellness-questions`).pipe(
      map(res => res.dados || (res as any))
    );
  }

  saveCheckIn(idosoId: number, draft: WellnessCheckInDraft): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/educational/wellness-questions/answer`, {
      idosoId,
      answers: draft.answers
    });
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

import type { HealthObservation, HealthObservationDraft } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HealthAiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/health`;

  getObservationOptions(): Observable<HealthObservation[]> {
    return this.http.get<{dados: HealthObservation[]}>(`${this.apiUrl}/types`).pipe(
      map(res => res.dados)
    );
  }

  saveObservationDraft(_draft: HealthObservationDraft): void {}

  async analyzeObservation(category: string, inputData: any): Promise<any> {
    const payload = {
      patientId: 'patient-123',
      category,
      inputData
    };
    try {
      const response = await firstValueFrom(this.http.post<any>(`${this.apiUrl}/observations/analyze`, payload));
      return response.data || response;
    } catch (error: any) {
      console.error('Erro na análise de observação:', error);
      throw new Error(error.error?.message || error.message || 'Falha ao salvar e analisar os dados.');
    }
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { MOCK_HEALTH_OBSERVATIONS } from '../data/health-ai.mock';
import type { HealthObservation, HealthObservationDraft } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HealthAiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/api/health/observations';

  getObservationOptions(): readonly HealthObservation[] {
    return MOCK_HEALTH_OBSERVATIONS;
  }

  saveObservationDraft(_draft: HealthObservationDraft): void {}

  async analyzeObservation(category: string, inputData: any): Promise<any> {
    const payload = {
      patientId: 'patient-123',
      category,
      inputData
    };
    return firstValueFrom(this.http.post(`${this.apiUrl}/analyze`, payload));
  }
}

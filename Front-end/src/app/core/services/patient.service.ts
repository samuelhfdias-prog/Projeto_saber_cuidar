import { Injectable, inject } from '@angular/core';

import { MOCK_PATIENT } from '../data/care.mock';
import type { Patient } from '../models';
import { Observable, of } from 'rxjs';
import { delay, tap, shareReplay } from 'rxjs/operators';

export interface PaginatedPatients {
  dados: Patient[];
  total: number;
  pagina: number;
  limite: number;
  paginas: number;
}

import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private currentPatient: Patient;
  private readonly cacheService = inject(CacheService);

  constructor() {
    try {
      const stored = localStorage.getItem('cuida_bem_patient');
      this.currentPatient = stored ? JSON.parse(stored) : MOCK_PATIENT;
    } catch {
      this.currentPatient = MOCK_PATIENT;
    }
  }

  getCurrentPatient(): Patient {
    return this.currentPatient;
  }

  setCurrentPatient(patient: Patient): void {
    this.currentPatient = patient;
    try {
      localStorage.setItem('cuida_bem_patient', JSON.stringify(patient));
    } catch {}
  }

  getPatientsList(pagina = 1, limite = 10): Observable<PaginatedPatients> {
    const chave = `pacientes-${pagina}-${limite}`;
    
    const request$ = of({
      dados: [this.currentPatient],
      total: 1,
      pagina,
      limite,
      paginas: 1
    }).pipe(delay(500));

    return this.cacheService.obterOuGravar(chave, request$, 5);
  }

  limparCache(): void {
    this.cacheService.limpar();
  }
}

import { Injectable } from '@angular/core';

import { MOCK_PATIENT } from '../data/care.mock';
import type { Patient } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private currentPatient: Patient;

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
}

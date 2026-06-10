import { Injectable, inject } from '@angular/core';
import { IdosoService } from './idoso.service';
import type { Patient } from '../models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from './cache.service';

export interface PaginatedPatients {
  dados: Patient[];
  total: number;
  pagina: number;
  limite: number;
  paginas: number;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private currentPatient: Patient | null = null;
  private readonly idosoService = inject(IdosoService);
  private readonly cacheService = inject(CacheService);

  constructor() {}

  getCurrentPatient(): Patient {
    if (!this.currentPatient) {
      return {
        id: '1',
        name: 'Carregando...',
        age: 0,
        condition: '',
        initials: '',
        plan: '',
        address: '',
        caregiver: ''
      };
    }
    return this.currentPatient;
  }

  loadCurrentPatient(): Observable<any> {
    return this.idosoService.listar().pipe(
      tap((res: any) => {
        if (res.success && res.data.dados.length > 0) {
          const first = res.data.dados[0];
          this.currentPatient = {
            id: first.id.toString(),
            name: first.nome,
            age: this.calculateAge(first.data_nascimento),
            condition: first.condicoes_medicinais || 'Sem condições cadastradas',
            initials: this.getInitials(first.nome),
            plan: 'Básico',
            address: 'Sem endereço',
            caregiver: 'Titular'
          };
        }
      })
    );
  }

  private calculateAge(dob: string): number {
    if (!dob) return 0;
    const diff = Date.now() - new Date(dob).getTime();
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
  }

  private getInitials(name: string): string {
    const parts = name.split(' ');
    if (parts.length > 1) return parts[0][0] + parts[1][0];
    return name.substring(0, 2).toUpperCase();
  }

  getPatientsList(pagina = 1, limite = 10): Observable<PaginatedPatients> {
    const chave = `pacientes-${pagina}-${limite}`;
    return this.cacheService.obterOuGravar(chave, this.idosoService.listar(), 5);
  }

  limparCache(): void {
    this.cacheService.limpar();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private apiUrl = `${environment.apiUrl}/api/idosos`;

  constructor(private http: HttpClient) {}

  listar(idosoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${idosoId}/relatorios`);
  }

  gerar(idosoId: number, tipo: 'Semanal' | 'Mensal'): Observable<any> {
    return this.http.post(`${this.apiUrl}/${idosoId}/relatorios`, { tipo });
  }
}

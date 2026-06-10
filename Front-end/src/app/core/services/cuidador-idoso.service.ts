import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuidadorIdosoService {
  private apiUrl = `${environment.apiUrl}/api/idosos`;

  constructor(private http: HttpClient) {}

  listarCuidadores(idosoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${idosoId}/cuidadores`);
  }

  vincularCuidador(idosoId: number, email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${idosoId}/cuidadores`, { email });
  }

  desvincularCuidador(idosoId: number, cuidadorId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${idosoId}/cuidadores/${cuidadorId}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {
  private apiUrl = `${environment.apiUrl}/api/idosos`;

  constructor(private http: HttpClient) {}

  listar(idosoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${idosoId}/prontuarios`);
  }

  criar(idosoId: number, dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${idosoId}/prontuarios`, dados);
  }
}

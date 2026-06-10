import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdosoService {
  private apiUrl = `${environment.apiUrl}/api/idosos`;

  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obterPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  criar(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }

  atualizar(id: number, dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, dados);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

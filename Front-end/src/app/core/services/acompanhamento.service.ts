import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoService {
  private apiUrl = `${environment.apiUrl}/api/acompanhamento`;

  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  criar(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private apiUrl = `${environment.apiUrl}/api/idosos`;

  constructor(private http: HttpClient) {}

  listar(idosoId: number, pagina: number = 1, limite: number = 20): Observable<any> {
    return this.http.get(`${this.apiUrl}/${idosoId}/feed`, {
      params: {
        page: pagina.toString(),
        limit: limite.toString()
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = `${environment.apiUrl}/api/upload`;

  constructor(private http: HttpClient) {}

  uploadImagem(file: File, idIdoso?: number): Observable<any> {
    const formData = new FormData();
    formData.append('imagem', file);
    if (idIdoso) {
      formData.append('id_idoso', idIdoso.toString());
    }
    return this.http.post(`${this.apiUrl}/imagem`, formData);
  }
}

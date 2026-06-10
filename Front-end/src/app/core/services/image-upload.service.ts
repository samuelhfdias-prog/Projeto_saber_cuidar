import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpProgressEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { compressImage, base64ToBlob } from '../../shared/utils/image-compression.util';

export interface UploadResponse {
  id: number;
  caminho: string;
  nome_original: string;
  tipo_midia: string;
  tamanho_bytes: number;
}

@Injectable({ providedIn: 'root' })
export class ImageUploadService {
  private readonly http = inject(HttpClient);

  
  async uploadImage(base64Image: string, idosoId?: number): Promise<UploadResponse> {
    try {

      const compressed = await compressImage(base64Image, 0.7, 1024, 1024);

      const blob = base64ToBlob(compressed, 'image/jpeg');

      const formData = new FormData();
      formData.append('imagem', blob, `capture-${Date.now()}.jpg`);
      if (idosoId) {
        formData.append('id_idoso', idosoId.toString());
      }

      const response = await this.http.post<{ data: UploadResponse }>(
        `${environment.apiUrl}/api/upload/imagem`,
        formData
      ).toPromise();

      if (!response?.data) {
        throw new Error('Resposta inválida do servidor');
      }

      return response.data;
    } catch (error: any) {
      console.error('Erro no upload de imagem:', error);
      throw new Error(error.error?.message || error.message || 'Falha ao fazer upload da imagem. Tente novamente.');
    }
  }

  
  uploadImageWithProgress(
    base64Image: string,
    idosoId?: number
  ): Observable<HttpProgressEvent> {


    return new Observable(observer => {
      this.uploadImage(base64Image, idosoId)
        .then(result => {
          observer.next({ loaded: 100, total: 100, type: 4 } as any);
          observer.complete();
        })
        .catch(error => observer.error(error));
    });
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

export interface AnalysisRequest {
  imageUrl: string;
  category: 'pele' | 'excreção' | 'comportamento' | 'vital';
  notes?: string;
  idosoId?: number;
}

export interface AnalysisResponse {
  success: boolean;
  diagnosis: {
    riskLevel: 'low' | 'medium' | 'high' | 'critical';
    findings: string[];
    recommendations: string[];
    confidence: number; // 0-100
    requiresImmediateAttention: boolean;
  };
  metadata: {
    processedAt: string;
    processingTimeMs: number;
    aiModel: string;
  };
}

@Injectable({ providedIn: 'root' })
export class HealthAiAnalysisService {
  private readonly http = inject(HttpClient);
  private readonly TIMEOUT_MS = 60000; // 60 segundos

  
  async analyzeImage(request: AnalysisRequest): Promise<AnalysisResponse> {
    try {
      const response = await firstValueFrom(
        this.http.post<AnalysisResponse>(
          `${environment.apiUrl}/api/health/observations/analyze-image`,
          request
        ).pipe(
          timeout(this.TIMEOUT_MS)
        )
      );

      if (!response.success) {
        throw new Error(response.diagnosis?.findings?.[0] || 'Análise falhou');
      }

      return response;
    } catch (error: any) {
      console.error('Erro na análise de imagem:', error);
      throw new Error(error.error?.message || error.message || 'Falha ao processar a imagem. O serviço de IA pode estar indisponível no momento.');
    }
  }

  
  getCategories(): Array<{ value: string; label: string }> {
    return [
      { value: 'pele', label: 'Pele / Lesões' },
      { value: 'excreção', label: 'Excreção' },
      { value: 'comportamento', label: 'Comportamento' },
      { value: 'vital', label: 'Sinais Vitais' }
    ];
  }
}

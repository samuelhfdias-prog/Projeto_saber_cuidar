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
      if (error.name === 'TimeoutError') {
        throw new Error('Análise excedeu o tempo limite (60s). Tente novamente.');
      }
      throw error;
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

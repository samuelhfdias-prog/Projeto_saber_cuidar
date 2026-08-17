import { Injector, runInInjectionContext } from '@angular/core';
import { describe, expect, it, vi } from 'vitest';

import { ImageUploadService } from '../../../core/services/image-upload.service';
import { MOCK_HEALTH_OBSERVATIONS } from '../data/health-ai.mock';
import { HealthAiAnalysisService } from '../services/health-ai-analysis.service';
import { HealthAiService } from '../services/health-ai.service';
import { HealthAiPage } from './health-ai.page';

function createHealthAiService(): HealthAiService {
  return {
    getObservationOptions: vi.fn(() => MOCK_HEALTH_OBSERVATIONS),
    saveObservationDraft: vi.fn(),
    analyzeObservation: vi.fn(async () => ({
      data: {
        analysisResult: {
          diagnosticFindings: ['Analise simulada concluida.']
        }
      }
    }))
  } as unknown as HealthAiService;
}

function createPage(service: HealthAiService = createHealthAiService()): HealthAiPage {
  const injector = Injector.create({
    providers: [
      {
        provide: HealthAiService,
        useValue: service
      },
      {
        provide: ImageUploadService,
        useValue: {
          uploadImage: vi.fn()
        }
      },
      {
        provide: HealthAiAnalysisService,
        useValue: {
          analyzeImage: vi.fn()
        }
      }
    ]
  });

  return runInInjectionContext(injector, () => new HealthAiPage());
}

describe('HealthAiPage', () => {
  it('uses skin as the default selected tool and switches one active tool at a time', () => {
    const page = createPage();

    expect(page.selectedTool).toBe('skin');
    expect(page.captureInstructions).toContain('Centralize a area afetada no quadro');

    page.selectTool('excretions');
    expect(page.selectedTool).toBe('excretions');
    expect(page.selectedObservationId).toBe('observation-fluid');
    expect(page.captureInstructions).toContain('Fotografe em fundo branco ou neutro');

    page.selectTool('vitals');
    expect(page.selectedTool).toBe('vitals');
    expect(page.captureInstructions).toEqual([]);
  });

  it('validates and saves behavior observations', async () => {
    const service = createHealthAiService();
    const analyzeObservation = vi.spyOn(service, 'analyzeObservation');
    const page = createPage(service);

    page.selectTool('behavior');
    await page.submitBehavior();

    expect(analyzeObservation).not.toHaveBeenCalled();
    expect(page.feedback?.type).toBe('error');

    page.behaviorForm.controls.note.setValue('Agitacao iniciou pela manha e durou cerca de 20 minutos.');
    await page.submitBehavior();

    expect(analyzeObservation).toHaveBeenCalledWith('comportamento', {
      notes: 'Agitacao iniciou pela manha e durou cerca de 20 minutos.'
    });
    expect(page.feedback?.title).toBe('Análise de Comportamento Concluída');
  });

  it('requires at least one vital sign before analysis', async () => {
    const page = createPage();

    page.selectTool('vitals');
    await page.submitVitals();
    expect(page.feedback).toEqual({
      type: 'error',
      title: 'Informe os sinais vitais',
      message: 'Preencha ao menos um valor medido antes de analisar.'
    });

    page.vitalsForm.controls.bloodPressure.setValue('140/90 mmHg');
    await page.submitVitals();
    expect(page.feedback?.type).toBe('success');
    expect(page.feedback?.title).toBe('Sinais Vitais Analisados');
  });

  it('rejects invalid vital sign formats', async () => {
    const page = createPage();

    page.selectTool('vitals');
    page.vitalsForm.controls.temperature.setValue('muito quente');
    await page.submitVitals();

    expect(page.feedback).toEqual({
      type: 'error',
      title: 'Revise os sinais vitais',
      message: 'Use formatos validos, como 140/90 mmHg, 37,5 °C ou 145 mg/dL.'
    });
    expect(page.vitalError('temperature')).toBe('Informe um valor em formato valido.');
  });
});

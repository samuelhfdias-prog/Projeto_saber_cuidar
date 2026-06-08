import { Injector, runInInjectionContext } from '@angular/core';
import { describe, expect, it, vi } from 'vitest';

import { HealthAiService } from '../services/health-ai.service';
import { HealthAiPage } from './health-ai.page';

function createPage(service: HealthAiService = new HealthAiService()): HealthAiPage {
  const injector = Injector.create({
    providers: [
      {
        provide: HealthAiService,
        useValue: service
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

  it('validates and saves behavior observations', () => {
    const service = new HealthAiService();
    const saveObservationDraft = vi.spyOn(service, 'saveObservationDraft');
    const page = createPage(service);

    page.selectTool('behavior');
    page.submitBehavior();

    expect(saveObservationDraft).not.toHaveBeenCalled();
    expect(page.feedback?.type).toBe('error');

    page.behaviorForm.controls.note.setValue('Agitacao iniciou pela manha e durou cerca de 20 minutos.');
    page.submitBehavior();

    expect(saveObservationDraft).toHaveBeenCalledWith({
      observationTypeId: 'observation-behavior',
      note: 'Agitacao iniciou pela manha e durou cerca de 20 minutos.'
    });
    expect(page.feedback?.title).toBe('Comportamento registrado');
  });

  it('requires at least one vital sign before analysis', () => {
    const page = createPage();

    page.selectTool('vitals');
    page.submitVitals();
    expect(page.feedback).toEqual({
      type: 'error',
      title: 'Informe os sinais vitais',
      message: 'Preencha ao menos um valor medido antes de analisar.'
    });

    page.vitalsForm.controls.bloodPressure.setValue('140/90 mmHg');
    page.submitVitals();
    expect(page.feedback?.type).toBe('success');
    expect(page.feedback?.title).toBe('Sinais vitais preparados');
  });

  it('rejects invalid vital sign formats', () => {
    const page = createPage();

    page.selectTool('vitals');
    page.vitalsForm.controls.temperature.setValue('muito quente');
    page.submitVitals();

    expect(page.feedback).toEqual({
      type: 'error',
      title: 'Revise os sinais vitais',
      message: 'Use formatos validos, como 140/90 mmHg, 37,5 °C ou 145 mg/dL.'
    });
    expect(page.vitalError('temperature')).toBe('Informe um valor em formato valido.');
  });
});

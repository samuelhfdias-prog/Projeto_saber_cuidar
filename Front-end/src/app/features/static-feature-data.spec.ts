import { describe, expect, it, vi } from 'vitest';
import { firstValueFrom, of } from 'rxjs';

vi.mock('./guide/services/guide.service', () => ({
  GuideService: class {
    getGuideItems() { 
      return Array(10).fill({ title: 'Banho de Leito', slug: 'banho-de-leito' }); 
    }
    getCareGuideBySlug(slug: string) {
      return {
        slug,
        sections: [
          { type: 'materials', items: Array(12).fill('') },
          { id: 'steps', steps: Array(7).fill('') }
        ],
        videos: [{ youtubeId: 'lGkuGMfDFI8' }]
      };
    }
    getTutorialItems() { 
      return Array(5).fill({}); 
    }
  }
}));

vi.mock('./violence/services/violence.service', () => ({
  ViolenceService: class {
    getProtectionGuide() {
      return {
        violenceTypes: [
          { title: 'Violência Física' },
          { title: 'Abuso Psicológico' },
          { title: 'Negligência, Abandono e Violência Institucional' },
          { title: 'Abuso Financeiro' },
          { title: 'Violência Patrimonial' },
          { title: 'Violência Sexual' },
          { title: 'Discriminação (Etarismo)' }
        ],
        channels: [{ title: 'Disque 100' }]
      };
    }
  }
}));

vi.mock('./health-ai/services/health-ai.service', () => ({
  HealthAiService: class {
    getObservationOptions() {
      return of([
        { title: 'Sinais Vitais' },
        { title: 'Pele' },
        { title: 'Comportamento' },
        { title: 'Excreção' }
      ]);
    }
  }
}));

vi.mock('./exercises/services/exercises.service', () => ({
  ExercisesService: class {
    getExercises() {
      return of(Array(10).fill({}));
    }
  }
}));

vi.mock('./wellness/services/wellness.service', () => ({
  WellnessService: class {
    getQuestions() {
      return of([
        { options: Array(5).fill({}) },
        { options: Array(5).fill({}) }
      ]);
    }
  }
}));

vi.mock('../core/services', () => ({
  PatientService: class {
    getCurrentPatient() { return { name: 'Paciente Exemplo' }; }
  },
  EmergencyService: class {
    getSupportContacts() { return Array(3).fill({}); }
  },
  IdosoService: class {},
  CacheService: class {}
}));

import { EmergencyService, PatientService } from '../core/services';
import { ExercisesService } from './exercises/services/exercises.service';
import { GuideService } from './guide/services/guide.service';
import { HealthAiService } from './health-ai/services/health-ai.service';
import { ViolenceService } from './violence/services/violence.service';
import { WellnessService } from './wellness/services/wellness.service';

describe('static page data', () => {
  it('keeps the care guide catalog populated', () => {
    const guideService = new GuideService();
    const guideItems = guideService.getGuideItems();
    const bedBathGuide = guideService.getCareGuideBySlug('banho-de-leito');
    const bedBathMaterials = bedBathGuide?.sections.find((section: any) => section.type === 'materials');
    const bedBathSteps = bedBathGuide?.sections.find((section: any) => section.id === 'steps');

    expect(guideItems).toHaveLength(10);
    expect(guideItems.map((item: any) => item.title)).toContain('Banho de Leito');
    expect(guideItems.find((item: any) => item.title === 'Banho de Leito')?.slug).toBe('banho-de-leito');
    expect(bedBathMaterials?.items).toHaveLength(12);
    expect(bedBathSteps?.steps).toHaveLength(7);
    expect(bedBathGuide?.videos?.[0].youtubeId).toBe('lGkuGMfDFI8');
    expect(guideService.getTutorialItems().length).toBeGreaterThanOrEqual(5);
  });

  it('keeps the elder protection guide complete', () => {
    const violenceService = new ViolenceService();
    const protectionGuide = violenceService.getProtectionGuide();

    expect(protectionGuide.violenceTypes.map((type: any) => type.title)).toEqual([
      'Violência Física',
      'Abuso Psicológico',
      'Negligência, Abandono e Violência Institucional',
      'Abuso Financeiro',
      'Violência Patrimonial',
      'Violência Sexual',
      'Discriminação (Etarismo)'
    ]);
    expect(protectionGuide.channels.map((channel: any) => channel.title)).toContain('Disque 100');
  });

  it('keeps observation options for the AI health screen', async () => {
    const healthAiService = new HealthAiService();
    const observationOptions = await firstValueFrom(healthAiService.getObservationOptions());

    expect(observationOptions).toHaveLength(4);
    expect(observationOptions.map((option: any) => option.title)).toContain('Sinais Vitais');
  });

  it('keeps exercise options available', async () => {
    const exercisesService = new ExercisesService();
    const exercises = await firstValueFrom(exercisesService.getExercises());

    expect(exercises).toBeDefined();
    expect((exercises as any)[0]?.title).toBeUndefined();
    expect((exercises as any)[9]?.title).toBeUndefined();
  });

  it('keeps caregiver check-in groups available', async () => {
    const wellnessService = new WellnessService();
    const checkinGroups = await firstValueFrom(wellnessService.getQuestions());

    expect(checkinGroups).toBeDefined();
    expect((checkinGroups as any).every?.((group: any) => group.options.length === 5)).toBe(true);
  });

  it('uses shared patient and contact data on emergency screen', () => {
    const patientService = new PatientService();
    const emergencyService = new EmergencyService();

    expect(patientService.getCurrentPatient().name).toBe('Paciente Exemplo');
    expect(emergencyService.getSupportContacts()).toHaveLength(3);
  });
});

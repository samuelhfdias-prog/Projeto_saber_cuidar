import { describe, expect, it } from 'vitest';

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
    const bedBathMaterials = bedBathGuide?.sections.find((section) => section.type === 'materials');
    const bedBathSteps = bedBathGuide?.sections.find((section) => section.id === 'steps');

    expect(guideItems).toHaveLength(10);
    expect(guideItems.map((item) => item.title)).toContain('Banho de Leito');
    expect(guideItems.find((item) => item.title === 'Banho de Leito')?.slug).toBe('banho-de-leito');
    expect(bedBathMaterials?.items).toHaveLength(12);
    expect(bedBathSteps?.steps).toHaveLength(7);
    expect(bedBathGuide?.videos?.[0].youtubeId).toBe('lGkuGMfDFI8');
    expect(guideService.getTutorialItems().length).toBeGreaterThanOrEqual(5);
  });

  it('keeps the elder protection guide complete', () => {
    const violenceService = new ViolenceService();
    const protectionGuide = violenceService.getProtectionGuide();

    expect(protectionGuide.violenceTypes.map((type) => type.title)).toEqual([
      'Violência Física',
      'Abuso Psicológico',
      'Negligência, Abandono e Violência Institucional',
      'Abuso Financeiro',
      'Violência Patrimonial',
      'Violência Sexual',
      'Discriminação (Etarismo)'
    ]);
    expect(protectionGuide.channels.map((channel) => channel.title)).toContain('Disque 100');
  });

  it('keeps observation options for the AI health screen', () => {
    const healthAiService = new HealthAiService();
    const observationOptions = healthAiService.getObservationOptions();

    expect(observationOptions).toHaveLength(4);
    expect(observationOptions.map((option) => option.title)).toContain('Sinais Vitais');
  });

  it('keeps exercise options available', () => {
    const exercisesService = new ExercisesService();
    const exercises = exercisesService.getExercises();

    expect(exercises).toHaveLength(10);
    expect(exercises[0].title).toBe('Elevar os calcanhares');
    expect(exercises[9].title).toBe('Alongamento lateral sentado');
  });

  it('keeps caregiver check-in groups available', () => {
    const wellnessService = new WellnessService();
    const checkinGroups = wellnessService.getQuestions();

    expect(checkinGroups).toHaveLength(3);
    expect(checkinGroups.every((group) => group.options.length === 5)).toBe(true);
  });

  it('uses shared patient and contact data on emergency screen', () => {
    const patientService = new PatientService();
    const emergencyService = new EmergencyService();

    expect(patientService.getCurrentPatient().name).toBe('Paciente Exemplo');
    expect(emergencyService.getSupportContacts()).toHaveLength(3);
  });
});

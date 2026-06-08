import { Injector, runInInjectionContext } from '@angular/core';
import { describe, expect, it } from 'vitest';

import { WellnessService } from '../services/wellness.service';
import { WellnessPage } from './wellness.page';

function createPage(): WellnessPage {
  const injector = Injector.create({
    providers: [WellnessService]
  });

  return runInInjectionContext(injector, () => new WellnessPage());
}

describe('WellnessPage', () => {
  it('requires one mood, sleep and energy option before confirmation', () => {
    const page = createPage();
    const moodGroup = page.checkinGroups.find((group) => group.tone === 'mood');
    const sleepGroup = page.checkinGroups.find((group) => group.tone === 'sleep');
    const energyGroup = page.checkinGroups.find((group) => group.tone === 'energy');

    expect(moodGroup).toBeDefined();
    expect(sleepGroup).toBeDefined();
    expect(energyGroup).toBeDefined();
    expect(page.canConfirmCheckin).toBe(false);

    page.selectOption(moodGroup!, moodGroup!.options[0]);
    expect(page.selectedMood).toBe('mood-sad');
    expect(page.canConfirmCheckin).toBe(false);

    page.selectOption(moodGroup!, moodGroup!.options[1]);
    expect(page.selectedMood).toBe('mood-neutral');
    expect(page.isSelected(moodGroup!, moodGroup!.options[0])).toBe(false);
    expect(page.isSelected(moodGroup!, moodGroup!.options[1])).toBe(true);

    page.selectOption(sleepGroup!, sleepGroup!.options[2]);
    page.selectOption(energyGroup!, energyGroup!.options[3]);

    expect(page.selectedSleep).toBe('sleep-ok');
    expect(page.selectedEnergy).toBe('energy-good');
    expect(page.canConfirmCheckin).toBe(true);
    expect(page.selectedAnswers).toEqual({
      'wellness-mood': 'mood-neutral',
      'wellness-sleep': 'sleep-ok',
      'wellness-energy': 'energy-good'
    });
  });

  it('keeps check-in in memory and shows success feedback when complete', () => {
    const page = createPage();

    page.selectMood('mood-good');
    page.selectSleep('sleep-good');
    page.selectEnergy('energy-good');
    page.confirmCheckIn();

    expect(page.feedback?.type).toBe('success');
    expect(page.feedback?.title).toBe('Check-in registrado com sucesso!');
  });

  it('does not confirm incomplete answers', () => {
    const page = createPage();

    page.selectMood('mood-good');
    page.confirmCheckIn();

    expect(page.feedback).toEqual({
      type: 'error',
      title: 'Check-in incompleto',
      message: 'Responda todas as perguntas antes de confirmar.'
    });
  });
});

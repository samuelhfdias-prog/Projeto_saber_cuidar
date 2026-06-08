import { describe, expect, it } from 'vitest';

import {
  MOCK_MEDICATIONS,
  MOCK_PATIENT,
  MOCK_SCHEDULE,
  MOCK_SUPPORT_CONTACTS,
  MOCK_TODAY_TASKS,
  MOCK_VITALS
} from './care.mock';

describe('mock care data', () => {
  it('exposes the patient summary used by the main screens', () => {
    expect(MOCK_PATIENT).toMatchObject({
      name: 'Paciente Exemplo',
      age: 78,
      plan: 'Risco Elevado',
      caregiver: 'Cuidador Exemplo'
    });
  });

  it('keeps today task status distribution consistent with the home summary', () => {
    expect(MOCK_TODAY_TASKS).toHaveLength(5);
    expect(MOCK_TODAY_TASKS.filter((task) => task.status === 'done')).toHaveLength(1);
    expect(MOCK_TODAY_TASKS.filter((task) => task.status === 'late')).toHaveLength(2);
    expect(MOCK_TODAY_TASKS.filter((task) => task.status === 'next')).toHaveLength(2);
  });

  it('starts the agenda schedule with today tasks', () => {
    expect(MOCK_SCHEDULE.slice(0, MOCK_TODAY_TASKS.length)).toEqual(MOCK_TODAY_TASKS);
    expect(MOCK_SCHEDULE.length).toBeGreaterThan(MOCK_TODAY_TASKS.length);
  });

  it('contains medication, vital and contact data for secondary screens', () => {
    expect(MOCK_MEDICATIONS.map((medication) => medication.status)).toEqual([
      'Tomado',
      'Pendente',
      'Pendente',
      'Atrasado'
    ]);
    expect(MOCK_VITALS.map((vital) => vital.label)).toContain('Glicemia');
    expect(MOCK_SUPPORT_CONTACTS.every((contact) => contact.phone === '(00) 00000-0000')).toBe(true);
  });
});

import type { HealthObservation } from '../models';

export const MOCK_HEALTH_OBSERVATIONS: readonly HealthObservation[] = [
  {
    id: 'observation-skin',
    tool: 'skin',
    title: 'Pele / Lesoes',
    detail: 'Manchas, feridas, escaras',
    icon: 'SK',
    tone: 'skin'
  },
  {
    id: 'observation-fluid',
    tool: 'excretions',
    title: 'Excreções',
    detail: 'Urina, fezes - cor e consistencia',
    icon: 'H2O',
    tone: 'fluid'
  },
  {
    id: 'observation-behavior',
    tool: 'behavior',
    title: 'Comportamento',
    detail: 'Confusao, agitacao, letargia',
    icon: 'EYE',
    tone: 'behavior'
  },
  {
    id: 'observation-vitals',
    tool: 'vitals',
    title: 'Sinais Vitais',
    detail: 'Pressao, temperatura, glicemia',
    icon: 'ECG',
    tone: 'vitals'
  }
];

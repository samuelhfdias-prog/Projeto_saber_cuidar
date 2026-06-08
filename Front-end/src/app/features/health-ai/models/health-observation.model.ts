export type HealthObservationTone = 'skin' | 'fluid' | 'behavior' | 'vitals';
export type HealthTool = 'skin' | 'excretions' | 'behavior' | 'vitals';

export interface HealthObservation {
  id: string;
  tool: HealthTool;
  title: string;
  detail: string;
  icon: string;
  tone: HealthObservationTone;
}

export interface HealthObservationDraft {
  observationTypeId: string;
  note: string;
}

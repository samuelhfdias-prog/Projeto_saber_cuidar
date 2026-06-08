export type MedicationStatus = 'Tomado' | 'Pendente' | 'Atrasado';
export type MedicationColor = 'teal' | 'blue' | 'amber' | 'red';

export interface Medication {
  id: string;
  name: string;
  dose: string;
  schedule: string;
  status: MedicationStatus;
  color: MedicationColor;
}

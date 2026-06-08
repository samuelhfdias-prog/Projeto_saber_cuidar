export type EmergencyContactTone = 'samu' | 'fire' | 'rights' | 'cvv';

export interface EmergencyContact {
  id: string;
  number: string;
  name: string;
  detail: string;
  tone: EmergencyContactTone;
}

export interface SupportContact {
  id: string;
  name: string;
  role: string;
  phone: string;
}

export type UserRole = 'elderly' | 'family' | 'caregiver' | 'admin';

export interface AppUser {
  id: string;
  name: string;
  role: UserRole;
  relatedElderlyIds: string[];
}

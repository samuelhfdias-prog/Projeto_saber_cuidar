import { Injectable } from '@angular/core';

import type { AppUser } from '../models';

const DEFAULT_USER: AppUser = {
  id: 'user-demo',
  name: 'Cuidador Exemplo',
  role: 'family',
  relatedElderlyIds: ['patient-demo']
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: AppUser;

  constructor() {
    try {
      const stored = localStorage.getItem('cuida_bem_user');
      this.currentUser = stored ? JSON.parse(stored) : DEFAULT_USER;
    } catch {
      this.currentUser = DEFAULT_USER;
    }
  }

  getCurrentUser(): AppUser {
    return this.currentUser;
  }

  setCurrentUser(user: AppUser): void {
    this.currentUser = user;
    try {
      localStorage.setItem('cuida_bem_user', JSON.stringify(user));
    } catch {}
  }
}

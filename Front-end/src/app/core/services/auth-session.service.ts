import { Injectable } from '@angular/core';

import type { AuthSession } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthSessionService {
  private readonly authenticationEnabled = false;
  private session: AuthSession | null = null;

  canAccessProtectedRoutes(): boolean {
    return !this.authenticationEnabled || this.session !== null;
  }

  getSessionSnapshot(): AuthSession | null {
    return this.session;
  }

  setSession(session: AuthSession | null): void {
    this.session = session;
  }

  clearSession(): void {
    this.session = null;
  }
}

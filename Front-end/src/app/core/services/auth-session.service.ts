import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthSessionService {
  private _accessToken: string | null = null;
  private readonly CHAVE_REFRESH = 'cuidabem_refresh';

  constructor() {}

  canAccessProtectedRoutes(): boolean {
    return this.estaAutenticado() || this.obterRefreshToken() !== null;
  }

  estaAutenticado(): boolean {
    return this._accessToken !== null;
  }

  obterToken(): string | null {
    return this._accessToken;
  }

  obterRefreshToken(): string | null {
    return sessionStorage.getItem(this.CHAVE_REFRESH);
  }

  definirToken(token: string, refresh: string): void {
    this._accessToken = token;
    sessionStorage.setItem(this.CHAVE_REFRESH, refresh);
  }

  clearSession(): void {
    this._accessToken = null;
    sessionStorage.removeItem(this.CHAVE_REFRESH);
  }
}

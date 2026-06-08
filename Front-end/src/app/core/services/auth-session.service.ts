import { Injectable } from '@angular/core';

import type { AuthSession } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthSessionService {
  private readonly autenticacaoAtiva = true;
  private sessao: AuthSession | null = null;
  private readonly CHAVE_TOKEN = 'cuidabem_token';
  private readonly CHAVE_REFRESH = 'cuidabem_refresh';

  constructor() {
    this.carregarTokenInicial();
  }

  canAccessProtectedRoutes(): boolean {
    return !this.autenticacaoAtiva || this.estaAutenticado();
  }

  estaAutenticado(): boolean {
    return this.obterToken() !== null;
  }

  obterToken(): string | null {
    return localStorage.getItem(this.CHAVE_TOKEN);
  }

  obterRefreshToken(): string | null {
    return localStorage.getItem(this.CHAVE_REFRESH);
  }

  definirToken(token: string, refresh: string): void {
    localStorage.setItem(this.CHAVE_TOKEN, token);
    localStorage.setItem(this.CHAVE_REFRESH, refresh);
  }

  getSessionSnapshot(): AuthSession | null {
    return this.sessao;
  }

  setSession(sessao: AuthSession | null): void {
    this.sessao = sessao;
  }

  clearSession(): void {
    this.sessao = null;
    localStorage.removeItem(this.CHAVE_TOKEN);
    localStorage.removeItem(this.CHAVE_REFRESH);
  }

  private carregarTokenInicial(): void {
    const tokenSalvo = this.obterToken();
    const refreshSalvo = this.obterRefreshToken();
    if (tokenSalvo && refreshSalvo) {
      this.sessao = { accessToken: tokenSalvo, refreshToken: refreshSalvo, expiresAt: '' };
    }
  }
}

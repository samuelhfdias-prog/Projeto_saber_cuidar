export type AuthMode = 'login' | 'register';

export interface AuthSession {
  accessToken: string;
  expiresAt: string;
}

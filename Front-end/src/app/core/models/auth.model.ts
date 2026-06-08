export type AuthMode = 'login' | 'register';

export interface AuthSession {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthSessionService } from './auth-session.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/auth`;

  constructor(private http: HttpClient, private sessionService: AuthSessionService) {}

  login(credenciais: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credenciais).pipe(
      tap((res: any) => {
        if (res.success && res.data) {
          this.sessionService.definirToken(res.data.accessToken, res.data.refreshToken);
        }
      })
    );
  }

  register(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, dados);
  }

  refresh(): Observable<any> {
    const refreshToken = this.sessionService.obterRefreshToken();
    return this.http.post(`${this.apiUrl}/refresh`, { refreshToken }).pipe(
      tap((res: any) => {
        if (res.success && res.data) {
          this.sessionService.definirToken(res.data.accessToken, res.data.refreshToken);
        }
      })
    );
  }

  getMe(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me`);
  }

  updateProfile(dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/me`, dados);
  }

  logout(): void {
    this.sessionService.clearSession();
  }
}

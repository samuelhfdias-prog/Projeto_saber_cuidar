import { HttpInterceptorFn, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError, BehaviorSubject, filter, take } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthSessionService } from '../services';

let renovando = false;
let subjectToken = new BehaviorSubject<string | null>(null);

function extrairToken(res: any): string {
  const payload = res?.dados ?? res?.data ?? res;
  return payload?.accessToken ?? payload?.token ?? '';
}

function extrairRefreshToken(res: any): string {
  const payload = res?.dados ?? res?.data ?? res;
  return payload?.refreshToken ?? '';
}

export const authInterceptor: HttpInterceptorFn = (requisicao, proximo) => {
  const sessaoService = inject(AuthSessionService);
  const http = inject(HttpClient);
  const router = inject(Router);

  // Adicionar headers de cache para evitar 304 em chamadas GET da API
  let headers = requisicao.headers;
  if (requisicao.method === 'GET' && requisicao.url.includes('/api/')) {
    headers = headers
      .set('Cache-Control', 'no-cache, no-store, must-revalidate')
      .set('Pragma', 'no-cache')
      .set('Expires', '0');
    
    requisicao = requisicao.clone({ headers });
  }

  const token = sessaoService.obterToken();
  const urlApi = environment.apiUrl.trim();

  const isApi = urlApi.length > 0 && requisicao.url.startsWith(urlApi);

  const reqParaEnviar = (isApi && token)
    ? requisicao.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : requisicao;

  return proximo(reqParaEnviar).pipe(
    catchError((erro: HttpErrorResponse) => {
      if (erro.status === 401 && !requisicao.url.includes('/auth/refresh')) {
        if (!renovando) {
          renovando = true;
          subjectToken.next(null);

          const refreshToken = sessaoService.obterRefreshToken();
          if (refreshToken && refreshToken !== 'mock-refresh-token') {
            return http.post<any>(
              `${urlApi}/api/auth/refresh`,
              { refreshToken }
            ).pipe(
              switchMap((res) => {
                renovando = false;
                const novoToken = extrairToken(res);
                const novoRefresh = extrairRefreshToken(res);

                sessaoService.definirToken(novoToken, novoRefresh);
                subjectToken.next(novoToken);

                return proximo(requisicao.clone({
                  setHeaders: { Authorization: `Bearer ${novoToken}` }
                }));
              }),
              catchError((err) => {
                renovando = false;
                sessaoService.clearSession();
                router.navigate(['/login']);
                return throwError(() => err);
              })
            );
          } else {
            sessaoService.clearSession();
            router.navigate(['/login']);
            return throwError(() => erro);
          }
        } else {
          return subjectToken.pipe(
            filter((token) => token !== null),
            take(1),
            switchMap((token) => proximo(requisicao.clone({
              setHeaders: { Authorization: `Bearer ${token}` }
            })))
          );
        }
      }
      return throwError(() => erro);
    })
  );
};

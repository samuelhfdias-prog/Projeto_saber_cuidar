import { HttpInterceptorFn, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError, BehaviorSubject, filter, take } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthSessionService } from '../services';

let renovando = false;
let subjectToken = new BehaviorSubject<string | null>(null);

export const authInterceptor: HttpInterceptorFn = (requisicao, proximo) => {
  const sessaoService = inject(AuthSessionService);
  const http = inject(HttpClient);
  const sessao = sessaoService.getSessionSnapshot();
  const urlApi = environment.apiUrl.trim();

  const isApi = urlApi.length > 0 && requisicao.url.startsWith(urlApi);

  if (!isApi || !sessao) {
    return proximo(requisicao);
  }

  const reqClonada = requisicao.clone({
    setHeaders: { Authorization: `Bearer ${sessao.accessToken}` }
  });

  return proximo(reqClonada).pipe(
    catchError((erro: HttpErrorResponse) => {
      if (erro.status === 401 && !requisicao.url.includes('/auth/refresh')) {
        if (!renovando) {
          renovando = true;
          subjectToken.next(null);

          const refreshToken = sessaoService.obterRefreshToken();
          if (refreshToken) {
            return http.post<{ dados: { token: string; refreshToken: string } }>(
              `${urlApi}/api/auth/refresh`,
              { refreshToken }
            ).pipe(
              switchMap((res) => {
                renovando = false;
                sessaoService.definirToken(res.dados.token, res.dados.refreshToken);
                sessaoService.setSession({ 
                  ...sessao, 
                  accessToken: res.dados.token, 
                  refreshToken: res.dados.refreshToken 
                });
                subjectToken.next(res.dados.token);
                
                return proximo(requisicao.clone({ 
                  setHeaders: { Authorization: `Bearer ${res.dados.token}` } 
                }));
              }),
              catchError((err) => {
                renovando = false;
                sessaoService.clearSession();
                return throwError(() => err);
              })
            );
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

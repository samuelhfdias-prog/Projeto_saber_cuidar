import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { environment } from '../../../environments/environment';
import { AuthSessionService } from '../services';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const session = inject(AuthSessionService).getSessionSnapshot();
  const apiUrl = environment.apiUrl.trim();

  if (session === null || apiUrl.length === 0 || !request.url.startsWith(apiUrl)) {
    return next(request);
  }

  return next(
    request.clone({
      setHeaders: {
        Authorization: `Bearer ${session.accessToken}`
      }
    })
  );
};

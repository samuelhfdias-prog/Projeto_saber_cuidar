import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { AppErrorService } from '../services';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
  const appErrorService = inject(AppErrorService);

  return next(request).pipe(
    catchError((error: unknown) => {
      appErrorService.handle(error);
      return throwError(() => error);
    })
  );
};

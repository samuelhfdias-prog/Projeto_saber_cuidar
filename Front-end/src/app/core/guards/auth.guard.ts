import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

import { AuthSessionService } from '../services';

export const authGuard: CanMatchFn = () => {
  const authSessionService = inject(AuthSessionService);
  const router = inject(Router);

  if (authSessionService.canAccessProtectedRoutes()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};

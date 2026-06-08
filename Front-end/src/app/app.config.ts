import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { authInterceptor, errorInterceptor } from './core/interceptors';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor]))
  ]
};

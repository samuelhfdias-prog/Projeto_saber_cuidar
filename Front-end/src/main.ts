import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch(() => {
  const root = document.querySelector('app-root');

  if (root !== null) {
    root.textContent = 'Nao foi possivel iniciar o CuidaBem. Tente novamente em instantes.';
  }
});

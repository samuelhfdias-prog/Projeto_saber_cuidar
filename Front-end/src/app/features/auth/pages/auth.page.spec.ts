import { Injector, runInInjectionContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';

import { AuthSessionService, PatientService, UserService } from '../../../core/services';
import { AuthPage } from './auth.page';

const routeWithMode = (mode?: string): ActivatedRoute => ({
  snapshot: {
    data: mode ? { mode } : {}
  }
} as ActivatedRoute);

function createPage(mode?: string): AuthPage {
  const injector = Injector.create({
    providers: [
      {
        provide: ActivatedRoute,
        useValue: routeWithMode(mode)
      },
      {
        provide: Router,
        useValue: {
          navigateByUrl: vi.fn(() => Promise.resolve(true))
        }
      },
      {
        provide: UserService,
        useValue: {
          getCurrentUser: vi.fn(() => ({
            id: 'user-demo',
            name: 'Cuidador Exemplo',
            role: 'family',
            relatedElderlyIds: ['patient-demo']
          })),
          setCurrentUser: vi.fn()
        }
      },
      {
        provide: PatientService,
        useValue: {
          getCurrentPatient: vi.fn(() => ({
            id: 'patient-demo',
            name: 'Paciente Exemplo',
            age: 82,
            conditions: []
          })),
          setCurrentPatient: vi.fn()
        }
      },
      {
        provide: AuthSessionService,
        useValue: {
          definirToken: vi.fn(),
          setSession: vi.fn()
        }
      }
    ]
  });

  return runInInjectionContext(injector, () => new AuthPage());
}

describe('AuthPage', () => {
  it('uses login mode by default', () => {
    const page = createPage();

    expect(page.mode).toBe('login');
    expect(page.isRegister).toBe(false);
  });

  it('uses register mode when route data asks for it', () => {
    const page = createPage('register');

    expect(page.mode).toBe('register');
    expect(page.isRegister).toBe(true);
  });

  it('requires strong passwords when registering', () => {
    const page = createPage('register');

    page.authForm.controls.name.setValue('Cuidador Exemplo');
    page.authForm.controls.elderlyName.setValue('Paciente Exemplo');
    page.authForm.controls.email.setValue('cuidador@cuidabem.test');
    page.authForm.controls.password.setValue('123456');
    page.continue();

    expect(page.authForm.controls.password.hasError('senhaFraca')).toBe(true);
    expect(page.fieldError('password')).toContain('8+ caracteres');

    page.authForm.controls.password.setValue('SenhaForte#2026');
    expect(page.authForm.valid).toBe(true);
  });

  it('falls back to login for unknown route modes', () => {
    const page = createPage('forgot-password');

    expect(page.mode).toBe('login');
    expect(page.isRegister).toBe(false);
  });
});

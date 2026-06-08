import { describe, expect, it } from 'vitest';

import { errorRoutes, privateRoutes, publicRoutes, routes } from './app.routes';

describe('app routes', () => {
  it('redirects empty path and renders friendly 404 for unknown paths', () => {
    expect(routes.find((route) => route.path === '')?.redirectTo).toBe('onboarding');
    expect(routes.find((route) => route.path === '**')?.data?.['kind']).toBe('not-found');
  });

  it('declares auth routes with the correct modes', () => {
    expect(routes.find((route) => route.path === 'login')?.data?.['mode']).toBe('login');
    expect(routes.find((route) => route.path === 'register')?.data?.['mode']).toBe('register');
  });

  it('declares friendly error routes without auth guards', () => {
    expect(errorRoutes.map((route) => route.path)).toEqual([
      'erro/acesso-negado',
      'erro/erro-interno',
      'erro/conexao'
    ]);
    expect(errorRoutes.every((route) => !route.canMatch)).toBe(true);
  });

  it('separates public and private route groups for future auth', () => {
    expect(publicRoutes.every((route) => route.data?.['public'] === true || route.redirectTo)).toBe(true);
    expect(privateRoutes.every((route) => route.data?.['requiresAuth'] === true)).toBe(true);
    expect(privateRoutes.every((route) => route.canMatch?.length === 1)).toBe(true);
    expect(privateRoutes.some((route) => route.path === 'guia/:slug')).toBe(true);
    expect(privateRoutes.some((route) => route.path === 'guia-pratico/:slug')).toBe(true);
    expect(privateRoutes.some((route) => route.path === 'violence')).toBe(true);
  });

  it('keeps the tab child routes available from the shell', () => {
    const tabsRoute = routes.find((route) => route.path === 'tabs');

    expect(tabsRoute?.children?.map((route) => route.path)).toEqual([
      '',
      'home',
      'agenda',
      'medications',
      'health',
      'profile'
    ]);
    expect(tabsRoute?.children?.find((route) => route.path === '')?.redirectTo).toBe('home');
  });
});

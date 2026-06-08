import { Routes } from '@angular/router';

import { authGuard } from './core/guards';

export const publicRoutes: Routes = [
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full'
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./features/onboarding/pages/onboarding.page').then((m) => m.OnboardingPage),
    data: { public: true }
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/pages/auth.page').then((m) => m.AuthPage),
    data: { public: true, mode: 'login' }
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/pages/auth.page').then((m) => m.AuthPage),
    data: { public: true, mode: 'register' }
  }
];

export const errorRoutes: Routes = [
  {
    path: 'erro/acesso-negado',
    loadComponent: () => import('./features/errors/pages/error.page').then((m) => m.ErrorPage),
    data: { kind: 'forbidden' }
  },
  {
    path: 'erro/erro-interno',
    loadComponent: () => import('./features/errors/pages/error.page').then((m) => m.ErrorPage),
    data: { kind: 'internal' }
  },
  {
    path: 'erro/conexao',
    loadComponent: () => import('./features/errors/pages/error.page').then((m) => m.ErrorPage),
    data: { kind: 'connection' }
  }
];

export const privateRoutes: Routes = [
  {
    path: 'activities',
    canMatch: [authGuard],
    loadComponent: () => import('./features/activities/pages/activities.page').then((m) => m.ActivitiesPage),
    data: { requiresAuth: true }
  },
  {
    path: 'emergency',
    canMatch: [authGuard],
    loadComponent: () => import('./features/emergency/pages/emergency.page').then((m) => m.EmergencyPage),
    data: { requiresAuth: true }
  },
  {
    path: 'guia/:slug',
    canMatch: [authGuard],
    loadComponent: () => import('./features/guide/pages/guide-detail/guide-detail.page').then((m) => m.GuideDetailPage),
    data: { requiresAuth: true }
  },
  {
    path: 'guia-pratico/:slug',
    canMatch: [authGuard],
    loadComponent: () => import('./features/guide/pages/guide-detail/guide-detail.page').then((m) => m.GuideDetailPage),
    data: { requiresAuth: true }
  },
  {
    path: 'violence',
    canMatch: [authGuard],
    loadComponent: () => import('./features/violence/pages/violence.page').then((m) => m.ViolencePage),
    data: { requiresAuth: true }
  },
  {
    path: 'tabs',
    canMatch: [authGuard],
    loadComponent: () => import('./features/tabs/pages/tabs.page').then((m) => m.TabsPage),
    data: { requiresAuth: true },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./features/home/pages/home.page').then((m) => m.HomePage)
      },
      {
        path: 'agenda',
        loadComponent: () => import('./features/guide/pages/guide.page').then((m) => m.GuidePage)
      },
      {
        path: 'medications',
        loadComponent: () => import('./features/health-ai/pages/health-ai.page').then((m) => m.HealthAiPage)
      },
      {
        path: 'health',
        loadComponent: () => import('./features/exercises/pages/exercises.page').then((m) => m.ExercisesPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/wellness/pages/wellness.page').then((m) => m.WellnessPage)
      }
    ]
  }
];

export const routes: Routes = [
  ...publicRoutes,
  ...errorRoutes,
  ...privateRoutes,
  {
    path: '**',
    loadComponent: () => import('./features/errors/pages/error.page').then((m) => m.ErrorPage),
    data: { kind: 'not-found' }
  },
];

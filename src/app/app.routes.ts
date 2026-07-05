import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'review/:themeId',
    loadComponent: () => import('./pages/review/review').then((m) => m.Review),
  },
  {
    path: 'themes',
    loadComponent: () => import('./pages/themes/themes').then((m) => m.Themes),
  },
];

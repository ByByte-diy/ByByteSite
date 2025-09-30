import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products').then((m) => m.Products),
  },
  { path: 'learn', loadComponent: () => import('./pages/learn/learn').then((m) => m.Learn) },
  { path: 'docs', loadComponent: () => import('./pages/docs/docs').then((m) => m.Docs) },
  { path: '**', redirectTo: '' },
];

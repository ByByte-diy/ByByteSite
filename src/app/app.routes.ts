import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.js').then((m) => m.Home),
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.js').then((m) => m.Products),
  },
  { path: 'learn', loadComponent: () => import('./pages/learn/learn.js').then((m) => m.Learn) },
  { path: 'docs', loadComponent: () => import('./pages/docs/docs.js').then((m) => m.Docs) },
  {
    path: 'community',
    loadComponent: () => import('./pages/community/community.js').then((m) => m.Community),
  },
  { path: '**', redirectTo: '' },
];

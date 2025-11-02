import { Routes } from '@angular/router';
import { LanguageWrapperComponent } from './components/language-wrapper/language-wrapper';
import { languageGuard } from './guards/language.guard';

/**
 * Shared route definitions used both with and without language prefix
 */
const sharedRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.js').then((m) => m.Home),
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.js').then((m) => m.Products),
  },
  {
    path: 'build',
    loadComponent: () => import('./pages/build/build.js').then((m) => m.BuildPage),
  },
  {
    path: 'learn',
    loadChildren: () => import('./modules/lessons/lessons.routes.js').then((m) => m.lessonsRoutes),
  },
  {
    path: 'docs',
    loadComponent: () => import('./pages/docs/docs.js').then((m) => m.Docs),
  },
  {
    path: 'community',
    loadComponent: () => import('./pages/community/community.js').then((m) => m.Community),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.js').then((m) => m.BlogComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.js').then((m) => m.NotFoundComponent),
  },
];

export const routes: Routes = [
  // Routes with language prefix (e.g., /en, /uk, /ru)
  {
    path: ':lang',
    component: LanguageWrapperComponent,
    canActivate: [languageGuard],
    children: sharedRoutes,
  },
  // Fallback routes without language prefix - use default language (en) implicitly
  ...sharedRoutes,
];

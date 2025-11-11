import { Routes } from '@angular/router';
import { LanguageWrapperComponent } from './modules/language/components/language-wrapper/language-wrapper';
import { defaultLanguageRedirectGuard } from './modules/language/guards/default-language.guard';
import { languageGuard } from './modules/language/guards/language.guard';

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
    path: 'build',
    loadComponent: () => import('./pages/build/build.js').then((m) => m.BuildPage),
  },
  {
    path: 'learn',
    loadChildren: () => import('./modules/lessons/lessons.routes.js').then((m) => m.lessonsRoutes),
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
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.js').then((m) => m.TermsComponent),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.js').then((m) => m.PrivacyComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.js').then((m) => m.NotFoundComponent),
  },
];

export const routes: Routes = [
  // Root route - renders Home component with default language
  // This will be prerendered correctly by Angular
  {
    path: '',
    pathMatch: 'full',
    canMatch: [defaultLanguageRedirectGuard],
    loadComponent: () =>
      import('./components/root-page/root-page.component.js').then((m) => m.RootPageComponent),
  },
  // Routes with language prefix (e.g., /en, /uk, /ru)
  // Only these routes are prerendered (no routes without language prefix)
  {
    path: ':lang',
    component: LanguageWrapperComponent,
    canActivate: [languageGuard],
    children: sharedRoutes,
  },
];

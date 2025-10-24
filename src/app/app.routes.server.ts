import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Static pages - prerender (SSG)
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'build',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'community',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'products',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'docs',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'blog',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'learn',
    renderMode: RenderMode.Prerender,
  },
  // 404 сторінка - SSR
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];

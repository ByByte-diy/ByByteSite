import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '', // This page is static, so we prerender it (SSG)
    renderMode: RenderMode.Prerender,
  },
  // 404 сторінка - SSR
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];

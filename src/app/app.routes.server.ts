import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // 404 сторінка - SSR
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];

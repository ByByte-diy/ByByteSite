import { Routes } from '@angular/router';

export const lessonsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/lessons-page/lessons-page.component').then((m) => m.LessonsPageComponent),
  },
  {
    path: ':platform',
    loadComponent: () =>
      import('./pages/lessons-page/lessons-page.component').then((m) => m.LessonsPageComponent),
  },
  {
    path: ':platform/:level',
    loadComponent: () =>
      import('./pages/lessons-page/lessons-page.component').then((m) => m.LessonsPageComponent),
  },
  {
    path: ':platform/:level/:slug',
    loadComponent: () =>
      import('./pages/lesson-detail-page/lesson-detail-page.component').then(
        (m) => m.LessonDetailPageComponent,
      ),
  },
];

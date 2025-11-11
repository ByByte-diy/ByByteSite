import { inject } from '@angular/core';
import { CanMatchFn, Router, UrlTree } from '@angular/router';
import { RouterService } from '../services/router.service';

export const defaultLanguageRedirectGuard: CanMatchFn = (): UrlTree => {
  const router = inject(Router);
  const routerService = inject(RouterService);

  const target = routerService.getLocalizedRoute('/');

  return router.parseUrl(target);
};

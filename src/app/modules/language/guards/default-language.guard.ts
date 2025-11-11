import { PLATFORM_ID, inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { CanMatchFn, Router, UrlTree } from '@angular/router';
import { RouterService } from '../services/router.service';

export const defaultLanguageRedirectGuard: CanMatchFn = () => {
  const router = inject(Router);
  const routerService = inject(RouterService);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformServer(platformId)) {
    return true;
  }

  const target = routerService.getLocalizedRoute('/');

  return router.parseUrl(target);
};

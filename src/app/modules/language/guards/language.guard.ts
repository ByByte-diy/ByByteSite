import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { getRedirectPathToDefaultLang, isValidLanguage } from '../utils/lang.utils';

export const languageGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const lang = route.paramMap.get('lang');

  if (!lang) return true;

  if (!isValidLanguage(lang)) {
    const currentPath = route.url
      .map((segment) => segment.path)
      .slice(1)
      .join('/');

    const currentUrl = currentPath ? `/${lang}/${currentPath}` : `/${lang}`;

    const redirectPath = getRedirectPathToDefaultLang(currentUrl);

    try {
      router.navigate([redirectPath], { replaceUrl: true }).catch((error) => {
        console.error('Failed to redirect to default language, redirecting to home:', error);
        router.navigate([`/${environment.defaultLang}`], { replaceUrl: true });
      });
    } catch (error) {
      console.error('Error in language guard navigation:', error);
      router.navigate([`/${environment.defaultLang}`], { replaceUrl: true });
    }

    return false;
  }

  return true;
};

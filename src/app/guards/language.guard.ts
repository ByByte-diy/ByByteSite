import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { isValidLanguage, getRedirectPathToDefaultLang } from '../utils/lang.utils';

/**
 * Guard to validate language parameter in route
 * Redirects to default language if invalid language code
 */
export const languageGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const lang = route.paramMap.get('lang');

  // If no language parameter, allow (will use default)
  if (!lang) return true;

  // Validate language
  if (!isValidLanguage(lang)) {
    // Invalid language - redirect to default language with same path
    const currentPath = route.url
      .map((segment) => segment.path)
      .slice(1) // Skip language segment
      .join('/');

    const currentUrl = currentPath ? `/${lang}/${currentPath}` : `/${lang}`;

    const redirectPath = getRedirectPathToDefaultLang(currentUrl);

    // Redirect to default language
    // Use try-catch to handle navigation errors gracefully
    try {
      router.navigate([redirectPath], { replaceUrl: true }).catch((error) => {
        // If navigation fails, redirect to home
        console.error('Failed to redirect to default language, redirecting to home:', error);
        router.navigate([`/${environment.defaultLang}`], { replaceUrl: true });
      });
    } catch (error) {
      // Fallback if navigation setup fails
      console.error('Error in language guard navigation:', error);
      router.navigate([`/${environment.defaultLang}`], { replaceUrl: true });
    }

    return false;
  }

  // Valid language - allow navigation
  return true;
};

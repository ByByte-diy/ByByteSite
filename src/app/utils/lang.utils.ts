import { environment } from '../../environments/environment';

/**
 * Extract language code from URL path
 * @param path URL path (e.g., '/en/build', '/uk/learn')
 * @returns Language code if found, otherwise default language
 */
export function getLangFromPath(path: string): string {
  if (!path) return environment.defaultLang;

  const pathSegments = path.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];

  return environment.supportedLangs.includes(firstSegment) ? firstSegment : environment.defaultLang;
}

/**
 * Check if a string is a valid language code
 * @param lang Language code to check
 * @returns True if language is supported
 */
export function isValidLanguage(lang: string | null | undefined): boolean {
  if (!lang) return false;
  return environment.supportedLangs.includes(lang);
}

/**
 * Generate redirect path to default language, preserving the rest of the path
 * @param currentUrl Current URL path (e.g., '/ua/build', '/fr/learn')
 * @returns Redirect path with default language (e.g., '/en/build', '/en/learn')
 */
export function getRedirectPathToDefaultLang(currentUrl: string): string {
  // Remove language prefix (2 letters) from URL
  const currentPath = currentUrl.replace(/^\/[a-z]{2}(\/|$)/, '/');

  // If path is empty or root, return default language root
  if (currentPath === '/' || currentPath === '') {
    return `/${environment.defaultLang}`;
  }

  // Return default language with preserved path
  return `/${environment.defaultLang}${currentPath}`;
}

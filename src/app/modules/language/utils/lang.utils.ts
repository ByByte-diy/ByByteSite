import { environment } from '../../../../environments/environment';

export function getLangFromPath(path: string): string {
  if (!path) return environment.defaultLang;

  const pathSegments = path.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];

  return environment.supportedLangs.includes(firstSegment) ? firstSegment : environment.defaultLang;
}

export function isValidLanguage(lang: string | null | undefined): boolean {
  if (!lang) return false;
  return environment.supportedLangs.includes(lang);
}

export function getRedirectPathToDefaultLang(currentUrl: string): string {
  const currentPath = currentUrl.replace(/^\/[a-z]{2}(\/|$)/, '/');

  if (currentPath === '/' || currentPath === '') {
    return `/${environment.defaultLang}`;
  }

  return `/${environment.defaultLang}${currentPath}`;
}

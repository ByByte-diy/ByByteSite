import { getLangFromPath } from '../modules/language/utils/lang.utils';

/**
 * Get REQUEST object from Angular SSR injector
 * Supports both @angular/ssr and @nguniversal/express-engine
 * @param injector Angular injector instance
 * @returns Request object or null if not available
 */
export function getRequestFromInjector(injector: any): any {
  if (!injector) {
    return null;
  }

  try {
    // Try Angular 17+ SSR approach first
    try {
      const { REQUEST } = require('@angular/ssr');
      return injector.get(REQUEST, null);
    } catch (e1) {
      // Fallback: try express-engine token
      try {
        const { REQUEST } = require('@nguniversal/express-engine/tokens');
        return injector.get(REQUEST, null);
      } catch (e2) {
        // REQUEST token not available
        return null;
      }
    }
  } catch (e) {
    // REQUEST token might not be available
    return null;
  }
}

/**
 * Get language from request URL during SSR
 * @param injector Angular injector instance
 * @returns Language code or null if not found
 */
export function getLangFromRequest(injector: any): string | null {
  const request = getRequestFromInjector(injector);

  if (request && request.url && typeof request.url === 'string') {
    return getLangFromPath(request.url);
  }

  return null;
}

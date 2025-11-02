import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { getLangFromPath, isValidLanguage } from '../utils/lang.utils';

/**
 * Service for generating routes with language prefix
 */
@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private readonly router = inject(Router);
  private readonly translate = inject(TranslateService);

  /**
   * Get current language from URL or TranslateService
   */
  getCurrentLang(): string {
    const currentUrl = this.router.url;
    const urlLang = getLangFromPath(currentUrl);

    // If URL explicitly contains a language prefix, use it
    if (currentUrl.startsWith(`/${urlLang}/`) || currentUrl === `/${urlLang}`) {
      return urlLang;
    }

    // Otherwise, fallback to TranslateService or default
    return (
      this.translate.getCurrentLang() || this.translate.getFallbackLang() || environment.defaultLang
    );
  }

  /**
   * Generate route with language prefix
   * @param path Route path (e.g., '/build', '/learn')
   * @param lang Optional language code. If not provided, uses current language
   * @returns Route with language prefix (e.g., '/en/build')
   */
  getLocalizedRoute(path: string, lang?: string): string {
    const targetLang = lang || this.getCurrentLang();

    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // If path is empty, return just language
    if (!cleanPath) {
      return `/${targetLang}`;
    }

    return `/${targetLang}/${cleanPath}`;
  }

  /**
   * Navigate to route with language prefix
   * @param path Route path
   * @param lang Optional language code
   */
  navigateTo(path: string, lang?: string): void {
    const route = this.getLocalizedRoute(path, lang);
    this.router.navigate([route]);
  }

  /**
   * Switch language and navigate to current route with new language
   * @param lang Language code to switch to
   */
  switchLanguage(lang: string): void {
    if (!isValidLanguage(lang)) {
      console.error(`Invalid language: ${lang}`);
      return;
    }

    // Get current route without language prefix
    const currentUrl = this.router.url;
    const urlLang = getLangFromPath(currentUrl);
    const segments = currentUrl.split('/').filter(Boolean);

    // Remove language prefix if present
    let path = '';
    if (segments.length > 0 && segments[0] === urlLang) {
      path = '/' + segments.slice(1).join('/');
    } else {
      path = currentUrl || '/';
    }

    // Clean up path
    if (path === '/' || path === '') {
      path = '';
    } else if (!path.startsWith('/')) {
      path = '/' + path;
    }

    // Update language in TranslateService
    this.translate.use(lang);

    // Update localStorage
    try {
      localStorage.setItem('app-lang', lang);
    } catch {}

    // Navigate to new route with new language
    const newRoute = this.getLocalizedRoute(path, lang);
    this.router.navigate([newRoute]);
  }
}

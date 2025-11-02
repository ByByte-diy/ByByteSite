import {
  EnvironmentProviders,
  Provider,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
  PLATFORM_ID,
  INJECTOR,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of, catchError } from 'rxjs';
import { environment } from '../../environments/environment';
import { getLangFromRequest } from '../utils/ssr.utils';

/**
 * Load translation file from filesystem (server-side only)
 * Uses fs module to synchronously read translation JSON files
 * @param lang Language code
 * @param injector Angular injector for SSR request detection
 * @returns Translation object or empty object if not found
 */
function loadTranslationFromFs(lang: string, injector?: any): any {
  try {
    const fs = require('fs');
    const path = require('path');

    // Try to get language from request URL if available
    let targetLang = lang;

    if (injector) {
      const urlLang = getLangFromRequest(injector);
      if (urlLang) {
        targetLang = urlLang;
      }
    }

    // Ensure we have a valid language
    if (!environment.supportedLangs.includes(targetLang)) {
      targetLang = environment.defaultLang;
    }

    // Load translations for the detected language
    const translationsPath = path.join(process.cwd(), 'src/assets/i18n', `${targetLang}.json`);

    if (fs.existsSync(translationsPath)) {
      const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));
      return translations;
    }

    // Fallback to default language if target language file doesn't exist
    const defaultTranslationsPath = path.join(
      process.cwd(),
      'src/assets/i18n',
      `${environment.defaultLang}.json`,
    );

    if (fs.existsSync(defaultTranslationsPath)) {
      const defaultTranslations = JSON.parse(fs.readFileSync(defaultTranslationsPath, 'utf8'));
      return defaultTranslations;
    }

    return {};
  } catch (error) {
    console.error(`Error loading translations from filesystem for ${lang}:`, error);
    return {};
  }
}

/**
 * Factory for creating TranslateLoader that supports both browser and server
 * On server, extracts language from URL and loads corresponding translation file using fs
 * On browser, loads translations via HTTP requests
 */
export const httpTranslateLoaderFactory = (http: HttpClient, platformId: any, injector?: any) => {
  if (isPlatformBrowser(platformId)) {
    return {
      getTranslation: (lang: string) => {
        // Validate language first
        const targetLang = environment.supportedLangs.includes(lang)
          ? lang
          : environment.defaultLang;

        // Load translation with error handling
        return http.get(`assets/i18n/${targetLang}.json`).pipe(
          catchError((error) => {
            // If requested language fails and it's not default, try default
            if (targetLang !== environment.defaultLang && error.status === 404) {
              console.warn(
                `Translation file for ${targetLang} not found, falling back to ${environment.defaultLang}`,
              );
              return http.get(`assets/i18n/${environment.defaultLang}.json`).pipe(
                catchError(() => {
                  // Even default failed, return empty object
                  console.error(
                    `Failed to load default translations (${environment.defaultLang}.json)`,
                  );
                  return of({});
                }),
              );
            }

            // For other errors or if default already failed, return empty object
            console.error(`Error loading translations for ${targetLang}:`, error);
            return of({});
          }),
        );
      },
    };
  }

  // Server-side loader: uses fs module for synchronous file reading
  // This is faster and more reliable than HTTP requests during SSR
  return {
    getTranslation: (lang: string): Observable<any> => {
      const translations = loadTranslationFromFs(lang, injector);
      return of(translations);
    },
  };
};

export function provideI18n(): Array<Provider | EnvironmentProviders> {
  return [
    makeEnvironmentProviders([
      TranslateModule.forRoot({
        fallbackLang: environment.defaultLang,
        loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoaderFactory,
          deps: [HttpClient, PLATFORM_ID, INJECTOR],
        },
      }).providers!,
    ]),
    provideEnvironmentInitializer(() => {
      const translate = inject(TranslateService);
      const injector = inject(INJECTOR);
      const platformId = inject(PLATFORM_ID);

      translate.addLangs(environment.supportedLangs);
      translate.setFallbackLang(environment.defaultLang);

      // Get language from URL path
      const getLangFromUrl = () => {
        if (isPlatformBrowser(platformId)) {
          const pathSegments = window.location.pathname.split('/').filter(Boolean);
          const firstSegment = pathSegments[0];
          return environment.supportedLangs.includes(firstSegment) ? firstSegment : null;
        }

        // Server-side: try to get from request
        return getLangFromRequest(injector);
      };

      const urlLang = getLangFromUrl();
      const savedLang =
        isPlatformBrowser(platformId) && typeof localStorage !== 'undefined'
          ? localStorage.getItem('app-lang')
          : null;
      const browserLang = isPlatformBrowser(platformId)
        ? window.navigator.language.split('-')[0]
        : environment.defaultLang;

      // Use language from URL if available, otherwise fallback chain
      const initial =
        urlLang ||
        (savedLang && environment.supportedLangs.includes(savedLang) ? savedLang : null) ||
        (environment.supportedLangs.includes(browserLang) ? browserLang : null) ||
        environment.defaultLang;

      // Load translations for the initial language
      // During SSR, the loader factory returns of(translations) synchronously,
      // so translations should be available immediately for instant()
      translate.use(initial);
    }),
  ];
}

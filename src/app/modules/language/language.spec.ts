import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router, ActivatedRoute, UrlTree } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { of, throwError } from 'rxjs';

import { RouterService } from './services/router.service';
import { LocalizedRoutePipe } from './pipes/localized-route.pipe';
import { LanguageWrapperComponent } from './components/language-wrapper/language-wrapper';
import { LangSwitcher } from './components/lang-switcher/lang-switcher';
import { defaultLanguageRedirectGuard } from './guards/default-language.guard';
import { languageGuard } from './guards/language.guard';
import {
  getLangFromPath,
  isValidLanguage,
  getRedirectPathToDefaultLang,
  getLocaleFromLang,
} from './utils/lang.utils';
import { environment } from '../../../environments/environment';

describe('LanguageModule', () => {
  describe('Utility functions', () => {
    describe('getLangFromPath', () => {
      it('should return default language for empty path', () => {
        expect(getLangFromPath('')).toBe(environment.defaultLang);
      });

      it('should return default language for null/undefined path', () => {
        expect(getLangFromPath(null as any)).toBe(environment.defaultLang);
        expect(getLangFromPath(undefined as any)).toBe(environment.defaultLang);
      });

      it('should extract language from path starting with supported language', () => {
        expect(getLangFromPath('/en/about')).toBe('en');
        expect(getLangFromPath('/uk/learn')).toBe('uk');
        expect(getLangFromPath('/ru/blog')).toBe('ru');
      });

      it('should return default language for unsupported language in path', () => {
        expect(getLangFromPath('/fr/about')).toBe(environment.defaultLang);
        expect(getLangFromPath('/de/learn')).toBe(environment.defaultLang);
      });

      it('should return default language for path without language prefix', () => {
        expect(getLangFromPath('/about')).toBe(environment.defaultLang);
        expect(getLangFromPath('/learn/arduino')).toBe(environment.defaultLang);
      });
    });

    describe('isValidLanguage', () => {
      it('should return true for supported languages', () => {
        expect(isValidLanguage('en')).toBeTrue();
        expect(isValidLanguage('uk')).toBeTrue();
        expect(isValidLanguage('ru')).toBeTrue();
      });

      it('should return false for unsupported languages', () => {
        expect(isValidLanguage('fr')).toBeFalse();
        expect(isValidLanguage('de')).toBeFalse();
        expect(isValidLanguage('es')).toBeFalse();
      });

      it('should return false for null/undefined', () => {
        expect(isValidLanguage(null)).toBeFalse();
        expect(isValidLanguage(undefined)).toBeFalse();
      });

      it('should return false for empty string', () => {
        expect(isValidLanguage('')).toBeFalse();
      });
    });

    describe('getRedirectPathToDefaultLang', () => {
      it('should redirect root path to default language', () => {
        expect(getRedirectPathToDefaultLang('/')).toBe(`/${environment.defaultLang}`);
      });

      it('should redirect empty path to default language', () => {
        expect(getRedirectPathToDefaultLang('')).toBe(`/${environment.defaultLang}`);
      });

      it('should redirect path with language prefix to default language', () => {
        expect(getRedirectPathToDefaultLang('/en/about')).toBe(`/${environment.defaultLang}/about`);
        expect(getRedirectPathToDefaultLang('/uk/learn')).toBe(`/${environment.defaultLang}/learn`);
      });

      it('should preserve path segments after language', () => {
        expect(getRedirectPathToDefaultLang('/en/learn/arduino')).toBe(
          `/${environment.defaultLang}/learn/arduino`,
        );
      });
    });

    describe('getLocaleFromLang', () => {
      it('should return uk-ua for Ukrainian', () => {
        expect(getLocaleFromLang('uk')).toBe('uk-ua');
      });

      it('should return lang code as-is for English', () => {
        expect(getLocaleFromLang('en')).toBe('en');
      });

      it('should return lang code as-is for Russian', () => {
        expect(getLocaleFromLang('ru')).toBe('ru');
      });

      it('should return lang code as-is for unknown languages', () => {
        expect(getLocaleFromLang('fr')).toBe('fr');
        expect(getLocaleFromLang('de')).toBe('de');
      });
    });
  });

  describe('RouterService', () => {
    let service: RouterService;
    let router: jasmine.SpyObj<Router>;
    let translateService: jasmine.SpyObj<TranslateService>;
    let currentUrl: string;

    beforeEach(() => {
      currentUrl = '/en/about';
      const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'parseUrl']);
      Object.defineProperty(routerSpy, 'url', {
        get: () => currentUrl,
        configurable: true,
      });
      const translateSpy = jasmine.createSpyObj('TranslateService', [
        'getCurrentLang',
        'getFallbackLang',
        'use',
      ]);
      translateSpy.getCurrentLang.and.returnValue('en');
      translateSpy.getFallbackLang.and.returnValue('en');

      TestBed.configureTestingModule({
        providers: [
          RouterService,
          { provide: Router, useValue: routerSpy },
          { provide: TranslateService, useValue: translateSpy },
        ],
      });

      service = TestBed.inject(RouterService);
      router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
      translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
    });

    describe('getCurrentLang', () => {
      it('should return language from URL when present', () => {
        currentUrl = '/uk/learn';
        expect(service.getCurrentLang()).toBe('uk');
      });

      it('should return language from URL for root path', () => {
        currentUrl = '/ru';
        expect(service.getCurrentLang()).toBe('ru');
      });

      it('should fallback to translate service current lang when URL has no language', () => {
        currentUrl = '/about';
        translateService.getCurrentLang.and.returnValue('uk');
        expect(service.getCurrentLang()).toBe('uk');
      });

      it('should fallback to translate service fallback lang when current is null', () => {
        currentUrl = '/about';
        translateService.getCurrentLang.and.returnValue('');
        translateService.getFallbackLang.and.returnValue('ru');
        expect(service.getCurrentLang()).toBe('ru');
      });

      it('should fallback to environment default lang when both are null', () => {
        currentUrl = '/about';
        translateService.getCurrentLang.and.returnValue('');
        translateService.getFallbackLang.and.returnValue('');
        expect(service.getCurrentLang()).toBe(environment.defaultLang);
      });
    });

    describe('getLocalizedRoute', () => {
      it('should prepend current language to path', () => {
        currentUrl = '/en/about';
        expect(service.getLocalizedRoute('/contact')).toBe('en/contact');
      });

      it('should use specified language when provided', () => {
        expect(service.getLocalizedRoute('/about', 'uk')).toBe('uk/about');
      });

      it('should handle path without leading slash', () => {
        currentUrl = '/en/';
        expect(service.getLocalizedRoute('about')).toBe('en/about');
      });

      it('should handle empty path', () => {
        currentUrl = '/en/';
        expect(service.getLocalizedRoute('')).toBe('en');
        expect(service.getLocalizedRoute('/')).toBe('en');
      });

      it('should handle root path with language', () => {
        expect(service.getLocalizedRoute('/', 'ru')).toBe('ru');
      });
    });

    describe('navigateTo', () => {
      it('should navigate to localized route', () => {
        currentUrl = '/en/';
        service.navigateTo('/about');
        expect(router.navigate).toHaveBeenCalledWith(['en/about']);
      });

      it('should navigate with specified language', () => {
        service.navigateTo('/learn', 'uk');
        expect(router.navigate).toHaveBeenCalledWith(['uk/learn']);
      });
    });

    describe('switchLanguage', () => {
      let setItemSpy: jasmine.Spy;

      beforeEach(() => {
        currentUrl = '/en/about';
        setItemSpy = spyOn(Storage.prototype, 'setItem');
      });

      it('should switch to valid language', () => {
        service.switchLanguage('uk');
        expect(translateService.use).toHaveBeenCalledWith('uk');
        expect(setItemSpy).toHaveBeenCalledWith('app-lang', 'uk');
        expect(router.navigate).toHaveBeenCalled();
      });

      it('should not switch to invalid language', () => {
        spyOn(console, 'error');
        service.switchLanguage('fr');
        expect(translateService.use).not.toHaveBeenCalled();
        expect(console.error).toHaveBeenCalledWith('Invalid language: fr');
      });

      it('should preserve path when switching language', () => {
        currentUrl = '/en/learn/arduino';
        service.switchLanguage('uk');
        expect(router.navigate).toHaveBeenCalledWith(['uk/learn/arduino']);
      });

      it('should handle root path when switching language', () => {
        currentUrl = '/en';
        service.switchLanguage('uk');
        expect(router.navigate).toHaveBeenCalledWith(['uk']);
      });

      it('should handle URL without language prefix', () => {
        currentUrl = '/about';
        service.switchLanguage('uk');
        expect(router.navigate).toHaveBeenCalled();
      });

      it('should save language to localStorage', () => {
        service.switchLanguage('ru');
        expect(setItemSpy).toHaveBeenCalledWith('app-lang', 'ru');
      });

      it('should handle localStorage errors gracefully', () => {
        setItemSpy.and.throwError('QuotaExceededError');
        expect(() => service.switchLanguage('uk')).not.toThrow();
        expect(translateService.use).toHaveBeenCalledWith('uk');
      });
    });
  });

  describe('LocalizedRoutePipe', () => {
    let pipe: LocalizedRoutePipe;
    let routerService: jasmine.SpyObj<RouterService>;

    beforeEach(() => {
      const routerServiceSpy = jasmine.createSpyObj('RouterService', ['getLocalizedRoute']);
      routerServiceSpy.getLocalizedRoute.and.callFake(
        (path: string) => `en/${path.replace('/', '')}`,
      );

      TestBed.configureTestingModule({
        providers: [LocalizedRoutePipe, { provide: RouterService, useValue: routerServiceSpy }],
      });

      pipe = TestBed.inject(LocalizedRoutePipe);
      routerService = TestBed.inject(RouterService) as jasmine.SpyObj<RouterService>;
    });

    it('should transform path using router service', () => {
      expect(pipe.transform('/about')).toBe('en/about');
      expect(routerService.getLocalizedRoute).toHaveBeenCalledWith('/about');
    });

    it('should handle null path', () => {
      expect(pipe.transform(null)).toBe('en/');
      expect(routerService.getLocalizedRoute).toHaveBeenCalledWith('/');
    });

    it('should handle undefined path', () => {
      expect(pipe.transform(undefined)).toBe('en/');
      expect(routerService.getLocalizedRoute).toHaveBeenCalledWith('/');
    });

    it('should handle empty string', () => {
      expect(pipe.transform('')).toBe('en/');
      expect(routerService.getLocalizedRoute).toHaveBeenCalledWith('/');
    });
  });

  describe('LanguageWrapperComponent', () => {
    let component: LanguageWrapperComponent;
    let translateService: jasmine.SpyObj<TranslateService>;
    let router: jasmine.SpyObj<Router>;
    let activatedRoute: any;

    beforeEach(async () => {
      const translateSpy = jasmine.createSpyObj('TranslateService', ['use']);
      const routerSpy = jasmine.createSpyObj('Router', ['navigate'], { url: '/en/about' });

      await TestBed.configureTestingModule({
        imports: [LanguageWrapperComponent],
        providers: [
          { provide: TranslateService, useValue: translateSpy },
          { provide: Router, useValue: routerSpy },
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                paramMap: {
                  get: (key: string) => (key === 'lang' ? 'en' : null),
                },
              },
            },
          },
        ],
      }).compileComponents();

      const fixture = TestBed.createComponent(LanguageWrapperComponent);
      component = fixture.componentInstance;
      translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
      router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
      activatedRoute = TestBed.inject(ActivatedRoute);
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set language from route param on init', () => {
      activatedRoute.snapshot.paramMap.get = () => 'uk';
      component.ngOnInit();
      expect(translateService.use).toHaveBeenCalledWith('uk');
    });

    it('should not set language for unsupported language', () => {
      activatedRoute.snapshot.paramMap.get = () => 'fr';
      component.ngOnInit();
      expect(translateService.use).not.toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalled();
    });

    it('should redirect to default language when param is missing', () => {
      activatedRoute.snapshot.paramMap.get = () => null;
      component.ngOnInit();
      expect(translateService.use).not.toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalled();
    });

    it('should save language to localStorage when valid', () => {
      const setItemSpy = spyOn(Storage.prototype, 'setItem');
      activatedRoute.snapshot.paramMap.get = () => 'ru';
      component.ngOnInit();
      expect(setItemSpy).toHaveBeenCalledWith('app-lang', 'ru');
    });
  });

  describe('LangSwitcher', () => {
    let component: LangSwitcher;
    let translateService: jasmine.SpyObj<TranslateService>;
    let routerService: jasmine.SpyObj<RouterService>;

    beforeEach(async () => {
      const translateSpy = jasmine.createSpyObj('TranslateService', [
        'getLangs',
        'getCurrentLang',
        'use',
      ]);
      translateSpy.getLangs.and.returnValue(['en', 'uk', 'ru']);
      translateSpy.getCurrentLang.and.returnValue('en');
      translateSpy.onLangChange = of({ lang: 'en', translations: {} }) as any;

      const routerServiceSpy = jasmine.createSpyObj('RouterService', ['switchLanguage']);

      await TestBed.configureTestingModule({
        imports: [LangSwitcher],
        providers: [
          { provide: TranslateService, useValue: translateSpy },
          { provide: RouterService, useValue: routerServiceSpy },
        ],
      })
        .overrideComponent(LangSwitcher, { set: { template: '<select></select>' } })
        .compileComponents();

      const fixture = TestBed.createComponent(LangSwitcher);
      component = fixture.componentInstance;
      translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
      routerService = TestBed.inject(RouterService) as jasmine.SpyObj<RouterService>;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize with current language', () => {
      expect((component as any).current()).toBe('en');
    });

    it('should have language options', () => {
      expect((component as any).options.length).toBe(3);
      expect((component as any).options[0].code).toBe('en');
      expect((component as any).options[1].code).toBe('uk');
      expect((component as any).options[2].code).toBe('ru');
    });

    it('should switch language when chosen', () => {
      (component as any).choose('uk');
      expect(routerService.switchLanguage).toHaveBeenCalledWith('uk');
      expect((component as any).current()).toBe('uk');
      expect((component as any).open()).toBeFalse();
    });

    it('should toggle dropdown', () => {
      expect((component as any).open()).toBeFalse();
      (component as any).toggle();
      expect((component as any).open()).toBeTrue();
      (component as any).toggle();
      expect((component as any).open()).toBeFalse();
    });

    it('should close dropdown', () => {
      (component as any).toggle();
      expect((component as any).open()).toBeTrue();
      (component as any).close();
      expect((component as any).open()).toBeFalse();
    });
  });

  describe('defaultLanguageRedirectGuard', () => {
    let router: jasmine.SpyObj<Router>;
    let routerService: jasmine.SpyObj<RouterService>;

    beforeEach(() => {
      const routerSpy = jasmine.createSpyObj('Router', ['parseUrl']);
      const routerServiceSpy = jasmine.createSpyObj('RouterService', ['getLocalizedRoute']);

      TestBed.configureTestingModule({
        providers: [
          { provide: Router, useValue: routerSpy },
          { provide: RouterService, useValue: routerServiceSpy },
          { provide: 'PLATFORM_ID', useValue: 'browser' },
        ],
      });

      router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
      routerService = TestBed.inject(RouterService) as jasmine.SpyObj<RouterService>;
    });

    it('should be defined', () => {
      expect(defaultLanguageRedirectGuard).toBeDefined();
    });
  });

  describe('languageGuard', () => {
    let router: jasmine.SpyObj<Router>;

    beforeEach(() => {
      const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
      routerSpy.navigate.and.returnValue(Promise.resolve(true));

      TestBed.configureTestingModule({
        providers: [{ provide: Router, useValue: routerSpy }],
      });

      router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    });

    it('should allow activation when language is valid', () => {
      const route = {
        paramMap: { get: (key: string) => (key === 'lang' ? 'en' : null) },
        url: [{ path: 'en' }, { path: 'about' }],
      };

      const result = TestBed.runInInjectionContext(() => languageGuard(route as any, {} as any));
      expect(result).toBeTrue();
    });

    it('should allow activation when no language param', () => {
      const route = {
        paramMap: { get: () => null },
        url: [],
      };

      const result = TestBed.runInInjectionContext(() => languageGuard(route as any, {} as any));
      expect(result).toBeTrue();
    });

    it('should redirect when language is invalid', () => {
      const route = {
        paramMap: { get: (key: string) => (key === 'lang' ? 'fr' : null) },
        url: [{ path: 'fr' }, { path: 'about' }],
      };

      const result = TestBed.runInInjectionContext(() => languageGuard(route as any, {} as any));
      expect(result).toBeFalse();
      expect(router.navigate).toHaveBeenCalled();
    });

    it('should redirect to default language path', () => {
      const route = {
        paramMap: { get: (key: string) => (key === 'lang' ? 'de' : null) },
        url: [{ path: 'de' }, { path: 'learn' }],
      };

      TestBed.runInInjectionContext(() => languageGuard(route as any, {} as any));
      expect(router.navigate).toHaveBeenCalledWith([`/${environment.defaultLang}/learn`], {
        replaceUrl: true,
      });
    });
  });
});

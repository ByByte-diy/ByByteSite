import {
  DropdownButtonComponent,
  LangSwitcher,
  LanguageModule,
  LanguageWrapperComponent
} from "./chunk-OIGCI7V4.js";
import {
  provideMarkdown
} from "./chunk-G5KYBNYL.js";
import {
  RouterService
} from "./chunk-XIY4EXV4.js";
import {
  CommonModule,
  Component,
  ElementRef,
  HostListener,
  HttpClient,
  INJECTOR$1,
  Injectable,
  NavigationEnd,
  NavigationStart,
  PLATFORM_ID,
  Router,
  RouterLink,
  RouterOutlet,
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  bootstrapApplication,
  catchError,
  effect,
  environment,
  filter,
  getLangFromPath,
  getRedirectPathToDefaultLang,
  init_common,
  init_core,
  init_esm,
  init_http,
  init_operators,
  init_platform_browser,
  init_router,
  init_ssr,
  inject,
  isPlatformBrowser,
  isValidLanguage,
  makeEnvironmentProviders,
  of,
  provideBrowserGlobalErrorListeners,
  provideClientHydration,
  provideEnvironmentInitializer,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  ssr_exports,
  withEventReplay,
  withFetch,
  withInMemoryScrolling,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresolveDocument,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5IILHPIS.js";
import {
  __require,
  __spreadValues,
  __toCommonJS
} from "./chunk-MXU7DO7X.js";

// src/main.ts
init_platform_browser();

// src/app/app.config.ts
init_core();
init_router();
init_http();

// src/app/core/core.providers.ts
init_http();

// src/app/core/interceptors/error.interceptor.ts
var errorInterceptor = (req, next) => {
  return next(req).pipe();
};

// src/app/core/core.providers.ts
function provideCore() {
  return [provideHttpClient(withFetch(), withInterceptors([errorInterceptor]))];
}

// src/app/modules/language/providers/i18n.providers.ts
init_core();
init_http();
init_common();
init_esm();

// src/app/utils/ssr.utils.ts
function getRequestFromInjector(injector) {
  if (!injector) {
    return null;
  }
  try {
    try {
      const { REQUEST } = (init_ssr(), __toCommonJS(ssr_exports));
      return injector.get(REQUEST, null);
    } catch (e1) {
      try {
        const { REQUEST } = __require("@nguniversal/express-engine/tokens");
        return injector.get(REQUEST, null);
      } catch (e2) {
        return null;
      }
    }
  } catch (e) {
    return null;
  }
}
function getLangFromRequest(injector) {
  const request = getRequestFromInjector(injector);
  if (request && request.url && typeof request.url === "string") {
    return getLangFromPath(request.url);
  }
  return null;
}

// src/app/modules/language/providers/i18n.providers.ts
function loadTranslationFromFs(lang, injector) {
  try {
    const fs = __require("fs");
    const path = __require("path");
    let targetLang = lang;
    if (injector) {
      const urlLang = getLangFromRequest(injector);
      if (urlLang) {
        targetLang = urlLang;
      }
    }
    if (!environment.supportedLangs.includes(targetLang)) {
      targetLang = environment.defaultLang;
    }
    const translationsPath = path.join(process.cwd(), "src/assets/i18n", `${targetLang}.json`);
    if (fs.existsSync(translationsPath)) {
      const translations = JSON.parse(fs.readFileSync(translationsPath, "utf8"));
      return translations;
    }
    const defaultTranslationsPath = path.join(process.cwd(), "src/assets/i18n", `${environment.defaultLang}.json`);
    if (fs.existsSync(defaultTranslationsPath)) {
      const defaultTranslations = JSON.parse(fs.readFileSync(defaultTranslationsPath, "utf8"));
      return defaultTranslations;
    }
    return {};
  } catch (error) {
    console.error(`Error loading translations from filesystem for ${lang}:`, error);
    return {};
  }
}
var httpTranslateLoaderFactory = (http, platformId, injector) => {
  if (isPlatformBrowser(platformId)) {
    return {
      getTranslation: (lang) => {
        const targetLang = environment.supportedLangs.includes(lang) ? lang : environment.defaultLang;
        return http.get(`assets/i18n/${targetLang}.json`).pipe(catchError((error) => {
          if (targetLang !== environment.defaultLang && error.status === 404) {
            console.warn(`Translation file for ${targetLang} not found, falling back to ${environment.defaultLang}`);
            return http.get(`assets/i18n/${environment.defaultLang}.json`).pipe(catchError(() => {
              console.error(`Failed to load default translations (${environment.defaultLang}.json)`);
              return of({});
            }));
          }
          console.error(`Error loading translations for ${targetLang}:`, error);
          return of({});
        }));
      }
    };
  }
  return {
    getTranslation: (lang) => {
      const translations = loadTranslationFromFs(lang, injector);
      return of(translations);
    }
  };
};
function provideI18n() {
  return [
    makeEnvironmentProviders([
      TranslateModule.forRoot({
        fallbackLang: environment.defaultLang,
        loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoaderFactory,
          deps: [HttpClient, PLATFORM_ID, INJECTOR$1]
        }
      }).providers
    ]),
    provideEnvironmentInitializer(() => {
      const translate = inject(TranslateService);
      const injector = inject(INJECTOR$1);
      const platformId = inject(PLATFORM_ID);
      translate.addLangs(environment.supportedLangs);
      translate.setFallbackLang(environment.defaultLang);
      const getLangFromUrl = () => {
        if (isPlatformBrowser(platformId)) {
          const pathSegments = window.location.pathname.split("/").filter(Boolean);
          const firstSegment = pathSegments[0];
          return environment.supportedLangs.includes(firstSegment) ? firstSegment : null;
        }
        return getLangFromRequest(injector);
      };
      const urlLang = getLangFromUrl();
      const savedLang = isPlatformBrowser(platformId) && typeof localStorage !== "undefined" ? localStorage.getItem("app-lang") : null;
      const browserLang = isPlatformBrowser(platformId) ? window.navigator.language.split("-")[0] : environment.defaultLang;
      const initial = urlLang || (savedLang && environment.supportedLangs.includes(savedLang) ? savedLang : null) || (environment.supportedLangs.includes(browserLang) ? browserLang : null) || environment.defaultLang;
      translate.use(initial);
    })
  ];
}

// src/app/modules/language/guards/default-language.guard.ts
init_core();
init_router();
var defaultLanguageRedirectGuard = () => {
  const router = inject(Router);
  const routerService = inject(RouterService);
  const target = routerService.getLocalizedRoute("/");
  return router.parseUrl(target);
};

// src/app/modules/language/guards/language.guard.ts
init_core();
init_router();
var languageGuard = (route) => {
  const router = inject(Router);
  const lang = route.paramMap.get("lang");
  if (!lang)
    return true;
  if (!isValidLanguage(lang)) {
    const currentPath = route.url.map((segment) => segment.path).slice(1).join("/");
    const currentUrl = currentPath ? `/${lang}/${currentPath}` : `/${lang}`;
    const redirectPath = getRedirectPathToDefaultLang(currentUrl);
    try {
      router.navigate([redirectPath], { replaceUrl: true }).catch((error) => {
        console.error("Failed to redirect to default language, redirecting to home:", error);
        router.navigate([`/${environment.defaultLang}`], { replaceUrl: true });
      });
    } catch (error) {
      console.error("Error in language guard navigation:", error);
      router.navigate([`/${environment.defaultLang}`], { replaceUrl: true });
    }
    return false;
  }
  return true;
};

// src/app/app.routes.ts
var sharedRoutes = [
  __spreadValues({
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./chunk-EU2NTY3C.js").then((m) => m.Home)
  }, false ? { \u0275entryName: "src/app/pages/home/home.ts" } : {}),
  __spreadValues({
    path: "build",
    loadComponent: () => import("./chunk-6XIDCQ73.js").then((m) => m.BuildPage)
  }, false ? { \u0275entryName: "src/app/pages/build/build.ts" } : {}),
  __spreadValues({
    path: "learn",
    loadChildren: () => import("./chunk-RHOOV4SS.js").then((m) => m.lessonsRoutes)
  }, false ? { \u0275entryName: "src/app/modules/lessons/lessons.routes.ts" } : {}),
  __spreadValues({
    path: "community",
    loadComponent: () => import("./chunk-6WQW74GT.js").then((m) => m.Community)
  }, false ? { \u0275entryName: "src/app/pages/community/community.ts" } : {}),
  __spreadValues({
    path: "blog",
    loadComponent: () => import("./chunk-DQ2AAIIR.js").then((m) => m.BlogComponent)
  }, false ? { \u0275entryName: "src/app/pages/blog/blog.ts" } : {}),
  __spreadValues({
    path: "**",
    loadComponent: () => import("./chunk-72WKEK45.js").then((m) => m.NotFoundComponent)
  }, false ? { \u0275entryName: "src/app/pages/not-found/not-found.ts" } : {})
];
var routes = [
  // Root route - renders Home component with default language
  // This will be prerendered correctly by Angular
  __spreadValues({
    path: "",
    pathMatch: "full",
    canMatch: [defaultLanguageRedirectGuard],
    loadComponent: () => import("./chunk-6O5Q7MV4.js").then((m) => m.RootPageComponent)
  }, false ? { \u0275entryName: "src/app/components/root-page/root-page.component.ts" } : {}),
  // Routes with language prefix (e.g., /en, /uk, /ru)
  // Only these routes are prerendered (no routes without language prefix)
  {
    path: ":lang",
    component: LanguageWrapperComponent,
    canActivate: [languageGuard],
    children: sharedRoutes
  }
];

// src/app/app.config.ts
init_platform_browser();
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideHttpClient(withFetch()),
    provideMarkdown(),
    provideCore(),
    provideI18n(),
    provideClientHydration(withEventReplay())
  ]
};

// src/app/app.ts
init_core();
init_router();
init_operators();
init_common();

// src/app/components/header/header.ts
init_common();
init_core();
init_router();

// src/app/shared/theme-toggle/theme-toggle.ts
init_core();

// src/app/core/theme/theme.service.ts
init_core();
init_common();
init_core();
var ThemeService = class _ThemeService {
  storageKey = "app-theme";
  platformId = inject(PLATFORM_ID);
  // Dependency injection with adapters
  storage;
  mediaQuery;
  dom;
  theme = signal("system", ...ngDevMode ? [{ debugName: "theme" }] : []);
  constructor() {
    this.storage = this.createStorageAdapter();
    this.mediaQuery = this.createMediaQueryAdapter();
    this.dom = this.createDOMAdapter();
    this.theme.set(this.loadInitialTheme());
    effect(() => {
      this.applyTheme(this.theme());
    });
    this.mediaQuery.addEventListener("change", () => {
      if (this.theme() === "system") {
        this.applyTheme("system");
      }
    });
  }
  setTheme(theme) {
    this.theme.set(theme);
    this.storage.setItem(this.storageKey, theme);
  }
  getEffectiveTheme() {
    const current = this.theme();
    if (current === "system") {
      return this.mediaQuery.matches ? "dark" : "light";
    }
    return current;
  }
  loadInitialTheme() {
    const saved = this.storage.getItem(this.storageKey);
    return saved || "system";
  }
  applyTheme(theme) {
    const effective = theme === "system" ? this.mediaQuery.matches ? "dark" : "light" : theme;
    this.dom.applyTheme(effective);
  }
  // Factory methods for different environments
  createStorageAdapter() {
    if (isPlatformBrowser(this.platformId)) {
      return {
        getItem: (key) => localStorage.getItem(key),
        setItem: (key, value) => localStorage.setItem(key, value)
      };
    }
    return {
      getItem: () => null,
      setItem: () => {
      }
    };
  }
  createMediaQueryAdapter() {
    if (isPlatformBrowser(this.platformId)) {
      return matchMedia("(prefers-color-scheme: dark)");
    }
    return {
      matches: false,
      addEventListener: () => {
      }
    };
  }
  createDOMAdapter() {
    if (isPlatformBrowser(this.platformId)) {
      return {
        applyTheme: (theme) => {
          const root = document.documentElement;
          root.classList.remove("theme-light", "theme-dark");
          root.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
        }
      };
    }
    return {
      applyTheme: () => {
      }
    };
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/shared/theme-toggle/theme-toggle.ts
init_core();
var ThemeToggleComponent = class _ThemeToggleComponent {
  themeService = inject(ThemeService);
  current = this.themeService.theme;
  open = signal(false, ...ngDevMode ? [{ debugName: "open" }] : []);
  get effectiveTheme() {
    return this.themeService.getEffectiveTheme();
  }
  toggle() {
    this.open.update((v) => !v);
  }
  close() {
    this.open.set(false);
  }
  choose(value) {
    this.themeService.setTheme(value);
    this.open.set(false);
  }
  onDocClick(ev) {
    const path = ev.composedPath();
    const isInside = path.some((n) => n?.classList?.contains?.("theme"));
    if (!isInside)
      this.close();
  }
  static \u0275fac = function ThemeToggleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeToggleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeToggleComponent, selectors: [["app-theme-toggle"]], hostBindings: function ThemeToggleComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ThemeToggleComponent_click_HostBindingHandler($event) {
        return ctx.onDocClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 21, vars: 5, consts: [["ariaLabel", "Theme"], ["dropdownTrigger", "", "aria-hidden", "true", 1, "icon-mask"], ["dropdownMenu", ""], ["role", "option"], ["type", "button", 3, "click"], [1, "dropdown__flag"], [1, "dropdown__label"]], template: function ThemeToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-dropdown-button", 0);
      \u0275\u0275element(1, "span", 1);
      \u0275\u0275elementContainerStart(2, 2);
      \u0275\u0275elementStart(3, "li", 3)(4, "button", 4);
      \u0275\u0275listener("click", function ThemeToggleComponent_Template_button_click_4_listener() {
        return ctx.choose("system");
      });
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "\u{1F5A5}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "System");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "li", 3)(10, "button", 4);
      \u0275\u0275listener("click", function ThemeToggleComponent_Template_button_click_10_listener() {
        return ctx.choose("light");
      });
      \u0275\u0275elementStart(11, "span", 5);
      \u0275\u0275text(12, "\u2600\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 6);
      \u0275\u0275text(14, "Light");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "li", 3)(16, "button", 4);
      \u0275\u0275listener("click", function ThemeToggleComponent_Template_button_click_16_listener() {
        return ctx.choose("dark");
      });
      \u0275\u0275elementStart(17, "span", 5);
      \u0275\u0275text(18, "\u{1F319}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 6);
      \u0275\u0275text(20, "Dark");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("--icon", ctx.effectiveTheme === "dark" ? "url(icons/moon.svg)" : "url(icons/sun.svg)");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-selected", ctx.current() === "system");
      \u0275\u0275advance(6);
      \u0275\u0275attribute("aria-selected", ctx.current() === "light");
      \u0275\u0275advance(6);
      \u0275\u0275attribute("aria-selected", ctx.current() === "dark");
    }
  }, dependencies: [DropdownButtonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeToggleComponent, [{
    type: Component,
    args: [{
      selector: "app-theme-toggle",
      standalone: true,
      imports: [DropdownButtonComponent],
      template: `
    <app-dropdown-button ariaLabel="Theme">
      <span
        dropdownTrigger
        class="icon-mask"
        [style.--icon]="effectiveTheme === 'dark' ? 'url(icons/moon.svg)' : 'url(icons/sun.svg)'"
        aria-hidden="true"
      ></span>
      <ng-container dropdownMenu>
        <li role="option" [attr.aria-selected]="current() === 'system'">
          <button type="button" (click)="choose('system')">
            <span class="dropdown__flag">\u{1F5A5}\uFE0F</span><span class="dropdown__label">System</span>
          </button>
        </li>
        <li role="option" [attr.aria-selected]="current() === 'light'">
          <button type="button" (click)="choose('light')">
            <span class="dropdown__flag">\u2600\uFE0F</span><span class="dropdown__label">Light</span>
          </button>
        </li>
        <li role="option" [attr.aria-selected]="current() === 'dark'">
          <button type="button" (click)="choose('dark')">
            <span class="dropdown__flag">\u{1F319}</span><span class="dropdown__label">Dark</span>
          </button>
        </li>
      </ng-container>
    </app-dropdown-button>
  `
    }]
  }], null, { onDocClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeToggleComponent, { className: "ThemeToggleComponent", filePath: "src/app/shared/theme-toggle/theme-toggle.ts", lineNumber: 37 });
})();

// src/app/shared/social-links/social-links.ts
init_common();
init_core();
init_core();
var SocialLinks = class _SocialLinks {
  env = environment;
  static \u0275fac = function SocialLinks_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SocialLinks)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SocialLinks, selectors: [["app-social-links"]], decls: 10, vars: 5, consts: [["target", "_blank", "rel", "noopener", "aria-label", "Instagram", 1, "social", 3, "href"], [1, "social-icon", 2, "--icon", "url(icons/instagram.svg)"], ["target", "_blank", "rel", "noopener", "aria-label", "Facebook", 1, "social", 3, "href"], [1, "social-icon", 2, "--icon", "url(icons/facebook.svg)"], ["target", "_blank", "rel", "noopener", "aria-label", "Telegram", 1, "social", 3, "href"], [1, "social-icon", 2, "--icon", "url(icons/telegram.svg)"], ["target", "_blank", "rel", "noopener", "aria-label", "Discord", 1, "social", 3, "href"], [1, "social-icon", 2, "--icon", "url(icons/discord.svg)"], ["target", "_blank", "rel", "noopener", "aria-label", "GitHub", 1, "social", 3, "href"], [1, "social-icon", 2, "--icon", "url(icons/github.svg)"]], template: function SocialLinks_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "a", 0);
      \u0275\u0275domElement(1, "span", 1);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(2, "a", 2);
      \u0275\u0275domElement(3, "span", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "a", 4);
      \u0275\u0275domElement(5, "span", 5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "a", 6);
      \u0275\u0275domElement(7, "span", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "a", 8);
      \u0275\u0275domElement(9, "span", 9);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275domProperty("href", ctx.env.links.instagram, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("href", ctx.env.links.facebook, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("href", ctx.env.links.telegram, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("href", ctx.env.links.discord, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("href", ctx.env.links.githubOrg, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  gap: 10px;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=social-links.css.map */", "\n\n.social[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=social-links.css.map */", "\n\n.social[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: color-mix(in oklab, var(--btn-primary-bg) 10%, transparent);\n}\n/*# sourceMappingURL=social-links.css.map */", "\n\n.social-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  background-color: currentColor;\n  -webkit-mask: var(--icon) no-repeat center/contain;\n  mask: var(--icon) no-repeat center/contain;\n}\n/*# sourceMappingURL=social-links.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SocialLinks, [{
    type: Component,
    args: [{ selector: "app-social-links", standalone: true, imports: [CommonModule], template: `
    <a
      class="social"
      [href]="env.links.instagram"
      target="_blank"
      rel="noopener"
      aria-label="Instagram"
    >
      <span class="social-icon" style="--icon: url(icons/instagram.svg)"></span>
    </a>
    <a
      class="social"
      [href]="env.links.facebook"
      target="_blank"
      rel="noopener"
      aria-label="Facebook"
    >
      <span class="social-icon" style="--icon: url(icons/facebook.svg)"></span>
    </a>
    <a
      class="social"
      [href]="env.links.telegram"
      target="_blank"
      rel="noopener"
      aria-label="Telegram"
    >
      <span class="social-icon" style="--icon: url(icons/telegram.svg)"></span>
    </a>
    <a
      class="social"
      [href]="env.links.discord"
      target="_blank"
      rel="noopener"
      aria-label="Discord"
    >
      <span class="social-icon" style="--icon: url(icons/discord.svg)"></span>
    </a>
    <a
      class="social"
      [href]="env.links.githubOrg"
      target="_blank"
      rel="noopener"
      aria-label="GitHub"
    >
      <span class="social-icon" style="--icon: url(icons/github.svg)"></span>
    </a>
  `, styles: ["/* angular:styles/component:scss;ebd23cac71cb126ab2ee25bd1d5be5af884b71a4d955272b68e6c27c81ebec5f;/home/runner/work/ByByteSite/ByByteSite/src/app/shared/social-links/social-links.ts */\n:host {\n  display: flex;\n  gap: 10px;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=social-links.css.map */\n", "/* angular:styles/component:scss;cae9927e00360417be37650c15b90a0426235460e16da3d067c083f216af1be4;/home/runner/work/ByByteSite/ByByteSite/src/app/shared/social-links/social-links.ts */\n.social {\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=social-links.css.map */\n", "/* angular:styles/component:scss;b82e702afc1b106b6d8133c32617f2b749addb5f901c047786ef607d7bb7023b;/home/runner/work/ByByteSite/ByByteSite/src/app/shared/social-links/social-links.ts */\n.social:hover {\n  color: var(--text-primary);\n  background: color-mix(in oklab, var(--btn-primary-bg) 10%, transparent);\n}\n/*# sourceMappingURL=social-links.css.map */\n", "/* angular:styles/component:scss;c9a7b93385b791c7ff078e118f19a0f46a91112cb8b3fdb49cf788533971cff1;/home/runner/work/ByByteSite/ByByteSite/src/app/shared/social-links/social-links.ts */\n.social-icon {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  background-color: currentColor;\n  -webkit-mask: var(--icon) no-repeat center/contain;\n  mask: var(--icon) no-repeat center/contain;\n}\n/*# sourceMappingURL=social-links.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SocialLinks, { className: "SocialLinks", filePath: "src/app/shared/social-links/social-links.ts", lineNumber: 94 });
})();

// src/app/components/header/header.ts
init_core();
var HeaderComponent = class _HeaderComponent {
  routerService = inject(RouterService);
  isMobileMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "isMobileMenuOpen" }] : []);
  host = inject(ElementRef);
  toggleMobile() {
    this.isMobileMenuOpen.update((v) => !v);
  }
  onDocumentClick(event) {
    if (!this.isMobileMenuOpen())
      return;
    const path = event.composedPath && event.composedPath() || [];
    const clickedInside = path.includes(this.host.nativeElement);
    if (!clickedInside) {
      this.isMobileMenuOpen.set(false);
    }
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function HeaderComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 34, vars: 28, consts: [[1, "header"], [1, "header__inner"], [1, "header__logo", 3, "routerLink"], ["src", "img/logo.png", 1, "logo-img"], [1, "logo-text"], [1, "nav"], [1, "nav__link", 3, "routerLink"], [1, "nav__tools"], [1, "actions__socials", "actions__socials--in-menu"], [1, "actions"], [1, "actions__socials", "actions__socials--desktop"], [1, "actions__theme"], [1, "actions__lang"], ["type", "button", "aria-label", "Menu", 1, "burger", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275element(4, "img", 3);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "nav", 5)(10, "a", 6);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 6);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 6);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 6);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 7);
      \u0275\u0275element(23, "app-social-links", 8)(24, "app-theme-toggle")(25, "app-lang-switcher");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 9);
      \u0275\u0275element(27, "app-social-links", 10)(28, "app-theme-toggle", 11)(29, "app-lang-switcher", 12);
      \u0275\u0275elementStart(30, "button", 13);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_30_listener() {
        return ctx.toggleMobile();
      });
      \u0275\u0275element(31, "span")(32, "span")(33, "span");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routerService.getLocalizedRoute("/"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 14, "brand.name"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("alt", \u0275\u0275pipeBind1(5, 16, "brand.name"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 18, "brand.name"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("nav--open", ctx.isMobileMenuOpen());
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routerService.getLocalizedRoute("/build"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 20, "nav.build"));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routerService.getLocalizedRoute("/learn"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 22, "nav.learning"));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routerService.getLocalizedRoute("/blog"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 24, "nav.blog"));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routerService.getLocalizedRoute("/community"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 26, "nav.community"));
    }
  }, dependencies: [
    CommonModule,
    RouterLink,
    LanguageModule,
    LangSwitcher,
    ThemeToggleComponent,
    TranslateModule,
    SocialLinks,
    TranslatePipe
  ], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-soft);\n}\n.header__inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 16px;\n}\n.header__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: var(--text-primary);\n  font-family: var(--font-display);\n  font-weight: var(--font-weight-semibold);\n}\n.logo-img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  letter-spacing: 0.2px;\n  font-weight: var(--font-weight-bold);\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.nav__link[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  text-decoration: none;\n  padding: 6px 8px;\n  border-radius: 8px;\n  font-weight: var(--font-weight-medium);\n  font-size: var(--text-2xl);\n}\n.nav__link[_ngcontent-%COMP%]:hover {\n  background: color-mix(in oklab, var(--btn-primary-bg) 10%, transparent);\n  color: #fff;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-left: auto;\n}\n.actions__socials[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  color: var(--text-secondary);\n}\n.actions__socials--desktop[_ngcontent-%COMP%] {\n  display: flex;\n}\n.actions__socials--in-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.social[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.social[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: color-mix(in oklab, var(--btn-primary-bg) 10%, transparent);\n}\n.social-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  background-color: currentColor;\n  -webkit-mask: var(--icon) no-repeat center/contain;\n  mask: var(--icon) no-repeat center/contain;\n}\n.actions__theme[_ngcontent-%COMP%], \n.actions__lang[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nav__tools[_ngcontent-%COMP%] {\n  display: none;\n}\n.burger[_ngcontent-%COMP%] {\n  display: none;\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border-soft);\n  background: transparent;\n  border-radius: 8px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 3px;\n  padding: 6px;\n}\n.burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 18px;\n  height: 2px;\n  background: var(--text-primary);\n}\n@media (max-width: 900px) {\n  .nav[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 56px;\n    padding: 12px 16px;\n    background: var(--bg-surface);\n    border-bottom: 1px solid var(--border-soft);\n    display: none;\n  }\n  .nav.nav--open[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .actions[_ngcontent-%COMP%] {\n    gap: 0px;\n  }\n  .actions__socials[_ngcontent-%COMP%] {\n    gap: 0px;\n  }\n  .burger[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .actions__theme[_ngcontent-%COMP%], \n   .actions__lang[_ngcontent-%COMP%], \n   .actions__socials--desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav__tools[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 8px;\n    margin-top: 8px;\n    align-items: center;\n  }\n  .actions__socials--in-menu[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 10px;\n  }\n  .logo-img[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n}\n/*# sourceMappingURL=header.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [
      CommonModule,
      RouterLink,
      LanguageModule,
      ThemeToggleComponent,
      TranslateModule,
      SocialLinks
    ], template: `
    <header class="header">
      <div class="header__inner">
        <a
          class="header__logo"
          [routerLink]="routerService.getLocalizedRoute('/')"
          [attr.aria-label]="'brand.name' | translate"
        >
          <img src="img/logo.png" [attr.alt]="'brand.name' | translate" class="logo-img" />
          <span class="logo-text">{{ 'brand.name' | translate }}</span>
        </a>

        <nav class="nav" [class.nav--open]="isMobileMenuOpen()">
          <a class="nav__link" [routerLink]="routerService.getLocalizedRoute('/build')">{{
            'nav.build' | translate
          }}</a>
          <a class="nav__link" [routerLink]="routerService.getLocalizedRoute('/learn')">{{
            'nav.learning' | translate
          }}</a>
          <a class="nav__link" [routerLink]="routerService.getLocalizedRoute('/blog')">{{
            'nav.blog' | translate
          }}</a>
          <a class="nav__link" [routerLink]="routerService.getLocalizedRoute('/community')">{{
            'nav.community' | translate
          }}</a>
          <div class="nav__tools">
            <app-social-links class="actions__socials actions__socials--in-menu" />
            <app-theme-toggle></app-theme-toggle>
            <app-lang-switcher></app-lang-switcher>
          </div>
        </nav>

        <div class="actions">
          <app-social-links class="actions__socials actions__socials--desktop" />

          <app-theme-toggle class="actions__theme"></app-theme-toggle>
          <app-lang-switcher class="actions__lang"></app-lang-switcher>

          <button class="burger" type="button" aria-label="Menu" (click)="toggleMobile()">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `, styles: ["/* src/app/components/header/header.scss */\n.header {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-soft);\n}\n.header__inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 16px;\n}\n.header__logo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: var(--text-primary);\n  font-family: var(--font-display);\n  font-weight: var(--font-weight-semibold);\n}\n.logo-img {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n.logo-text {\n  font-size: var(--text-2xl);\n  letter-spacing: 0.2px;\n  font-weight: var(--font-weight-bold);\n}\n.nav {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.nav__link {\n  color: var(--text-primary);\n  text-decoration: none;\n  padding: 6px 8px;\n  border-radius: 8px;\n  font-weight: var(--font-weight-medium);\n  font-size: var(--text-2xl);\n}\n.nav__link:hover {\n  background: color-mix(in oklab, var(--btn-primary-bg) 10%, transparent);\n  color: #fff;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-left: auto;\n}\n.actions__socials {\n  display: flex;\n  gap: 4px;\n  color: var(--text-secondary);\n}\n.actions__socials--desktop {\n  display: flex;\n}\n.actions__socials--in-menu {\n  display: none;\n}\n.social {\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.social:hover {\n  color: var(--text-primary);\n  background: color-mix(in oklab, var(--btn-primary-bg) 10%, transparent);\n}\n.social-icon {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  background-color: currentColor;\n  -webkit-mask: var(--icon) no-repeat center/contain;\n  mask: var(--icon) no-repeat center/contain;\n}\n.actions__theme,\n.actions__lang {\n  display: inline-flex;\n}\n.nav__tools {\n  display: none;\n}\n.burger {\n  display: none;\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border-soft);\n  background: transparent;\n  border-radius: 8px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 3px;\n  padding: 6px;\n}\n.burger span {\n  display: block;\n  width: 18px;\n  height: 2px;\n  background: var(--text-primary);\n}\n@media (max-width: 900px) {\n  .nav {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 56px;\n    padding: 12px 16px;\n    background: var(--bg-surface);\n    border-bottom: 1px solid var(--border-soft);\n    display: none;\n  }\n  .nav.nav--open {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .actions {\n    gap: 0px;\n  }\n  .actions__socials {\n    gap: 0px;\n  }\n  .burger {\n    display: inline-flex;\n  }\n  .actions__theme,\n  .actions__lang,\n  .actions__socials--desktop {\n    display: none;\n  }\n  .nav__tools {\n    display: flex;\n    gap: 8px;\n    margin-top: 8px;\n    align-items: center;\n  }\n  .actions__socials--in-menu {\n    display: flex;\n    gap: 10px;\n  }\n  .logo-img {\n    width: 28px;\n    height: 28px;\n  }\n}\n/*# sourceMappingURL=header.css.map */\n"] }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/components/header/header.ts", lineNumber: 69 });
})();

// src/app/components/footer/footer.ts
init_common();
init_core();
init_core();
var FooterComponent = class _FooterComponent {
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 1, consts: [[1, "footer"], [1, "footer__inner"], [1, "footer__left"], [1, "footer__legal"], [1, "footer__links"], ["href", "/terms", 1, "footer__link"], [1, "footer__sep"], ["href", "/privacy", 1, "footer__link"], [1, "footer__right"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "nav", 4)(7, "a", 5);
      \u0275\u0275text(8, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 7);
      \u0275\u0275text(12, "Privacy Policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275element(14, "app-social-links");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\xA9", ctx.currentYear, " All rights reserved | \u0411\u0410\u0411\u0410\u0419 (ByByte.diy)");
    }
  }, dependencies: [CommonModule, SocialLinks], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-top: 1px solid var(--border-soft);\n  color: var(--text-secondary);\n}\n.footer__inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  justify-content: space-between;\n}\n.footer__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.footer__links[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 8px;\n}\n.footer__link[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  text-decoration: none;\n}\n.footer__link[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.footer__sep[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.footer__right[_ngcontent-%COMP%]   app-social-links[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n@media (max-width: 768px) {\n  .footer__inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=footer.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [CommonModule, SocialLinks], template: `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__left">
          <div class="footer__legal">
            <span>\xA9{{ currentYear }} All rights reserved | \u0411\u0410\u0411\u0410\u0419 (ByByte.diy)</span>
          </div>
          <nav class="footer__links">
            <a href="/terms" class="footer__link">Terms & Conditions</a>
            <span class="footer__sep">\xB7</span>
            <a href="/privacy" class="footer__link">Privacy Policy</a>
          </nav>
        </div>
        <div class="footer__right">
          <app-social-links />
        </div>
      </div>
    </footer>
  `, styles: ["/* src/app/components/footer/footer.scss */\n.footer {\n  background: var(--bg-surface);\n  border-top: 1px solid var(--border-soft);\n  color: var(--text-secondary);\n}\n.footer__inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  justify-content: space-between;\n}\n.footer__left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.footer__links {\n  display: inline-flex;\n  gap: 8px;\n}\n.footer__link {\n  color: var(--text-secondary);\n  text-decoration: none;\n}\n.footer__link:hover {\n  color: var(--text-primary);\n}\n.footer__sep {\n  color: var(--text-secondary);\n}\n.footer__right app-social-links {\n  display: inline-flex;\n}\n@media (max-width: 768px) {\n  .footer__inner {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=footer.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer/footer.ts", lineNumber: 30 });
})();

// src/app/app.ts
init_core();
init_router();
var App = class _App {
  _router;
  title = signal("ByByteSite", ...ngDevMode ? [{ debugName: "title" }] : []);
  platformId = inject(PLATFORM_ID);
  constructor(_router) {
    this._router = _router;
    if (isPlatformBrowser(this.platformId)) {
      this._router.events.pipe(filter((e) => e instanceof NavigationStart || e instanceof NavigationEnd)).subscribe(() => {
        setTimeout(() => {
          if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
          }
        }, 0);
      });
    }
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header")(1, "router-outlet")(2, "app-footer");
    }
  }, dependencies: [RouterOutlet, HeaderComponent, FooterComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n}\napp-header[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\nrouter-outlet[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  display: block;\n}\napp-footer[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, HeaderComponent, FooterComponent], template: "<app-header />\n\n<router-outlet />\n\n<app-footer />\n", styles: ["/* src/app/app.scss */\n:host {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n}\napp-header {\n  flex: 0 0 auto;\n}\nrouter-outlet {\n  flex: 1 0 auto;\n  display: block;\n}\napp-footer {\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 14 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map

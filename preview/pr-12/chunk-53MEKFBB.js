import {
  Injectable,
  Router,
  TranslateService,
  environment,
  getLangFromPath,
  init_core,
  init_router,
  inject,
  isValidLanguage,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-5JG7UUPK.js";

// src/app/services/router.service.ts
init_core();
init_router();
init_core();
var RouterService = class _RouterService {
  router = inject(Router);
  translate = inject(TranslateService);
  /**
   * Get current language from URL or TranslateService
   */
  getCurrentLang() {
    const currentUrl = this.router.url;
    const urlLang = getLangFromPath(currentUrl);
    if (currentUrl.startsWith(`/${urlLang}/`) || currentUrl === `/${urlLang}`) {
      return urlLang;
    }
    return this.translate.getCurrentLang() || this.translate.getFallbackLang() || environment.defaultLang;
  }
  /**
   * Generate route with language prefix
   * @param path Route path (e.g., '/build', '/learn')
   * @param lang Optional language code. If not provided, uses current language
   * @returns Route with language prefix (e.g., '/en/build')
   */
  getLocalizedRoute(path, lang) {
    const targetLang = lang || this.getCurrentLang();
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
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
  navigateTo(path, lang) {
    const route = this.getLocalizedRoute(path, lang);
    this.router.navigate([route]);
  }
  /**
   * Switch language and navigate to current route with new language
   * @param lang Language code to switch to
   */
  switchLanguage(lang) {
    if (!isValidLanguage(lang)) {
      console.error(`Invalid language: ${lang}`);
      return;
    }
    const currentUrl = this.router.url;
    const urlLang = getLangFromPath(currentUrl);
    const segments = currentUrl.split("/").filter(Boolean);
    let path = "";
    if (segments.length > 0 && segments[0] === urlLang) {
      path = "/" + segments.slice(1).join("/");
    } else {
      path = currentUrl || "/";
    }
    if (path === "/" || path === "") {
      path = "";
    } else if (!path.startsWith("/")) {
      path = "/" + path;
    }
    this.translate.use(lang);
    try {
      localStorage.setItem("app-lang", lang);
    } catch {
    }
    const newRoute = this.getLocalizedRoute(path, lang);
    this.router.navigate([newRoute]);
  }
  static \u0275fac = function RouterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RouterService, factory: _RouterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  RouterService
};
//# sourceMappingURL=chunk-53MEKFBB.js.map

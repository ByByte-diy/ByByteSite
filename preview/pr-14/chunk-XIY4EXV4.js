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
} from "./chunk-5IILHPIS.js";

// src/app/modules/language/services/router.service.ts
init_core();
init_router();
init_core();
var RouterService = class _RouterService {
  router = inject(Router);
  translate = inject(TranslateService);
  getCurrentLang() {
    const currentUrl = this.getCurrentUrl();
    const urlLang = getLangFromPath(currentUrl);
    if (currentUrl.startsWith(`/${urlLang}/`) || currentUrl === `/${urlLang}`) {
      return urlLang;
    }
    return this.translate.getCurrentLang() || this.translate.getFallbackLang() || environment.defaultLang;
  }
  getLocalizedRoute(path, lang) {
    const targetLang = lang || this.getCurrentLang();
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    if (!cleanPath) {
      return `/${targetLang}`;
    }
    return `/${targetLang}/${cleanPath}`;
  }
  navigateTo(path, lang) {
    const route = this.getLocalizedRoute(path, lang);
    this.router.navigate([route]);
  }
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
  getCurrentUrl() {
    const current = this.router.url || "";
    return current || `/${environment.defaultLang}`;
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
//# sourceMappingURL=chunk-XIY4EXV4.js.map

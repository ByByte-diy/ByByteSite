import {
  Home
} from "./chunk-ANMSNY6R.js";
import "./chunk-JZ7G5SN7.js";
import "./chunk-4LSH5WNZ.js";
import "./chunk-LVYCFSM4.js";
import "./chunk-VWHM4LEQ.js";
import "./chunk-VGREHBWJ.js";
import {
  SeoModule,
  SeoService
} from "./chunk-YVNYUMCD.js";
import {
  Component,
  init_core,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-6LT3BS5M.js";
import "./chunk-MXU7DO7X.js";

// src/app/components/root-page/root-page.component.ts
init_core();
init_core();
var RootPageComponent = class _RootPageComponent {
  seoService = inject(SeoService);
  ngOnInit() {
    this.seoService.updateSeoFromConfig({
      titleKey: "seo.home.title",
      descriptionKey: "seo.home.description",
      keywordsKey: "seo.home.keywords",
      imageKey: "seo.home.image",
      structuredDataKey: "seo.home.structuredData",
      type: "website"
    });
  }
  static \u0275fac = function RootPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RootPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RootPageComponent, selectors: [["app-root-page"]], decls: 1, vars: 0, template: function RootPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-home");
    }
  }, dependencies: [Home, SeoModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RootPageComponent, [{
    type: Component,
    args: [{ selector: "app-root-page", standalone: true, imports: [Home, SeoModule], template: `<app-home></app-home>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RootPageComponent, { className: "RootPageComponent", filePath: "src/app/components/root-page/root-page.component.ts", lineNumber: 17 });
})();
export {
  RootPageComponent
};
//# sourceMappingURL=chunk-AJYBWYTZ.js.map

import {
  SeoService
} from "./chunk-DUVATNFJ.js";
import {
  Component,
  init_core,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-5JG7UUPK.js";
import "./chunk-MXU7DO7X.js";

// src/app/pages/docs/docs.ts
init_core();
init_core();
var Docs = class _Docs {
  seoService = inject(SeoService);
  ngOnInit() {
    this.seoService.updateSeoFromConfig({
      titleKey: "seo.docs.title",
      descriptionKey: "seo.docs.description",
      keywordsKey: "seo.docs.keywords",
      type: "website"
    });
  }
  static \u0275fac = function Docs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Docs)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Docs, selectors: [["app-docs"]], decls: 2, vars: 0, template: function Docs_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "h1");
      \u0275\u0275text(1, "Docs");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Docs, [{
    type: Component,
    args: [{ selector: "app-docs", imports: [], template: ` <h1>Docs</h1> ` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Docs, { className: "Docs", filePath: "src/app/pages/docs/docs.ts", lineNumber: 10 });
})();
export {
  Docs
};
//# sourceMappingURL=chunk-2D52OFXU.js.map

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

// src/app/pages/products/products.ts
init_core();
init_core();
var Products = class _Products {
  seoService = inject(SeoService);
  ngOnInit() {
    this.seoService.updateSeoFromConfig({
      titleKey: "seo.products.title",
      descriptionKey: "seo.products.description",
      keywordsKey: "seo.products.keywords",
      type: "website"
    });
  }
  static \u0275fac = function Products_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Products)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Products, selectors: [["app-products"]], decls: 2, vars: 0, template: function Products_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "h1");
      \u0275\u0275text(1, "Products");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Products, [{
    type: Component,
    args: [{ selector: "app-products", imports: [], template: ` <h1>Products</h1> ` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Products, { className: "Products", filePath: "src/app/pages/products/products.ts", lineNumber: 10 });
})();
export {
  Products
};
//# sourceMappingURL=chunk-NUBLFZZN.js.map

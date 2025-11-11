import {
  ButtonComponent
} from "./chunk-VGREHBWJ.js";
import {
  SeoModule,
  SeoService
} from "./chunk-YVNYUMCD.js";
import {
  Component,
  Meta,
  Router,
  Title,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  init_core,
  init_platform_browser,
  init_router,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6LT3BS5M.js";
import "./chunk-MXU7DO7X.js";

// src/app/pages/not-found/not-found.ts
init_core();
init_router();
init_platform_browser();
init_core();
var _c0 = () => ({ text: "notFound.backHome", href: "/", variant: "primary", size: "lg" });
var NotFoundComponent = class _NotFoundComponent {
  _router = inject(Router);
  _title = inject(Title);
  _meta = inject(Meta);
  _seoService = inject(SeoService);
  _translate = inject(TranslateService);
  ngOnInit() {
    this.setupSeo();
  }
  setupSeo() {
    const title = `${this._translate.instant("notFound.title")} - ${this._seoService.siteName}`;
    const description = this._translate.instant("notFound.description");
    this._seoService.updateSeoMeta({
      title,
      description,
      url: `${this._seoService.siteUrl}/404`,
      type: "website",
      siteName: this._seoService.siteName,
      locale: this._seoService.getCurrentLanguage(),
      openGraph: {
        title,
        description,
        url: `${this._seoService.siteUrl}/404`,
        type: "website",
        siteName: this._seoService.siteName
      }
    });
    this._meta.updateTag({ name: "robots", content: "noindex, nofollow" });
  }
  goBack = () => {
    window.history.back();
  };
  static \u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], decls: 17, vars: 11, consts: [[1, "not-found"], [1, "not-found__container"], [1, "not-found__content"], [1, "not-found__icon"], [1, "not-found__emoji"], [1, "not-found__title"], [1, "not-found__description"], [1, "not-found__actions"], [3, "data"], [1, "btn", "btn-outline", "btn-lg", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "\u{1F50D}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275element(13, "app-button", 8);
      \u0275\u0275elementStart(14, "button", 9);
      \u0275\u0275listener("click", function NotFoundComponent_Template_button_click_14_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "notFound.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "notFound.description"));
      \u0275\u0275advance(3);
      \u0275\u0275property("data", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 8, "notFound.goBack"), " ");
    }
  }, dependencies: [TranslateModule, ButtonComponent, SeoModule, TranslatePipe], styles: ["\n\n.not-found[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-app);\n  padding: 2rem 1rem;\n}\n.not-found__container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  width: 100%;\n}\n.not-found__content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.not-found__icon[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.not-found__emoji[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  display: block;\n}\n.not-found__title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 900;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  font-family: var(--font-display);\n}\n.not-found__description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n  line-height: 1.6;\n}\n.not-found__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary);\n  color: white;\n}\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-size: 1.125rem;\n}\n@media (max-width: 640px) {\n  .not-found__actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .not-found__actions[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%], \n   .not-found__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n  }\n}\n/*# sourceMappingURL=not-found.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{ selector: "app-not-found", standalone: true, imports: [TranslateModule, ButtonComponent, SeoModule], template: `
    <div class="not-found">
      <div class="not-found__container">
        <div class="not-found__content">
          <div class="not-found__icon">
            <span class="not-found__emoji">\u{1F50D}</span>
          </div>
          <h1 class="not-found__title">{{ 'notFound.title' | translate }}</h1>
          <p class="not-found__description">{{ 'notFound.description' | translate }}</p>
          <div class="not-found__actions">
            <app-button
              [data]="{
                text: 'notFound.backHome',
                href: '/',
                variant: 'primary',
                size: 'lg',
              }"
            />
            <button class="btn btn-outline btn-lg" (click)="goBack()">
              {{ 'notFound.goBack' | translate }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;7a63dd56b76b6bf19171581573b3519cb88e16eb5d970167939855c572ede985;/home/runner/work/ByByteSite/ByByteSite/src/app/pages/not-found/not-found.ts */\n.not-found {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-app);\n  padding: 2rem 1rem;\n}\n.not-found__container {\n  max-width: 600px;\n  width: 100%;\n}\n.not-found__content {\n  text-align: center;\n}\n.not-found__icon {\n  margin-bottom: 2rem;\n}\n.not-found__emoji {\n  font-size: 4rem;\n  display: block;\n}\n.not-found__title {\n  font-size: 2.5rem;\n  font-weight: 900;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  font-family: var(--font-display);\n}\n.not-found__description {\n  font-size: 1.125rem;\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n  line-height: 1.6;\n}\n.not-found__actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.btn-outline {\n  background: transparent;\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.btn-outline:hover {\n  background: var(--color-primary);\n  color: white;\n}\n.btn-lg {\n  padding: 1rem 2rem;\n  font-size: 1.125rem;\n}\n@media (max-width: 640px) {\n  .not-found__actions {\n    flex-direction: column;\n    align-items: center;\n  }\n  .not-found__actions app-button,\n  .not-found__actions .btn {\n    width: 100%;\n    max-width: 300px;\n  }\n}\n/*# sourceMappingURL=not-found.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/pages/not-found/not-found.ts", lineNumber: 135 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-ZPYRAALU.js.map

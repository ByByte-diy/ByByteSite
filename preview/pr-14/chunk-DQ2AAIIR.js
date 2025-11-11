import {
  SeoModule,
  SeoService
} from "./chunk-FXMCNFL2.js";
import {
  Component,
  TranslateModule,
  TranslatePipe,
  init_core,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5IILHPIS.js";
import "./chunk-MXU7DO7X.js";

// src/app/pages/blog/blog.ts
init_core();
init_core();
var BlogComponent = class _BlogComponent {
  _seoService = inject(SeoService);
  ngOnInit() {
    this.setupSeo();
  }
  setupSeo() {
    this._seoService.updateSeoFromConfig({
      titleKey: "seo.blog.title",
      descriptionKey: "seo.blog.description",
      keywordsKey: "seo.blog.keywords",
      type: "website"
    });
  }
  static \u0275fac = function BlogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blog"]], decls: 48, vars: 30, consts: [[1, "blog-page"], [1, "blog-container"], [1, "blog-hero"], [1, "blog-hero__title"], [1, "blog-hero__description"], [1, "blog-content"], [1, "blog-placeholder"], [1, "blog-placeholder__icon"], [1, "blog-placeholder__emoji"], [1, "blog-placeholder__title"], [1, "blog-placeholder__description"], [1, "blog-placeholder__features"], [1, "blog-feature"], [1, "blog-feature__icon"], [1, "blog-feature__title"], [1, "blog-feature__description"]], template: function BlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "span", 8);
      \u0275\u0275text(13, "\u{1F4DD}");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "h2", 9);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "p", 10);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "div", 11)(21, "div", 12)(22, "span", 13);
      \u0275\u0275text(23, "\u{1F527}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "h3", 14);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "p", 15);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(30, "div", 12)(31, "span", 13);
      \u0275\u0275text(32, "\u{1F4A1}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "h3", 14);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "p", 15);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(39, "div", 12)(40, "span", 13);
      \u0275\u0275text(41, "\u{1F680}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "h3", 14);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "p", 15);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275domElementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "blog.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "blog.description"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "blog.comingSoon.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "blog.comingSoon.description"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 18, "blog.features.tutorials.title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 20, "blog.features.tutorials.description"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 22, "blog.features.tips.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 24, "blog.features.tips.description"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 26, "blog.features.projects.title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 28, "blog.features.projects.description"), " ");
    }
  }, dependencies: [TranslateModule, SeoModule, TranslatePipe], styles: ["\n\n.blog-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-app);\n  padding: 2rem 0;\n}\n.blog-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n.blog-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.blog-hero__title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 900;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  font-family: var(--font-display);\n}\n.blog-hero__description[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--text-secondary);\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.blog-placeholder[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: var(--bg-surface);\n  border-radius: 1rem;\n  border: 1px solid var(--border-soft);\n}\n.blog-placeholder__icon[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.blog-placeholder__emoji[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  display: block;\n}\n.blog-placeholder__title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n}\n.blog-placeholder__description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--text-secondary);\n  margin-bottom: 3rem;\n  line-height: 1.6;\n}\n.blog-placeholder__features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  margin-top: 3rem;\n}\n.blog-feature[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 1.5rem;\n  background: var(--bg-app);\n  border-radius: 0.75rem;\n  border: 1px solid var(--border-soft);\n}\n.blog-feature__icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 1rem;\n}\n.blog-feature__title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.blog-feature__description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .blog-hero__title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .blog-placeholder__features[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=blog.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogComponent, [{
    type: Component,
    args: [{ selector: "app-blog", standalone: true, imports: [TranslateModule, SeoModule], template: `
    <div class="blog-page">
      <div class="blog-container">
        <div class="blog-hero">
          <h1 class="blog-hero__title">{{ 'blog.title' | translate }}</h1>
          <p class="blog-hero__description">{{ 'blog.description' | translate }}</p>
        </div>

        <div class="blog-content">
          <div class="blog-placeholder">
            <div class="blog-placeholder__icon">
              <span class="blog-placeholder__emoji">\u{1F4DD}</span>
            </div>
            <h2 class="blog-placeholder__title">{{ 'blog.comingSoon.title' | translate }}</h2>
            <p class="blog-placeholder__description">
              {{ 'blog.comingSoon.description' | translate }}
            </p>

            <div class="blog-placeholder__features">
              <div class="blog-feature">
                <span class="blog-feature__icon">\u{1F527}</span>
                <h3 class="blog-feature__title">
                  {{ 'blog.features.tutorials.title' | translate }}
                </h3>
                <p class="blog-feature__description">
                  {{ 'blog.features.tutorials.description' | translate }}
                </p>
              </div>

              <div class="blog-feature">
                <span class="blog-feature__icon">\u{1F4A1}</span>
                <h3 class="blog-feature__title">{{ 'blog.features.tips.title' | translate }}</h3>
                <p class="blog-feature__description">
                  {{ 'blog.features.tips.description' | translate }}
                </p>
              </div>

              <div class="blog-feature">
                <span class="blog-feature__icon">\u{1F680}</span>
                <h3 class="blog-feature__title">
                  {{ 'blog.features.projects.title' | translate }}
                </h3>
                <p class="blog-feature__description">
                  {{ 'blog.features.projects.description' | translate }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;35e41f2018fa96e29dc87c8124964837db6c0d04b68a54c82cb566edbf03f9d9;/home/runner/work/ByByteSite/ByByteSite/src/app/pages/blog/blog.ts */\n.blog-page {\n  min-height: 100vh;\n  background: var(--bg-app);\n  padding: 2rem 0;\n}\n.blog-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n.blog-hero {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.blog-hero__title {\n  font-size: 3rem;\n  font-weight: 900;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  font-family: var(--font-display);\n}\n.blog-hero__description {\n  font-size: 1.25rem;\n  color: var(--text-secondary);\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.blog-placeholder {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: var(--bg-surface);\n  border-radius: 1rem;\n  border: 1px solid var(--border-soft);\n}\n.blog-placeholder__icon {\n  margin-bottom: 2rem;\n}\n.blog-placeholder__emoji {\n  font-size: 4rem;\n  display: block;\n}\n.blog-placeholder__title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n}\n.blog-placeholder__description {\n  font-size: 1.125rem;\n  color: var(--text-secondary);\n  margin-bottom: 3rem;\n  line-height: 1.6;\n}\n.blog-placeholder__features {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  margin-top: 3rem;\n}\n.blog-feature {\n  text-align: left;\n  padding: 1.5rem;\n  background: var(--bg-app);\n  border-radius: 0.75rem;\n  border: 1px solid var(--border-soft);\n}\n.blog-feature__icon {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 1rem;\n}\n.blog-feature__title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.blog-feature__description {\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .blog-hero__title {\n    font-size: 2rem;\n  }\n  .blog-placeholder__features {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=blog.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "src/app/pages/blog/blog.ts", lineNumber: 174 });
})();
export {
  BlogComponent
};
//# sourceMappingURL=chunk-DQ2AAIIR.js.map

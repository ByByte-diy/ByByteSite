import {
  CommonModule,
  Component,
  Input,
  TranslateModule,
  TranslatePipe,
  init_common,
  init_core,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-6LT3BS5M.js";

// src/app/shared/text-page/text-page.ts
init_core();
init_common();
init_core();
var _c0 = ["*"];
function TextPageComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.titleKey), " ");
  }
}
var TextPageComponent = class _TextPageComponent {
  titleKey = "";
  static \u0275fac = function TextPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextPageComponent, selectors: [["app-text-page"]], inputs: { titleKey: "titleKey" }, ngContentSelectors: _c0, decls: 7, vars: 1, consts: [[1, "text-page"], [1, "text-page__container"], [1, "text-page__header"], [1, "text-page__title"], [1, "text-page__content"]], template: function TextPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "h1", 3);
      \u0275\u0275conditionalCreate(4, TextPageComponent_Conditional_4_Template, 2, 3);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 4);
      \u0275\u0275projection(6);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.titleKey ? 4 : -1);
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.text-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-app);\n  padding: 2rem 0;\n}\n.text-page__container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n.text-page__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.text-page__title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 900;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  font-family: var(--font-display);\n}\n.text-page__content[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 1rem;\n  border: 1px solid var(--border-soft);\n  padding: 3rem 2rem;\n}\n.text-section[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n.text-section--english[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  padding-top: 4rem;\n  border-top: 2px solid var(--border-soft);\n}\n.text-section__title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 2rem;\n  font-family: var(--font-display);\n}\n.text-article[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.text-article__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  margin-top: 0;\n}\n.text-article__text[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--text-secondary);\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.text-article__text[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.text-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 1rem 0;\n}\n.text-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--text-secondary);\n  line-height: 1.8;\n  margin-bottom: 0.75rem;\n  padding-left: 1.5rem;\n  position: relative;\n}\n.text-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: var(--color-primary);\n  font-weight: bold;\n}\n.text-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .text-page__title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .text-page__content[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n  .text-section__title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .text-section--english[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    padding-top: 3rem;\n  }\n  .text-article__title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .text-article__text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .text-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=text-page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextPageComponent, [{
    type: Component,
    args: [{ selector: "app-text-page", standalone: true, imports: [CommonModule, TranslateModule], template: `
    <div class="text-page">
      <div class="text-page__container">
        <header class="text-page__header">
          <h1 class="text-page__title">
            @if (titleKey) {
              {{ titleKey | translate }}
            }
          </h1>
        </header>

        <div class="text-page__content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/shared/text-page/text-page.scss */\n.text-page {\n  min-height: 100vh;\n  background: var(--bg-app);\n  padding: 2rem 0;\n}\n.text-page__container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n.text-page__header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.text-page__title {\n  font-size: 3rem;\n  font-weight: 900;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  font-family: var(--font-display);\n}\n.text-page__content {\n  background: var(--bg-surface);\n  border-radius: 1rem;\n  border: 1px solid var(--border-soft);\n  padding: 3rem 2rem;\n}\n.text-section {\n  margin-bottom: 4rem;\n}\n.text-section--english {\n  margin-top: 4rem;\n  padding-top: 4rem;\n  border-top: 2px solid var(--border-soft);\n}\n.text-section__title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 2rem;\n  font-family: var(--font-display);\n}\n.text-article {\n  margin-bottom: 2.5rem;\n}\n.text-article__title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  margin-top: 0;\n}\n.text-article__text {\n  font-size: 1.125rem;\n  color: var(--text-secondary);\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.text-article__text:last-child {\n  margin-bottom: 0;\n}\n.text-list {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 1rem 0;\n}\n.text-list li {\n  font-size: 1.125rem;\n  color: var(--text-secondary);\n  line-height: 1.8;\n  margin-bottom: 0.75rem;\n  padding-left: 1.5rem;\n  position: relative;\n}\n.text-list li::before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: var(--color-primary);\n  font-weight: bold;\n}\n.text-list li strong {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .text-page__title {\n    font-size: 2rem;\n  }\n  .text-page__content {\n    padding: 2rem 1.5rem;\n  }\n  .text-section__title {\n    font-size: 2rem;\n  }\n  .text-section--english {\n    margin-top: 3rem;\n    padding-top: 3rem;\n  }\n  .text-article__title {\n    font-size: 1.25rem;\n  }\n  .text-article__text {\n    font-size: 1rem;\n  }\n  .text-list li {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=text-page.css.map */\n'] }]
  }], null, { titleKey: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextPageComponent, { className: "TextPageComponent", filePath: "src/app/shared/text-page/text-page.ts", lineNumber: 28 });
})();

export {
  TextPageComponent
};
//# sourceMappingURL=chunk-TUA6JXDM.js.map

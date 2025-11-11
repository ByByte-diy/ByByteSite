import {
  Component,
  Input,
  TranslateModule,
  TranslatePipe,
  init_core,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5IILHPIS.js";

// src/app/shared/benefit-card/benefit-card.ts
init_core();
init_core();
function BenefitCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 5)(5, "h3", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 7);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.data.color);
    \u0275\u0275domProperty("href", ctx_r0.data.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, ctx_r0.data.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, ctx_r0.data.description));
  }
}
function BenefitCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 5)(5, "h3", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 7);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.data.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, ctx_r0.data.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, ctx_r0.data.description));
  }
}
var BenefitCardComponent = class _BenefitCardComponent {
  data;
  static \u0275fac = function BenefitCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BenefitCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BenefitCardComponent, selectors: [["app-benefit-card"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [["target", "_blank", "rel", "noopener noreferrer", 1, "benefit-card", "benefit-card--link", 3, "background-color", "href"], [1, "benefit-card", 3, "background-color"], ["target", "_blank", "rel", "noopener noreferrer", 1, "benefit-card", "benefit-card--link", 3, "href"], [1, "benefit-card__icon"], [1, "benefit-icon"], [1, "benefit-card__content"], [1, "benefit-card__title"], [1, "benefit-card__description"], [1, "benefit-card"]], template: function BenefitCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, BenefitCardComponent_Conditional_0_Template, 11, 10, "a", 0)(1, BenefitCardComponent_Conditional_1_Template, 11, 9, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.data.href ? 0 : 1);
    }
  }, dependencies: [TranslateModule, TranslatePipe], styles: ["\n\n.ui-card[_ngcontent-%COMP%], \n.benefit-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.ui-card[_ngcontent-%COMP%]:hover, \n.benefit-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n}\n.ui-card__image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.ui-image-placeholder[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.ui-placeholder-icon[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.benefit-card[_ngcontent-%COMP%] {\n  min-height: 200px;\n  text-decoration: none;\n  color: inherit;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.benefit-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.benefit-card--link[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n}\n.benefit-card__icon[_ngcontent-%COMP%] {\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin-top: 2rem;\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.benefit-card__content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.benefit-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.benefit-card__description[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n@media (max-width: 768px) {\n  .benefit-card__icon[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .benefit-icon[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .benefit-card__content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .benefit-card__title[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  .benefit-card__description[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n/*# sourceMappingURL=benefit-card.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BenefitCardComponent, [{
    type: Component,
    args: [{ selector: "app-benefit-card", standalone: true, imports: [TranslateModule], template: `
    @if (data.href) {
      <a
        class="benefit-card benefit-card--link"
        [style.background-color]="data.color"
        [href]="data.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="benefit-card__icon">
          <span class="benefit-icon">{{ data.icon }}</span>
        </div>
        <div class="benefit-card__content">
          <h3 class="benefit-card__title">{{ data.title | translate }}</h3>
          <p class="benefit-card__description">{{ data.description | translate }}</p>
        </div>
      </a>
    } @else {
      <div class="benefit-card" [style.background-color]="data.color">
        <div class="benefit-card__icon">
          <span class="benefit-icon">{{ data.icon }}</span>
        </div>
        <div class="benefit-card__content">
          <h3 class="benefit-card__title">{{ data.title | translate }}</h3>
          <p class="benefit-card__description">{{ data.description | translate }}</p>
        </div>
      </div>
    }
  `, styles: ["/* src/app/shared/benefit-card/benefit-card.scss */\n.ui-card,\n.benefit-card {\n  background: var(--color-surface);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.ui-card:hover,\n.benefit-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n}\n.ui-card__image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.ui-image-placeholder {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.ui-placeholder-icon {\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.benefit-card {\n  min-height: 200px;\n  text-decoration: none;\n  color: inherit;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.benefit-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.benefit-card--link {\n  display: block;\n  cursor: pointer;\n}\n.benefit-card__icon {\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin-top: 2rem;\n}\n.benefit-icon {\n  font-size: 5rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.benefit-card__content {\n  padding: 2rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.benefit-card__title {\n  font-family: var(--font-display);\n  font-size: var(--text-xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.benefit-card__description {\n  font-size: var(--text-lg);\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n@media (max-width: 768px) {\n  .benefit-card__icon {\n    height: 100px;\n  }\n  .benefit-icon {\n    font-size: 3rem;\n  }\n  .benefit-card__content {\n    padding: 1.5rem;\n  }\n  .benefit-card__title {\n    font-size: var(--text-xl);\n  }\n  .benefit-card__description {\n    font-size: var(--text-base);\n  }\n}\n/*# sourceMappingURL=benefit-card.css.map */\n"] }]
  }], null, { data: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BenefitCardComponent, { className: "BenefitCardComponent", filePath: "src/app/shared/benefit-card/benefit-card.ts", lineNumber: 47 });
})();

export {
  BenefitCardComponent
};
//# sourceMappingURL=chunk-WNLNNM4M.js.map

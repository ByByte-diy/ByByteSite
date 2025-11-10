import {
  CommonModule,
  Component,
  Input,
  NgClass,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5JG7UUPK.js";

// src/app/shared/info-card/info-card.ts
init_core();
init_common();
init_core();
init_common();
function InfoCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.data.subtitle));
  }
}
function InfoCardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.data.description));
  }
}
function InfoCardComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "span", 10);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, feature_r2));
  }
}
function InfoCardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 8);
    \u0275\u0275repeaterCreate(1, InfoCardComponent_Conditional_11_For_2_Template, 6, 3, "li", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.data.features);
  }
}
var InfoCardComponent = class _InfoCardComponent {
  data;
  static \u0275fac = function InfoCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoCardComponent, selectors: [["app-info-card"]], inputs: { data: "data" }, decls: 12, vars: 10, consts: [[1, "info-card", 3, "ngClass"], [1, "info-card__image"], [1, "image-placeholder"], [1, "placeholder-icon"], [1, "info-card__content"], [1, "info-card__title"], [1, "info-card__subtitle"], [1, "info-card__description"], [1, "info-card__features"], [1, "feature-item"], [1, "feature-icon"], [1, "feature-text"]], template: function InfoCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "div", 4)(6, "h3", 5);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, InfoCardComponent_Conditional_9_Template, 3, 3, "p", 6);
      \u0275\u0275conditionalCreate(10, InfoCardComponent_Conditional_10_Template, 3, 3, "p", 7);
      \u0275\u0275conditionalCreate(11, InfoCardComponent_Conditional_11_Template, 3, 0, "ul", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("background-color", ctx.data.color);
      \u0275\u0275property("ngClass", ctx.data.class);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.data.icon);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, ctx.data.title));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.data.subtitle ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data.description ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data.features && ctx.data.features.length > 0 ? 11 : -1);
    }
  }, dependencies: [CommonModule, NgClass, TranslateModule, TranslatePipe], styles: ["\n\n.ui-card[_ngcontent-%COMP%], \n.info-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.ui-card[_ngcontent-%COMP%]:hover, \n.info-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n}\n.ui-card__image[_ngcontent-%COMP%], \n.info-card__image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.ui-image-placeholder[_ngcontent-%COMP%], \n.image-placeholder[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.ui-placeholder-icon[_ngcontent-%COMP%], \n.placeholder-icon[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.info-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.info-card__image[_ngcontent-%COMP%] {\n  height: 200px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-primary) 0%,\n      var(--color-accent) 100%);\n}\n.info-card--nano[_ngcontent-%COMP%]   .info-card__image[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-secondary) 0%,\n      var(--color-success) 100%);\n}\n.info-card--point[_ngcontent-%COMP%]:nth-child(2)   .info-card__image[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-secondary) 0%,\n      var(--color-success) 100%);\n}\n.info-card--point[_ngcontent-%COMP%]:nth-child(3)   .info-card__image[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-accent) 0%,\n      var(--color-primary) 100%);\n}\n.info-card--point[_ngcontent-%COMP%]:nth-child(4)   .info-card__image[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-success) 0%,\n      var(--color-secondary) 100%);\n}\n.info-card--compact[_ngcontent-%COMP%]   .info-card__image[_ngcontent-%COMP%] {\n  height: 120px;\n}\n.image-placeholder[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n.info-card--compact[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.placeholder-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.info-card--compact[_ngcontent-%COMP%]   .placeholder-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.info-card__content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.info-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n}\n.info-card--compact[_ngcontent-%COMP%]   .info-card__title[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  margin-bottom: 1rem;\n}\n.info-card__subtitle[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  margin-bottom: 1.5rem;\n  line-height: 1.5;\n}\n.info-card__description[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n.info-card__features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.75rem;\n  font-size: var(--text-base);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: var(--color-primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: bold;\n  margin-right: 0.75rem;\n  flex-shrink: 0;\n}\n.info-card--nano[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  background: var(--color-secondary);\n}\n.feature-text[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  line-height: 1.4;\n}\n@media (max-width: 768px) {\n  .info-card__image[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n  .info-card--compact[_ngcontent-%COMP%]   .info-card__image[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .image-placeholder[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .info-card--compact[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .placeholder-icon[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .info-card--compact[_ngcontent-%COMP%]   .placeholder-icon[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .info-card__content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .info-card__title[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n  }\n  .info-card--compact[_ngcontent-%COMP%]   .info-card__title[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  .info-card__subtitle[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n  .info-card__description[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n@media (max-width: 480px) {\n  .info-card__content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .info-card__title[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  .info-card--compact[_ngcontent-%COMP%]   .info-card__title[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  .info-card__subtitle[_ngcontent-%COMP%] {\n    font-size: var(--text-sm);\n  }\n  .info-card__description[_ngcontent-%COMP%] {\n    font-size: var(--text-sm);\n  }\n}\n/*# sourceMappingURL=info-card.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCardComponent, [{
    type: Component,
    args: [{ selector: "app-info-card", standalone: true, imports: [CommonModule, TranslateModule], template: `
    <div class="info-card" [ngClass]="data.class" [style.background-color]="data.color">
      <div class="info-card__image">
        <div class="image-placeholder">
          <span class="placeholder-icon">{{ data.icon }}</span>
        </div>
      </div>
      <div class="info-card__content">
        <h3 class="info-card__title">{{ data.title | translate }}</h3>
        @if (data.subtitle) {
          <p class="info-card__subtitle">{{ data.subtitle | translate }}</p>
        }
        @if (data.description) {
          <p class="info-card__description">{{ data.description | translate }}</p>
        }
        @if (data.features && data.features.length > 0) {
          <ul class="info-card__features">
            @for (feature of data.features; track $index) {
              <li class="feature-item">
                <span class="feature-icon">\u2713</span>
                <span class="feature-text">{{ feature | translate }}</span>
              </li>
            }
          </ul>
        }
      </div>
    </div>
  `, styles: ["/* src/app/shared/info-card/info-card.scss */\n.ui-card,\n.info-card {\n  background: var(--color-surface);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.ui-card:hover,\n.info-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n}\n.ui-card__image,\n.info-card__image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.ui-image-placeholder,\n.image-placeholder {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.ui-placeholder-icon,\n.placeholder-icon {\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.info-card {\n  height: 100%;\n}\n.info-card__image {\n  height: 200px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-primary) 0%,\n      var(--color-accent) 100%);\n}\n.info-card--nano .info-card__image {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-secondary) 0%,\n      var(--color-success) 100%);\n}\n.info-card--point:nth-child(2) .info-card__image {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-secondary) 0%,\n      var(--color-success) 100%);\n}\n.info-card--point:nth-child(3) .info-card__image {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-accent) 0%,\n      var(--color-primary) 100%);\n}\n.info-card--point:nth-child(4) .info-card__image {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-success) 0%,\n      var(--color-secondary) 100%);\n}\n.info-card--compact .info-card__image {\n  height: 120px;\n}\n.image-placeholder {\n  width: 80px;\n  height: 80px;\n}\n.info-card--compact .image-placeholder {\n  width: 60px;\n  height: 60px;\n}\n.placeholder-icon {\n  font-size: 2rem;\n}\n.info-card--compact .placeholder-icon {\n  font-size: 1.5rem;\n}\n.info-card__content {\n  padding: 2rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.info-card__title {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n}\n.info-card--compact .info-card__title {\n  font-size: var(--text-2xl);\n  margin-bottom: 1rem;\n}\n.info-card__subtitle {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  margin-bottom: 1.5rem;\n  line-height: 1.5;\n}\n.info-card__description {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n.info-card__features {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.feature-item {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.75rem;\n  font-size: var(--text-base);\n}\n.feature-icon {\n  width: 20px;\n  height: 20px;\n  background: var(--color-primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: bold;\n  margin-right: 0.75rem;\n  flex-shrink: 0;\n}\n.info-card--nano .feature-icon {\n  background: var(--color-secondary);\n}\n.feature-text {\n  color: var(--text-primary);\n  line-height: 1.4;\n}\n@media (max-width: 768px) {\n  .info-card__image {\n    height: 150px;\n  }\n  .info-card--compact .info-card__image {\n    height: 100px;\n  }\n  .image-placeholder {\n    width: 60px;\n    height: 60px;\n  }\n  .info-card--compact .image-placeholder {\n    width: 50px;\n    height: 50px;\n  }\n  .placeholder-icon {\n    font-size: 1.5rem;\n  }\n  .info-card--compact .placeholder-icon {\n    font-size: 1.25rem;\n  }\n  .info-card__content {\n    padding: 1.5rem;\n  }\n  .info-card__title {\n    font-size: var(--text-2xl);\n  }\n  .info-card--compact .info-card__title {\n    font-size: var(--text-xl);\n  }\n  .info-card__subtitle {\n    font-size: var(--text-base);\n  }\n  .info-card__description {\n    font-size: var(--text-base);\n  }\n}\n@media (max-width: 480px) {\n  .info-card__content {\n    padding: 1rem;\n  }\n  .info-card__title {\n    font-size: var(--text-xl);\n  }\n  .info-card--compact .info-card__title {\n    font-size: var(--text-lg);\n  }\n  .info-card__subtitle {\n    font-size: var(--text-sm);\n  }\n  .info-card__description {\n    font-size: var(--text-sm);\n  }\n}\n/*# sourceMappingURL=info-card.css.map */\n"] }]
  }], null, { data: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoCardComponent, { className: "InfoCardComponent", filePath: "src/app/shared/info-card/info-card.ts", lineNumber: 49 });
})();

export {
  InfoCardComponent
};
//# sourceMappingURL=chunk-CMCROS4O.js.map

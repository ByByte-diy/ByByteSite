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
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5IILHPIS.js";

// src/app/shared/ui/button/button.ts
init_core();
init_common();
init_core();
init_common();
function ButtonComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data.icon);
  }
}
function ButtonComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "\u27F3");
    \u0275\u0275elementEnd();
  }
}
function ButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0);
    \u0275\u0275conditionalCreate(1, ButtonComponent_Conditional_0_Conditional_1_Template, 2, 1, "span", 2);
    \u0275\u0275conditionalCreate(2, ButtonComponent_Conditional_0_Conditional_2_Template, 2, 0, "span", 3);
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.getButtonClasses())("href", ctx_r0.data.href, \u0275\u0275sanitizeUrl)("target", ctx_r0.data.target);
    \u0275\u0275attribute("rel", ctx_r0.data.target === "_blank" ? "noopener" : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.data.icon && !ctx_r0.data.loading ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.data.loading ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, ctx_r0.data.text));
  }
}
function ButtonComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data.icon);
  }
}
function ButtonComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "\u27F3");
    \u0275\u0275elementEnd();
  }
}
function ButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275conditionalCreate(1, ButtonComponent_Conditional_1_Conditional_1_Template, 2, 1, "span", 2);
    \u0275\u0275conditionalCreate(2, ButtonComponent_Conditional_1_Conditional_2_Template, 2, 0, "span", 3);
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.getButtonClasses())("type", ctx_r0.data.type || "button")("disabled", ctx_r0.data.disabled || ctx_r0.data.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.data.icon && !ctx_r0.data.loading ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.data.loading ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, ctx_r0.data.text));
  }
}
var ButtonComponent = class _ButtonComponent {
  data;
  getButtonClasses() {
    const classes = [];
    classes.push(`btn--${this.data.variant || "primary"}`);
    classes.push(`btn--${this.data.size || "md"}`);
    if (this.data.disabled)
      classes.push("btn--disabled");
    if (this.data.loading)
      classes.push("btn--loading");
    return classes.join(" ");
  }
  static \u0275fac = function ButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonComponent, selectors: [["app-button"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "btn", 3, "ngClass", "href", "target"], [1, "btn", 3, "ngClass", "type", "disabled"], [1, "btn__icon"], [1, "btn__spinner"], [1, "btn__text"]], template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ButtonComponent_Conditional_0_Template, 6, 9, "a", 0)(1, ButtonComponent_Conditional_1_Template, 6, 8, "button", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.data.href ? 0 : 1);
    }
  }, dependencies: [CommonModule, NgClass, TranslateModule, TranslatePipe], styles: ["\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border: none;\n  border-radius: 8px;\n  font-family: var(--font-body);\n  font-weight: var(--font-weight-medium);\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n}\n.btn[_ngcontent-%COMP%]:focus:not(:focus-visible) {\n  outline: none;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: var(--text-sm);\n  min-height: 2rem;\n}\n.btn--md[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-size: var(--text-base);\n  min-height: 2.5rem;\n}\n.btn--lg[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-size: var(--text-lg);\n  min-height: 3rem;\n}\n.btn--xl[_ngcontent-%COMP%] {\n  padding: 1.25rem 2.5rem;\n  font-size: var(--text-xl);\n  min-height: 3.5rem;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: white;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-primary) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--secondary[_ngcontent-%COMP%] {\n  background: var(--color-secondary);\n  color: white;\n}\n.btn--secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-secondary) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--accent[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  color: white;\n}\n.btn--accent[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-accent) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--success[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  color: white;\n}\n.btn--success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-success) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--warning[_ngcontent-%COMP%] {\n  background: var(--color-warning);\n  color: white;\n}\n.btn--warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-warning) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: var(--color-danger);\n  color: white;\n}\n.btn--danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-danger) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-primary);\n  border: 1px solid var(--color-border);\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-surface);\n  border-color: var(--color-primary);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-primary);\n  border: 2px solid var(--color-primary);\n}\n.btn--outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-primary);\n  color: white;\n}\n.btn--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.btn--loading[_ngcontent-%COMP%] {\n  cursor: wait;\n}\n.btn__icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  line-height: 1;\n}\n.btn__spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  font-size: 1.2em;\n  line-height: 1;\n}\n.btn__text[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.theme-dark[_nghost-%COMP%]   .btn--ghost[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .btn--ghost[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  border-color: var(--color-border);\n}\n.theme-dark[_nghost-%COMP%]   .btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled), .theme-dark   [_nghost-%COMP%]   .btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-surface);\n  border-color: var(--color-primary);\n}\n.theme-dark[_nghost-%COMP%]   .btn--outline[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .btn--outline[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n.theme-dark[_nghost-%COMP%]   .btn--outline[_ngcontent-%COMP%]:hover:not(:disabled), .theme-dark   [_nghost-%COMP%]   .btn--outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-primary);\n  color: white;\n}\n@media (prefers-color-scheme: dark) {\n  [_nghost-%COMP%]:not(.theme-light)   .btn--ghost[_ngcontent-%COMP%] {\n    color: var(--color-primary);\n    border-color: var(--color-border);\n  }\n  [_nghost-%COMP%]:not(.theme-light)   .btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n    background: var(--color-surface);\n    border-color: var(--color-primary);\n  }\n  [_nghost-%COMP%]:not(.theme-light)   .btn--outline[_ngcontent-%COMP%] {\n    color: var(--color-primary);\n    border-color: var(--color-primary);\n  }\n  [_nghost-%COMP%]:not(.theme-light)   .btn--outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n    background: var(--color-primary);\n    color: white;\n  }\n}\n/*# sourceMappingURL=button.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{ selector: "app-button", standalone: true, imports: [CommonModule, TranslateModule], template: `
    @if (data.href) {
      <a
        class="btn"
        [ngClass]="getButtonClasses()"
        [href]="data.href"
        [target]="data.target"
        [attr.rel]="data.target === '_blank' ? 'noopener' : null"
      >
        @if (data.icon && !data.loading) {
          <span class="btn__icon">{{ data.icon }}</span>
        }
        @if (data.loading) {
          <span class="btn__spinner">\u27F3</span>
        }
        <span class="btn__text">{{ data.text | translate }}</span>
      </a>
    } @else {
      <button
        class="btn"
        [ngClass]="getButtonClasses()"
        [type]="data.type || 'button'"
        [disabled]="data.disabled || data.loading"
      >
        @if (data.icon && !data.loading) {
          <span class="btn__icon">{{ data.icon }}</span>
        }
        @if (data.loading) {
          <span class="btn__spinner">\u27F3</span>
        }
        <span class="btn__text">{{ data.text | translate }}</span>
      </button>
    }
  `, styles: ["/* src/app/shared/ui/button/button.scss */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border: none;\n  border-radius: 8px;\n  font-family: var(--font-body);\n  font-weight: var(--font-weight-medium);\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n.btn:focus {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n}\n.btn:focus:not(:focus-visible) {\n  outline: none;\n}\n.btn--sm {\n  padding: 0.5rem 1rem;\n  font-size: var(--text-sm);\n  min-height: 2rem;\n}\n.btn--md {\n  padding: 0.75rem 1.5rem;\n  font-size: var(--text-base);\n  min-height: 2.5rem;\n}\n.btn--lg {\n  padding: 1rem 2rem;\n  font-size: var(--text-lg);\n  min-height: 3rem;\n}\n.btn--xl {\n  padding: 1.25rem 2.5rem;\n  font-size: var(--text-xl);\n  min-height: 3.5rem;\n}\n.btn--primary {\n  background: var(--color-primary);\n  color: white;\n}\n.btn--primary:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-primary) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--secondary {\n  background: var(--color-secondary);\n  color: white;\n}\n.btn--secondary:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-secondary) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--accent {\n  background: var(--color-accent);\n  color: white;\n}\n.btn--accent:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-accent) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--success {\n  background: var(--color-success);\n  color: white;\n}\n.btn--success:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-success) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--warning {\n  background: var(--color-warning);\n  color: white;\n}\n.btn--warning:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-warning) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--danger {\n  background: var(--color-danger);\n  color: white;\n}\n.btn--danger:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--color-danger) 90%, black);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn--ghost {\n  background: transparent;\n  color: var(--color-primary);\n  border: 1px solid var(--color-border);\n}\n.btn--ghost:hover:not(:disabled) {\n  background: var(--color-surface);\n  border-color: var(--color-primary);\n}\n.btn--outline {\n  background: transparent;\n  color: var(--color-primary);\n  border: 2px solid var(--color-primary);\n}\n.btn--outline:hover:not(:disabled) {\n  background: var(--color-primary);\n  color: white;\n}\n.btn--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.btn--loading {\n  cursor: wait;\n}\n.btn__icon {\n  font-size: 1.2em;\n  line-height: 1;\n}\n.btn__spinner {\n  animation: spin 1s linear infinite;\n  font-size: 1.2em;\n  line-height: 1;\n}\n.btn__text {\n  line-height: 1;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n:host-context(.theme-dark) .btn--ghost {\n  color: var(--color-primary);\n  border-color: var(--color-border);\n}\n:host-context(.theme-dark) .btn--ghost:hover:not(:disabled) {\n  background: var(--color-surface);\n  border-color: var(--color-primary);\n}\n:host-context(.theme-dark) .btn--outline {\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n:host-context(.theme-dark) .btn--outline:hover:not(:disabled) {\n  background: var(--color-primary);\n  color: white;\n}\n@media (prefers-color-scheme: dark) {\n  :host:not(.theme-light) .btn--ghost {\n    color: var(--color-primary);\n    border-color: var(--color-border);\n  }\n  :host:not(.theme-light) .btn--ghost:hover:not(:disabled) {\n    background: var(--color-surface);\n    border-color: var(--color-primary);\n  }\n  :host:not(.theme-light) .btn--outline {\n    color: var(--color-primary);\n    border-color: var(--color-primary);\n  }\n  :host:not(.theme-light) .btn--outline:hover:not(:disabled) {\n    background: var(--color-primary);\n    color: white;\n  }\n}\n/*# sourceMappingURL=button.css.map */\n"] }]
  }], null, { data: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "src/app/shared/ui/button/button.ts", lineNumber: 68 });
})();

export {
  ButtonComponent
};
//# sourceMappingURL=chunk-3LGUCCPM.js.map

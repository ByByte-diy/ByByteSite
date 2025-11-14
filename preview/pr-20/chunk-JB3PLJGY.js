import {
  RouterService
} from "./chunk-MZS2D3LT.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  HostListener,
  Input,
  NgModule,
  Pipe,
  Router,
  RouterOutlet,
  TranslateModule,
  TranslateService,
  ViewEncapsulation,
  environment,
  init_common,
  init_core,
  init_router,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6LT3BS5M.js";

// src/app/modules/language/pipes/localized-route.pipe.ts
init_core();
init_core();
var LocalizedRoutePipe = class _LocalizedRoutePipe {
  routerService = inject(RouterService);
  transform(path) {
    if (!path)
      path = "/";
    return this.routerService.getLocalizedRoute(path);
  }
  static \u0275fac = function LocalizedRoutePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedRoutePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "localizedRoute", type: _LocalizedRoutePipe, pure: false });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedRoutePipe, [{
    type: Pipe,
    args: [{
      name: "localizedRoute",
      standalone: true,
      pure: false
    }]
  }], null, null);
})();

// src/app/modules/language/language.module.ts
init_core();

// src/app/modules/language/components/language-wrapper/language-wrapper.ts
init_core();
init_router();
init_core();
var LanguageWrapperComponent = class _LanguageWrapperComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  translate = inject(TranslateService);
  ngOnInit() {
    const lang = this.route.snapshot.paramMap.get("lang");
    if (lang && environment.supportedLangs.includes(lang)) {
      this.translate.use(lang);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("app-lang", lang);
      }
    } else {
      const currentPath = this.router.url.replace(/^\/[a-z]{2}/, "");
      this.router.navigate([`/${environment.defaultLang}${currentPath}`]);
    }
  }
  static \u0275fac = function LanguageWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageWrapperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageWrapperComponent, selectors: [["app-language-wrapper"]], decls: 1, vars: 0, template: function LanguageWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageWrapperComponent, [{
    type: Component,
    args: [{ selector: "app-language-wrapper", standalone: true, imports: [RouterOutlet], template: "<router-outlet></router-outlet>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageWrapperComponent, { className: "LanguageWrapperComponent", filePath: "src/app/modules/language/components/language-wrapper/language-wrapper.ts", lineNumber: 13 });
})();

// src/app/modules/language/components/lang-switcher/lang-switcher.ts
init_common();
init_core();

// src/app/shared/ui/dropdown-button/dropdown-button.ts
init_core();
init_core();
var _c0 = [[["", "dropdownTrigger", ""]], [["", "dropdownMenu", ""]]];
var _c1 = ["[dropdownTrigger]", "[dropdownMenu]"];
function DropdownButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 2);
    \u0275\u0275projection(1, 1);
    \u0275\u0275domElementEnd();
  }
}
var DropdownButtonComponent = class _DropdownButtonComponent {
  ariaLabel = "Menu";
  open = signal(false, ...ngDevMode ? [{ debugName: "open" }] : []);
  static openedInstance = null;
  toggle() {
    const willOpen = !this.open();
    if (willOpen) {
      if (_DropdownButtonComponent.openedInstance && _DropdownButtonComponent.openedInstance !== this) {
        _DropdownButtonComponent.openedInstance.close();
      }
      this.open.set(true);
      _DropdownButtonComponent.openedInstance = this;
    } else {
      this.close();
    }
  }
  close() {
    this.open.set(false);
    if (_DropdownButtonComponent.openedInstance === this) {
      _DropdownButtonComponent.openedInstance = null;
    }
  }
  onDocClick(ev) {
    const path = ev.composedPath?.();
    const isInside = path.some((n) => n?.classList?.contains?.("dropdown"));
    if (!isInside)
      this.close();
  }
  onDocFocusIn(ev) {
    const path = ev.composedPath?.() || [];
    const isInside = path.some((n) => n?.classList?.contains?.("dropdown"));
    if (!isInside)
      this.close();
  }
  onEsc() {
    this.close();
  }
  ngOnDestroy() {
    if (_DropdownButtonComponent.openedInstance === this) {
      _DropdownButtonComponent.openedInstance = null;
    }
  }
  static \u0275fac = function DropdownButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DropdownButtonComponent, selectors: [["app-dropdown-button"]], hostBindings: function DropdownButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DropdownButtonComponent_click_HostBindingHandler($event) {
        return ctx.onDocClick($event);
      }, \u0275\u0275resolveDocument)("focusin", function DropdownButtonComponent_focusin_HostBindingHandler($event) {
        return ctx.onDocFocusIn($event);
      }, \u0275\u0275resolveDocument)("keydown.escape", function DropdownButtonComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEsc();
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { ariaLabel: "ariaLabel" }, ngContentSelectors: _c1, decls: 4, vars: 3, consts: [[1, "dropdown", 3, "keydown.escape"], ["type", "button", "aria-haspopup", "listbox", 1, "dropdown__btn", 3, "click"], ["role", "listbox", 1, "dropdown__menu"]], template: function DropdownButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domListener("keydown.escape", function DropdownButtonComponent_Template_div_keydown_escape_0_listener() {
        return ctx.close();
      });
      \u0275\u0275domElementStart(1, "button", 1);
      \u0275\u0275domListener("click", function DropdownButtonComponent_Template_button_click_1_listener() {
        return ctx.toggle();
      });
      \u0275\u0275projection(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(3, DropdownButtonComponent_Conditional_3_Template, 2, 0, "ul", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-expanded", ctx.open());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.open() ? 3 : -1);
    }
  }, styles: ['/* src/app/shared/ui/dropdown-button/dropdown-button.scss */\n.dropdown {\n  position: relative;\n}\n.dropdown__btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border-soft);\n  background: transparent;\n  color: var(--text-primary);\n  border-radius: 8px;\n}\n.dropdown__btn:hover {\n  background: color-mix(in oklab, var(--btn-primary-bg) 10%, transparent);\n  color: #fff;\n}\n.dropdown__menu {\n  position: absolute;\n  right: 0;\n  margin-top: 8px;\n  min-width: 160px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-soft);\n  border-radius: 10px;\n  padding: 6px;\n  display: grid;\n  gap: 4px;\n  z-index: 100;\n}\n.dropdown__menu li {\n  list-style: none;\n}\n.dropdown__menu button {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  background: transparent;\n  border: 0;\n  color: var(--text-primary);\n  border-radius: 8px;\n  text-align: left;\n  box-shadow: none;\n}\n.dropdown__menu button:hover {\n  background: color-mix(in oklab, var(--btn-primary-bg) 10%, transparent);\n  color: #fff;\n}\n.dropdown__flag {\n  font-size: 16px;\n  line-height: 1;\n}\n.dropdown__label {\n  font-size: 14px;\n}\n.dropdown__btn img {\n  filter: none;\n}\n.dropdown__btn svg,\n.dropdown__btn img[src$=".svg"] {\n  color: inherit;\n  fill: currentColor;\n}\n.icon-mask {\n  width: 18px;\n  height: 18px;\n  display: inline-block;\n  background-color: var(--text-primary);\n  -webkit-mask: var(--icon) no-repeat center/contain;\n  mask: var(--icon) no-repeat center/contain;\n}\n/*# sourceMappingURL=dropdown-button.css.map */\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownButtonComponent, [{
    type: Component,
    args: [{ selector: "app-dropdown-button", standalone: true, template: `
    <div class="dropdown" (keydown.escape)="close()">
      <button
        class="dropdown__btn"
        type="button"
        [attr.aria-label]="ariaLabel"
        aria-haspopup="listbox"
        [attr.aria-expanded]="open()"
        (click)="toggle()"
      >
        <ng-content select="[dropdownTrigger]"></ng-content>
      </button>
      @if (open()) {
        <ul class="dropdown__menu" role="listbox">
          <ng-content select="[dropdownMenu]"></ng-content>
        </ul>
      }
    </div>
  `, encapsulation: ViewEncapsulation.None, styles: ['/* src/app/shared/ui/dropdown-button/dropdown-button.scss */\n.dropdown {\n  position: relative;\n}\n.dropdown__btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border-soft);\n  background: transparent;\n  color: var(--text-primary);\n  border-radius: 8px;\n}\n.dropdown__btn:hover {\n  background: color-mix(in oklab, var(--btn-primary-bg) 10%, transparent);\n  color: #fff;\n}\n.dropdown__menu {\n  position: absolute;\n  right: 0;\n  margin-top: 8px;\n  min-width: 160px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-soft);\n  border-radius: 10px;\n  padding: 6px;\n  display: grid;\n  gap: 4px;\n  z-index: 100;\n}\n.dropdown__menu li {\n  list-style: none;\n}\n.dropdown__menu button {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  background: transparent;\n  border: 0;\n  color: var(--text-primary);\n  border-radius: 8px;\n  text-align: left;\n  box-shadow: none;\n}\n.dropdown__menu button:hover {\n  background: color-mix(in oklab, var(--btn-primary-bg) 10%, transparent);\n  color: #fff;\n}\n.dropdown__flag {\n  font-size: 16px;\n  line-height: 1;\n}\n.dropdown__label {\n  font-size: 14px;\n}\n.dropdown__btn img {\n  filter: none;\n}\n.dropdown__btn svg,\n.dropdown__btn img[src$=".svg"] {\n  color: inherit;\n  fill: currentColor;\n}\n.icon-mask {\n  width: 18px;\n  height: 18px;\n  display: inline-block;\n  background-color: var(--text-primary);\n  -webkit-mask: var(--icon) no-repeat center/contain;\n  mask: var(--icon) no-repeat center/contain;\n}\n/*# sourceMappingURL=dropdown-button.css.map */\n'] }]
  }], null, { ariaLabel: [{
    type: Input
  }], onDocClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onDocFocusIn: [{
    type: HostListener,
    args: ["document:focusin", ["$event"]]
  }], onEsc: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DropdownButtonComponent, { className: "DropdownButtonComponent", filePath: "src/app/shared/ui/dropdown-button/dropdown-button.ts", lineNumber: 35 });
})();

// src/app/modules/language/components/lang-switcher/lang-switcher.ts
init_core();
var _forTrack0 = ($index, $item) => $item.code;
function LangSwitcher_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 3)(1, "button", 4);
    \u0275\u0275listener("click", function LangSwitcher_For_4_Template_button_click_1_listener() {
      const o_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.choose(o_r2.code));
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-selected", ctx_r2.current() === o_r2.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r2.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.label);
  }
}
var LangSwitcher = class _LangSwitcher {
  translate = inject(TranslateService);
  routerService = inject(RouterService);
  langs = signal(this.translate.getLangs(), ...ngDevMode ? [{ debugName: "langs" }] : []);
  current = signal(this.translate.getCurrentLang() || environment.defaultLang, ...ngDevMode ? [{ debugName: "current" }] : []);
  open = signal(false, ...ngDevMode ? [{ debugName: "open" }] : []);
  options = [
    { code: "en", label: "English", flag: "\u{1F1FA}\u{1F1F8}" },
    { code: "uk", label: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", flag: "\u{1F1FA}\u{1F1E6}" },
    { code: "ru", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", flag: "\u{1F1F7}\u{1F1FA}" }
  ];
  constructor() {
    this.current.set(this.translate.getCurrentLang() || environment.defaultLang);
    this.langs.set(this.translate.getLangs());
    this.translate.onLangChange.subscribe((e) => this.current.set(e.lang));
  }
  toggle() {
    this.open.update((v) => !v);
  }
  close() {
    this.open.set(false);
  }
  choose(lang) {
    this.routerService.switchLanguage(lang);
    this.current.set(lang);
    this.open.set(false);
  }
  onDocClick(ev) {
    const path = ev.composedPath();
    const isInside = path.some((n) => n?.classList?.contains?.("lang"));
    if (!isInside)
      this.close();
  }
  static \u0275fac = function LangSwitcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LangSwitcher)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LangSwitcher, selectors: [["app-lang-switcher"]], hostBindings: function LangSwitcher_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function LangSwitcher_click_HostBindingHandler($event) {
        return ctx.onDocClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 5, vars: 2, consts: [["ariaLabel", "Language"], ["dropdownTrigger", "", "aria-hidden", "true", 1, "icon-mask"], ["dropdownMenu", ""], ["role", "option"], ["type", "button", 3, "click"], [1, "dropdown__flag"], [1, "dropdown__label"]], template: function LangSwitcher_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-dropdown-button", 0);
      \u0275\u0275element(1, "span", 1);
      \u0275\u0275elementContainerStart(2, 2);
      \u0275\u0275repeaterCreate(3, LangSwitcher_For_4_Template, 6, 3, "li", 3, _forTrack0);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("--icon", "url(icons/globe.svg)");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.options);
    }
  }, dependencies: [CommonModule, TranslateModule, DropdownButtonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LangSwitcher, [{
    type: Component,
    args: [{
      selector: "app-lang-switcher",
      imports: [CommonModule, TranslateModule, DropdownButtonComponent],
      template: `
    <app-dropdown-button ariaLabel="Language">
      <span
        dropdownTrigger
        class="icon-mask"
        [style.--icon]="'url(icons/globe.svg)'"
        aria-hidden="true"
      ></span>
      <ng-container dropdownMenu>
        @for (o of options; track o.code) {
          <li role="option" [attr.aria-selected]="current() === o.code">
            <button type="button" (click)="choose(o.code)">
              <span class="dropdown__flag">{{ o.flag }}</span
              ><span class="dropdown__label">{{ o.label }}</span>
            </button>
          </li>
        }
      </ng-container>
    </app-dropdown-button>
  `
    }]
  }], () => [], { onDocClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LangSwitcher, { className: "LangSwitcher", filePath: "src/app/modules/language/components/lang-switcher/lang-switcher.ts", lineNumber: 32 });
})();

// src/app/modules/language/language.module.ts
init_core();
var LanguageModule = class _LanguageModule {
  static \u0275fac = function LanguageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LanguageModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [LangSwitcher] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageModule, [{
    type: NgModule,
    args: [{
      imports: [LanguageWrapperComponent, LangSwitcher, LocalizedRoutePipe],
      exports: [LangSwitcher, LocalizedRoutePipe]
    }]
  }], null, null);
})();

export {
  LanguageWrapperComponent,
  DropdownButtonComponent,
  LangSwitcher,
  LocalizedRoutePipe,
  LanguageModule
};
//# sourceMappingURL=chunk-JB3PLJGY.js.map

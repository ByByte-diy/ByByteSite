import {
  BenefitCardComponent
} from "./chunk-WNLNNM4M.js";
import {
  BUTTON_PRESETS
} from "./chunk-VWHM4LEQ.js";
import {
  ButtonComponent
} from "./chunk-3LGUCCPM.js";
import {
  SeoModule,
  SeoService
} from "./chunk-FXMCNFL2.js";
import {
  Component,
  TranslateModule,
  TranslatePipe,
  environment,
  init_core,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5IILHPIS.js";
import "./chunk-MXU7DO7X.js";

// src/app/pages/community/community.ts
init_core();
init_core();
function Community_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-benefit-card", 11);
  }
  if (rf & 2) {
    const benefit_r1 = ctx.$implicit;
    \u0275\u0275property("data", benefit_r1);
  }
}
function Community_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 20)(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, item_r2.text));
  }
}
var Community = class _Community {
  seoService = inject(SeoService);
  ngOnInit() {
    this.seoService.updateSeoFromConfig({
      titleKey: "seo.community.title",
      descriptionKey: "seo.community.description",
      keywordsKey: "seo.community.keywords",
      type: "website"
    });
  }
  benefits = signal([
    {
      icon: "\u{1F91D}",
      title: "community.benefits.support.title",
      description: "community.benefits.support.description",
      color: "var(--color-primary)"
    },
    {
      icon: "\u{1F4A1}",
      title: "community.benefits.ideas.title",
      description: "community.benefits.ideas.description",
      color: "var(--color-secondary)"
    },
    {
      icon: "\u{1F4C2}",
      title: "community.benefits.resources.title",
      description: "community.benefits.resources.description",
      color: "var(--color-accent)"
    },
    {
      icon: "\u{1F680}",
      title: "community.benefits.growth.title",
      description: "community.benefits.growth.description",
      color: "var(--color-success)"
    }
  ], ...ngDevMode ? [{ debugName: "benefits" }] : []);
  contributeItems = signal([
    {
      icon: "\u{1F4BB}",
      text: "community.contribute.codeExample"
    },
    {
      icon: "\u{1F4DA}",
      text: "community.contribute.documentation"
    },
    {
      icon: "\u{1F9EA}",
      text: "community.contribute.testing"
    },
    {
      icon: "\u{1F4A1}",
      text: "community.contribute.ideas"
    }
  ], ...ngDevMode ? [{ debugName: "contributeItems" }] : []);
  joinButtonData = signal(BUTTON_PRESETS.externalLink("community.hero.joinButton", environment.links.discord, "\u270C\uFE0F"), ...ngDevMode ? [{ debugName: "joinButtonData" }] : []);
  contributeButtonData = signal(BUTTON_PRESETS.externalLink("community.contribute.button", environment.links.contributeGuide, "\u{1F449}"), ...ngDevMode ? [{ debugName: "contributeButtonData" }] : []);
  static \u0275fac = function Community_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Community)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Community, selectors: [["app-community"]], decls: 36, vars: 17, consts: [[1, "community-page"], [1, "community-container"], [1, "community-header"], [1, "community-hero"], [1, "community-hero__icon"], [1, "hero-icon"], ["src", "img/community.png", "alt", "community", 1, "hero-icon-img"], [1, "community-hero__content"], [1, "community-title"], [1, "community-description"], [1, "community-tagline"], [3, "data"], [1, "community-content"], [1, "benefits-section"], [1, "benefits-title"], [1, "benefits-grid"], [1, "contribute-section"], [1, "contribute-title"], [1, "contribute-content"], [1, "contribute-list"], [1, "contribute-item"], [1, "contribute-cta"], [1, "contribute-item__icon"], [1, "contribute-item__text"]], template: function Community_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 7)(8, "h1", 8);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 9);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 10);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "app-button", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 12)(19, "section", 13)(20, "h2", 14);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 15);
      \u0275\u0275repeaterCreate(24, Community_For_25_Template, 1, 1, "app-benefit-card", 11, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "section", 16)(27, "h2", 17);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 18)(31, "ul", 19);
      \u0275\u0275repeaterCreate(32, Community_For_33_Template, 6, 4, "li", 20, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 21);
      \u0275\u0275element(35, "app-button", 11);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "community.hero.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "community.hero.description"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "community.hero.tagline"));
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.joinButtonData());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 13, "community.benefits.title"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.benefits());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 15, "community.contribute.title"));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.contributeItems());
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.contributeButtonData());
    }
  }, dependencies: [TranslateModule, BenefitCardComponent, ButtonComponent, SeoModule, TranslatePipe], styles: ["\n\n.community-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--color-bg);\n  color: var(--text-primary);\n  padding: 2rem 0;\n}\n.community-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.community-header[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n.community-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 2rem;\n  background: var(--color-surface);\n  padding: 3rem;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.community-hero__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.hero-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: color-mix(in oklab, var(--color-surface) 90%, white);\n  border: 2px solid var(--color-border);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.theme-dark[_nghost-%COMP%]   .hero-icon[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .hero-icon[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n}\n@media (prefers-color-scheme: dark) {\n  [_nghost-%COMP%]:not(.theme-light)   .hero-icon[_ngcontent-%COMP%] {\n    background: var(--color-bg);\n  }\n}\n.hero-icon-img[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: block;\n}\n.community-hero__content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.community-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n}\n.community-description[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.community-tagline[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  font-weight: var(--font-weight-semibold);\n  color: var(--text-primary);\n  margin-bottom: 2rem;\n}\n.community-join-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n  background: var(--color-success);\n  color: white;\n  border-radius: 25px;\n  font-family: var(--font-primary);\n  font-weight: var(--font-weight-bold);\n  font-size: var(--text-lg);\n  text-decoration: none;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);\n}\n.community-join-btn[_ngcontent-%COMP%]:hover {\n  background: color-mix(in oklab, var(--color-success) 90%, black);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);\n}\n.join-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.community-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n}\n.benefits-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.benefits-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 3rem;\n  color: var(--text-primary);\n}\n.benefits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n}\n.contribute-section[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  text-align: center;\n}\n.contribute-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 3rem;\n  color: var(--text-primary);\n}\n.contribute-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.contribute-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 3rem 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.contribute-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: var(--color-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.contribute-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.contribute-item__icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.contribute-item__text[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-primary);\n  font-weight: var(--font-weight-medium);\n}\n.contribute-cta[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.contribute-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 2rem;\n  background: var(--color-success);\n  color: white;\n  text-decoration: none;\n  border-radius: 12px;\n  font-size: var(--text-lg);\n  font-weight: var(--font-weight-semibold);\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.contribute-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);\n  background: color-mix(in srgb, var(--color-success) 90%, black);\n}\n.contribute-btn__icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n@media (max-width: 768px) {\n  .community-page[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n  .community-container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .community-header[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  .community-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 2rem;\n  }\n  .hero-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .hero-icon-img[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .community-title[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  .community-description[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n  .community-tagline[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  .community-join-btn[_ngcontent-%COMP%] {\n    padding: 0.875rem 1.5rem;\n    font-size: var(--text-base);\n  }\n  .benefits-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .contribute-section[_ngcontent-%COMP%] {\n    margin: 3rem 0;\n  }\n  .contribute-title[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n    margin-bottom: 2rem;\n  }\n  .contribute-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .contribute-item[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .contribute-item__text[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n  .contribute-btn[_ngcontent-%COMP%] {\n    padding: 0.875rem 1.5rem;\n    font-size: var(--text-base);\n  }\n}\n/*# sourceMappingURL=community.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Community, [{
    type: Component,
    args: [{ selector: "app-community", standalone: true, imports: [TranslateModule, BenefitCardComponent, ButtonComponent, SeoModule], template: `
    <div class="community-page">
      <div class="community-container">
        <header class="community-header">
          <div class="community-hero">
            <div class="community-hero__icon">
              <div class="hero-icon">
                <img src="img/community.png" alt="community" class="hero-icon-img" />
              </div>
            </div>
            <div class="community-hero__content">
              <h1 class="community-title">{{ 'community.hero.title' | translate }}</h1>
              <p class="community-description">{{ 'community.hero.description' | translate }}</p>
              <p class="community-tagline">{{ 'community.hero.tagline' | translate }}</p>
              <app-button [data]="joinButtonData()" />
            </div>
          </div>
        </header>

        <div class="community-content">
          <section class="benefits-section">
            <h2 class="benefits-title">{{ 'community.benefits.title' | translate }}</h2>
            <div class="benefits-grid">
              @for (benefit of benefits(); track $index) {
                <app-benefit-card [data]="benefit" />
              }
            </div>
          </section>

          <section class="contribute-section">
            <h2 class="contribute-title">{{ 'community.contribute.title' | translate }}</h2>
            <div class="contribute-content">
              <ul class="contribute-list">
                @for (item of contributeItems(); track $index) {
                  <li class="contribute-item">
                    <span class="contribute-item__icon">{{ item.icon }}</span>
                    <span class="contribute-item__text">{{ item.text | translate }}</span>
                  </li>
                }
              </ul>
              <div class="contribute-cta">
                <app-button [data]="contributeButtonData()" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/pages/community/community.scss */\n.community-page {\n  min-height: 100vh;\n  background: var(--color-bg);\n  color: var(--text-primary);\n  padding: 2rem 0;\n}\n.community-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.community-header {\n  margin-bottom: 4rem;\n}\n.community-hero {\n  display: flex;\n  align-items: flex-start;\n  gap: 2rem;\n  background: var(--color-surface);\n  padding: 3rem;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.community-hero__icon {\n  flex-shrink: 0;\n}\n.hero-icon {\n  width: 80px;\n  height: 80px;\n  background: color-mix(in oklab, var(--color-surface) 90%, white);\n  border: 2px solid var(--color-border);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n:host-context(.theme-dark) .hero-icon {\n  background: var(--color-bg);\n}\n@media (prefers-color-scheme: dark) {\n  :host:not(.theme-light) .hero-icon {\n    background: var(--color-bg);\n  }\n}\n.hero-icon-img {\n  width: 64px;\n  height: 64px;\n  display: block;\n}\n.community-hero__content {\n  flex: 1;\n}\n.community-title {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n}\n.community-description {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.community-tagline {\n  font-size: var(--text-xl);\n  font-weight: var(--font-weight-semibold);\n  color: var(--text-primary);\n  margin-bottom: 2rem;\n}\n.community-join-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n  background: var(--color-success);\n  color: white;\n  border-radius: 25px;\n  font-family: var(--font-primary);\n  font-weight: var(--font-weight-bold);\n  font-size: var(--text-lg);\n  text-decoration: none;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);\n}\n.community-join-btn:hover {\n  background: color-mix(in oklab, var(--color-success) 90%, black);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);\n}\n.join-icon {\n  font-size: 1.2rem;\n}\n.community-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n}\n.benefits-section {\n  text-align: center;\n}\n.benefits-title {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 3rem;\n  color: var(--text-primary);\n}\n.benefits-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n}\n.contribute-section {\n  margin: 1rem 0;\n  text-align: center;\n}\n.contribute-title {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 3rem;\n  color: var(--text-primary);\n}\n.contribute-content {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.contribute-list {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 3rem 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.contribute-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: var(--color-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.contribute-item:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.contribute-item__icon {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.contribute-item__text {\n  font-size: var(--text-lg);\n  color: var(--text-primary);\n  font-weight: var(--font-weight-medium);\n}\n.contribute-cta {\n  margin-top: 2rem;\n}\n.contribute-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 2rem;\n  background: var(--color-success);\n  color: white;\n  text-decoration: none;\n  border-radius: 12px;\n  font-size: var(--text-lg);\n  font-weight: var(--font-weight-semibold);\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.contribute-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);\n  background: color-mix(in srgb, var(--color-success) 90%, black);\n}\n.contribute-btn__icon {\n  font-size: 1.25rem;\n}\n@media (max-width: 768px) {\n  .community-page {\n    padding: 1rem 0;\n  }\n  .community-container {\n    padding: 0 1rem;\n  }\n  .community-header {\n    margin-bottom: 2rem;\n  }\n  .community-hero {\n    flex-direction: column;\n    text-align: center;\n    padding: 2rem;\n  }\n  .hero-icon {\n    width: 60px;\n    height: 60px;\n  }\n  .hero-icon-img {\n    width: 36px;\n    height: 36px;\n  }\n  .community-title {\n    font-size: var(--text-3xl);\n  }\n  .community-description {\n    font-size: var(--text-base);\n  }\n  .community-tagline {\n    font-size: var(--text-lg);\n  }\n  .community-join-btn {\n    padding: 0.875rem 1.5rem;\n    font-size: var(--text-base);\n  }\n  .benefits-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .contribute-section {\n    margin: 3rem 0;\n  }\n  .contribute-title {\n    font-size: var(--text-3xl);\n    margin-bottom: 2rem;\n  }\n  .contribute-list {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .contribute-item {\n    padding: 1rem;\n  }\n  .contribute-item__text {\n    font-size: var(--text-base);\n  }\n  .contribute-btn {\n    padding: 0.875rem 1.5rem;\n    font-size: var(--text-base);\n  }\n}\n/*# sourceMappingURL=community.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Community, { className: "Community", filePath: "src/app/pages/community/community.ts", lineNumber: 64 });
})();
export {
  Community
};
//# sourceMappingURL=chunk-6WQW74GT.js.map

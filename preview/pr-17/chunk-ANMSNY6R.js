import {
  LanguageModule,
  LocalizedRoutePipe
} from "./chunk-JZ7G5SN7.js";
import {
  InfoCardComponent
} from "./chunk-4LSH5WNZ.js";
import {
  BUTTON_PRESETS
} from "./chunk-VWHM4LEQ.js";
import {
  ButtonComponent
} from "./chunk-VGREHBWJ.js";
import {
  SeoModule,
  SeoService
} from "./chunk-YVNYUMCD.js";
import {
  CommonModule,
  Component,
  NgClass,
  SlicePipe,
  TranslateModule,
  TranslatePipe,
  environment,
  init_common,
  init_core,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6LT3BS5M.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MXU7DO7X.js";

// src/app/pages/home/home.ts
init_core();

// src/app/components/hero-carousel/hero-carousel.ts
init_common();
init_core();
init_core();
init_common();
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.href;
function HeroCarouselComponent_For_4_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275pipe(1, "localizedRoute");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const btn_r1 = ctx.$implicit;
    \u0275\u0275property("href", \u0275\u0275pipeBind1(1, 3, btn_r1.href), \u0275\u0275sanitizeUrl)("ngClass", "btn--" + btn_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, btn_r1.text));
  }
}
function HeroCarouselComponent_For_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, HeroCarouselComponent_For_4_Conditional_13_For_2_Template, 4, 7, "a", 14, _forTrack1);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slide_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 0, slide_r2.buttons, 0, 2));
  }
}
function HeroCarouselComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "h1", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 12);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, HeroCarouselComponent_For_4_Conditional_13_Template, 4, 4, "div", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", slide_r2.image, \u0275\u0275sanitizeUrl)("alt", slide_r2.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, slide_r2.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, slide_r2.subtitle));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, slide_r2.description));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((slide_r2.buttons == null ? null : slide_r2.buttons.length) ? 13 : -1);
  }
}
function HeroCarouselComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function HeroCarouselComponent_Conditional_5_For_2_Template_button_click_0_listener() {
      const \u0275$index_41_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goToSlide(\u0275$index_41_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_41_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("carousel-dot--active", ctx_r4.currentSlide() === \u0275$index_41_r4);
    \u0275\u0275attribute("aria-label", "Go to slide " + (\u0275$index_41_r4 + 1));
  }
}
function HeroCarouselComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, HeroCarouselComponent_Conditional_5_For_2_Template, 1, 3, "button", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.slides());
  }
}
function HeroCarouselComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 21);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r6 = ctx.$implicit;
    \u0275\u0275styleProp("background-color", card_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("--icon-url", "url(" + card_r6.icon + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, card_r6.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, card_r6.description));
  }
}
var HeroCarouselComponent = class _HeroCarouselComponent {
  currentSlide = signal(0, ...ngDevMode ? [{ debugName: "currentSlide" }] : []);
  slides = signal([
    {
      id: "slide-1",
      image: "img/car.png",
      title: "hero.slide1.title",
      subtitle: "hero.slide1.subtitle",
      description: "hero.slide1.description",
      buttons: [
        {
          href: "/build",
          color: "primary",
          text: "hero.buttons.letsBuild"
        },
        { href: "/learn", color: "accent", text: "hero.buttons.letsLearn" }
      ]
    }
  ], ...ngDevMode ? [{ debugName: "slides" }] : []);
  featureCards = signal([
    {
      id: "feature-1",
      title: "hero.feature1.title",
      description: "hero.feature1.description",
      color: "var(--color-primary)",
      // Blue for assembling
      icon: "icons/carusel/assembling.svg"
    },
    {
      id: "feature-2",
      title: "hero.feature2.title",
      description: "hero.feature2.description",
      color: "var(--color-success)",
      // Green for like/affordable
      icon: "icons/carusel/like.svg"
    },
    {
      id: "feature-3",
      title: "hero.feature3.title",
      description: "hero.feature3.description",
      color: "var(--color-secondary)",
      // Orange for learning
      icon: "icons/carusel/rocket.svg"
    },
    {
      id: "feature-4",
      title: "hero.feature4.title",
      description: "hero.feature4.description",
      color: "var(--color-accent)",
      // Purple for expandable
      icon: "icons/carusel/expand.svg"
    }
  ], ...ngDevMode ? [{ debugName: "featureCards" }] : []);
  goToSlide(index) {
    this.currentSlide.set(index);
  }
  static \u0275fac = function HeroCarouselComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroCarouselComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroCarouselComponent, selectors: [["app-hero-carousel"]], decls: 9, vars: 3, consts: [[1, "hero-carousel"], [1, "carousel-container"], [1, "carousel-wrapper"], [1, "carousel-slide"], [1, "carousel-dots"], [1, "feature-cards"], [1, "feature-card", 3, "background-color"], [1, "carousel-image", 3, "src", "alt"], [1, "carousel-overlay"], [1, "carousel-content"], [1, "carousel-title"], [1, "carousel-subtitle"], [1, "carousel-description"], [1, "carousel-buttons"], [1, "btn", 3, "href", "ngClass"], [1, "carousel-dot", 3, "carousel-dot--active"], [1, "carousel-dot", 3, "click"], [1, "feature-card"], [1, "feature-card__icon"], ["aria-hidden", "true", 1, "feature-icon"], [1, "feature-card__title"], [1, "feature-card__description"]], template: function HeroCarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275repeaterCreate(3, HeroCarouselComponent_For_4_Template, 14, 12, "div", 3, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, HeroCarouselComponent_Conditional_5_Template, 3, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275repeaterCreate(7, HeroCarouselComponent_For_8_Template, 9, 10, "div", 6, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("transform", "translateX(-" + ctx.currentSlide() * 100 + "%)");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.slides());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.slides().length > 1 ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.featureCards());
    }
  }, dependencies: [CommonModule, NgClass, TranslateModule, LanguageModule, SlicePipe, TranslatePipe, LocalizedRoutePipe], styles: ['\n\n.hero-carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.carousel-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 60vh;\n  min-height: 400px;\n  max-height: 600px;\n  overflow: hidden;\n}\n.carousel-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.5s ease-in-out;\n  will-change: transform;\n}\n.carousel-slide[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 100%;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.carousel-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n.carousel-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.4) 0%,\n      rgba(0, 0, 0, 0.2) 50%,\n      rgba(0, 0, 0, 0.6) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.carousel-content[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  max-width: 800px;\n  padding: 0 2rem;\n  padding-bottom: 2rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 16px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: var(--font-weight-semibold);\n  color: var(--btn-primary-text);\n  border: 1px solid var(--border-soft);\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--btn-primary-bg);\n}\n.btn--accent[_ngcontent-%COMP%] {\n  background: var(--btn-accent-bg);\n  color: var(--btn-accent-text);\n}\n.btn--secondary[_ngcontent-%COMP%] {\n  background: var(--color-secondary);\n  color: #fff;\n}\n.btn--success[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  color: #0f1115;\n}\n.btn--neutral[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  color: var(--text-primary);\n}\n.carousel-title[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-5xl);\n  font-weight: 900;\n  margin-bottom: 1rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n.carousel-subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-2xl);\n  font-weight: 500;\n  margin-bottom: 1rem;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n}\n.carousel-description[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-2xl);\n  font-weight: 500;\n  line-height: 1.6;\n  opacity: 0.9;\n  margin-bottom: 0.5rem;\n  text-shadow:\n    0 2px 6px rgba(0, 0, 0, 0.55),\n    0 4px 12px rgba(0, 0, 0, 0.45),\n    0 0 1px rgba(0, 0, 0, 0.75);\n}\n.carousel-buttons[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-xl);\n  margin-top: 2rem;\n  display: inline-flex;\n  gap: 12px;\n  margin-bottom: 0;\n}\n.carousel-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 0.5rem;\n  z-index: 10;\n}\n.carousel-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.carousel-dot[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n.carousel-dot.carousel-dot--active[_ngcontent-%COMP%] {\n  background: white;\n}\n.feature-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n  width: 100%;\n}\n.feature-card[_ngcontent-%COMP%] {\n  padding: clamp(1.5rem, 4vw, 2.25rem) clamp(1rem, 3vw, 1.75rem);\n  color: white;\n  text-align: center;\n  position: relative;\n  overflow: visible;\n  padding-top: clamp(2rem, 5vw, 3rem);\n}\n.feature-card__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.feature-icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: clamp(50px, 8vw, 100px);\n  height: clamp(50px, 8vw, 100px);\n  border-radius: 50%;\n  background: var(--icon-bg);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.feature-icon[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 15%;\n  background: var(--icon-color);\n  mask-image: var(--icon-url);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-size: 70%;\n  -webkit-mask-image: var(--icon-url);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-size: 70%;\n}\n@media (max-width: 640px) {\n  .feature-icon[_ngcontent-%COMP%] {\n    width: clamp(40px, 12vw, 72px);\n    height: clamp(40px, 12vw, 72px);\n  }\n  .feature-icon[_ngcontent-%COMP%]::after {\n    inset: 14%;\n    mask-size: 70%;\n    -webkit-mask-size: 70%;\n  }\n}\n.theme-dark[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  background: var(--icon-bg);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n@media (prefers-color-scheme: dark) {\n  .theme-light[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n    background: var(--icon-bg);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  }\n}\n.feature-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: white;\n}\n.feature-card__description[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  line-height: 1.6;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .carousel-container[_ngcontent-%COMP%] {\n    height: 65vh;\n    min-height: 360px;\n  }\n  .carousel-title[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  .carousel-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  .carousel-description[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n    margin-bottom: 0.75rem;\n  }\n  .carousel-content[_ngcontent-%COMP%] {\n    padding: 0 1.25rem;\n    padding-bottom: 1.5rem;\n  }\n  .carousel-buttons[_ngcontent-%COMP%] {\n    margin-top: 1.75rem;\n  }\n  .feature-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .feature-card[_ngcontent-%COMP%] {\n    padding: clamp(1.25rem, 4vw, 2rem) clamp(1rem, 3vw, 1.5rem);\n    padding-top: clamp(1.75rem, 5vw, 2.5rem);\n  }\n  .feature-icon[_ngcontent-%COMP%] {\n    width: clamp(60px, 10vw, 80px);\n    height: clamp(60px, 10vw, 80px);\n  }\n  .icon-placeholder[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    font-size: 1.5rem;\n  }\n  .feature-card__title[_ngcontent-%COMP%] {\n    font-size: clamp(var(--text-base), 4vw, var(--text-lg));\n  }\n  .feature-card__description[_ngcontent-%COMP%] {\n    font-size: clamp(var(--text-sm), 3vw, var(--text-base));\n  }\n}\n@media (max-width: 480px) {\n  .carousel-container[_ngcontent-%COMP%] {\n    height: 55vh;\n    min-height: 320px;\n  }\n  .carousel-content[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n    padding-bottom: clamp(1.5rem, 4vw, 2rem);\n  }\n  .carousel-description[_ngcontent-%COMP%] {\n    margin-bottom: 0rem;\n  }\n  .carousel-buttons[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n  .feature-card[_ngcontent-%COMP%] {\n    padding: clamp(1rem, 4vw, 1.5rem) clamp(0.75rem, 3vw, 1rem);\n    padding-top: clamp(1.5rem, 5vw, 2rem);\n  }\n  .feature-icon[_ngcontent-%COMP%] {\n    width: clamp(50px, 12vw, 70px);\n    height: clamp(50px, 12vw, 70px);\n  }\n}\n@media (max-width: 768px) and (orientation: landscape) {\n  .carousel-container[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 50vh;\n    max-height: none;\n  }\n  .carousel-content[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n    padding-bottom: clamp(1.5rem, 4vw, 2rem);\n  }\n  .carousel-description[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n  .carousel-buttons[_ngcontent-%COMP%] {\n    margin-top: 1.25rem;\n  }\n  .feature-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 0.25rem;\n  }\n  .feature-card[_ngcontent-%COMP%] {\n    padding: clamp(0.75rem, 2vw, 1rem) clamp(0.5rem, 1.5vw, 0.75rem);\n    padding-top: clamp(1.25rem, 3vw, 1.75rem);\n  }\n  .feature-icon[_ngcontent-%COMP%] {\n    width: clamp(30px, 6vw, 45px);\n    height: clamp(30px, 6vw, 45px);\n  }\n  .feature-card__title[_ngcontent-%COMP%] {\n    font-size: clamp(0.75rem, 2.5vw, var(--text-sm));\n    margin-bottom: 0.5rem;\n  }\n  .feature-card__description[_ngcontent-%COMP%] {\n    font-size: clamp(0.65rem, 2vw, var(--text-xs));\n    line-height: 1.4;\n  }\n}\n/*# sourceMappingURL=hero-carousel.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroCarouselComponent, [{
    type: Component,
    args: [{ selector: "app-hero-carousel", standalone: true, imports: [CommonModule, TranslateModule, LanguageModule], template: `
    <section class="hero-carousel">
      <!-- Carousel Section -->
      <div class="carousel-container">
        <div
          class="carousel-wrapper"
          [style.transform]="'translateX(-' + currentSlide() * 100 + '%)'"
        >
          @for (slide of slides(); track slide.id) {
            <div class="carousel-slide">
              <img [src]="slide.image" [alt]="slide.title" class="carousel-image" />
              <div class="carousel-overlay">
                <div class="carousel-content">
                  <h1 class="carousel-title">{{ slide.title | translate }}</h1>
                  <p class="carousel-subtitle">{{ slide.subtitle | translate }}</p>
                  <p class="carousel-description">{{ slide.description | translate }}</p>
                  @if (slide.buttons?.length) {
                    <div class="carousel-buttons">
                      @for (btn of slide.buttons | slice: 0 : 2; track btn.href) {
                        <a
                          [href]="btn.href | localizedRoute"
                          class="btn"
                          [ngClass]="'btn--' + btn.color"
                          >{{ btn.text | translate }}</a
                        >
                      }
                    </div>
                  }
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Navigation Dots -->
        @if (slides().length > 1) {
          <div class="carousel-dots">
            @for (slide of slides(); track slide.id; let i = $index) {
              <button
                class="carousel-dot"
                [class.carousel-dot--active]="currentSlide() === i"
                (click)="goToSlide(i)"
                [attr.aria-label]="'Go to slide ' + (i + 1)"
              ></button>
            }
          </div>
        }
      </div>

      <!-- Feature Cards Section -->
      <div class="feature-cards">
        @for (card of featureCards(); track card.id) {
          <div class="feature-card" [style.background-color]="card.color">
            <div class="feature-card__icon">
              <span
                class="feature-icon"
                [style.--icon-url]="'url(' + card.icon + ')'"
                aria-hidden="true"
              ></span>
            </div>
            <h3 class="feature-card__title">{{ card.title | translate }}</h3>
            <p class="feature-card__description">{{ card.description | translate }}</p>
          </div>
        }
      </div>
    </section>
  `, styles: ['/* src/app/components/hero-carousel/hero-carousel.scss */\n.hero-carousel {\n  width: 100%;\n}\n.carousel-container {\n  position: relative;\n  width: 100%;\n  height: 60vh;\n  min-height: 400px;\n  max-height: 600px;\n  overflow: hidden;\n}\n.carousel-wrapper {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.5s ease-in-out;\n  will-change: transform;\n}\n.carousel-slide {\n  position: relative;\n  flex: 0 0 100%;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.carousel-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n.carousel-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.4) 0%,\n      rgba(0, 0, 0, 0.2) 50%,\n      rgba(0, 0, 0, 0.6) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.carousel-content {\n  text-align: center;\n  color: white;\n  max-width: 800px;\n  padding: 0 2rem;\n  padding-bottom: 2rem;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 16px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: var(--font-weight-semibold);\n  color: var(--btn-primary-text);\n  border: 1px solid var(--border-soft);\n}\n.btn--primary {\n  background: var(--btn-primary-bg);\n}\n.btn--accent {\n  background: var(--btn-accent-bg);\n  color: var(--btn-accent-text);\n}\n.btn--secondary {\n  background: var(--color-secondary);\n  color: #fff;\n}\n.btn--success {\n  background: var(--color-success);\n  color: #0f1115;\n}\n.btn--neutral {\n  background: var(--color-surface);\n  color: var(--text-primary);\n}\n.carousel-title {\n  font-family: var(--font-primary);\n  font-size: var(--text-5xl);\n  font-weight: 900;\n  margin-bottom: 1rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n.carousel-subtitle {\n  font-family: var(--font-primary);\n  font-size: var(--text-2xl);\n  font-weight: 500;\n  margin-bottom: 1rem;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n}\n.carousel-description {\n  font-family: var(--font-primary);\n  font-size: var(--text-2xl);\n  font-weight: 500;\n  line-height: 1.6;\n  opacity: 0.9;\n  margin-bottom: 0.5rem;\n  text-shadow:\n    0 2px 6px rgba(0, 0, 0, 0.55),\n    0 4px 12px rgba(0, 0, 0, 0.45),\n    0 0 1px rgba(0, 0, 0, 0.75);\n}\n.carousel-buttons {\n  font-family: var(--font-primary);\n  font-size: var(--text-xl);\n  margin-top: 2rem;\n  display: inline-flex;\n  gap: 12px;\n  margin-bottom: 0;\n}\n.carousel-dots {\n  position: absolute;\n  bottom: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 0.5rem;\n  z-index: 10;\n}\n.carousel-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.carousel-dot:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n.carousel-dot.carousel-dot--active {\n  background: white;\n}\n.feature-cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n  width: 100%;\n}\n.feature-card {\n  padding: clamp(1.5rem, 4vw, 2.25rem) clamp(1rem, 3vw, 1.75rem);\n  color: white;\n  text-align: center;\n  position: relative;\n  overflow: visible;\n  padding-top: clamp(2rem, 5vw, 3rem);\n}\n.feature-card__icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.feature-icon {\n  position: relative;\n  width: clamp(50px, 8vw, 100px);\n  height: clamp(50px, 8vw, 100px);\n  border-radius: 50%;\n  background: var(--icon-bg);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.feature-icon::after {\n  content: "";\n  position: absolute;\n  inset: 15%;\n  background: var(--icon-color);\n  mask-image: var(--icon-url);\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-size: 70%;\n  -webkit-mask-image: var(--icon-url);\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-size: 70%;\n}\n@media (max-width: 640px) {\n  .feature-icon {\n    width: clamp(40px, 12vw, 72px);\n    height: clamp(40px, 12vw, 72px);\n  }\n  .feature-icon::after {\n    inset: 14%;\n    mask-size: 70%;\n    -webkit-mask-size: 70%;\n  }\n}\n.theme-dark .feature-icon {\n  background: var(--icon-bg);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n@media (prefers-color-scheme: dark) {\n  .theme-light .feature-icon {\n    background: var(--icon-bg);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  }\n}\n.feature-card__title {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: white;\n}\n.feature-card__description {\n  font-size: var(--text-xl);\n  line-height: 1.6;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .carousel-container {\n    height: 65vh;\n    min-height: 360px;\n  }\n  .carousel-title {\n    font-size: var(--text-4xl);\n  }\n  .carousel-subtitle {\n    font-size: var(--text-xl);\n  }\n  .carousel-description {\n    font-size: var(--text-lg);\n    margin-bottom: 0.75rem;\n  }\n  .carousel-content {\n    padding: 0 1.25rem;\n    padding-bottom: 1.5rem;\n  }\n  .carousel-buttons {\n    margin-top: 1.75rem;\n  }\n  .feature-cards {\n    grid-template-columns: 1fr;\n  }\n  .feature-card {\n    padding: clamp(1.25rem, 4vw, 2rem) clamp(1rem, 3vw, 1.5rem);\n    padding-top: clamp(1.75rem, 5vw, 2.5rem);\n  }\n  .feature-icon {\n    width: clamp(60px, 10vw, 80px);\n    height: clamp(60px, 10vw, 80px);\n  }\n  .icon-placeholder {\n    width: 60px;\n    height: 60px;\n    font-size: 1.5rem;\n  }\n  .feature-card__title {\n    font-size: clamp(var(--text-base), 4vw, var(--text-lg));\n  }\n  .feature-card__description {\n    font-size: clamp(var(--text-sm), 3vw, var(--text-base));\n  }\n}\n@media (max-width: 480px) {\n  .carousel-container {\n    height: 55vh;\n    min-height: 320px;\n  }\n  .carousel-content {\n    padding: 0 1rem;\n    padding-bottom: clamp(1.5rem, 4vw, 2rem);\n  }\n  .carousel-description {\n    margin-bottom: 0rem;\n  }\n  .carousel-buttons {\n    margin-top: 0.5rem;\n  }\n  .feature-card {\n    padding: clamp(1rem, 4vw, 1.5rem) clamp(0.75rem, 3vw, 1rem);\n    padding-top: clamp(1.5rem, 5vw, 2rem);\n  }\n  .feature-icon {\n    width: clamp(50px, 12vw, 70px);\n    height: clamp(50px, 12vw, 70px);\n  }\n}\n@media (max-width: 768px) and (orientation: landscape) {\n  .carousel-container {\n    height: auto;\n    min-height: 50vh;\n    max-height: none;\n  }\n  .carousel-content {\n    padding: 0 1rem;\n    padding-bottom: clamp(1.5rem, 4vw, 2rem);\n  }\n  .carousel-description {\n    margin-bottom: 0.5rem;\n  }\n  .carousel-buttons {\n    margin-top: 1.25rem;\n  }\n  .feature-cards {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 0.25rem;\n  }\n  .feature-card {\n    padding: clamp(0.75rem, 2vw, 1rem) clamp(0.5rem, 1.5vw, 0.75rem);\n    padding-top: clamp(1.25rem, 3vw, 1.75rem);\n  }\n  .feature-icon {\n    width: clamp(30px, 6vw, 45px);\n    height: clamp(30px, 6vw, 45px);\n  }\n  .feature-card__title {\n    font-size: clamp(0.75rem, 2.5vw, var(--text-sm));\n    margin-bottom: 0.5rem;\n  }\n  .feature-card__description {\n    font-size: clamp(0.65rem, 2vw, var(--text-xs));\n    line-height: 1.4;\n  }\n}\n/*# sourceMappingURL=hero-carousel.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroCarouselComponent, { className: "HeroCarouselComponent", filePath: "src/app/components/hero-carousel/hero-carousel.ts", lineNumber: 103 });
})();

// src/app/components/about-section/about-section.ts
init_common();
init_core();
init_core();
var _forTrack02 = ($index, $item) => $item.title;
function AboutSectionComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-info-card", 6);
  }
  if (rf & 2) {
    const robot_r1 = ctx.$implicit;
    \u0275\u0275property("data", robot_r1);
  }
}
var AboutSectionComponent = class _AboutSectionComponent {
  robots = signal([
    {
      icon: "\u{1F916}",
      title: "about.mega.title",
      subtitle: "about.mega.subtitle",
      features: [
        "about.mega.features.0",
        "about.mega.features.1",
        "about.mega.features.2",
        "about.mega.features.3"
      ],
      class: "info-card--mega"
    },
    {
      icon: "\u{1F527}",
      title: "about.nano.title",
      subtitle: "about.nano.subtitle",
      features: [
        "about.nano.features.0",
        "about.nano.features.1",
        "about.nano.features.2",
        "about.nano.features.3"
      ],
      class: "info-card--nano"
    }
  ], ...ngDevMode ? [{ debugName: "robots" }] : []);
  static \u0275fac = function AboutSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutSectionComponent, selectors: [["app-about-section"]], decls: 16, vars: 9, consts: [[1, "about-section"], [1, "about-container"], [1, "about-header"], [1, "about-title"], [1, "about-description"], [1, "robots-grid"], [3, "data"], [1, "compatibility-info"], [1, "compatibility-text"]], template: function AboutSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275repeaterCreate(10, AboutSectionComponent_For_11_Template, 1, 1, "app-info-card", 6, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "p", 8);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "about.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "about.description"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.robots());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 7, "about.compatibility"));
    }
  }, dependencies: [CommonModule, TranslateModule, InfoCardComponent, TranslatePipe], styles: ["\n\n.about-section[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  background: var(--color-bg);\n  color: var(--text-primary);\n}\n.about-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.about-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.about-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1.5rem;\n  color: var(--text-primary);\n}\n.about-description[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  line-height: 1.6;\n  color: var(--text-secondary);\n  max-width: 800px;\n  margin: 0 auto;\n}\n.robots-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  margin-bottom: 3rem;\n  align-items: stretch;\n}\n.compatibility-info[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background: var(--color-surface);\n  border-radius: 12px;\n  border: 2px solid var(--color-border);\n}\n.compatibility-text[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .about-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .about-container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .about-title[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  .about-description[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  .robots-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .compatibility-info[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .compatibility-text[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n@media (max-width: 480px) {\n  .about-section[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  .about-title[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  .about-description[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n/*# sourceMappingURL=about-section.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutSectionComponent, [{
    type: Component,
    args: [{ selector: "app-about-section", standalone: true, imports: [CommonModule, TranslateModule, InfoCardComponent], template: `
    <section class="about-section">
      <div class="about-container">
        <div class="about-header">
          <h2 class="about-title">{{ 'about.title' | translate }}</h2>
          <p class="about-description">{{ 'about.description' | translate }}</p>
        </div>

        <div class="robots-grid">
          @for (robot of robots(); track robot.title) {
            <app-info-card [data]="robot" />
          }
        </div>

        <div class="compatibility-info">
          <p class="compatibility-text">{{ 'about.compatibility' | translate }}</p>
        </div>
      </div>
    </section>
  `, styles: ["/* src/app/components/about-section/about-section.scss */\n.about-section {\n  padding: 1rem 0;\n  background: var(--color-bg);\n  color: var(--text-primary);\n}\n.about-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.about-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.about-title {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1.5rem;\n  color: var(--text-primary);\n}\n.about-description {\n  font-size: var(--text-xl);\n  line-height: 1.6;\n  color: var(--text-secondary);\n  max-width: 800px;\n  margin: 0 auto;\n}\n.robots-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  margin-bottom: 3rem;\n  align-items: stretch;\n}\n.compatibility-info {\n  text-align: center;\n  padding: 2rem;\n  background: var(--color-surface);\n  border-radius: 12px;\n  border: 2px solid var(--color-border);\n}\n.compatibility-text {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .about-section {\n    padding: 3rem 0;\n  }\n  .about-container {\n    padding: 0 1rem;\n  }\n  .about-title {\n    font-size: var(--text-4xl);\n  }\n  .about-description {\n    font-size: var(--text-lg);\n  }\n  .robots-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .compatibility-info {\n    padding: 1.5rem;\n  }\n  .compatibility-text {\n    font-size: var(--text-base);\n  }\n}\n@media (max-width: 480px) {\n  .about-section {\n    padding: 2rem 0;\n  }\n  .about-title {\n    font-size: var(--text-3xl);\n  }\n  .about-description {\n    font-size: var(--text-base);\n  }\n}\n/*# sourceMappingURL=about-section.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutSectionComponent, { className: "AboutSectionComponent", filePath: "src/app/components/about-section/about-section.ts", lineNumber: 32 });
})();

// src/app/components/why-important/why-important.ts
init_common();
init_core();
init_core();
function WhyImportantComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-info-card", 5);
  }
  if (rf & 2) {
    const point_r1 = ctx.$implicit;
    \u0275\u0275property("data", point_r1);
  }
}
var WhyImportantComponent = class _WhyImportantComponent {
  points = signal([
    {
      icon: "\u{1F4DA}",
      title: "whyImportant.points.0.title",
      description: "whyImportant.points.0.description",
      class: "info-card--point info-card--compact"
    },
    {
      icon: "\u{1F6E0}\uFE0F",
      title: "whyImportant.points.1.title",
      description: "whyImportant.points.1.description",
      class: "info-card--point info-card--compact"
    },
    {
      icon: "\u{1F30D}",
      title: "whyImportant.points.2.title",
      description: "whyImportant.points.2.description",
      class: "info-card--point info-card--compact"
    },
    {
      icon: "\u{1F680}",
      title: "whyImportant.points.3.title",
      description: "whyImportant.points.3.description",
      class: "info-card--point info-card--compact"
    }
  ], ...ngDevMode ? [{ debugName: "points" }] : []);
  static \u0275fac = function WhyImportantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhyImportantComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhyImportantComponent, selectors: [["app-why-important"]], decls: 9, vars: 3, consts: [[1, "why-important-section"], [1, "why-important-container"], [1, "why-important-header"], [1, "why-important-title"], [1, "points-grid"], [3, "data"]], template: function WhyImportantComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275repeaterCreate(7, WhyImportantComponent_For_8_Template, 1, 1, "app-info-card", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "whyImportant.title"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.points());
    }
  }, dependencies: [CommonModule, TranslateModule, InfoCardComponent, TranslatePipe], styles: ["\n\n.why-important-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background: var(--color-bg);\n  color: var(--text-primary);\n}\n.why-important-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.why-important-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.why-important-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 0;\n  color: var(--text-primary);\n}\n.points-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .why-important-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .why-important-container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .why-important-title[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  .points-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .why-important-section[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  .why-important-title[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n}\n/*# sourceMappingURL=why-important.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhyImportantComponent, [{
    type: Component,
    args: [{ selector: "app-why-important", standalone: true, imports: [CommonModule, TranslateModule, InfoCardComponent], template: `
    <section class="why-important-section">
      <div class="why-important-container">
        <div class="why-important-header">
          <h2 class="why-important-title">{{ 'whyImportant.title' | translate }}</h2>
        </div>

        <div class="points-grid">
          @for (point of points(); track $index) {
            <app-info-card [data]="point" />
          }
        </div>
      </div>
    </section>
  `, styles: ["/* src/app/components/why-important/why-important.scss */\n.why-important-section {\n  padding: 4rem 0;\n  background: var(--color-bg);\n  color: var(--text-primary);\n}\n.why-important-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.why-important-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.why-important-title {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 0;\n  color: var(--text-primary);\n}\n.points-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .why-important-section {\n    padding: 3rem 0;\n  }\n  .why-important-container {\n    padding: 0 1rem;\n  }\n  .why-important-title {\n    font-size: var(--text-4xl);\n  }\n  .points-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .why-important-section {\n    padding: 2rem 0;\n  }\n  .why-important-title {\n    font-size: var(--text-3xl);\n  }\n}\n/*# sourceMappingURL=why-important.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhyImportantComponent, { className: "WhyImportantComponent", filePath: "src/app/components/why-important/why-important.ts", lineNumber: 27 });
})();

// src/app/components/cta-section/cta-section.ts
init_common();
init_core();
init_core();
function CtaSectionComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 8);
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", step_r1.icon, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(3, 3, step_r1.title));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, step_r1.title));
  }
}
var CtaSectionComponent = class _CtaSectionComponent {
  steps = signal([
    {
      icon: "icons/download.svg",
      title: "cta.steps.0.title"
    },
    {
      icon: "icons/electronics.svg",
      title: "cta.steps.1.title"
    },
    {
      icon: "icons/code.svg",
      title: "cta.steps.2.title"
    }
  ], ...ngDevMode ? [{ debugName: "steps" }] : []);
  githubButtonData = signal(__spreadProps(__spreadValues({}, BUTTON_PRESETS.externalLink("cta.buttons.github", environment.links.githubOrg, "\u{1F535}")), {
    variant: "primary"
  }), ...ngDevMode ? [{ debugName: "githubButtonData" }] : []);
  lessonsButtonData = signal(__spreadProps(__spreadValues({}, BUTTON_PRESETS.link("cta.buttons.lessons", "/learn", "\u{1F7E0}")), {
    variant: "accent"
  }), ...ngDevMode ? [{ debugName: "lessonsButtonData" }] : []);
  static \u0275fac = function CtaSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CtaSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CtaSectionComponent, selectors: [["app-cta-section"]], decls: 12, vars: 5, consts: [[1, "cta-section"], [1, "cta-container"], [1, "cta-header"], [1, "cta-title"], [1, "steps-list"], [1, "step-item"], [1, "cta-buttons"], [3, "data"], [1, "step-icon"], [1, "step-icon-img", 3, "src", "alt"], [1, "step-content"], [1, "step-title"]], template: function CtaSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275repeaterCreate(7, CtaSectionComponent_For_8_Template, 8, 7, "div", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275element(10, "app-button", 7)(11, "app-button", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "cta.title"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.steps());
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.githubButtonData());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.lessonsButtonData());
    }
  }, dependencies: [CommonModule, TranslateModule, ButtonComponent, TranslatePipe], styles: ["\n\n.cta-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background: var(--color-bg);\n  color: var(--text-primary);\n}\n.cta-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  text-align: center;\n}\n.cta-header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.cta-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 0;\n  color: var(--text-primary);\n}\n.steps-list[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: var(--color-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.step-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.step-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.step-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-right: 1.5rem;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-primary);\n  border-radius: 50%;\n  padding: 8px;\n}\n.step-icon-img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  filter: brightness(0) invert(1);\n}\n.step-content[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n.step-title[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  font-weight: var(--font-weight-medium);\n  color: var(--text-primary);\n  margin: 0;\n  line-height: 1.4;\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 2rem;\n  border-radius: 8px;\n  font-family: var(--font-primary);\n  font-size: var(--text-lg);\n  font-weight: var(--font-weight-semibold);\n  text-decoration: none;\n  transition: all 0.3s ease;\n  min-width: 200px;\n}\n.cta-button--github[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: white;\n  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);\n}\n.cta-button--github[_ngcontent-%COMP%]:hover {\n  background: color-mix(in oklab, var(--color-primary) 90%, black);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);\n}\n.cta-button--lessons[_ngcontent-%COMP%] {\n  background: var(--color-secondary);\n  color: white;\n  box-shadow: 0 4px 15px rgba(251, 146, 60, 0.3);\n}\n.cta-button--lessons[_ngcontent-%COMP%]:hover {\n  background: color-mix(in oklab, var(--color-secondary) 90%, black);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(251, 146, 60, 0.4);\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .cta-container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .cta-title[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  .step-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 1.5rem 1rem;\n  }\n  .step-icon[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 1rem;\n    width: 40px;\n    height: 40px;\n  }\n  .step-icon-img[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n  .step-content[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .step-title[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .cta-button[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n  }\n}\n@media (max-width: 480px) {\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n  }\n  .cta-title[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  .step-item[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .step-title[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n  .cta-button[_ngcontent-%COMP%] {\n    padding: 0.875rem 1.5rem;\n    font-size: var(--text-base);\n  }\n}\n/*# sourceMappingURL=cta-section.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CtaSectionComponent, [{
    type: Component,
    args: [{ selector: "app-cta-section", standalone: true, imports: [CommonModule, TranslateModule, ButtonComponent], template: `
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-header">
          <h2 class="cta-title">{{ 'cta.title' | translate }}</h2>
        </div>

        <div class="steps-list">
          @for (step of steps(); track $index) {
            <div class="step-item">
              <div class="step-icon">
                <img [src]="step.icon" [alt]="step.title | translate" class="step-icon-img" />
              </div>
              <div class="step-content">
                <p class="step-title">{{ step.title | translate }}</p>
              </div>
            </div>
          }
        </div>

        <div class="cta-buttons">
          <app-button [data]="githubButtonData()" />
          <app-button [data]="lessonsButtonData()" />
        </div>
      </div>
    </section>
  `, styles: ["/* src/app/components/cta-section/cta-section.scss */\n.cta-section {\n  padding: 4rem 0;\n  background: var(--color-bg);\n  color: var(--text-primary);\n}\n.cta-container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  text-align: center;\n}\n.cta-header {\n  margin-bottom: 3rem;\n}\n.cta-title {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 0;\n  color: var(--text-primary);\n}\n.steps-list {\n  margin-bottom: 3rem;\n}\n.step-item {\n  display: flex;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: var(--color-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.step-item:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.step-item:last-child {\n  margin-bottom: 0;\n}\n.step-icon {\n  width: 48px;\n  height: 48px;\n  margin-right: 1.5rem;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-primary);\n  border-radius: 50%;\n  padding: 8px;\n}\n.step-icon-img {\n  width: 32px;\n  height: 32px;\n  filter: brightness(0) invert(1);\n}\n.step-content {\n  flex: 1;\n  text-align: left;\n}\n.step-title {\n  font-size: var(--text-xl);\n  font-weight: var(--font-weight-medium);\n  color: var(--text-primary);\n  margin: 0;\n  line-height: 1.4;\n}\n.cta-buttons {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 2rem;\n  border-radius: 8px;\n  font-family: var(--font-primary);\n  font-size: var(--text-lg);\n  font-weight: var(--font-weight-semibold);\n  text-decoration: none;\n  transition: all 0.3s ease;\n  min-width: 200px;\n}\n.cta-button--github {\n  background: var(--color-primary);\n  color: white;\n  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);\n}\n.cta-button--github:hover {\n  background: color-mix(in oklab, var(--color-primary) 90%, black);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);\n}\n.cta-button--lessons {\n  background: var(--color-secondary);\n  color: white;\n  box-shadow: 0 4px 15px rgba(251, 146, 60, 0.3);\n}\n.cta-button--lessons:hover {\n  background: color-mix(in oklab, var(--color-secondary) 90%, black);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(251, 146, 60, 0.4);\n}\n@media (max-width: 768px) {\n  .cta-section {\n    padding: 3rem 0;\n  }\n  .cta-container {\n    padding: 0 1rem;\n  }\n  .cta-title {\n    font-size: var(--text-4xl);\n  }\n  .step-item {\n    flex-direction: column;\n    text-align: center;\n    padding: 1.5rem 1rem;\n  }\n  .step-icon {\n    margin-right: 0;\n    margin-bottom: 1rem;\n    width: 40px;\n    height: 40px;\n  }\n  .step-icon-img {\n    width: 24px;\n    height: 24px;\n  }\n  .step-content {\n    text-align: center;\n  }\n  .step-title {\n    font-size: var(--text-lg);\n  }\n  .cta-buttons {\n    flex-direction: column;\n    align-items: center;\n  }\n  .cta-button {\n    width: 100%;\n    max-width: 300px;\n  }\n}\n@media (max-width: 480px) {\n  .cta-section {\n    padding: 2rem 0;\n  }\n  .cta-title {\n    font-size: var(--text-3xl);\n  }\n  .step-item {\n    padding: 1rem;\n  }\n  .step-title {\n    font-size: var(--text-base);\n  }\n  .cta-button {\n    padding: 0.875rem 1.5rem;\n    font-size: var(--text-base);\n  }\n}\n/*# sourceMappingURL=cta-section.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CtaSectionComponent, { className: "CtaSectionComponent", filePath: "src/app/components/cta-section/cta-section.ts", lineNumber: 41 });
})();

// src/app/pages/home/home.ts
init_core();
var Home = class _Home {
  seoService = inject(SeoService);
  ngOnInit() {
    this.seoService.updateSeoFromConfig({
      titleKey: "seo.home.title",
      descriptionKey: "seo.home.description",
      keywordsKey: "seo.home.keywords",
      imageKey: "seo.home.image",
      structuredDataKey: "seo.home.structuredData",
      type: "website"
    });
  }
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 4, vars: 0, template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-hero-carousel")(1, "app-about-section")(2, "app-why-important")(3, "app-cta-section");
    }
  }, dependencies: [
    HeroCarouselComponent,
    AboutSectionComponent,
    WhyImportantComponent,
    CtaSectionComponent,
    SeoModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", imports: [
      HeroCarouselComponent,
      AboutSectionComponent,
      WhyImportantComponent,
      CtaSectionComponent,
      SeoModule
    ], template: `
    <app-hero-carousel></app-hero-carousel>
    <app-about-section></app-about-section>
    <app-why-important></app-why-important>
    <app-cta-section></app-cta-section>
  ` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/pages/home/home.ts", lineNumber: 26 });
})();

export {
  Home
};
//# sourceMappingURL=chunk-ANMSNY6R.js.map

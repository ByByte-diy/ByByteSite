import {
  InfoCardComponent
} from "./chunk-4LSH5WNZ.js";
import {
  BenefitCardComponent
} from "./chunk-PEUQVA4A.js";
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
  DomSanitizer,
  Input,
  TranslateModule,
  TranslatePipe,
  environment,
  init_common,
  init_core,
  init_platform_browser,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction6,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeResourceUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6LT3BS5M.js";
import "./chunk-MXU7DO7X.js";

// src/app/pages/build/build.ts
init_core();

// src/app/shared/video-hero/video-hero.ts
init_core();
init_common();
init_platform_browser();
init_core();
var _c0 = (a0, a1, a2, a3, a4, a5) => ({ text: a0, icon: a1, href: a2, target: a3, variant: a4, size: a5 });
function VideoHeroComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-button", 8);
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    \u0275\u0275property("data", \u0275\u0275pureFunction6(1, _c0, b_r1.text, b_r1.icon, b_r1.href, b_r1.target, b_r1.variant || "primary", b_r1.size || "lg"));
  }
}
function VideoHeroComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, VideoHeroComponent_Conditional_8_For_2_Template, 1, 8, "app-button", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buttons);
  }
}
var VideoHeroComponent = class _VideoHeroComponent {
  title = "";
  subtitle = "";
  videoUrl = "";
  buttons = [];
  _sanitizer = inject(DomSanitizer);
  _safeUrl;
  ngOnInit() {
    this._safeUrl = this.buildSafeUrl(this.videoUrl);
  }
  ngOnChanges(changes) {
    if (changes["videoUrl"]) {
      this._safeUrl = this.buildSafeUrl(this.videoUrl);
    }
  }
  buildSafeUrl(raw) {
    const base = raw || "https://www.youtube.com/embed/";
    const hasQuery = base.includes("?");
    const sep = hasQuery ? "&" : "?";
    let vid = "";
    const m = base.match(/\/embed\/([^?&#/]+)/);
    if (m && m[1])
      vid = m[1];
    const loopParams = vid ? `&loop=1&playlist=${vid}` : "";
    const full = `${base}${sep}autoplay=1&mute=1&playsinline=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1${loopParams}`;
    return this._sanitizer.bypassSecurityTrustResourceUrl(full);
  }
  onVideoError(event) {
    console.warn("YouTube video failed to load, this is normal when ad blockers are active");
  }
  static \u0275fac = function VideoHeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VideoHeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoHeroComponent, selectors: [["app-video-hero"]], inputs: { title: "title", subtitle: "subtitle", videoUrl: "videoUrl", buttons: "buttons" }, features: [\u0275\u0275NgOnChangesFeature], decls: 12, vars: 8, consts: [[1, "video-hero"], [1, "video-hero__content"], [1, "video-hero__title"], [1, "video-hero__subtitle"], [1, "video-hero__actions"], [1, "video-hero__media"], [1, "video-hero__video"], ["title", "Video", "frameborder", "0", "allow", "autoplay; encrypted-media; picture-in-picture", "allowfullscreen", "", "loading", "lazy", 1, "video-hero__iframe", 3, "error", "src"], [3, "data"]], template: function VideoHeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, VideoHeroComponent_Conditional_8_Template, 3, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "iframe", 7);
      \u0275\u0275listener("error", function VideoHeroComponent_Template_iframe_error_11_listener($event) {
        return ctx.onVideoError($event);
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, ctx.title));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, ctx.subtitle));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.buttons.length ? 8 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx._safeUrl, \u0275\u0275sanitizeResourceUrl);
    }
  }, dependencies: [CommonModule, TranslateModule, ButtonComponent, TranslatePipe], styles: ['\n\n.video-hero[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--color-surface);\n  padding: 0;\n  min-height: 400px;\n  overflow: hidden;\n}\n.video-hero__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 0.75rem;\n  padding: 2rem 1.5rem;\n  min-height: 400px;\n  justify-content: center;\n}\n.video-hero__title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: calc(var(--text-5xl) * 1.15);\n  font-weight: var(--font-weight-bold);\n  margin: 0 0 0.5rem 0;\n  color: var(--btn-primary-text);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);\n}\n.video-hero__subtitle[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  color: color-mix(in oklab, var(--btn-primary-text) 92%, transparent);\n  max-width: 900px;\n  margin: 0 auto 1.25rem auto;\n}\n.video-hero__actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.video-hero__media[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  overflow: hidden;\n  pointer-events: none;\n}\n.video-hero__media[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 1;\n}\n.video-hero__video[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #000;\n}\n.video-hero__iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100vw;\n  height: 56.25vw;\n  min-width: 100%;\n  min-height: 100%;\n  border: 0;\n}\n@media (max-width: 768px) {\n  .video-hero[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 0;\n    display: block;\n  }\n  .video-hero__content[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n    min-height: auto;\n    min-height: 300px;\n  }\n  .video-hero__title[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n    margin-bottom: 0.75rem;\n  }\n  .video-hero__subtitle[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n    margin-bottom: 1.5rem;\n  }\n  .video-hero__actions[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n    width: 100%;\n    max-width: 100%;\n  }\n  .video-hero__iframe[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 300vw;\n    min-width: 177.78vh;\n    min-height: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .video-hero__video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  .video-hero__media[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=video-hero.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoHeroComponent, [{
    type: Component,
    args: [{ selector: "app-video-hero", standalone: true, imports: [CommonModule, TranslateModule, ButtonComponent], template: `
    <section class="video-hero">
      <div class="video-hero__content">
        <h1 class="video-hero__title">{{ title | translate }}</h1>
        <p class="video-hero__subtitle">{{ subtitle | translate }}</p>
        @if (buttons.length) {
          <div class="video-hero__actions">
            @for (b of buttons; track b) {
              <app-button
                [data]="{
                  text: b.text,
                  icon: b.icon,
                  href: b.href,
                  target: b.target,
                  variant: b.variant || 'primary',
                  size: b.size || 'lg',
                }"
              />
            }
          </div>
        }
      </div>
      <div class="video-hero__media">
        <div class="video-hero__video">
          <iframe
            class="video-hero__iframe"
            [src]="_safeUrl"
            title="Video"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
            loading="lazy"
            (error)="onVideoError($event)"
          ></iframe>
        </div>
      </div>
    </section>
  `, styles: ['/* src/app/shared/video-hero/video-hero.scss */\n.video-hero {\n  position: relative;\n  background: var(--color-surface);\n  padding: 0;\n  min-height: 400px;\n  overflow: hidden;\n}\n.video-hero__content {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 0.75rem;\n  padding: 2rem 1.5rem;\n  min-height: 400px;\n  justify-content: center;\n}\n.video-hero__title {\n  font-family: var(--font-display);\n  font-size: calc(var(--text-5xl) * 1.15);\n  font-weight: var(--font-weight-bold);\n  margin: 0 0 0.5rem 0;\n  color: var(--btn-primary-text);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);\n}\n.video-hero__subtitle {\n  font-size: var(--text-2xl);\n  color: color-mix(in oklab, var(--btn-primary-text) 92%, transparent);\n  max-width: 900px;\n  margin: 0 auto 1.25rem auto;\n}\n.video-hero__actions {\n  display: inline-flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.video-hero__media {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  overflow: hidden;\n  pointer-events: none;\n}\n.video-hero__media::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 1;\n}\n.video-hero__video {\n  position: absolute;\n  inset: 0;\n  background: #000;\n}\n.video-hero__iframe {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100vw;\n  height: 56.25vw;\n  min-width: 100%;\n  min-height: 100%;\n  border: 0;\n}\n@media (max-width: 768px) {\n  .video-hero {\n    min-height: auto;\n    padding: 0;\n    display: block;\n  }\n  .video-hero__content {\n    padding: 2rem 1.5rem;\n    min-height: auto;\n    min-height: 300px;\n  }\n  .video-hero__title {\n    font-size: var(--text-3xl);\n    margin-bottom: 0.75rem;\n  }\n  .video-hero__subtitle {\n    font-size: var(--text-lg);\n    margin-bottom: 1.5rem;\n  }\n  .video-hero__actions {\n    gap: 0.5rem;\n    width: 100%;\n    max-width: 100%;\n  }\n  .video-hero__iframe {\n    height: 100%;\n    width: 300vw;\n    min-width: 177.78vh;\n    min-height: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .video-hero__video {\n    width: 100%;\n    height: 100%;\n  }\n  .video-hero__media {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=video-hero.css.map */\n'] }]
  }], null, { title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], videoUrl: [{
    type: Input
  }], buttons: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoHeroComponent, { className: "VideoHeroComponent", filePath: "src/app/shared/video-hero/video-hero.ts", lineNumber: 68 });
})();

// src/app/pages/build/build.ts
init_core();
function BuildPage_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-info-card", 7);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275property("data", step_r1);
  }
}
function BuildPage_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-benefit-card", 7);
  }
  if (rf & 2) {
    const doc_r2 = ctx.$implicit;
    \u0275\u0275property("data", doc_r2);
  }
}
var BuildPage = class _BuildPage {
  seoService = inject(SeoService);
  env = environment;
  ngOnInit() {
    this.seoService.updateSeoFromConfig({
      titleKey: "seo.build.title",
      descriptionKey: "seo.build.description",
      keywordsKey: "seo.build.keywords",
      type: "website"
    });
  }
  megaBtn = () => BUTTON_PRESETS.cta("build.hero.ctaMega", "\u{1F916}");
  nanoBtn = () => BUTTON_PRESETS.cta("build.hero.ctaNano", "\u{1F527}");
  videoButtons = [
    {
      text: "build.hero.ctaMega",
      icon: "\u{1F916}",
      href: this.env.links.megaBuild,
      variant: "primary",
      size: "lg"
    },
    {
      text: "build.hero.ctaNano",
      icon: "\u{1F527}",
      href: this.env.links.nanoBuild,
      variant: "accent",
      size: "lg"
    }
  ];
  steps = [
    {
      icon: "\u{1F9F0}",
      title: "build.steps.items.0.title",
      description: "build.steps.items.0.description",
      class: "info-card--point info-card--compact"
    },
    {
      icon: "\u{1F50C}",
      title: "build.steps.items.1.title",
      description: "build.steps.items.1.description",
      class: "info-card--point info-card--compact"
    },
    {
      icon: "\u2699\uFE0F",
      title: "build.steps.items.2.title",
      description: "build.steps.items.2.description",
      class: "info-card--point info-card--compact"
    },
    {
      icon: "\u{1F50B}",
      title: "build.steps.items.3.title",
      description: "build.steps.items.3.description",
      class: "info-card--point info-card--compact"
    }
  ];
  docs = [
    {
      icon: "\u{1F4D1}",
      title: "build.docs.items.0.title",
      description: "build.docs.items.0.description",
      color: "var(--color-primary)",
      href: this.env.links.buildGuide
    },
    {
      icon: "\u{1F4BB}",
      title: "build.docs.items.1.title",
      description: "build.docs.items.1.description",
      color: "var(--color-success)",
      href: this.env.links.programmingGuide
    },
    {
      icon: "\u{1F9D1}\u200D\u{1F393}",
      title: "build.docs.items.2.title",
      description: "build.docs.items.2.description",
      color: "var(--color-warning)",
      href: this.env.links.lessons
    }
  ];
  static \u0275fac = function BuildPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BuildPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildPage, selectors: [["app-build"]], decls: 25, vars: 16, consts: [[3, "title", "subtitle", "videoUrl", "buttons"], [1, "build-page"], [1, "build-container"], [1, "build-description"], [1, "build-steps"], [1, "build-steps__title"], [1, "build-steps__grid"], [3, "data"], [1, "build-docs"], [1, "build-docs__title"], [1, "build-docs__description"], [1, "build-docs__grid"]], template: function BuildPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-video-hero", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 2)(8, "h2", 5);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275repeaterCreate(12, BuildPage_For_13_Template, 1, 1, "app-info-card", 7, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "section", 8)(15, "div", 2)(16, "h2", 9);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 10);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11);
      \u0275\u0275repeaterCreate(23, BuildPage_For_24_Template, 1, 1, "app-benefit-card", 7, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", "build.hero.title")("subtitle", "build.hero.subtitle")("videoUrl", ctx.env.links.youtubeIntroEmbed)("buttons", ctx.videoButtons);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, "build.description"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "build.steps.title"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.steps);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 12, "build.docs.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 14, "build.docs.description"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.docs);
    }
  }, dependencies: [
    TranslateModule,
    VideoHeroComponent,
    InfoCardComponent,
    BenefitCardComponent,
    SeoModule,
    TranslatePipe
  ], styles: ["\n\n.build-page[_ngcontent-%COMP%] {\n  padding: 0;\n  background: var(--color-bg);\n  color: var(--text-primary);\n}\n.build-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.build-description[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n}\n.build-steps[_ngcontent-%COMP%] {\n  padding: 3rem 0 4rem;\n  background: var(--color-bg);\n}\n.build-steps__title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin: 0 0 2rem 0;\n  color: var(--text-primary);\n  text-align: center;\n}\n.build-steps__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.build-docs[_ngcontent-%COMP%] {\n  padding: 3rem 0 4rem;\n  background: var(--color-surface);\n}\n.build-docs__title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin: 0 0 1rem 0;\n  color: var(--text-primary);\n  text-align: center;\n}\n.build-docs__description[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  text-align: center;\n  margin: 0 0 3rem 0;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.build-docs__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 768px) {\n  .build-steps__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .build-docs__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=build.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildPage, [{
    type: Component,
    args: [{ selector: "app-build", standalone: true, imports: [
      TranslateModule,
      VideoHeroComponent,
      InfoCardComponent,
      BenefitCardComponent,
      SeoModule
    ], template: `
    <app-video-hero
      [title]="'build.hero.title'"
      [subtitle]="'build.hero.subtitle'"
      [videoUrl]="env.links.youtubeIntroEmbed"
      [buttons]="videoButtons"
    />

    <section class="build-page">
      <div class="build-container">
        <p class="build-description">{{ 'build.description' | translate }}</p>
      </div>
    </section>

    <section class="build-steps">
      <div class="build-container">
        <h2 class="build-steps__title">{{ 'build.steps.title' | translate }}</h2>
        <div class="build-steps__grid">
          @for (step of steps; track $index) {
            <app-info-card [data]="step" />
          }
        </div>
      </div>
    </section>

    <section class="build-docs">
      <div class="build-container">
        <h2 class="build-docs__title">{{ 'build.docs.title' | translate }}</h2>
        <p class="build-docs__description">{{ 'build.docs.description' | translate }}</p>
        <div class="build-docs__grid">
          @for (doc of docs; track $index) {
            <app-benefit-card [data]="doc" />
          }
        </div>
      </div>
    </section>
  `, styles: ["/* src/app/pages/build/build.scss */\n.build-page {\n  padding: 0;\n  background: var(--color-bg);\n  color: var(--text-primary);\n}\n.build-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.build-description {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n}\n.build-steps {\n  padding: 3rem 0 4rem;\n  background: var(--color-bg);\n}\n.build-steps__title {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin: 0 0 2rem 0;\n  color: var(--text-primary);\n  text-align: center;\n}\n.build-steps__grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.build-docs {\n  padding: 3rem 0 4rem;\n  background: var(--color-surface);\n}\n.build-docs__title {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin: 0 0 1rem 0;\n  color: var(--text-primary);\n  text-align: center;\n}\n.build-docs__description {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  text-align: center;\n  margin: 0 0 3rem 0;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.build-docs__grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 768px) {\n  .build-steps__grid {\n    grid-template-columns: 1fr;\n  }\n  .build-docs__grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=build.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildPage, { className: "BuildPage", filePath: "src/app/pages/build/build.ts", lineNumber: 60 });
})();
export {
  BuildPage
};
//# sourceMappingURL=chunk-5V55MC52.js.map

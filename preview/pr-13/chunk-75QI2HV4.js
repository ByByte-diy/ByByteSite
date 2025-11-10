import {
  MarkdownComponent,
  MarkdownModule
} from "./chunk-BQ4MHA2N.js";
import {
  LessonIconsService,
  LessonsService
} from "./chunk-SN4KNM2J.js";
import {
  RouterService
} from "./chunk-53MEKFBB.js";
import {
  SeoService
} from "./chunk-DUVATNFJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DomSanitizer,
  Input,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
  effect,
  init_common,
  init_core,
  init_platform_browser,
  init_router,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-5JG7UUPK.js";
import "./chunk-MXU7DO7X.js";

// src/app/modules/lessons/pages/lesson-detail-page/lesson-detail-page.component.ts
init_core();
init_common();
init_router();

// src/app/modules/lessons/components/lesson-view/lesson-view.component.ts
init_core();
init_platform_browser();
init_common();
init_core();
var _c0 = ["markdownContainer"];
function LessonViewComponent_Conditional_0_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r1);
  }
}
function LessonViewComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, LessonViewComponent_Conditional_0_Conditional_18_For_2_Template, 2, 1, "span", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.lesson.tags);
  }
}
function LessonViewComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("v", ctx_r1.lesson.version);
  }
}
function LessonViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "span", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "h1", 11);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275conditionalCreate(18, LessonViewComponent_Conditional_0_Conditional_18_Template, 3, 0, "div", 13);
    \u0275\u0275conditionalCreate(19, LessonViewComponent_Conditional_0_Conditional_19_Template, 3, 1, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15, 0);
    \u0275\u0275element(22, "markdown", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.iconsService.getPlatformIcon(ctx_r1.lesson.platforms[0]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "lessons.platform." + ctx_r1.lesson.platforms[0]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.iconsService.getLevelIcon(ctx_r1.lesson.level));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 10, "lessons.level." + ctx_r1.lesson.level));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.lesson.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.lesson.tags && ctx_r1.lesson.tags.length ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.lesson.version ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r1.markdownContent);
  }
}
function LessonViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "lessons.loading"));
  }
}
var LessonViewComponent = class _LessonViewComponent {
  lesson = null;
  markdownContentRef;
  _sanitizer = inject(DomSanitizer);
  iconsService = inject(LessonIconsService);
  _contentRendered = false;
  // View content
  markdownContent = "";
  ngOnChanges(changes) {
    if (changes["lesson"] && this.lesson) {
      this.markdownContent = this.extractMarkdownContent(this.lesson.content);
      this.resetContentRendered();
    }
  }
  /**
   * Remove frontmatter from Markdown content and process code for correct syntax highlighting
   */
  extractMarkdownContent(content) {
    if (content.startsWith("---")) {
      const endOfFrontmatter = content.indexOf("---", 3);
      if (endOfFrontmatter !== -1) {
        const markdownContent = content.substring(endOfFrontmatter + 3).trim();
        return this.processCodeBlocks(markdownContent);
      }
    }
    return this.processCodeBlocks(content);
  }
  /**
   * Process code blocks for correct syntax highlighting
   */
  processCodeBlocks(content) {
    const codeBlockRegex = /```(\w+)?\s*([\s\S]*?)```/g;
    let processedContent = content.replace(codeBlockRegex, (match, language, code) => {
      if (!language) {
        return "```text\n" + code + "```";
      }
      const normalizedLanguage = this.normalizeLanguage(language.toLowerCase());
      return "```" + normalizedLanguage + "\n" + code + "```";
    });
    processedContent = this.fixImagePaths(processedContent);
    return processedContent;
  }
  /**
   * Fix image paths from /content/ to /assets/content/
   */
  fixImagePaths(content) {
    const imagePathRegex = /(!\[.*?\]\(|\<img[^>]+src=["'])(\/?content\/)([^"')]+)(["'][^>]*\>|\))/g;
    const fixedContent = content.replace(imagePathRegex, (match, prefix, contentPath, imagePath, suffix) => {
      const newPath = prefix + "assets/content/" + imagePath + suffix;
      return newPath;
    });
    return fixedContent;
  }
  /**
   * Normalize language names for syntax highlighting
   */
  normalizeLanguage(language) {
    const languageMap = {
      "c++": "cpp",
      c: "c",
      arduino: "arduino",
      // Prism підтримує Arduino
      js: "javascript",
      javascript: "javascript",
      ts: "typescript",
      typescript: "typescript",
      html: "markup",
      xml: "markup",
      css: "css",
      scss: "scss",
      bash: "bash",
      shell: "bash",
      sh: "bash",
      json: "json",
      md: "markdown",
      markdown: "markdown"
    };
    return languageMap[language] || language;
  }
  /**
   * Initialize Prism.js for syntax highlighting after rendering
   */
  ngAfterViewChecked() {
    if (this.lesson && !this._contentRendered && this.markdownContentRef) {
      this._contentRendered = true;
      setTimeout(() => {
        if (this.markdownContentRef && typeof window !== "undefined" && window.Prism) {
          window.Prism.highlightAll();
        }
      }, 500);
    }
  }
  /**
   * Reset rendering flag when lesson changes
   */
  resetContentRendered() {
    this._contentRendered = false;
  }
  static \u0275fac = function LessonViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessonViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LessonViewComponent, selectors: [["app-lesson-view"]], viewQuery: function LessonViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.markdownContentRef = _t.first);
    }
  }, inputs: { lesson: "lesson" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["markdownContainer", ""], [1, "lesson-view"], [1, "lesson-loading"], [1, "lesson-header"], [1, "lesson-meta"], [1, "lesson-platform"], [1, "platform-icon"], [1, "platform-name"], [1, "lesson-level"], [1, "level-icon"], [1, "level-name"], [1, "lesson-title"], [1, "lesson-info"], [1, "lesson-tags"], [1, "lesson-version"], [1, "lesson-content"], ["lineNumbers", "", "emoji", "", 1, "markdown-content", 3, "data"], [1, "lesson-tag"], [1, "version-label"]], template: function LessonViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, LessonViewComponent_Conditional_0_Template, 23, 12, "div", 1)(1, LessonViewComponent_Conditional_1_Template, 4, 3, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.lesson ? 0 : 1);
    }
  }, dependencies: [CommonModule, TranslateModule, MarkdownModule, MarkdownComponent, TranslatePipe], styles: ['\n\n.lesson-view[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n}\n.lesson-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.lesson-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.lesson-platform[_ngcontent-%COMP%], \n.lesson-level[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  padding: 0.25rem 0.75rem;\n  background: var(--color-surface);\n  border-radius: 16px;\n}\n.platform-icon[_ngcontent-%COMP%], \n.level-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.lesson-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.lesson-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.lesson-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.lesson-tag[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  background: var(--color-bg);\n  border-radius: 16px;\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n}\n.lesson-version[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n}\n.lesson-content[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n  .markdown-content {\n  line-height: 1.6;\n  color: var(--text-primary);\n}\n  .markdown-content h1, \n  .markdown-content h2, \n  .markdown-content h3, \n  .markdown-content h4, \n  .markdown-content h5, \n  .markdown-content h6 {\n  margin-top: 1.5em;\n  margin-bottom: 0.75em;\n  font-family: var(--font-display);\n  font-weight: var(--font-weight-bold);\n  color: var(--text-primary);\n}\n  .markdown-content h1 {\n  font-size: var(--text-3xl);\n}\n  .markdown-content h2 {\n  font-size: var(--text-2xl);\n}\n  .markdown-content h3 {\n  font-size: var(--text-xl);\n}\n  .markdown-content p {\n  margin-bottom: 1.5em;\n}\n  .markdown-content ul, \n  .markdown-content ol {\n  margin-bottom: 1.5em;\n  padding-left: 1.5em;\n}\n  .markdown-content li {\n  margin-bottom: 0.5em;\n}\n  .markdown-content code:not([class*=language-]) {\n  font-family:\n    Consolas,\n    Monaco,\n    "Andale Mono",\n    "Ubuntu Mono",\n    monospace;\n  background: var(--color-bg);\n  padding: 0.2em 0.4em;\n  border-radius: 3px;\n  font-size: 0.9em;\n}\n  .markdown-content pre {\n  padding: 0;\n  margin-bottom: 1.5em;\n  border-radius: 8px;\n  overflow: auto;\n  scrollbar-width: auto;\n  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;\n}\n  .markdown-content pre::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n  .markdown-content pre::-webkit-scrollbar-track {\n  background: transparent;\n}\n  .markdown-content pre::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n  .markdown-content pre::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.4);\n}\n  .markdown-content pre:hover::-webkit-scrollbar-thumb {\n  opacity: 1;\n}\n  .markdown-content pre code {\n  background: transparent;\n  padding: 0;\n}\n  .markdown-content pre[class*=language-] {\n  position: relative;\n  margin: 1em 0;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n  .markdown-content .line-numbers .line-numbers-rows {\n  padding: 1em 0;\n}\n  .markdown-content div.code-toolbar > .toolbar {\n  top: 0.3em;\n  right: 0.3em;\n  transition: opacity 0.3s ease;\n}\n  .markdown-content div.code-toolbar > .toolbar button {\n  cursor: pointer;\n}\n  .markdown-content img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  margin: 1.5em 0;\n}\n  .markdown-content blockquote {\n  border-left: 4px solid var(--color-primary);\n  padding-left: 1em;\n  margin-left: 0;\n  margin-right: 0;\n  font-style: italic;\n  color: var(--text-secondary);\n}\n  .markdown-content table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 1.5em;\n}\n  .markdown-content table th, \n  .markdown-content table td {\n  border: 1px solid var(--color-border);\n  padding: 0.5em;\n  text-align: left;\n}\n  .markdown-content table th {\n  background: var(--color-bg);\n  font-weight: var(--font-weight-medium);\n}\n  .markdown-content pre[class*=language-] {\n  text-shadow: none;\n}\n.lesson-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 300px;\n}\n.lesson-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n}\n@media (max-width: 768px) {\n  .lesson-title[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  .lesson-content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=lesson-view.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessonViewComponent, [{
    type: Component,
    args: [{ selector: "app-lesson-view", standalone: true, imports: [CommonModule, TranslateModule, MarkdownModule], template: `@if (lesson) {
  <div class="lesson-view">
    <div class="lesson-header">
      <div class="lesson-meta">
        <div class="lesson-platform">
          <span class="platform-icon">{{ iconsService.getPlatformIcon(lesson.platforms[0]) }}</span>
          <span class="platform-name">{{ 'lessons.platform.' + lesson.platforms[0] | translate }}</span>
        </div>
        <div class="lesson-level">
          <span class="level-icon">{{ iconsService.getLevelIcon(lesson.level) }}</span>
          <span class="level-name">{{ 'lessons.level.' + lesson.level | translate }}</span>
        </div>
      </div>
      
      <h1 class="lesson-title">{{ lesson.title }}</h1>
      
      <div class="lesson-info">
        @if (lesson.tags && lesson.tags.length) {
          <div class="lesson-tags">
            @for (tag of lesson.tags; track tag) {
              <span class="lesson-tag">{{ tag }}</span>
            }
          </div>
        }
        
        @if (lesson.version) {
          <div class="lesson-version">
            <span class="version-label">v{{ lesson.version }}</span>
          </div>
        }
      </div>
    </div>
    
    <div #markdownContainer class="lesson-content">
      <markdown [data]="markdownContent" class="markdown-content" lineNumbers emoji></markdown>
    </div>
  </div>
} @else {
  <div class="lesson-loading">
    <p>{{ 'lessons.loading' | translate }}</p>
  </div>
}
`, styles: ['/* src/app/modules/lessons/components/lesson-view/lesson-view.component.scss */\n.lesson-view {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n}\n.lesson-header {\n  margin-bottom: 2rem;\n}\n.lesson-meta {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.lesson-platform,\n.lesson-level {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  padding: 0.25rem 0.75rem;\n  background: var(--color-surface);\n  border-radius: 16px;\n}\n.platform-icon,\n.level-icon {\n  font-size: 1.2em;\n}\n.lesson-title {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.lesson-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.lesson-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.lesson-tag {\n  padding: 0.25rem 0.75rem;\n  background: var(--color-bg);\n  border-radius: 16px;\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n}\n.lesson-version {\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n}\n.lesson-content {\n  background: var(--color-surface);\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n::ng-deep .markdown-content {\n  line-height: 1.6;\n  color: var(--text-primary);\n}\n::ng-deep .markdown-content h1,\n::ng-deep .markdown-content h2,\n::ng-deep .markdown-content h3,\n::ng-deep .markdown-content h4,\n::ng-deep .markdown-content h5,\n::ng-deep .markdown-content h6 {\n  margin-top: 1.5em;\n  margin-bottom: 0.75em;\n  font-family: var(--font-display);\n  font-weight: var(--font-weight-bold);\n  color: var(--text-primary);\n}\n::ng-deep .markdown-content h1 {\n  font-size: var(--text-3xl);\n}\n::ng-deep .markdown-content h2 {\n  font-size: var(--text-2xl);\n}\n::ng-deep .markdown-content h3 {\n  font-size: var(--text-xl);\n}\n::ng-deep .markdown-content p {\n  margin-bottom: 1.5em;\n}\n::ng-deep .markdown-content ul,\n::ng-deep .markdown-content ol {\n  margin-bottom: 1.5em;\n  padding-left: 1.5em;\n}\n::ng-deep .markdown-content li {\n  margin-bottom: 0.5em;\n}\n::ng-deep .markdown-content code:not([class*=language-]) {\n  font-family:\n    Consolas,\n    Monaco,\n    "Andale Mono",\n    "Ubuntu Mono",\n    monospace;\n  background: var(--color-bg);\n  padding: 0.2em 0.4em;\n  border-radius: 3px;\n  font-size: 0.9em;\n}\n::ng-deep .markdown-content pre {\n  padding: 0;\n  margin-bottom: 1.5em;\n  border-radius: 8px;\n  overflow: auto;\n  scrollbar-width: auto;\n  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;\n}\n::ng-deep .markdown-content pre::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n::ng-deep .markdown-content pre::-webkit-scrollbar-track {\n  background: transparent;\n}\n::ng-deep .markdown-content pre::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n::ng-deep .markdown-content pre::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.4);\n}\n::ng-deep .markdown-content pre:hover::-webkit-scrollbar-thumb {\n  opacity: 1;\n}\n::ng-deep .markdown-content pre code {\n  background: transparent;\n  padding: 0;\n}\n::ng-deep .markdown-content pre[class*=language-] {\n  position: relative;\n  margin: 1em 0;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n::ng-deep .markdown-content .line-numbers .line-numbers-rows {\n  padding: 1em 0;\n}\n::ng-deep .markdown-content div.code-toolbar > .toolbar {\n  top: 0.3em;\n  right: 0.3em;\n  transition: opacity 0.3s ease;\n}\n::ng-deep .markdown-content div.code-toolbar > .toolbar button {\n  cursor: pointer;\n}\n::ng-deep .markdown-content img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  margin: 1.5em 0;\n}\n::ng-deep .markdown-content blockquote {\n  border-left: 4px solid var(--color-primary);\n  padding-left: 1em;\n  margin-left: 0;\n  margin-right: 0;\n  font-style: italic;\n  color: var(--text-secondary);\n}\n::ng-deep .markdown-content table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 1.5em;\n}\n::ng-deep .markdown-content table th,\n::ng-deep .markdown-content table td {\n  border: 1px solid var(--color-border);\n  padding: 0.5em;\n  text-align: left;\n}\n::ng-deep .markdown-content table th {\n  background: var(--color-bg);\n  font-weight: var(--font-weight-medium);\n}\n::ng-deep .markdown-content pre[class*=language-] {\n  text-shadow: none;\n}\n.lesson-loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 300px;\n}\n.lesson-loading p {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n}\n@media (max-width: 768px) {\n  .lesson-title {\n    font-size: var(--text-3xl);\n  }\n  .lesson-content {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=lesson-view.component.css.map */\n'] }]
  }], null, { lesson: [{
    type: Input
  }], markdownContentRef: [{
    type: ViewChild,
    args: ["markdownContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LessonViewComponent, { className: "LessonViewComponent", filePath: "src/app/modules/lessons/components/lesson-view/lesson-view.component.ts", lineNumber: 25 });
})();

// src/app/modules/lessons/pages/lesson-detail-page/lesson-detail-page.component.ts
init_core();
function LessonDetailPageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function LessonDetailPageComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lessonsService.error());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u2190 ", \u0275\u0275pipeBind1(5, 2, "lessons.backToList"), " ");
  }
}
var LessonDetailPageComponent = class _LessonDetailPageComponent {
  lessonsService = inject(LessonsService);
  _route = inject(ActivatedRoute);
  _routerService = inject(RouterService);
  _translate = inject(TranslateService);
  _seoService = inject(SeoService);
  _paramMapSubscription;
  constructor() {
    effect(() => {
      const lesson = this.lessonsService.currentLesson();
      if (lesson) {
        this._updateSEOTags(lesson);
      }
    });
  }
  ngOnInit() {
    if (!this.lessonsService.lessonsIndex()) {
      this.lessonsService.loadLessonsIndex().subscribe(() => {
        this._loadLesson();
      });
    } else {
      this._loadLesson();
    }
  }
  /**
   * Returns to lessons list with language prefix
   */
  goBack() {
    this._routerService.navigateTo("/learn");
  }
  /**
   * Clean up subscriptions to prevent memory leaks
   */
  ngOnDestroy() {
    if (this._paramMapSubscription) {
      this._paramMapSubscription.unsubscribe();
    }
  }
  /**
   * Load lesson by parameters from URL
   */
  _loadLesson() {
    this._paramMapSubscription = this._route.paramMap.subscribe((params) => {
      const slug = params.get("slug");
      const platform = params.get("platform");
      const level = params.get("level");
      if (!slug || !platform || !level) {
        this._routerService.navigateTo("/learn");
        return;
      }
      const currentLang = this._translate.currentLang || this._translate.defaultLang || "";
      this.lessonsService.loadLesson(slug, currentLang, platform).subscribe();
    });
  }
  /**
   * Update SEO meta tags for the lesson
   */
  _updateSEOTags(lesson) {
    const platforms = lesson.platforms || [];
    const primaryPlatform = platforms[0] || "arduino";
    this._seoService.updateLessonSeo(lesson, primaryPlatform, lesson.level, lesson.slug);
  }
  static \u0275fac = function LessonDetailPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessonDetailPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LessonDetailPageComponent, selectors: [["app-lesson-detail-page"]], decls: 7, vars: 5, consts: [[1, "lesson-detail-page"], [1, "lesson-detail-page__nav"], [1, "back-button", 3, "click"], [3, "lesson"], [1, "lesson-detail-page__error"], [1, "error-message"]], template: function LessonDetailPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function LessonDetailPageComponent_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(5, "app-lesson-view", 3);
      \u0275\u0275conditionalCreate(6, LessonDetailPageComponent_Conditional_6_Template, 6, 4, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" \u2190 ", \u0275\u0275pipeBind1(4, 3, "lessons.backToList"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("lesson", ctx.lessonsService.currentLesson());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.lessonsService.error() ? 6 : -1);
    }
  }, dependencies: [CommonModule, TranslateModule, LessonViewComponent, TranslatePipe], styles: ["\n\n.lesson-detail-page[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.lesson-detail-page__nav[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto 1rem;\n}\n.back-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-primary);\n  font-size: var(--text-base);\n  cursor: pointer;\n  padding: 0.5rem 0;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.lesson-detail-page__error[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: var(--color-surface);\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.lesson-detail-page__error[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--color-error);\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=lesson-detail-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessonDetailPageComponent, [{
    type: Component,
    args: [{ selector: "app-lesson-detail-page", standalone: true, imports: [CommonModule, TranslateModule, LessonViewComponent], template: `
    <div class="lesson-detail-page">
      <div class="lesson-detail-page__nav">
        <button class="back-button" (click)="goBack()">
          \u2190 {{ 'lessons.backToList' | translate }}
        </button>
      </div>

      <app-lesson-view [lesson]="lessonsService.currentLesson()"></app-lesson-view>

      @if (lessonsService.error()) {
        <div class="lesson-detail-page__error">
          <p class="error-message">{{ lessonsService.error() }}</p>
          <button class="back-button" (click)="goBack()">
            \u2190 {{ 'lessons.backToList' | translate }}
          </button>
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:scss;9f53389f9776b86922722bc2ff4aed9d768b3604533954d025cc061df4a1fcd7;/home/runner/work/ByByteSite/ByByteSite/src/app/modules/lessons/pages/lesson-detail-page/lesson-detail-page.component.ts */\n.lesson-detail-page {\n  padding: 2rem 1rem;\n}\n.lesson-detail-page__nav {\n  max-width: 900px;\n  margin: 0 auto 1rem;\n}\n.back-button {\n  background: none;\n  border: none;\n  color: var(--color-primary);\n  font-size: var(--text-base);\n  cursor: pointer;\n  padding: 0.5rem 0;\n}\n.back-button:hover {\n  text-decoration: underline;\n}\n.lesson-detail-page__error {\n  max-width: 900px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: var(--color-surface);\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.lesson-detail-page__error .error-message {\n  font-size: var(--text-lg);\n  color: var(--color-error);\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=lesson-detail-page.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LessonDetailPageComponent, { className: "LessonDetailPageComponent", filePath: "src/app/modules/lessons/pages/lesson-detail-page/lesson-detail-page.component.ts", lineNumber: 79 });
})();
export {
  LessonDetailPageComponent
};
//# sourceMappingURL=chunk-75QI2HV4.js.map

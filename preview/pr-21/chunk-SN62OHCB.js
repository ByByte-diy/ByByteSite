import {
  MarkdownComponent,
  MarkdownModule
} from "./chunk-EMLHKIY4.js";
import {
  LessonIconsService,
  LessonsService
} from "./chunk-722HVKIU.js";
import {
  RouterService
} from "./chunk-MZS2D3LT.js";
import {
  SeoModule,
  SeoService
} from "./chunk-YVNYUMCD.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DomSanitizer,
  HostListener,
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
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-6LT3BS5M.js";
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
var _c1 = ["previewImage"];
function LessonViewComponent_Conditional_0_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
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
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, LessonViewComponent_Conditional_0_Conditional_18_For_2_Template, 2, 1, "span", 19, \u0275\u0275repeaterTrackByIdentity);
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
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("v", ctx_r1.lesson.version);
  }
}
function LessonViewComponent_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function LessonViewComponent_Conditional_0_Conditional_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275listener("click", function LessonViewComponent_Conditional_0_Conditional_23_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    })("pointerdown", function LessonViewComponent_Conditional_0_Conditional_23_Template_div_pointerdown_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPreviewPointerDown($event));
    })("pointermove", function LessonViewComponent_Conditional_0_Conditional_23_Template_div_pointermove_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPreviewPointerMove($event));
    })("pointerup", function LessonViewComponent_Conditional_0_Conditional_23_Template_div_pointerup_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPreviewPointerUp($event));
    })("pointercancel", function LessonViewComponent_Conditional_0_Conditional_23_Template_div_pointercancel_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPreviewPointerUp($event));
    })("pointerleave", function LessonViewComponent_Conditional_0_Conditional_23_Template_div_pointerleave_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPreviewPointerUp($event));
    })("wheel", function LessonViewComponent_Conditional_0_Conditional_23_Template_div_wheel_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPreviewWheel($event));
    });
    \u0275\u0275element(2, "img", 23, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "button", 25);
    \u0275\u0275listener("click", function LessonViewComponent_Conditional_0_Conditional_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeZoom(0.2));
    });
    \u0275\u0275text(6, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275listener("click", function LessonViewComponent_Conditional_0_Conditional_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeZoom(-0.2));
    });
    \u0275\u0275text(8, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 27);
    \u0275\u0275listener("click", function LessonViewComponent_Conditional_0_Conditional_23_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetPreviewTransform());
    });
    \u0275\u0275text(10, " Reset ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 28);
    \u0275\u0275listener("click", function LessonViewComponent_Conditional_0_Conditional_23_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275text(12, " Close ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("dragging", ctx_r1.isPreviewDragging);
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", ctx_r1.previewTransformStyle);
    \u0275\u0275property("src", ctx_r1.previewImageSrc, \u0275\u0275sanitizeUrl)("alt", ctx_r1.previewImageAlt);
  }
}
function LessonViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4)(2, "div", 5)(3, "div", 6);
    \u0275\u0275element(4, "img", 7);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275element(10, "img", 10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span", 11);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "h1", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275conditionalCreate(18, LessonViewComponent_Conditional_0_Conditional_18_Template, 3, 0, "div", 14);
    \u0275\u0275conditionalCreate(19, LessonViewComponent_Conditional_0_Conditional_19_Template, 3, 1, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 16, 0);
    \u0275\u0275element(22, "markdown", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, LessonViewComponent_Conditional_0_Conditional_23_Template, 13, 6, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.iconsService.getPlatformIcon(ctx_r1.lesson.platforms[0]), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("alt", \u0275\u0275pipeBind1(5, 11, "lessons.platform." + ctx_r1.lesson.platforms[0]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, "lessons.platform." + ctx_r1.lesson.platforms[0]));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.iconsService.getLevelIcon(ctx_r1.lesson.level), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("alt", \u0275\u0275pipeBind1(11, 15, "lessons.level." + ctx_r1.lesson.level));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 17, "lessons.level." + ctx_r1.lesson.level));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.lesson.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.lesson.tags && ctx_r1.lesson.tags.length ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.lesson.version ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r1.markdownContent);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isPreviewOpen ? 23 : -1);
  }
}
function LessonViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p");
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
  previewImageRef;
  _sanitizer = inject(DomSanitizer);
  iconsService = inject(LessonIconsService);
  _contentRendered = false;
  _imageHandlers = /* @__PURE__ */ new Map();
  _activePointers = /* @__PURE__ */ new Map();
  _initialPinchDistance = 0;
  _initialScale = 1;
  _lastPointerPosition = null;
  _lockedScrollPosition = 0;
  _minScale = 1;
  _maxScale = 5;
  // View content
  markdownContent = "";
  isPreviewOpen = false;
  previewImageSrc = "";
  previewImageAlt = "";
  previewScale = 1;
  previewTranslateX = 0;
  previewTranslateY = 0;
  isPreviewDragging = false;
  ngOnChanges(changes) {
    if (changes["lesson"] && this.lesson) {
      this.markdownContent = this.extractMarkdownContent(this.lesson.content);
      this.resetContentRendered();
    }
  }
  ngOnDestroy() {
    this.removeImageClickHandlers();
    this.unlockBodyScroll();
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
        this.enhanceImagesForPreview();
      }, 500);
    }
  }
  /**
   * Reset rendering flag when lesson changes
   */
  resetContentRendered() {
    this._contentRendered = false;
    this.removeImageClickHandlers();
  }
  /**
   * Enhance rendered markdown images with preview functionality
   */
  enhanceImagesForPreview() {
    if (!this.markdownContentRef)
      return;
    const container = this.markdownContentRef.nativeElement;
    const images = Array.from(container.querySelectorAll("img"));
    this.removeImageClickHandlers();
    images.forEach((img) => {
      img.style.cursor = "zoom-in";
      img.setAttribute("role", "button");
      img.setAttribute("tabindex", "0");
      const clickHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const target = event.currentTarget;
        this.openPreview(target.currentSrc || target.src, target.alt || "");
      };
      const keyHandler = (event) => {
        const keyboardEvent = event;
        if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
          keyboardEvent.preventDefault();
          this.openPreview(img.currentSrc || img.src, img.alt || "");
        }
      };
      img.addEventListener("click", clickHandler);
      img.addEventListener("keydown", keyHandler);
      this._imageHandlers.set(img, { click: clickHandler, keydown: keyHandler });
    });
  }
  /**
   * Remove image click handlers to avoid duplicates and leaks
   */
  removeImageClickHandlers() {
    this._imageHandlers.forEach((listeners, img) => {
      img.removeEventListener("click", listeners.click);
      img.removeEventListener("keydown", listeners.keydown);
      img.style.cursor = "";
      img.removeAttribute("role");
      img.removeAttribute("tabindex");
    });
    this._imageHandlers.clear();
  }
  /**
   * Open image preview overlay
   */
  openPreview(src, alt) {
    this.previewImageSrc = src;
    this.previewImageAlt = alt;
    this.resetPreviewTransform();
    this.isPreviewOpen = true;
    this.lockBodyScroll();
  }
  /**
   * Close image preview overlay
   */
  closePreview() {
    if (!this.isPreviewOpen) {
      return;
    }
    this.isPreviewOpen = false;
    this.resetPreviewTransform();
    this.unlockBodyScroll();
    this._activePointers.clear();
    this.isPreviewDragging = false;
  }
  /**
   * Reset preview image transform to defaults
   */
  resetPreviewTransform() {
    this.previewScale = 1;
    this.previewTranslateX = 0;
    this.previewTranslateY = 0;
    this.isPreviewDragging = false;
    this._initialScale = 1;
    this._initialPinchDistance = 0;
    this._lastPointerPosition = null;
  }
  /**
   * Handle pointer down events for dragging and pinch zoom
   */
  onPreviewPointerDown(event) {
    if (!this.isPreviewOpen) {
      return;
    }
    const rawTarget = event.target;
    if (rawTarget?.closest(".image-preview-controls") || rawTarget?.closest(".image-preview-close")) {
      return;
    }
    const target = event.currentTarget;
    target.setPointerCapture(event.pointerId);
    this._activePointers.set(event.pointerId, event);
    if (this._activePointers.size === 1) {
      this._lastPointerPosition = { x: event.clientX, y: event.clientY };
      this.isPreviewDragging = this.previewScale > 1;
    } else if (this._activePointers.size === 2) {
      const [first, second] = Array.from(this._activePointers.values());
      this._initialPinchDistance = this.getPointersDistance(first, second);
      this._initialScale = this.previewScale;
      this.isPreviewDragging = false;
    }
    event.preventDefault();
    event.stopPropagation();
  }
  /**
   * Handle pointer move events for dragging and pinch zoom
   */
  onPreviewPointerMove(event) {
    if (!this.isPreviewOpen || !this._activePointers.has(event.pointerId)) {
      return;
    }
    const rawTarget = event.target;
    if (rawTarget?.closest(".image-preview-controls") || rawTarget?.closest(".image-preview-close")) {
      return;
    }
    this._activePointers.set(event.pointerId, event);
    if (this._activePointers.size === 1 && this.previewScale > 1) {
      if (this._lastPointerPosition) {
        const deltaX = event.clientX - this._lastPointerPosition.x;
        const deltaY = event.clientY - this._lastPointerPosition.y;
        this.previewTranslateX += deltaX;
        this.previewTranslateY += deltaY;
        this._lastPointerPosition = { x: event.clientX, y: event.clientY };
      }
    } else if (this._activePointers.size === 2) {
      const [first, second] = Array.from(this._activePointers.values());
      const distance = this.getPointersDistance(first, second);
      if (this._initialPinchDistance > 0) {
        const scale = distance / this._initialPinchDistance * this._initialScale;
        const clamped = Math.max(this._minScale, Math.min(this._maxScale, scale));
        this.previewScale = clamped;
        this.previewTranslateX = 0;
        this.previewTranslateY = 0;
      }
    }
    event.preventDefault();
    event.stopPropagation();
  }
  /**
   * Handle pointer up/cancel events
   */
  onPreviewPointerUp(event) {
    if (!this._activePointers.has(event.pointerId)) {
      return;
    }
    const rawTarget = event.target;
    if (rawTarget?.closest(".image-preview-controls") || rawTarget?.closest(".image-preview-close")) {
      return;
    }
    const target = event.currentTarget;
    if (target.hasPointerCapture(event.pointerId)) {
      target.releasePointerCapture(event.pointerId);
    }
    this._activePointers.delete(event.pointerId);
    if (this._activePointers.size === 1) {
      const [remaining] = Array.from(this._activePointers.values());
      this._lastPointerPosition = { x: remaining.clientX, y: remaining.clientY };
      this.isPreviewDragging = this.previewScale > 1;
    } else {
      this._lastPointerPosition = null;
      this.isPreviewDragging = false;
    }
    if (this._activePointers.size < 2) {
      this._initialPinchDistance = 0;
      this._initialScale = this.previewScale;
    }
    event.preventDefault();
    event.stopPropagation();
  }
  /**
   * Handle mouse wheel zooming
   */
  onPreviewWheel(event) {
    if (!this.isPreviewOpen) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const zoomFactor = event.deltaY < 0 ? 1.1 : 0.9;
    let newScale = this.previewScale * zoomFactor;
    newScale = Math.max(this._minScale, Math.min(this._maxScale, newScale));
    if (newScale === this.previewScale) {
      return;
    }
    this.previewScale = newScale;
    this.previewTranslateX = 0;
    this.previewTranslateY = 0;
    this.isPreviewDragging = false;
  }
  /**
   * Helper to calculate distance between two pointers
   */
  getPointersDistance(first, second) {
    const dx = first.clientX - second.clientX;
    const dy = first.clientY - second.clientY;
    return Math.hypot(dx, dy);
  }
  /**
   * Provide transform styles for preview image
   */
  get previewTransformStyle() {
    return `translate(${this.previewTranslateX}px, ${this.previewTranslateY}px) scale(${this.previewScale})`;
  }
  /**
   * Handle zoom control buttons
   */
  changeZoom(delta) {
    const newScale = Math.max(this._minScale, Math.min(this._maxScale, this.previewScale + delta));
    if (newScale === this.previewScale) {
      return;
    }
    this.previewScale = newScale;
    this.previewTranslateX = 0;
    this.previewTranslateY = 0;
    this.isPreviewDragging = false;
    this._initialScale = newScale;
    this._initialPinchDistance = 0;
    this._lastPointerPosition = null;
  }
  /**
   * Lock body scroll when preview is open
   */
  lockBodyScroll() {
    if (typeof document === "undefined" || typeof window === "undefined")
      return;
    this._lockedScrollPosition = window.scrollY;
    document.body.style.top = `-${this._lockedScrollPosition}px`;
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "contain";
  }
  /**
   * Unlock body scroll when preview is closed
   */
  unlockBodyScroll() {
    if (typeof document === "undefined" || typeof window === "undefined")
      return;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    document.body.style.overscrollBehavior = "";
    window.scrollTo(0, this._lockedScrollPosition);
  }
  /**
   * Close preview on Escape key
   */
  handleKeydown(event) {
    if (event.key === "Escape" && this.isPreviewOpen) {
      event.preventDefault();
      this.closePreview();
    }
  }
  static \u0275fac = function LessonViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessonViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LessonViewComponent, selectors: [["app-lesson-view"]], viewQuery: function LessonViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.markdownContentRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.previewImageRef = _t.first);
    }
  }, hostBindings: function LessonViewComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function LessonViewComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      }, \u0275\u0275resolveWindow);
    }
  }, inputs: { lesson: "lesson" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["markdownContainer", ""], ["previewImage", ""], [1, "lesson-view"], [1, "lesson-loading"], [1, "lesson-header"], [1, "lesson-meta"], [1, "lesson-platform"], [1, "platform-icon", 3, "src"], [1, "platform-name"], [1, "lesson-level"], [1, "level-icon", 3, "src"], [1, "level-name"], [1, "lesson-title"], [1, "lesson-info"], [1, "lesson-tags"], [1, "lesson-version"], [1, "lesson-content"], ["lineNumbers", "", "emoji", "", 1, "markdown-content", 3, "data"], [1, "image-preview-overlay"], [1, "lesson-tag"], [1, "version-label"], [1, "image-preview-overlay", 3, "click"], [1, "image-preview-content", 3, "click", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerleave", "wheel"], ["draggable", "false", 3, "src", "alt"], [1, "image-preview-controls"], ["type", "button", "aria-label", "Zoom in", 1, "control-btn", 3, "click"], ["type", "button", "aria-label", "Zoom out", 1, "control-btn", 3, "click"], ["type", "button", "aria-label", "Reset zoom", 1, "control-btn", 3, "click"], ["type", "button", "aria-label", "Close image preview", 1, "image-preview-close", 3, "click"]], template: function LessonViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, LessonViewComponent_Conditional_0_Template, 24, 19, "div", 2)(1, LessonViewComponent_Conditional_1_Template, 4, 3, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.lesson ? 0 : 1);
    }
  }, dependencies: [CommonModule, TranslateModule, MarkdownModule, MarkdownComponent, TranslatePipe], styles: ['\n\n.lesson-view[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n}\n.lesson-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.lesson-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.lesson-platform[_ngcontent-%COMP%], \n.lesson-level[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  padding: 0.25rem 0.75rem;\n  background: var(--color-surface);\n  border-radius: 16px;\n}\n.platform-icon[_ngcontent-%COMP%], \n.level-icon[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  object-fit: contain;\n}\n.lesson-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.lesson-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.lesson-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.lesson-tag[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  background: var(--color-bg);\n  border-radius: 16px;\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n}\n.lesson-version[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n}\n.lesson-content[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n  .markdown-content {\n  line-height: 1.6;\n  color: var(--text-primary);\n}\n  .markdown-content h1, \n  .markdown-content h2, \n  .markdown-content h3, \n  .markdown-content h4, \n  .markdown-content h5, \n  .markdown-content h6 {\n  margin-top: 1.5em;\n  margin-bottom: 0.75em;\n  font-family: var(--font-display);\n  font-weight: var(--font-weight-bold);\n  color: var(--text-primary);\n}\n  .markdown-content h1 {\n  font-size: var(--text-3xl);\n}\n  .markdown-content h2 {\n  font-size: var(--text-2xl);\n}\n  .markdown-content h3 {\n  font-size: var(--text-xl);\n}\n  .markdown-content p {\n  margin-bottom: 1.5em;\n}\n  .markdown-content ul, \n  .markdown-content ol {\n  margin-bottom: 1.5em;\n  padding-left: 1.5em;\n}\n  .markdown-content li {\n  margin-bottom: 0.5em;\n}\n  .markdown-content code:not([class*=language-]) {\n  font-family:\n    Consolas,\n    Monaco,\n    "Andale Mono",\n    "Ubuntu Mono",\n    monospace;\n  background: var(--color-bg);\n  padding: 0.2em 0.4em;\n  border-radius: 3px;\n  font-size: 0.9em;\n}\n  .markdown-content pre {\n  padding: 0;\n  margin-bottom: 1.5em;\n  border-radius: 8px;\n  overflow: auto;\n  scrollbar-width: auto;\n  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;\n}\n  .markdown-content pre::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n  .markdown-content pre::-webkit-scrollbar-track {\n  background: transparent;\n}\n  .markdown-content pre::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n  .markdown-content pre::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.4);\n}\n  .markdown-content pre:hover::-webkit-scrollbar-thumb {\n  opacity: 1;\n}\n  .markdown-content pre code {\n  background: transparent;\n  padding: 0;\n}\n  .markdown-content pre[class*=language-] {\n  position: relative;\n  margin: 1em 0;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n  .markdown-content .line-numbers .line-numbers-rows {\n  padding: 1em 0;\n}\n  .markdown-content div.code-toolbar > .toolbar {\n  top: 0.3em;\n  right: 0.3em;\n  transition: opacity 0.3s ease;\n}\n  .markdown-content div.code-toolbar > .toolbar button {\n  cursor: pointer;\n}\n  .markdown-content img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  margin: 1.5em 0;\n}\n  .markdown-content blockquote {\n  border-left: 4px solid var(--color-primary);\n  padding-left: 1em;\n  margin-left: 0;\n  margin-right: 0;\n  font-style: italic;\n  color: var(--text-secondary);\n}\n  .markdown-content table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 1.5em;\n}\n  .markdown-content table th, \n  .markdown-content table td {\n  border: 1px solid var(--color-border);\n  padding: 0.5em;\n  text-align: left;\n}\n  .markdown-content table th {\n  background: var(--color-bg);\n  font-weight: var(--font-weight-medium);\n}\n  .markdown-content pre[class*=language-] {\n  text-shadow: none;\n}\n.lesson-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 300px;\n}\n.lesson-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n}\n.image-preview-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  z-index: 2000;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.image-preview-content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 100%;\n  max-height: 100%;\n  touch-action: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.image-preview-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: min(90vw, 1200px);\n  max-height: 80vh;\n  border-radius: 12px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);\n  cursor: grab;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: transform 0.05s ease-out;\n}\n.image-preview-content.dragging[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: grabbing;\n}\n.image-preview-controls[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: rgba(0, 0, 0, 0.65);\n  padding: 0.6rem 1rem;\n  border-radius: 999px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n  z-index: 2100;\n}\n.control-btn[_ngcontent-%COMP%] {\n  min-width: 2.75rem;\n  height: 2.75rem;\n  border: none;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #111;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease,\n    color 0.2s ease;\n}\n.control-btn[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #000;\n  transform: translateY(-1px);\n}\n.control-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.image-preview-close[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  border: none;\n  border-radius: 999px;\n  background: rgba(0, 0, 0, 0.75);\n  color: #fff;\n  padding: 0.6rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s ease, transform 0.2s ease;\n  z-index: 2100;\n}\n.image-preview-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.85);\n  transform: translateY(-1px);\n}\n.image-preview-close[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n@media (max-width: 768px) {\n  .image-preview-content[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .image-preview-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 75vh;\n  }\n  .image-preview-close[_ngcontent-%COMP%] {\n    top: 0.75rem;\n    right: 0.75rem;\n  }\n  .image-preview-controls[_ngcontent-%COMP%] {\n    top: 0.75rem;\n    padding: 0.5rem 0.75rem;\n    gap: 0.5rem;\n  }\n  .control-btn[_ngcontent-%COMP%] {\n    min-width: 2.5rem;\n    height: 2.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .lesson-title[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  .lesson-content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=lesson-view.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessonViewComponent, [{
    type: Component,
    args: [{ selector: "app-lesson-view", standalone: true, imports: [CommonModule, TranslateModule, MarkdownModule], template: `@if (lesson) {
  <div class="lesson-view">
    <div class="lesson-header">
      <div class="lesson-meta">
        <div class="lesson-platform">
          <img
            [src]="iconsService.getPlatformIcon(lesson.platforms[0])"
            class="platform-icon"
            [attr.alt]="('lessons.platform.' + lesson.platforms[0]) | translate"
          />
          <span class="platform-name">{{ 'lessons.platform.' + lesson.platforms[0] | translate }}</span>
        </div>
        <div class="lesson-level">
          <img
            [src]="iconsService.getLevelIcon(lesson.level)"
            class="level-icon"
            [attr.alt]="('lessons.level.' + lesson.level) | translate"
          />
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

    @if (isPreviewOpen) {
      <div class="image-preview-overlay" (click)="closePreview()">
        <div
          class="image-preview-content"
          (click)="$event.stopPropagation()"
          (pointerdown)="onPreviewPointerDown($event)"
          (pointermove)="onPreviewPointerMove($event)"
          (pointerup)="onPreviewPointerUp($event)"
          (pointercancel)="onPreviewPointerUp($event)"
          (pointerleave)="onPreviewPointerUp($event)"
          (wheel)="onPreviewWheel($event)"
          [class.dragging]="isPreviewDragging"
        >
          <img
            #previewImage
            [src]="previewImageSrc"
            [alt]="previewImageAlt"
            [style.transform]="previewTransformStyle"
            draggable="false"
          />
        </div>

        <div class="image-preview-controls">
          <button type="button" class="control-btn" (click)="changeZoom(0.2)" aria-label="Zoom in">+</button>
          <button type="button" class="control-btn" (click)="changeZoom(-0.2)" aria-label="Zoom out">-</button>
          <button type="button" class="control-btn" (click)="resetPreviewTransform()" aria-label="Reset zoom">
            Reset
          </button>
        </div>

        <button
          type="button"
          class="image-preview-close"
          (click)="closePreview()"
          aria-label="Close image preview"
        >
          Close
        </button>
      </div>
    }
  </div>
} @else {
  <div class="lesson-loading">
    <p>{{ 'lessons.loading' | translate }}</p>
  </div>
}
`, styles: ['/* src/app/modules/lessons/components/lesson-view/lesson-view.component.scss */\n.lesson-view {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n}\n.lesson-header {\n  margin-bottom: 2rem;\n}\n.lesson-meta {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.lesson-platform,\n.lesson-level {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  padding: 0.25rem 0.75rem;\n  background: var(--color-surface);\n  border-radius: 16px;\n}\n.platform-icon,\n.level-icon {\n  width: 1.75rem;\n  height: 1.75rem;\n  object-fit: contain;\n}\n.lesson-title {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.lesson-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.lesson-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.lesson-tag {\n  padding: 0.25rem 0.75rem;\n  background: var(--color-bg);\n  border-radius: 16px;\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n}\n.lesson-version {\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n}\n.lesson-content {\n  background: var(--color-surface);\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n::ng-deep .markdown-content {\n  line-height: 1.6;\n  color: var(--text-primary);\n}\n::ng-deep .markdown-content h1,\n::ng-deep .markdown-content h2,\n::ng-deep .markdown-content h3,\n::ng-deep .markdown-content h4,\n::ng-deep .markdown-content h5,\n::ng-deep .markdown-content h6 {\n  margin-top: 1.5em;\n  margin-bottom: 0.75em;\n  font-family: var(--font-display);\n  font-weight: var(--font-weight-bold);\n  color: var(--text-primary);\n}\n::ng-deep .markdown-content h1 {\n  font-size: var(--text-3xl);\n}\n::ng-deep .markdown-content h2 {\n  font-size: var(--text-2xl);\n}\n::ng-deep .markdown-content h3 {\n  font-size: var(--text-xl);\n}\n::ng-deep .markdown-content p {\n  margin-bottom: 1.5em;\n}\n::ng-deep .markdown-content ul,\n::ng-deep .markdown-content ol {\n  margin-bottom: 1.5em;\n  padding-left: 1.5em;\n}\n::ng-deep .markdown-content li {\n  margin-bottom: 0.5em;\n}\n::ng-deep .markdown-content code:not([class*=language-]) {\n  font-family:\n    Consolas,\n    Monaco,\n    "Andale Mono",\n    "Ubuntu Mono",\n    monospace;\n  background: var(--color-bg);\n  padding: 0.2em 0.4em;\n  border-radius: 3px;\n  font-size: 0.9em;\n}\n::ng-deep .markdown-content pre {\n  padding: 0;\n  margin-bottom: 1.5em;\n  border-radius: 8px;\n  overflow: auto;\n  scrollbar-width: auto;\n  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;\n}\n::ng-deep .markdown-content pre::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n::ng-deep .markdown-content pre::-webkit-scrollbar-track {\n  background: transparent;\n}\n::ng-deep .markdown-content pre::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n::ng-deep .markdown-content pre::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.4);\n}\n::ng-deep .markdown-content pre:hover::-webkit-scrollbar-thumb {\n  opacity: 1;\n}\n::ng-deep .markdown-content pre code {\n  background: transparent;\n  padding: 0;\n}\n::ng-deep .markdown-content pre[class*=language-] {\n  position: relative;\n  margin: 1em 0;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n::ng-deep .markdown-content .line-numbers .line-numbers-rows {\n  padding: 1em 0;\n}\n::ng-deep .markdown-content div.code-toolbar > .toolbar {\n  top: 0.3em;\n  right: 0.3em;\n  transition: opacity 0.3s ease;\n}\n::ng-deep .markdown-content div.code-toolbar > .toolbar button {\n  cursor: pointer;\n}\n::ng-deep .markdown-content img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  margin: 1.5em 0;\n}\n::ng-deep .markdown-content blockquote {\n  border-left: 4px solid var(--color-primary);\n  padding-left: 1em;\n  margin-left: 0;\n  margin-right: 0;\n  font-style: italic;\n  color: var(--text-secondary);\n}\n::ng-deep .markdown-content table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 1.5em;\n}\n::ng-deep .markdown-content table th,\n::ng-deep .markdown-content table td {\n  border: 1px solid var(--color-border);\n  padding: 0.5em;\n  text-align: left;\n}\n::ng-deep .markdown-content table th {\n  background: var(--color-bg);\n  font-weight: var(--font-weight-medium);\n}\n::ng-deep .markdown-content pre[class*=language-] {\n  text-shadow: none;\n}\n.lesson-loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 300px;\n}\n.lesson-loading p {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n}\n.image-preview-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.85);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  z-index: 2000;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.image-preview-content {\n  position: relative;\n  max-width: 100%;\n  max-height: 100%;\n  touch-action: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.image-preview-content img {\n  max-width: min(90vw, 1200px);\n  max-height: 80vh;\n  border-radius: 12px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);\n  cursor: grab;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: transform 0.05s ease-out;\n}\n.image-preview-content.dragging img {\n  cursor: grabbing;\n}\n.image-preview-controls {\n  position: fixed;\n  top: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: rgba(0, 0, 0, 0.65);\n  padding: 0.6rem 1rem;\n  border-radius: 999px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n  z-index: 2100;\n}\n.control-btn {\n  min-width: 2.75rem;\n  height: 2.75rem;\n  border: none;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #111;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease,\n    color 0.2s ease;\n}\n.control-btn:hover {\n  background: #fff;\n  color: #000;\n  transform: translateY(-1px);\n}\n.control-btn:active {\n  transform: scale(0.95);\n}\n.image-preview-close {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  border: none;\n  border-radius: 999px;\n  background: rgba(0, 0, 0, 0.75);\n  color: #fff;\n  padding: 0.6rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s ease, transform 0.2s ease;\n  z-index: 2100;\n}\n.image-preview-close:hover {\n  background: rgba(0, 0, 0, 0.85);\n  transform: translateY(-1px);\n}\n.image-preview-close:active {\n  transform: scale(0.95);\n}\n@media (max-width: 768px) {\n  .image-preview-content {\n    gap: 0.75rem;\n  }\n  .image-preview-content img {\n    max-height: 75vh;\n  }\n  .image-preview-close {\n    top: 0.75rem;\n    right: 0.75rem;\n  }\n  .image-preview-controls {\n    top: 0.75rem;\n    padding: 0.5rem 0.75rem;\n    gap: 0.5rem;\n  }\n  .control-btn {\n    min-width: 2.5rem;\n    height: 2.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .lesson-title {\n    font-size: var(--text-3xl);\n  }\n  .lesson-content {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=lesson-view.component.css.map */\n'] }]
  }], null, { lesson: [{
    type: Input
  }], markdownContentRef: [{
    type: ViewChild,
    args: ["markdownContainer"]
  }], previewImageRef: [{
    type: ViewChild,
    args: ["previewImage"]
  }], handleKeydown: [{
    type: HostListener,
    args: ["window:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LessonViewComponent, { className: "LessonViewComponent", filePath: "src/app/modules/lessons/components/lesson-view/lesson-view.component.ts", lineNumber: 27 });
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
  }, dependencies: [CommonModule, TranslateModule, LessonViewComponent, SeoModule, TranslatePipe], styles: ["\n\n.lesson-detail-page[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.lesson-detail-page__nav[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto 1rem;\n}\n.back-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-primary);\n  font-size: var(--text-base);\n  cursor: pointer;\n  padding: 0.5rem 0;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.lesson-detail-page__error[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: var(--color-surface);\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.lesson-detail-page__error[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--color-error);\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=lesson-detail-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessonDetailPageComponent, [{
    type: Component,
    args: [{ selector: "app-lesson-detail-page", standalone: true, imports: [CommonModule, TranslateModule, LessonViewComponent, SeoModule], template: `
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
//# sourceMappingURL=chunk-SN62OHCB.js.map

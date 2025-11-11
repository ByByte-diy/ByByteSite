import {
  HttpClient,
  Injectable,
  PLATFORM_ID,
  catchError,
  environment,
  init_common,
  init_core,
  init_esm,
  init_http,
  inject,
  isPlatformBrowser,
  map,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-6LT3BS5M.js";
import {
  __require,
  __spreadProps,
  __spreadValues
} from "./chunk-MXU7DO7X.js";

// src/app/modules/lessons/services/lessons.service.ts
init_http();
init_core();
init_common();
init_esm();

// src/assets/content/index.json
var content_default = {
  lessons: [
    {
      title: "Blinking LED",
      slug: "blink",
      lang: "en",
      platforms: [
        "arduino"
      ],
      level: "beginner",
      tags: [
        "led",
        "digital outputs"
      ],
      published: true,
      version: "1.0.0",
      description: "Classic example with a blinking LED for Arduino.",
      duration: null,
      difficulty: null
    },
    {
      title: "\u041C\u0438\u0433\u0430\u044E\u0447\u0438\u0439 \u0441\u0432\u0456\u0442\u043B\u043E\u0434\u0456\u043E\u0434",
      slug: "blink",
      lang: "uk",
      platforms: [
        "arduino"
      ],
      level: "beginner",
      tags: [
        "\u0441\u0432\u0456\u0442\u043B\u043E\u0434\u0456\u043E\u0434",
        "\u0446\u0438\u0444\u0440\u043E\u0432\u0456 \u0432\u0438\u0445\u043E\u0434\u0438"
      ],
      published: true,
      version: "1.0.0",
      description: "\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u043F\u0440\u0438\u043A\u043B\u0430\u0434 \u0437 \u043C\u0438\u0433\u0430\u044E\u0447\u0438\u043C \u0441\u0432\u0456\u0442\u043B\u043E\u0434\u0456\u043E\u0434\u043E\u043C \u0434\u043B\u044F Arduino.",
      duration: null,
      difficulty: null
    }
  ],
  platforms: [
    "arduino"
  ],
  levels: [
    "beginner"
  ],
  tags: [
    "digital outputs",
    "led",
    "\u0441\u0432\u0456\u0442\u043B\u043E\u0434\u0456\u043E\u0434",
    "\u0446\u0438\u0444\u0440\u043E\u0432\u0456 \u0432\u0438\u0445\u043E\u0434\u0438"
  ],
  languages: [
    "en",
    "uk"
  ],
  generatedAt: "2025-11-11T14:40:39.261Z",
  totalLessons: 2
};

// src/app/modules/lessons/services/lessons.service.ts
init_core();
var LessonsService = class _LessonsService {
  _http = inject(HttpClient);
  platformId = inject(PLATFORM_ID);
  _lessonsIndex = signal(null, ...ngDevMode ? [{ debugName: "_lessonsIndex" }] : []);
  _currentLesson = signal(null, ...ngDevMode ? [{ debugName: "_currentLesson" }] : []);
  _isLoading = signal(false, ...ngDevMode ? [{ debugName: "_isLoading" }] : []);
  _error = signal(null, ...ngDevMode ? [{ debugName: "_error" }] : []);
  get lessonsIndex() {
    return this._lessonsIndex;
  }
  get currentLesson() {
    return this._currentLesson;
  }
  get isLoading() {
    return this._isLoading;
  }
  get error() {
    return this._error;
  }
  loadLessonsIndex() {
    this._isLoading.set(true);
    this._error.set(null);
    return of(content_default).pipe(tap((index) => {
      this._lessonsIndex.set(index);
      this._isLoading.set(false);
    }), catchError((err) => {
      this._error.set("Failed to load lessons index");
      this._isLoading.set(false);
      console.error("Error loading lessons index:", err);
      return of({ lessons: [], platforms: [], levels: [], tags: [], languages: [] });
    }));
  }
  loadLesson(slug, lang, platform) {
    this._isLoading.set(true);
    this._error.set(null);
    const lessonMeta = this._findLessonMeta(slug, lang, platform);
    if (!lessonMeta) {
      this._error.set(`Lesson not found: ${slug}`);
      this._isLoading.set(false);
      return of(null);
    }
    const contentPath = this._buildLessonPath(lessonMeta);
    if (!isPlatformBrowser(this.platformId)) {
      try {
        const fs = __require("fs");
        const path = __require("path");
        const filePath = path.join(process.cwd(), "src/assets/content", lang, platform, lessonMeta.level, `${slug}.md`);
        const content = fs.readFileSync(filePath, "utf8");
        const lesson = __spreadProps(__spreadValues({}, lessonMeta), {
          content,
          contentPath
        });
        this._currentLesson.set(lesson);
        this._isLoading.set(false);
        return of(lesson);
      } catch (error) {
        console.error("Error reading lesson file:", error);
        const lesson = __spreadProps(__spreadValues({}, lessonMeta), {
          content: "",
          contentPath
        });
        this._currentLesson.set(lesson);
        this._isLoading.set(false);
        return of(lesson);
      }
    }
    return this._http.get(contentPath, { responseType: "text" }).pipe(map((content) => {
      const lesson = __spreadProps(__spreadValues({}, lessonMeta), {
        content,
        contentPath
      });
      this._currentLesson.set(lesson);
      this._isLoading.set(false);
      return lesson;
    }), catchError((err) => {
      this._error.set(`Failed to load lesson: ${slug}`);
      this._isLoading.set(false);
      console.error(`Error loading lesson ${slug}:`, err);
      return of(null);
    }));
  }
  filterLessons(options) {
    const index = this._lessonsIndex();
    if (!index)
      return [];
    return index.lessons.filter((lesson) => {
      if (options.platform && !lesson.platforms.includes(options.platform)) {
        return false;
      }
      if (options.level && lesson.level !== options.level) {
        return false;
      }
      if (options.lang && lesson.lang !== options.lang) {
        return false;
      }
      if (options.tag && !lesson.tags.includes(options.tag)) {
        return false;
      }
      if (options.searchTerm) {
        const term = options.searchTerm.toLowerCase();
        return lesson.title.toLowerCase().includes(term) || lesson.description?.toLowerCase().includes(term) || lesson.tags.some((tag) => tag.toLowerCase().includes(term));
      }
      return true;
    });
  }
  _findLessonMeta(slug, lang, platform) {
    const index = this._lessonsIndex();
    if (!index)
      return null;
    return index.lessons.find((lesson) => lesson.slug === slug && lesson.lang === lang && lesson.platforms.includes(platform)) || null;
  }
  _buildLessonPath(lesson) {
    return `${environment.contentBasePath}/${lesson.lang}/${lesson.platforms[0]}/${lesson.level}/${lesson.slug}.md`;
  }
  static \u0275fac = function LessonsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessonsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LessonsService, factory: _LessonsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessonsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/lessons/services/lesson-icons.service.ts
init_core();
init_core();
var LessonIconsService = class _LessonIconsService {
  getPlatformIcon(platform) {
    const icons = {
      arduino: "\u{1F50C}",
      raspberry: "\u{1F353}",
      esp8266: "\u{1F4E1}",
      esp32: "\u{1F4E1}",
      default: "\u{1F916}"
    };
    return icons[platform] || icons["default"];
  }
  getLevelIcon(level) {
    const icons = {
      beginner: "\u{1F7E2}",
      intermediate: "\u{1F7E1}",
      advanced: "\u{1F534}",
      default: "\u26AA"
    };
    return icons[level] || icons["default"];
  }
  static \u0275fac = function LessonIconsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessonIconsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LessonIconsService, factory: _LessonIconsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessonIconsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  LessonsService,
  LessonIconsService
};
//# sourceMappingURL=chunk-ZZLTD5R7.js.map

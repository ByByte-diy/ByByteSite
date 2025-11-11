import {
  LessonIconsService,
  LessonsService
} from "./chunk-JBIVTYRM.js";
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
  EventEmitter,
  Input,
  Output,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  init_common,
  init_core,
  init_router,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6LT3BS5M.js";
import "./chunk-MXU7DO7X.js";

// src/app/modules/lessons/pages/lessons-page/lessons-page.component.ts
init_core();
init_common();

// src/app/modules/lessons/components/lessons-list/lessons-list.component.ts
init_core();
init_router();
init_common();

// src/app/modules/lessons/components/lesson-filter/lesson-filter.component.ts
init_core();
init_common();
init_core();
function LessonFilterComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 6);
    \u0275\u0275domListener("click", function LessonFilterComponent_For_14_Template_button_click_0_listener() {
      const platform_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPlatformChange(platform_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const platform_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedPlatform === platform_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "lessons.platform." + platform_r2), " ");
  }
}
function LessonFilterComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 6);
    \u0275\u0275domListener("click", function LessonFilterComponent_For_24_Template_button_click_0_listener() {
      const level_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLevelChange(level_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedLevel === level_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "lessons.level." + level_r5), " ");
  }
}
function LessonFilterComponent_Conditional_25_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "span", 12);
    \u0275\u0275domListener("click", function LessonFilterComponent_Conditional_25_For_6_Template_span_click_0_listener() {
      const tag_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onTagChange(tag_r7 === ctx_r2.selectedTag ? null : tag_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.selectedTag === tag_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r7, " ");
  }
}
function LessonFilterComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 10);
    \u0275\u0275repeaterCreate(5, LessonFilterComponent_Conditional_25_For_6_Template, 2, 3, "span", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "lessons.filter.tags"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.tags);
  }
}
var LessonFilterComponent = class _LessonFilterComponent {
  platforms = [];
  levels = [];
  tags = [];
  selectedPlatform = null;
  selectedLevel = null;
  selectedTag = null;
  searchTerm = "";
  filterChange = new EventEmitter();
  /**
   * Handle platform change
   */
  onPlatformChange(platform) {
    this.selectedPlatform = platform;
    this.emitFilterChange();
  }
  /**
   * Handle level change
   */
  onLevelChange(level) {
    this.selectedLevel = level;
    this.emitFilterChange();
  }
  /**
   * Handle tag change
   */
  onTagChange(tag) {
    this.selectedTag = tag;
    this.emitFilterChange();
  }
  /**
   * Handle search term change
   */
  onSearchChange(event) {
    this.searchTerm = event.target.value;
    this.emitFilterChange();
  }
  /**
   * Reset all filters
   */
  resetFilters() {
    this.selectedPlatform = null;
    this.selectedLevel = null;
    this.selectedTag = null;
    this.searchTerm = "";
    this.emitFilterChange();
  }
  /**
   * Emit filter change event
   */
  emitFilterChange() {
    this.filterChange.emit({
      platform: this.selectedPlatform || void 0,
      level: this.selectedLevel || void 0,
      tag: this.selectedTag || void 0,
      searchTerm: this.searchTerm || void 0
    });
  }
  static \u0275fac = function LessonFilterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessonFilterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LessonFilterComponent, selectors: [["app-lesson-filter"]], inputs: { platforms: "platforms", levels: "levels", tags: "tags", selectedPlatform: "selectedPlatform", selectedLevel: "selectedLevel", selectedTag: "selectedTag", searchTerm: "searchTerm" }, outputs: { filterChange: "filterChange" }, decls: 30, vars: 24, consts: [[1, "filter-container"], [1, "filter-search"], ["type", "text", 3, "input", "placeholder", "value"], [1, "filter-options"], [1, "filter-group"], [1, "filter-buttons"], [1, "filter-button", 3, "click"], [1, "filter-button", 3, "active"], [1, "filter-actions"], [1, "reset-button", 3, "click"], [1, "filter-tags"], [1, "filter-tag", 3, "active"], [1, "filter-tag", 3, "click"]], template: function LessonFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "input", 2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275domListener("input", function LessonFilterComponent_Template_input_input_2_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 3)(5, "div", 4)(6, "label");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "div", 5)(10, "button", 6);
      \u0275\u0275domListener("click", function LessonFilterComponent_Template_button_click_10_listener() {
        return ctx.onPlatformChange(null);
      });
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(13, LessonFilterComponent_For_14_Template, 3, 5, "button", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(15, "div", 4)(16, "label");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "div", 5)(20, "button", 6);
      \u0275\u0275domListener("click", function LessonFilterComponent_Template_button_click_20_listener() {
        return ctx.onLevelChange(null);
      });
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(23, LessonFilterComponent_For_24_Template, 3, 5, "button", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(25, LessonFilterComponent_Conditional_25_Template, 7, 3, "div", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "div", 8)(27, "button", 9);
      \u0275\u0275domListener("click", function LessonFilterComponent_Template_button_click_27_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("placeholder", \u0275\u0275pipeBind1(3, 12, "lessons.filter.search"))("value", ctx.searchTerm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 14, "lessons.filter.platform"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", !ctx.selectedPlatform);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 16, "lessons.filter.all"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.platforms);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 18, "lessons.filter.level"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", !ctx.selectedLevel);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 20, "lessons.filter.all"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.levels);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tags.length ? 25 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 22, "lessons.filter.reset"), " ");
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n.filter-container[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: var(--color-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.filter-search[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.filter-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid var(--color-border);\n  border-radius: 8px;\n  font-size: var(--text-base);\n  color: var(--text-primary);\n  background: var(--color-bg);\n}\n.filter-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.2);\n}\n.filter-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--text-sm);\n  font-weight: var(--font-weight-medium);\n  color: var(--text-secondary);\n  margin-bottom: 0.5rem;\n}\n.filter-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.filter-button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--color-border);\n  border-radius: 6px;\n  background: var(--color-bg);\n  font-size: var(--text-sm);\n  color: var(--text-primary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filter-button[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-hover);\n}\n.filter-button.active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: white;\n  border-color: var(--color-primary);\n}\n.filter-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.filter-tag[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 16px;\n  background: var(--color-bg);\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid var(--color-border);\n}\n.filter-tag[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-hover);\n}\n.filter-tag.active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: white;\n  border-color: var(--color-primary);\n}\n.filter-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  justify-content: flex-end;\n}\n.reset-button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  background: var(--color-bg);\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.reset-button[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-hover);\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .filter-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=lesson-filter.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessonFilterComponent, [{
    type: Component,
    args: [{ selector: "app-lesson-filter", standalone: true, imports: [CommonModule, TranslateModule], template: `<div class="filter-container">
  <div class="filter-search">
    <input
      type="text"
      [placeholder]="'lessons.filter.search' | translate"
      [value]="searchTerm"
      (input)="onSearchChange($event)"
    />
  </div>
  
  <div class="filter-options">
    <div class="filter-group">
      <label>{{ 'lessons.filter.platform' | translate }}</label>
      <div class="filter-buttons">
        <button
          class="filter-button"
          [class.active]="!selectedPlatform"
          (click)="onPlatformChange(null)"
        >
          {{ 'lessons.filter.all' | translate }}
        </button>
        @for (platform of platforms; track platform) {
          <button
            class="filter-button"
            [class.active]="selectedPlatform === platform"
            (click)="onPlatformChange(platform)"
          >
            {{ 'lessons.platform.' + platform | translate }}
          </button>
        }
      </div>
    </div>
    
    <div class="filter-group">
      <label>{{ 'lessons.filter.level' | translate }}</label>
      <div class="filter-buttons">
        <button
          class="filter-button"
          [class.active]="!selectedLevel"
          (click)="onLevelChange(null)"
        >
          {{ 'lessons.filter.all' | translate }}
        </button>
        @for (level of levels; track level) {
          <button
            class="filter-button"
            [class.active]="selectedLevel === level"
            (click)="onLevelChange(level)"
          >
            {{ 'lessons.level.' + level | translate }}
          </button>
        }
      </div>
    </div>
    
    @if (tags.length) {
      <div class="filter-group">
        <label>{{ 'lessons.filter.tags' | translate }}</label>
        <div class="filter-tags">
          @for (tag of tags; track tag) {
            <span
              class="filter-tag"
              [class.active]="selectedTag === tag"
              (click)="onTagChange(tag === selectedTag ? null : tag)"
            >
              {{ tag }}
            </span>
          }
        </div>
      </div>
    }
  </div>
  
  <div class="filter-actions">
    <button class="reset-button" (click)="resetFilters()">
      {{ 'lessons.filter.reset' | translate }}
    </button>
  </div>
</div>
`, styles: ["/* src/app/modules/lessons/components/lesson-filter/lesson-filter.component.scss */\n.filter-container {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: var(--color-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.filter-search {\n  margin-bottom: 1.5rem;\n}\n.filter-search input {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid var(--color-border);\n  border-radius: 8px;\n  font-size: var(--text-base);\n  color: var(--text-primary);\n  background: var(--color-bg);\n}\n.filter-search input:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.2);\n}\n.filter-options {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.filter-group label {\n  display: block;\n  font-size: var(--text-sm);\n  font-weight: var(--font-weight-medium);\n  color: var(--text-secondary);\n  margin-bottom: 0.5rem;\n}\n.filter-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.filter-button {\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--color-border);\n  border-radius: 6px;\n  background: var(--color-bg);\n  font-size: var(--text-sm);\n  color: var(--text-primary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filter-button:hover {\n  background: var(--color-bg-hover);\n}\n.filter-button.active {\n  background: var(--color-primary);\n  color: white;\n  border-color: var(--color-primary);\n}\n.filter-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.filter-tag {\n  padding: 0.25rem 0.75rem;\n  border-radius: 16px;\n  background: var(--color-bg);\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid var(--color-border);\n}\n.filter-tag:hover {\n  background: var(--color-bg-hover);\n}\n.filter-tag.active {\n  background: var(--color-primary);\n  color: white;\n  border-color: var(--color-primary);\n}\n.filter-actions {\n  margin-top: 1.5rem;\n  display: flex;\n  justify-content: flex-end;\n}\n.reset-button {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  background: var(--color-bg);\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.reset-button:hover {\n  background: var(--color-bg-hover);\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .filter-buttons {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=lesson-filter.component.css.map */\n"] }]
  }], null, { platforms: [{
    type: Input
  }], levels: [{
    type: Input
  }], tags: [{
    type: Input
  }], selectedPlatform: [{
    type: Input
  }], selectedLevel: [{
    type: Input
  }], selectedTag: [{
    type: Input
  }], searchTerm: [{
    type: Input
  }], filterChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LessonFilterComponent, { className: "LessonFilterComponent", filePath: "src/app/modules/lessons/components/lesson-filter/lesson-filter.component.ts", lineNumber: 12 });
})();

// src/app/modules/lessons/components/lesson-card/lesson-card.component.ts
init_core();
init_common();
init_core();
function LessonCardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lesson.description);
  }
}
function LessonCardComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r2);
  }
}
function LessonCardComponent_Conditional_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", ctx_r0.lesson.tags.length - 3);
  }
}
function LessonCardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, LessonCardComponent_Conditional_19_For_2_Template, 2, 1, "span", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, LessonCardComponent_Conditional_19_Conditional_3_Template, 2, 1, "span", 15);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.lesson.tags.slice(0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.lesson.tags.length > 3 ? 3 : -1);
  }
}
function LessonCardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 13)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("v", ctx_r0.lesson.version);
  }
}
var LessonCardComponent = class _LessonCardComponent {
  lesson;
  routerService = inject(RouterService);
  iconsService = inject(LessonIconsService);
  /**
   * Move to lesson page with language prefix
   */
  navigateToLesson() {
    const lessonPath = `/learn/${this.lesson.platforms[0]}/${this.lesson.level}/${this.lesson.slug}`;
    this.routerService.navigateTo(lessonPath);
  }
  static \u0275fac = function LessonCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessonCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LessonCardComponent, selectors: [["app-lesson-card"]], inputs: { lesson: "lesson" }, decls: 21, vars: 12, consts: [[1, "lesson-card", 3, "click"], [1, "lesson-card__header"], [1, "lesson-platform"], [1, "platform-icon"], [1, "platform-name"], [1, "lesson-level"], [1, "level-icon"], [1, "level-name"], [1, "lesson-card__content"], [1, "lesson-title"], [1, "lesson-description"], [1, "lesson-card__footer"], [1, "lesson-tags"], [1, "lesson-version"], [1, "lesson-tag"], [1, "lesson-tag", "more"], [1, "version-label"]], template: function LessonCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domListener("click", function LessonCardComponent_Template_div_click_0_listener() {
        return ctx.navigateToLesson();
      });
      \u0275\u0275domElementStart(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "div", 5)(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "span", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(14, "div", 8)(15, "h3", 9);
      \u0275\u0275text(16);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(17, LessonCardComponent_Conditional_17_Template, 2, 1, "p", 10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "div", 11);
      \u0275\u0275conditionalCreate(19, LessonCardComponent_Conditional_19_Template, 4, 1, "div", 12);
      \u0275\u0275conditionalCreate(20, LessonCardComponent_Conditional_20_Template, 3, 1, "div", 13);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.iconsService.getPlatformIcon(ctx.lesson.platforms[0]));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "lessons.platform." + ctx.lesson.platforms[0]));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.iconsService.getLevelIcon(ctx.lesson.level));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "lessons.level." + ctx.lesson.level));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.lesson.title);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.lesson.description ? 17 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.lesson.tags.length ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.lesson.version ? 20 : -1);
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n.lesson-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.lesson-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.lesson-card__header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--color-border);\n}\n.lesson-platform[_ngcontent-%COMP%], \n.lesson-level[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n}\n.platform-icon[_ngcontent-%COMP%], \n.level-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.lesson-card__content[_ngcontent-%COMP%] {\n  padding: 1rem;\n  flex: 1;\n}\n.lesson-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n.lesson-description[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  line-height: 1.5;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.lesson-card__footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid var(--color-border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.lesson-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n}\n.lesson-tag[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  background: var(--color-bg);\n  border-radius: 12px;\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n}\n.lesson-tag.more[_ngcontent-%COMP%] {\n  background: var(--color-bg-hover);\n}\n.lesson-version[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n  background: var(--color-bg);\n  padding: 0.2rem 0.5rem;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=lesson-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessonCardComponent, [{
    type: Component,
    args: [{ selector: "app-lesson-card", standalone: true, imports: [CommonModule, TranslateModule], template: `<div class="lesson-card" (click)="navigateToLesson()">
  <div class="lesson-card__header">
    <div class="lesson-platform">
      <span class="platform-icon">{{ iconsService.getPlatformIcon(lesson.platforms[0]) }}</span>
      <span class="platform-name">{{ 'lessons.platform.' + lesson.platforms[0] | translate }}</span>
    </div>
    <div class="lesson-level">
      <span class="level-icon">{{ iconsService.getLevelIcon(lesson.level) }}</span>
      <span class="level-name">{{ 'lessons.level.' + lesson.level | translate }}</span>
    </div>
  </div>
  
  <div class="lesson-card__content">
    <h3 class="lesson-title">{{ lesson.title }}</h3>
    @if (lesson.description) {
      <p class="lesson-description">{{ lesson.description }}</p>
    }
  </div>
  
  <div class="lesson-card__footer">
    @if (lesson.tags.length) {
      <div class="lesson-tags">
        @for (tag of lesson.tags.slice(0, 3); track tag) {
          <span class="lesson-tag">{{ tag }}</span>
        }
        @if (lesson.tags.length > 3) {
          <span class="lesson-tag more">+{{ lesson.tags.length - 3 }}</span>
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
`, styles: ["/* src/app/modules/lessons/components/lesson-card/lesson-card.component.scss */\n.lesson-card {\n  background: var(--color-surface);\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.lesson-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.lesson-card__header {\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--color-border);\n}\n.lesson-platform,\n.lesson-level {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n}\n.platform-icon,\n.level-icon {\n  font-size: 1.2em;\n}\n.lesson-card__content {\n  padding: 1rem;\n  flex: 1;\n}\n.lesson-title {\n  font-family: var(--font-display);\n  font-size: var(--text-xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n.lesson-description {\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  line-height: 1.5;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.lesson-card__footer {\n  padding: 1rem;\n  border-top: 1px solid var(--color-border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.lesson-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n}\n.lesson-tag {\n  padding: 0.2rem 0.5rem;\n  background: var(--color-bg);\n  border-radius: 12px;\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n}\n.lesson-tag.more {\n  background: var(--color-bg-hover);\n}\n.lesson-version {\n  font-size: var(--text-xs);\n  color: var(--text-secondary);\n  background: var(--color-bg);\n  padding: 0.2rem 0.5rem;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=lesson-card.component.css.map */\n"] }]
  }], null, { lesson: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LessonCardComponent, { className: "LessonCardComponent", filePath: "src/app/modules/lessons/components/lesson-card/lesson-card.component.ts", lineNumber: 15 });
})();

// src/app/modules/lessons/components/lessons-list/lessons-list.component.ts
init_core();
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.slug;
function LessonsListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "lessons.platform." + ctx_r0.platform));
  }
}
function LessonsListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "lessons.level." + ctx_r0.level));
  }
}
function LessonsListComponent_Conditional_10_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-lesson-card", 7);
  }
  if (rf & 2) {
    const lesson_r2 = ctx.$implicit;
    \u0275\u0275property("lesson", lesson_r2);
  }
}
function LessonsListComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LessonsListComponent_Conditional_10_Conditional_0_For_1_Template, 1, 1, "app-lesson-card", 7, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.filteredLessons);
  }
}
function LessonsListComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "lessons.noLessons"));
  }
}
function LessonsListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LessonsListComponent_Conditional_10_Conditional_0_Template, 2, 0)(1, LessonsListComponent_Conditional_10_Conditional_1_Template, 4, 3, "div", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.filteredLessons.length ? 0 : 1);
  }
}
function LessonsListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "lessons.loading"));
  }
}
var LessonsListComponent = class _LessonsListComponent {
  lessonsService = inject(LessonsService);
  _route = inject(ActivatedRoute);
  _routerService = inject(RouterService);
  _translate = inject(TranslateService);
  // Filters
  platform = null;
  level = null;
  tag = null;
  searchTerm = "";
  // Data
  filteredLessons = [];
  ngOnInit() {
    if (!this.lessonsService.lessonsIndex()) {
      this.lessonsService.loadLessonsIndex().subscribe();
    }
    this._route.paramMap.subscribe((params) => {
      this.platform = params.get("platform");
      this.level = params.get("level");
      this._applyFilters();
    });
    this.lessonsService.lessonsIndex.update((index) => {
      if (index) {
        this._applyFilters();
      }
      return index;
    });
  }
  /**
   * Apply filters to lessons list
   */
  _applyFilters() {
    const currentLang = this._translate.currentLang || this._translate.defaultLang || "";
    this.filteredLessons = this.lessonsService.filterLessons({
      platform: this.platform || void 0,
      level: this.level || void 0,
      lang: currentLang,
      tag: this.tag || void 0,
      searchTerm: this.searchTerm || void 0
    });
  }
  /**
   * Handle filter changes
   */
  onFilterChange(filters) {
    this.platform = filters.platform || null;
    this.level = filters.level || null;
    this.tag = filters.tag || null;
    this.searchTerm = filters.searchTerm || "";
    if (filters.platform !== void 0 || filters.level !== void 0) {
      let lessonPath = "/learn";
      if (filters.platform) {
        lessonPath += `/${filters.platform}`;
        if (filters.level) {
          lessonPath += `/${filters.level}`;
        }
      }
      this._routerService.navigateTo(lessonPath);
    } else {
      this._applyFilters();
    }
  }
  static \u0275fac = function LessonsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessonsListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LessonsListComponent, selectors: [["app-lessons-list"]], decls: 12, vars: 16, consts: [[1, "lessons-container"], [3, "filterChange", "platforms", "levels", "tags", "selectedPlatform", "selectedLevel", "selectedTag", "searchTerm"], [1, "lessons-list"], [1, "lessons-header"], [1, "lessons-grid"], [1, "lessons-loading"], [1, "lessons-empty"], [3, "lesson"]], template: function LessonsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-lesson-filter", 1);
      \u0275\u0275listener("filterChange", function LessonsListComponent_Template_app_lesson_filter_filterChange_1_listener($event) {
        return ctx.onFilterChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "h2");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, LessonsListComponent_Conditional_7_Template, 3, 3, "p");
      \u0275\u0275conditionalCreate(8, LessonsListComponent_Conditional_8_Template, 3, 3, "p");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 4);
      \u0275\u0275conditionalCreate(10, LessonsListComponent_Conditional_10_Template, 2, 1)(11, LessonsListComponent_Conditional_11_Template, 4, 3, "div", 5);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("platforms", ctx.lessonsService.lessonsIndex() ? ctx.lessonsService.lessonsIndex().platforms : \u0275\u0275pureFunction0(13, _c0))("levels", ctx.lessonsService.lessonsIndex() ? ctx.lessonsService.lessonsIndex().levels : \u0275\u0275pureFunction0(14, _c0))("tags", ctx.lessonsService.lessonsIndex() ? ctx.lessonsService.lessonsIndex().tags : \u0275\u0275pureFunction0(15, _c0))("selectedPlatform", ctx.platform)("selectedLevel", ctx.level)("selectedTag", ctx.tag)("searchTerm", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "lessons.title"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.platform ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.level ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.lessonsService.isLoading() ? 10 : 11);
    }
  }, dependencies: [CommonModule, TranslateModule, LessonFilterComponent, LessonCardComponent, TranslatePipe], styles: ["\n\n.lessons-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n}\n.lessons-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.lessons-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n}\n.lessons-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n}\n.lessons-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.lessons-loading[_ngcontent-%COMP%], \n.lessons-empty[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n  width: 100%;\n}\n.lessons-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.lessons-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n}\n@media (max-width: 768px) {\n  .lessons-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=lessons-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessonsListComponent, [{
    type: Component,
    args: [{ selector: "app-lessons-list", standalone: true, imports: [CommonModule, TranslateModule, LessonFilterComponent, LessonCardComponent], template: `<div class="lessons-container">
  <app-lesson-filter
    [platforms]="lessonsService.lessonsIndex() ? lessonsService.lessonsIndex()!.platforms : []"
    [levels]="lessonsService.lessonsIndex() ? lessonsService.lessonsIndex()!.levels : []"
    [tags]="lessonsService.lessonsIndex() ? lessonsService.lessonsIndex()!.tags : []"
    [selectedPlatform]="platform"
    [selectedLevel]="level"
    [selectedTag]="tag"
    [searchTerm]="searchTerm"
    (filterChange)="onFilterChange($event)"
  ></app-lesson-filter>

  <div class="lessons-list">
    <div class="lessons-header">
      <h2>{{ 'lessons.title' | translate }}</h2>
      @if (platform) {
        <p>{{ 'lessons.platform.' + platform | translate }}</p>
      }
      @if (level) {
        <p>{{ 'lessons.level.' + level | translate }}</p>
      }
    </div>

    <div class="lessons-grid">
      @if (!lessonsService.isLoading()) {
        @if (filteredLessons.length) {
          @for (lesson of filteredLessons; track lesson.slug) {
            <app-lesson-card [lesson]="lesson"></app-lesson-card>
          }
        } @else {
          <div class="lessons-empty">
            <p>{{ 'lessons.noLessons' | translate }}</p>
          </div>
        }
      } @else {
        <div class="lessons-loading">
          <p>{{ 'lessons.loading' | translate }}</p>
        </div>
      }
    </div>

  </div>
</div>
`, styles: ["/* src/app/modules/lessons/components/lessons-list/lessons-list.component.scss */\n.lessons-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n}\n.lessons-header {\n  margin-bottom: 2rem;\n}\n.lessons-header h2 {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n}\n.lessons-header p {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n}\n.lessons-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.lessons-loading,\n.lessons-empty {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n  width: 100%;\n}\n.lessons-loading p,\n.lessons-empty p {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n}\n@media (max-width: 768px) {\n  .lessons-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=lessons-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LessonsListComponent, { className: "LessonsListComponent", filePath: "src/app/modules/lessons/components/lessons-list/lessons-list.component.ts", lineNumber: 18 });
})();

// src/app/modules/lessons/pages/lessons-page/lessons-page.component.ts
init_core();
var LessonsPageComponent = class _LessonsPageComponent {
  _lessonsService = inject(LessonsService);
  _seoService = inject(SeoService);
  ngOnInit() {
    this._lessonsService.loadLessonsIndex().subscribe();
    this._seoService.updateSeoFromConfig({
      titleKey: "seo.learn.title",
      descriptionKey: "seo.learn.description",
      keywordsKey: "seo.learn.keywords",
      type: "website"
    });
  }
  static \u0275fac = function LessonsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessonsPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LessonsPageComponent, selectors: [["app-lessons-page"]], decls: 9, vars: 6, consts: [[1, "lessons-page"], [1, "lessons-page__header"], [1, "page-title"], [1, "page-description"]], template: function LessonsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "app-lessons-list");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "lessons.pageTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "lessons.pageDescription"));
    }
  }, dependencies: [CommonModule, TranslateModule, LessonsListComponent, SeoModule, TranslatePipe], styles: ["\n\n.lessons-page[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n}\n.lessons-page__header[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto 2rem;\n  text-align: center;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n}\n.page-description[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  color: var(--text-secondary);\n  max-width: 800px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  .page-description[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n}\n/*# sourceMappingURL=lessons-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessonsPageComponent, [{
    type: Component,
    args: [{ selector: "app-lessons-page", standalone: true, imports: [CommonModule, TranslateModule, LessonsListComponent, SeoModule], template: `
    <div class="lessons-page">
      <div class="lessons-page__header">
        <h1 class="page-title">{{ 'lessons.pageTitle' | translate }}</h1>
        <p class="page-description">{{ 'lessons.pageDescription' | translate }}</p>
      </div>

      <app-lessons-list></app-lessons-list>
    </div>
  `, styles: ["/* angular:styles/component:scss;ee682963ad63eeefaa58c7de89743599f497629b3fdfa2ac7e567c16c87bd795;/home/runner/work/ByByteSite/ByByteSite/src/app/modules/lessons/pages/lessons-page/lessons-page.component.ts */\n.lessons-page {\n  padding: 2rem 1rem;\n}\n.lessons-page__header {\n  max-width: 1200px;\n  margin: 0 auto 2rem;\n  text-align: center;\n}\n.page-title {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n}\n.page-description {\n  font-size: var(--text-xl);\n  color: var(--text-secondary);\n  max-width: 800px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .page-title {\n    font-size: var(--text-4xl);\n  }\n  .page-description {\n    font-size: var(--text-lg);\n  }\n}\n/*# sourceMappingURL=lessons-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LessonsPageComponent, { className: "LessonsPageComponent", filePath: "src/app/modules/lessons/pages/lessons-page/lessons-page.component.ts", lineNumber: 62 });
})();
export {
  LessonsPageComponent
};
//# sourceMappingURL=chunk-FJ2FYQP3.js.map

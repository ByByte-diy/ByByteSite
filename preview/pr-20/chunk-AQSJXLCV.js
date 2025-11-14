import {
  TextPageComponent
} from "./chunk-TUA6JXDM.js";
import {
  SeoModule,
  SeoService
} from "./chunk-YVNYUMCD.js";
import {
  Component,
  TranslateModule,
  init_core,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-6LT3BS5M.js";
import "./chunk-MXU7DO7X.js";

// src/app/pages/privacy/privacy.ts
init_core();
init_core();
var PrivacyComponent = class _PrivacyComponent {
  seoService = inject(SeoService);
  ngOnInit() {
    this.seoService.updateSeoFromConfig({
      titleKey: "seo.privacy.title",
      descriptionKey: "seo.privacy.description",
      keywordsKey: "seo.privacy.keywords",
      type: "website"
    });
  }
  static \u0275fac = function PrivacyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrivacyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrivacyComponent, selectors: [["app-privacy"]], decls: 179, vars: 0, consts: [["titleKey", "privacy.title"], [1, "text-section"], [1, "text-article"], [1, "text-article__title"], [1, "text-article__text"], [1, "text-list"], [1, "text-section", "text-section--english"], [1, "text-section__title"]], template: function PrivacyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-text-page", 0)(1, "section", 1)(2, "article", 2)(3, "h3", 3);
      \u0275\u0275text(4, "1. \u0412\u0441\u0442\u0443\u043F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, " \u0411\u0410\u0411\u0410\u0419.DIY \u043F\u043E\u0432\u0430\u0436\u0430\u0454 \u0432\u0430\u0448\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C \u0442\u0430 \u0437\u043E\u0431\u043E\u0432'\u044F\u0437\u0443\u0454\u0442\u044C\u0441\u044F \u0437\u0430\u0445\u0438\u0449\u0430\u0442\u0438 \u0432\u0430\u0448\u0456 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456. \u0426\u044F \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u043F\u043E\u044F\u0441\u043D\u044E\u0454, \u044F\u043A \u043C\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E, \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u043C\u043E \u0442\u0430 \u0437\u0430\u0445\u0438\u0449\u0430\u0454\u043C\u043E \u0432\u0430\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043F\u0440\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u0430\u0448\u043E\u0433\u043E \u0421\u0435\u0440\u0432\u0456\u0441\u0443. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "article", 2)(8, "h3", 3);
      \u0275\u0275text(9, "2. \u0417\u0431\u0456\u0440 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 4);
      \u0275\u0275text(11, " \u041C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u0431\u0438\u0440\u0430\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0456 \u0442\u0438\u043F\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ul", 5)(13, "li")(14, "strong");
      \u0275\u0275text(15, "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u044F\u043A\u0443 \u0432\u0438 \u043D\u0430\u0434\u0430\u0454\u0442\u0435:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " \u0456\u043C'\u044F, \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430, \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u0430\u0431\u043E \u0437\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u0456 \u0434\u043E \u043D\u0430\u0441.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "li")(18, "strong");
      \u0275\u0275text(19, "\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " IP-\u0430\u0434\u0440\u0435\u0441\u0430, \u0442\u0438\u043F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430, \u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0421\u0435\u0440\u0432\u0456\u0441\u0443.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "li")(22, "strong");
      \u0275\u0275text(23, "Cookies \u0442\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u0456\u0447\u043D\u0456 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " \u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E cookies \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0421\u0435\u0440\u0432\u0456\u0441\u0443 \u0442\u0430 \u0430\u043D\u0430\u043B\u0456\u0437\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "article", 2)(26, "h3", 3);
      \u0275\u0275text(27, "3. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 4);
      \u0275\u0275text(29, " \u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0437\u0456\u0431\u0440\u0430\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u0434\u043B\u044F: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "ul", 5)(31, "li");
      \u0275\u0275text(32, "\u041D\u0430\u0434\u0430\u043D\u043D\u044F \u0442\u0430 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u043D\u0430\u0448\u043E\u0433\u043E \u0421\u0435\u0440\u0432\u0456\u0441\u0443");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "li");
      \u0275\u0275text(34, "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456 \u043D\u0430 \u0432\u0430\u0448\u0456 \u0437\u0430\u043F\u0438\u0442\u0438 \u0442\u0430 \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "li");
      \u0275\u0275text(36, "\u041D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0432\u0430\u0436\u043B\u0438\u0432\u0438\u0445 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C \u043F\u0440\u043E \u0437\u043C\u0456\u043D\u0438 \u0432 \u0421\u0435\u0440\u0432\u0456\u0441\u0456");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "li");
      \u0275\u0275text(38, "\u0410\u043D\u0430\u043B\u0456\u0437\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0421\u0435\u0440\u0432\u0456\u0441\u0443 \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u043E\u0433\u043E \u0434\u043E\u0441\u0432\u0456\u0434\u0443");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "li");
      \u0275\u0275text(40, "\u0417\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0431\u0435\u0437\u043F\u0435\u043A\u0438 \u0442\u0430 \u0437\u0430\u043F\u043E\u0431\u0456\u0433\u0430\u043D\u043D\u044F \u0448\u0430\u0445\u0440\u0430\u0439\u0441\u0442\u0432\u0443");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "article", 2)(42, "h3", 3);
      \u0275\u0275text(43, "4. \u0417\u0430\u0445\u0438\u0441\u0442 \u0434\u0430\u043D\u0438\u0445");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 4);
      \u0275\u0275text(45, " \u041C\u0438 \u0432\u0436\u0438\u0432\u0430\u0454\u043C\u043E \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0445 \u0442\u0430 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439\u043D\u0438\u0445 \u0437\u0430\u0445\u043E\u0434\u0456\u0432 \u0434\u043B\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0432\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u0456\u0434 \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0456\u043E\u043D\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0443, \u0432\u0442\u0440\u0430\u0442\u0438, \u0437\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u0437\u043C\u0456\u043D\u0438. \u041E\u0434\u043D\u0430\u043A \u0436\u043E\u0434\u0435\u043D \u043C\u0435\u0442\u043E\u0434 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0456 \u0447\u0435\u0440\u0435\u0437 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0430\u0431\u043E \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u043D\u0435 \u0454 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u043C. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "article", 2)(47, "h3", 3);
      \u0275\u0275text(48, "5. \u0420\u043E\u0437\u043A\u0440\u0438\u0442\u0442\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p", 4);
      \u0275\u0275text(50, " \u041C\u0438 \u043D\u0435 \u043F\u0440\u043E\u0434\u0430\u0454\u043C\u043E, \u043D\u0435 \u043E\u0431\u043C\u0456\u043D\u044E\u0454\u043C\u043E \u0442\u0430 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0454\u043C\u043E \u0432\u0430\u0448\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u0442\u0440\u0435\u0442\u0456\u043C \u043E\u0441\u043E\u0431\u0430\u043C, \u0437\u0430 \u0432\u0438\u043D\u044F\u0442\u043A\u043E\u043C \u0432\u0438\u043F\u0430\u0434\u043A\u0456\u0432: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ul", 5)(52, "li");
      \u0275\u0275text(53, "\u041A\u043E\u043B\u0438 \u0446\u0435 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0434\u043B\u044F \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433 (\u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u0456 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0438)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "li");
      \u0275\u0275text(55, "\u041A\u043E\u043B\u0438 \u0446\u0435 \u0432\u0438\u043C\u0430\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u0430\u0431\u043E \u0434\u043B\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u0430\u0432");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "li");
      \u0275\u0275text(57, "\u0417 \u0432\u0430\u0448\u043E\u0457 \u044F\u0432\u043D\u043E\u0457 \u0437\u0433\u043E\u0434\u0438");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "article", 2)(59, "h3", 3);
      \u0275\u0275text(60, "6. \u0412\u0430\u0448\u0456 \u043F\u0440\u0430\u0432\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p", 4);
      \u0275\u0275text(62, " \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "ul", 5)(64, "li");
      \u0275\u0275text(65, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0432\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "li");
      \u0275\u0275text(67, "\u0412\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u043D\u0435\u0442\u043E\u0447\u043D\u0456 \u0434\u0430\u043D\u0456");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "li");
      \u0275\u0275text(69, "\u0412\u0438\u043C\u0430\u0433\u0430\u0442\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u0438\u0445");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "li");
      \u0275\u0275text(71, "\u041E\u0431\u043C\u0435\u0436\u0438\u0442\u0438 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u0438\u0445");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "li");
      \u0275\u0275text(73, "\u0412\u0456\u0434\u043A\u043B\u0438\u043A\u0430\u0442\u0438 \u0437\u0433\u043E\u0434\u0443 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0434\u0430\u043D\u0438\u0445");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "article", 2)(75, "h3", 3);
      \u0275\u0275text(76, "7. Cookies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 4);
      \u0275\u0275text(78, " \u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E cookies \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0421\u0435\u0440\u0432\u0456\u0441\u0443. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043B\u044F \u0432\u0456\u0434\u043C\u043E\u0432\u0438 \u0432\u0456\u0434 cookies, \u0430\u043B\u0435 \u0446\u0435 \u043C\u043E\u0436\u0435 \u0432\u043F\u043B\u0438\u043D\u0443\u0442\u0438 \u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0421\u0435\u0440\u0432\u0456\u0441\u0443. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "article", 2)(80, "h3", 3);
      \u0275\u0275text(81, "8. \u0417\u043C\u0456\u043D\u0438 \u0434\u043E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "p", 4);
      \u0275\u0275text(83, ' \u041C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438 \u0446\u044E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456. \u041C\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u043C\u043E \u0432\u0430\u0441 \u043F\u0440\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0437\u043C\u0456\u043D\u0438, \u0440\u043E\u0437\u043C\u0456\u0441\u0442\u0438\u0432\u0448\u0438 \u043D\u043E\u0432\u0443 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043D\u0430 \u0446\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0442\u0430 \u043E\u043D\u043E\u0432\u0438\u0432\u0448\u0438 \u0434\u0430\u0442\u0443 "\u041E\u0441\u0442\u0430\u043D\u043D\u0454 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F". ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "article", 2)(85, "h3", 3);
      \u0275\u0275text(86, "9. \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p", 4);
      \u0275\u0275text(88, " \u042F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0454 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0449\u043E\u0434\u043E \u0446\u0456\u0454\u0457 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0432\u043A\u0430\u0437\u0430\u043D\u0443 \u043D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "section", 6)(90, "h2", 7);
      \u0275\u0275text(91, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "article", 2)(93, "h3", 3);
      \u0275\u0275text(94, "1. Introduction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "p", 4);
      \u0275\u0275text(96, " ByByte.DIY respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our Service. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "article", 2)(98, "h3", 3);
      \u0275\u0275text(99, "2. Information Collection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p", 4);
      \u0275\u0275text(101, " We may collect the following types of information: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "ul", 5)(103, "li")(104, "strong");
      \u0275\u0275text(105, "Information you provide:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(106, " name, email, contact information when registering or contacting us.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "li")(108, "strong");
      \u0275\u0275text(109, "Technical information:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(110, " IP address, browser type, operating system, Service usage data.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "li")(112, "strong");
      \u0275\u0275text(113, "Cookies and similar technologies:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(114, " we use cookies to improve Service functionality and analyze usage.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "article", 2)(116, "h3", 3);
      \u0275\u0275text(117, "3. Use of Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p", 4);
      \u0275\u0275text(119, " We use collected information to: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "ul", 5)(121, "li");
      \u0275\u0275text(122, "Provide and improve our Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "li");
      \u0275\u0275text(124, "Respond to your inquiries and provide support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "li");
      \u0275\u0275text(126, "Send important messages about Service changes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "li");
      \u0275\u0275text(128, "Analyze Service usage to improve user experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "li");
      \u0275\u0275text(130, "Ensure security and prevent fraud");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "article", 2)(132, "h3", 3);
      \u0275\u0275text(133, "4. Data Protection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p", 4);
      \u0275\u0275text(135, " We implement technical and organizational measures to protect your personal data from unauthorized access, loss, destruction, or alteration. However, no method of transmission over the internet or electronic storage is completely secure. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "article", 2)(137, "h3", 3);
      \u0275\u0275text(138, "5. Information Disclosure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "p", 4);
      \u0275\u0275text(140, " We do not sell, trade, or transfer your personal information to third parties, except: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "ul", 5)(142, "li");
      \u0275\u0275text(143, "When necessary to provide services (e.g., payment providers)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "li");
      \u0275\u0275text(145, "When required by law or to protect our rights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "li");
      \u0275\u0275text(147, "With your explicit consent");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "article", 2)(149, "h3", 3);
      \u0275\u0275text(150, "6. Your Rights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "p", 4);
      \u0275\u0275text(152, " You have the right to: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "ul", 5)(154, "li");
      \u0275\u0275text(155, "Access your personal data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "li");
      \u0275\u0275text(157, "Correct inaccurate data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "li");
      \u0275\u0275text(159, "Request deletion of your data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "li");
      \u0275\u0275text(161, "Restrict processing of your data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "li");
      \u0275\u0275text(163, "Withdraw consent for data processing");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(164, "article", 2)(165, "h3", 3);
      \u0275\u0275text(166, "7. Cookies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p", 4);
      \u0275\u0275text(168, " We use cookies to improve Service functionality. You can configure your browser to refuse cookies, but this may affect Service functionality. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "article", 2)(170, "h3", 3);
      \u0275\u0275text(171, "8. Policy Changes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "p", 4);
      \u0275\u0275text(173, ' We may periodically update this Privacy Policy. We will notify you of any changes by posting the new Policy on this page and updating the "Last Updated" date. ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "article", 2)(175, "h3", 3);
      \u0275\u0275text(176, "9. Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "p", 4);
      \u0275\u0275text(178, " If you have questions about this Privacy Policy, please contact us through the contact information provided on our website. ");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [TranslateModule, SeoModule, TextPageComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrivacyComponent, [{
    type: Component,
    args: [{ selector: "app-privacy", standalone: true, imports: [TranslateModule, SeoModule, TextPageComponent], template: `<app-text-page titleKey="privacy.title">
  <!-- Ukrainian Version -->
  <section class="text-section">

    <article class="text-article">
      <h3 class="text-article__title">1. \u0412\u0441\u0442\u0443\u043F</h3>
      <p class="text-article__text">
        \u0411\u0410\u0411\u0410\u0419.DIY \u043F\u043E\u0432\u0430\u0436\u0430\u0454 \u0432\u0430\u0448\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C \u0442\u0430 \u0437\u043E\u0431\u043E\u0432'\u044F\u0437\u0443\u0454\u0442\u044C\u0441\u044F \u0437\u0430\u0445\u0438\u0449\u0430\u0442\u0438 \u0432\u0430\u0448\u0456 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456. \u0426\u044F \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u043F\u043E\u044F\u0441\u043D\u044E\u0454, \u044F\u043A \u043C\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E, \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u043C\u043E \u0442\u0430 \u0437\u0430\u0445\u0438\u0449\u0430\u0454\u043C\u043E \u0432\u0430\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043F\u0440\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456 \u043D\u0430\u0448\u043E\u0433\u043E \u0421\u0435\u0440\u0432\u0456\u0441\u0443.
      </p>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">2. \u0417\u0431\u0456\u0440 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457</h3>
      <p class="text-article__text">
        \u041C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u0431\u0438\u0440\u0430\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0456 \u0442\u0438\u043F\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457:
      </p>
      <ul class="text-list">
        <li><strong>\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u044F\u043A\u0443 \u0432\u0438 \u043D\u0430\u0434\u0430\u0454\u0442\u0435:</strong> \u0456\u043C'\u044F, \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430, \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u0430\u0431\u043E \u0437\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u0456 \u0434\u043E \u043D\u0430\u0441.</li>
        <li><strong>\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F:</strong> IP-\u0430\u0434\u0440\u0435\u0441\u0430, \u0442\u0438\u043F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430, \u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0421\u0435\u0440\u0432\u0456\u0441\u0443.</li>
        <li><strong>Cookies \u0442\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u0456\u0447\u043D\u0456 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457:</strong> \u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E cookies \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0421\u0435\u0440\u0432\u0456\u0441\u0443 \u0442\u0430 \u0430\u043D\u0430\u043B\u0456\u0437\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.</li>
      </ul>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">3. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457</h3>
      <p class="text-article__text">
        \u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0437\u0456\u0431\u0440\u0430\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u0434\u043B\u044F:
      </p>
      <ul class="text-list">
        <li>\u041D\u0430\u0434\u0430\u043D\u043D\u044F \u0442\u0430 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u043D\u0430\u0448\u043E\u0433\u043E \u0421\u0435\u0440\u0432\u0456\u0441\u0443</li>
        <li>\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456 \u043D\u0430 \u0432\u0430\u0448\u0456 \u0437\u0430\u043F\u0438\u0442\u0438 \u0442\u0430 \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438</li>
        <li>\u041D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0432\u0430\u0436\u043B\u0438\u0432\u0438\u0445 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C \u043F\u0440\u043E \u0437\u043C\u0456\u043D\u0438 \u0432 \u0421\u0435\u0440\u0432\u0456\u0441\u0456</li>
        <li>\u0410\u043D\u0430\u043B\u0456\u0437\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0421\u0435\u0440\u0432\u0456\u0441\u0443 \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u043E\u0433\u043E \u0434\u043E\u0441\u0432\u0456\u0434\u0443</li>
        <li>\u0417\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0431\u0435\u0437\u043F\u0435\u043A\u0438 \u0442\u0430 \u0437\u0430\u043F\u043E\u0431\u0456\u0433\u0430\u043D\u043D\u044F \u0448\u0430\u0445\u0440\u0430\u0439\u0441\u0442\u0432\u0443</li>
      </ul>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">4. \u0417\u0430\u0445\u0438\u0441\u0442 \u0434\u0430\u043D\u0438\u0445</h3>
      <p class="text-article__text">
        \u041C\u0438 \u0432\u0436\u0438\u0432\u0430\u0454\u043C\u043E \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0445 \u0442\u0430 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439\u043D\u0438\u0445 \u0437\u0430\u0445\u043E\u0434\u0456\u0432 \u0434\u043B\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0432\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u0456\u0434 \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0456\u043E\u043D\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0443, \u0432\u0442\u0440\u0430\u0442\u0438, \u0437\u043D\u0438\u0449\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u0437\u043C\u0456\u043D\u0438. \u041E\u0434\u043D\u0430\u043A \u0436\u043E\u0434\u0435\u043D \u043C\u0435\u0442\u043E\u0434 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0456 \u0447\u0435\u0440\u0435\u0437 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0430\u0431\u043E \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u043D\u0435 \u0454 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u043C.
      </p>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">5. \u0420\u043E\u0437\u043A\u0440\u0438\u0442\u0442\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457</h3>
      <p class="text-article__text">
        \u041C\u0438 \u043D\u0435 \u043F\u0440\u043E\u0434\u0430\u0454\u043C\u043E, \u043D\u0435 \u043E\u0431\u043C\u0456\u043D\u044E\u0454\u043C\u043E \u0442\u0430 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0454\u043C\u043E \u0432\u0430\u0448\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u0442\u0440\u0435\u0442\u0456\u043C \u043E\u0441\u043E\u0431\u0430\u043C, \u0437\u0430 \u0432\u0438\u043D\u044F\u0442\u043A\u043E\u043C \u0432\u0438\u043F\u0430\u0434\u043A\u0456\u0432:
      </p>
      <ul class="text-list">
        <li>\u041A\u043E\u043B\u0438 \u0446\u0435 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0434\u043B\u044F \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433 (\u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u0456 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0438)</li>
        <li>\u041A\u043E\u043B\u0438 \u0446\u0435 \u0432\u0438\u043C\u0430\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u0430\u0431\u043E \u0434\u043B\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u0430\u0432</li>
        <li>\u0417 \u0432\u0430\u0448\u043E\u0457 \u044F\u0432\u043D\u043E\u0457 \u0437\u0433\u043E\u0434\u0438</li>
      </ul>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">6. \u0412\u0430\u0448\u0456 \u043F\u0440\u0430\u0432\u0430</h3>
      <p class="text-article__text">
        \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E:
      </p>
      <ul class="text-list">
        <li>\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0432\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445</li>
        <li>\u0412\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u043D\u0435\u0442\u043E\u0447\u043D\u0456 \u0434\u0430\u043D\u0456</li>
        <li>\u0412\u0438\u043C\u0430\u0433\u0430\u0442\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u0438\u0445</li>
        <li>\u041E\u0431\u043C\u0435\u0436\u0438\u0442\u0438 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u0438\u0445</li>
        <li>\u0412\u0456\u0434\u043A\u043B\u0438\u043A\u0430\u0442\u0438 \u0437\u0433\u043E\u0434\u0443 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0434\u0430\u043D\u0438\u0445</li>
      </ul>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">7. Cookies</h3>
      <p class="text-article__text">
        \u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E cookies \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0421\u0435\u0440\u0432\u0456\u0441\u0443. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043B\u044F \u0432\u0456\u0434\u043C\u043E\u0432\u0438 \u0432\u0456\u0434 cookies, \u0430\u043B\u0435 \u0446\u0435 \u043C\u043E\u0436\u0435 \u0432\u043F\u043B\u0438\u043D\u0443\u0442\u0438 \u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0421\u0435\u0440\u0432\u0456\u0441\u0443.
      </p>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">8. \u0417\u043C\u0456\u043D\u0438 \u0434\u043E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0438</h3>
      <p class="text-article__text">
        \u041C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438 \u0446\u044E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456. \u041C\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u043C\u043E \u0432\u0430\u0441 \u043F\u0440\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0437\u043C\u0456\u043D\u0438, \u0440\u043E\u0437\u043C\u0456\u0441\u0442\u0438\u0432\u0448\u0438 \u043D\u043E\u0432\u0443 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043D\u0430 \u0446\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0442\u0430 \u043E\u043D\u043E\u0432\u0438\u0432\u0448\u0438 \u0434\u0430\u0442\u0443 "\u041E\u0441\u0442\u0430\u043D\u043D\u0454 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F".
      </p>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">9. \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438</h3>
      <p class="text-article__text">
        \u042F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0454 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0449\u043E\u0434\u043E \u0446\u0456\u0454\u0457 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0432\u043A\u0430\u0437\u0430\u043D\u0443 \u043D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456.
      </p>
    </article>
  </section>

  <!-- English Version -->
  <section class="text-section text-section--english">
    <h2 class="text-section__title">Privacy Policy</h2>

    <article class="text-article">
      <h3 class="text-article__title">1. Introduction</h3>
      <p class="text-article__text">
        ByByte.DIY respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our Service.
      </p>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">2. Information Collection</h3>
      <p class="text-article__text">
        We may collect the following types of information:
      </p>
      <ul class="text-list">
        <li><strong>Information you provide:</strong> name, email, contact information when registering or contacting us.</li>
        <li><strong>Technical information:</strong> IP address, browser type, operating system, Service usage data.</li>
        <li><strong>Cookies and similar technologies:</strong> we use cookies to improve Service functionality and analyze usage.</li>
      </ul>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">3. Use of Information</h3>
      <p class="text-article__text">
        We use collected information to:
      </p>
      <ul class="text-list">
        <li>Provide and improve our Service</li>
        <li>Respond to your inquiries and provide support</li>
        <li>Send important messages about Service changes</li>
        <li>Analyze Service usage to improve user experience</li>
        <li>Ensure security and prevent fraud</li>
      </ul>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">4. Data Protection</h3>
      <p class="text-article__text">
        We implement technical and organizational measures to protect your personal data from unauthorized access, loss, destruction, or alteration. However, no method of transmission over the internet or electronic storage is completely secure.
      </p>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">5. Information Disclosure</h3>
      <p class="text-article__text">
        We do not sell, trade, or transfer your personal information to third parties, except:
      </p>
      <ul class="text-list">
        <li>When necessary to provide services (e.g., payment providers)</li>
        <li>When required by law or to protect our rights</li>
        <li>With your explicit consent</li>
      </ul>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">6. Your Rights</h3>
      <p class="text-article__text">
        You have the right to:
      </p>
      <ul class="text-list">
        <li>Access your personal data</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Restrict processing of your data</li>
        <li>Withdraw consent for data processing</li>
      </ul>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">7. Cookies</h3>
      <p class="text-article__text">
        We use cookies to improve Service functionality. You can configure your browser to refuse cookies, but this may affect Service functionality.
      </p>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">8. Policy Changes</h3>
      <p class="text-article__text">
        We may periodically update this Privacy Policy. We will notify you of any changes by posting the new Policy on this page and updating the "Last Updated" date.
      </p>
    </article>

    <article class="text-article">
      <h3 class="text-article__title">9. Contact</h3>
      <p class="text-article__text">
        If you have questions about this Privacy Policy, please contact us through the contact information provided on our website.
      </p>
    </article>
  </section>
</app-text-page>

` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrivacyComponent, { className: "PrivacyComponent", filePath: "src/app/pages/privacy/privacy.ts", lineNumber: 13 });
})();
export {
  PrivacyComponent
};
//# sourceMappingURL=chunk-AQSJXLCV.js.map

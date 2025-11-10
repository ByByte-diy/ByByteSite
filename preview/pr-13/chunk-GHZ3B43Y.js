import {
  __spreadValues
} from "./chunk-MXU7DO7X.js";

// src/app/modules/lessons/lessons.routes.ts
var lessonsRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-JLF67XMC.js").then((m) => m.LessonsPageComponent)
  }, false ? { \u0275entryName: "src/app/modules/lessons/pages/lessons-page/lessons-page.component.ts" } : {}),
  __spreadValues({
    path: ":platform",
    loadComponent: () => import("./chunk-JLF67XMC.js").then((m) => m.LessonsPageComponent)
  }, false ? { \u0275entryName: "src/app/modules/lessons/pages/lessons-page/lessons-page.component.ts" } : {}),
  __spreadValues({
    path: ":platform/:level",
    loadComponent: () => import("./chunk-JLF67XMC.js").then((m) => m.LessonsPageComponent)
  }, false ? { \u0275entryName: "src/app/modules/lessons/pages/lessons-page/lessons-page.component.ts" } : {}),
  __spreadValues({
    path: ":platform/:level/:slug",
    loadComponent: () => import("./chunk-75QI2HV4.js").then((m) => m.LessonDetailPageComponent)
  }, false ? { \u0275entryName: "src/app/modules/lessons/pages/lesson-detail-page/lesson-detail-page.component.ts" } : {})
];
export {
  lessonsRoutes
};
//# sourceMappingURL=chunk-GHZ3B43Y.js.map

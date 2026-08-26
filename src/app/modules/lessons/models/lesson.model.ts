export interface LessonMeta {
  title: string;
  slug: string;
  lang: string;
  platforms: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  published: boolean;
  version: string;
  description?: string;
  author?: string;
  updatedAt?: string;
  createdAt?: string;
}

export interface Lesson extends LessonMeta {
  content: string;
  contentPath: string;
}

export interface LessonIndex {
  lessons: LessonMeta[];
  platforms: string[];
  levels: string[];
  tags: string[];
  languages: string[];
}

export type StepUnlockMode = 'immediate' | 'next' | 'timer';

export interface StepAction {
  id: string;
  unlock: StepUnlockMode;
  show?: string;
  label?: string;
  hint?: string;
}

export interface LessonStep {
  id: string;
  index: number;
  content: string;
  timerSeconds?: number;
  actions: StepAction[];
}

export type LessonStepMode = 'stepped' | 'linear';

export type LessonPhase = 'intro' | 'step' | 'completed';

export interface ParsedLesson extends Lesson {
  mode: LessonStepMode;
  introStep: LessonStep | null;
  taskSteps: LessonStep[];
}

export interface StepState {
  enteredAt: number;
  actionsUsed: string[];
  timerCompleted: boolean;
}

export interface LessonProgress {
  lessonKey: string;
  introCompleted: boolean;
  currentStepIndex: number;
  phase: LessonPhase;
  stepStates: Record<string, StepState>;
  lessonVersion: string;
  updatedAt: number;
}

export function buildLessonKey(
  lang: string,
  platform: string,
  level: string,
  slug: string,
): string {
  return `${lang}/${platform}/${level}/${slug}`;
}

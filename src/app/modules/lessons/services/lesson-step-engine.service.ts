import { Injectable, computed, signal } from '@angular/core';
import {
  LessonPhase,
  LessonProgress,
  LessonStep,
  ParsedLesson,
  StepAction,
  buildLessonKey,
} from '../models/lesson.model';
import {
  LessonProgressService,
  createInitialProgress,
  getOrCreateStepState,
} from './lesson-progress.service';

@Injectable()
export class LessonStepEngine {
  readonly phase = signal<LessonPhase>('intro');
  readonly currentStepIndex = signal(0);
  readonly revealedBlocks = signal<string[]>([]);
  readonly timerRemaining = signal<number | null>(null);
  readonly canAdvance = signal(false);

  readonly currentTaskStep = computed(() => {
    const lesson = this._parsedLesson();
    const index = this.currentStepIndex();
    if (!lesson || lesson.mode !== 'stepped') return null;
    return lesson.taskSteps[index] ?? null;
  });

  readonly totalTaskSteps = computed(() => this._parsedLesson()?.taskSteps.length ?? 0);

  readonly isLastStep = computed(() => {
    const lesson = this._parsedLesson();
    if (!lesson) return true;
    return this.currentStepIndex() >= lesson.taskSteps.length - 1;
  });

  private readonly _parsedLesson = signal<ParsedLesson | null>(null);
  private readonly _progress = signal<LessonProgress | null>(null);
  private readonly _lessonKey = signal('');
  private _timerInterval: ReturnType<typeof setInterval> | null = null;

  constructor(private readonly _progressService: LessonProgressService) {}

  init(
    parsedLesson: ParsedLesson,
    routeParams: { lang: string; platform: string; level: string },
  ): void {
    this._stopTimer();
    this._parsedLesson.set(parsedLesson);
    this.revealedBlocks.set([]);

    const lessonKey = buildLessonKey(
      routeParams.lang,
      routeParams.platform,
      routeParams.level,
      parsedLesson.slug,
    );
    this._lessonKey.set(lessonKey);

    if (parsedLesson.mode !== 'stepped') {
      return;
    }

    const saved = this._progressService.getProgress(lessonKey);
    let progress: LessonProgress;

    if (saved && !this._progressService.isVersionStale(saved, parsedLesson.version)) {
      progress = { ...saved, stepStates: { ...saved.stepStates } };
    } else {
      if (saved) {
        this._progressService.clearProgress(lessonKey);
      }
      progress = createInitialProgress(lessonKey, parsedLesson.version);
    }

    if (!parsedLesson.introStep) {
      progress.introCompleted = true;
      progress.phase = 'step';
    }

    this._progress.set(progress);
    this._applyProgress(progress, parsedLesson);
  }

  destroy(): void {
    this._stopTimer();
  }

  restart(): void {
    const lesson = this._parsedLesson();
    if (!lesson || lesson.mode !== 'stepped') return;

    this._stopTimer();
    this._progressService.clearProgress(this._lessonKey());

    const progress = createInitialProgress(this._lessonKey(), lesson.version);
    if (!lesson.introStep) {
      progress.introCompleted = true;
      progress.phase = 'step';
    }

    this._progress.set(progress);
    this.revealedBlocks.set([]);
    this._applyProgress(progress, lesson);
  }

  startLesson(): void {
    const lesson = this._parsedLesson();
    if (!lesson || lesson.mode !== 'stepped') return;

    const progress = this._ensureProgress();
    progress.introCompleted = true;
    progress.phase = 'step';
    progress.currentStepIndex = 0;

    this.phase.set('step');
    this.currentStepIndex.set(0);
    this._persist(progress);
    this._enterTaskStep(0);
  }

  handleAction(action: StepAction): void {
    const step = this.currentTaskStep();
    const progress = this._ensureProgress();
    if (!step) return;

    const stepState = getOrCreateStepState(progress, step.id);
    if (!stepState.actionsUsed.includes(action.id)) {
      stepState.actionsUsed.push(action.id);
    }

    if (action.show && !action.hint) {
      this.revealedBlocks.update((blocks) =>
        blocks.includes(action.show!) ? blocks : [...blocks, action.show!],
      );
    }

    if (action.unlock === 'next') {
      this.canAdvance.set(true);
    } else if (action.unlock === 'timer') {
      stepState.timerCompleted = true;
      this.timerRemaining.set(0);
      this.canAdvance.set(true);
      this._stopTimer();
    }

    this._persist(progress);
  }

  advanceStep(): void {
    if (!this.canAdvance()) return;

    const lesson = this._parsedLesson();
    const progress = this._ensureProgress();
    if (!lesson) return;

    if (this.isLastStep()) {
      progress.phase = 'completed';
      this.phase.set('completed');
      this._stopTimer();
      this.canAdvance.set(false);
      this.timerRemaining.set(null);
      this._persist(progress);
      return;
    }

    const nextIndex = this.currentStepIndex() + 1;
    progress.currentStepIndex = nextIndex;
    progress.phase = 'step';
    this.currentStepIndex.set(nextIndex);
    this._persist(progress);
    this._enterTaskStep(nextIndex);
  }

  getActionLabelKey(action: StepAction): string {
    if (action.label) {
      return action.label;
    }

    const defaults: Record<string, string> = {
      hint: 'lessons.steps.actions.hint',
      know_answer: 'lessons.steps.actions.knowAnswer',
      dont_understand: 'lessons.steps.actions.dontUnderstand',
    };

    return defaults[action.id] ?? action.id;
  }

  isActionUsed(actionId: string): boolean {
    const step = this.currentTaskStep();
    const progress = this._progress();
    if (!step || !progress) return false;
    return progress.stepStates[step.id]?.actionsUsed.includes(actionId) ?? false;
  }

  private _applyProgress(progress: LessonProgress, lesson: ParsedLesson): void {
    if (!progress.introCompleted || progress.phase === 'intro') {
      this.phase.set('intro');
      this.currentStepIndex.set(0);
      this.canAdvance.set(false);
      this.timerRemaining.set(null);
      return;
    }

    if (progress.phase === 'completed') {
      this.phase.set('completed');
      this.currentStepIndex.set(Math.min(progress.currentStepIndex, lesson.taskSteps.length - 1));
      this.canAdvance.set(false);
      this.timerRemaining.set(null);
      return;
    }

    this.phase.set('step');
    const stepIndex = Math.min(
      Math.max(progress.currentStepIndex, 0),
      Math.max(lesson.taskSteps.length - 1, 0),
    );
    this.currentStepIndex.set(stepIndex);
    this._enterTaskStep(stepIndex, progress);
  }

  private _enterTaskStep(stepIndex: number, existingProgress?: LessonProgress): void {
    const lesson = this._parsedLesson();
    if (!lesson) return;

    const step = lesson.taskSteps[stepIndex];
    if (!step) return;

    this.revealedBlocks.set([]);
    this._stopTimer();

    const progress = existingProgress ?? this._ensureProgress();
    const stepState = getOrCreateStepState(progress, step.id);

    if (!existingProgress) {
      stepState.enteredAt = Date.now();
      stepState.actionsUsed = [];
      stepState.timerCompleted = false;
    }

    this._restoreRevealedBlocks(step, stepState.actionsUsed);

    if (stepState.timerCompleted) {
      this.timerRemaining.set(0);
      this.canAdvance.set(true);
      this._persist(progress);
      return;
    }

    const hasNextUnlock = step.actions.some(
      (action) => action.unlock === 'next' && stepState.actionsUsed.includes(action.id),
    );
    if (hasNextUnlock) {
      this.canAdvance.set(true);
      this.timerRemaining.set(step.timerSeconds ? 0 : null);
      this._persist(progress);
      return;
    }

    if (step.timerSeconds) {
      const elapsedSeconds = Math.floor((Date.now() - stepState.enteredAt) / 1000);
      const remaining = Math.max(step.timerSeconds - elapsedSeconds, 0);

      if (remaining <= 0) {
        stepState.timerCompleted = true;
        this.timerRemaining.set(0);
        this.canAdvance.set(true);
        this._persist(progress);
        return;
      }

      this.timerRemaining.set(remaining);
      this.canAdvance.set(false);
      this._startTimer(step, stepState, progress);
      this._persist(progress);
      return;
    }

    this.timerRemaining.set(null);
    this.canAdvance.set(true);
    this._persist(progress);
  }

  private _restoreRevealedBlocks(step: LessonStep, usedActions: string[]): void {
    const revealed = step.actions
      .filter((action) => action.show && usedActions.includes(action.id))
      .map((action) => action.show!);
    this.revealedBlocks.set(revealed);
  }

  private _startTimer(
    step: LessonStep,
    stepState: LessonProgress['stepStates'][string],
    progress: LessonProgress,
  ): void {
    this._timerInterval = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - stepState.enteredAt) / 1000);
      const remaining = Math.max((step.timerSeconds ?? 0) - elapsedSeconds, 0);
      this.timerRemaining.set(remaining);

      if (remaining <= 0) {
        stepState.timerCompleted = true;
        this.canAdvance.set(true);
        this._stopTimer();
        this._persist(progress);
      }
    }, 1000);
  }

  private _stopTimer(): void {
    if (this._timerInterval) {
      clearInterval(this._timerInterval);
      this._timerInterval = null;
    }
  }

  private _ensureProgress(): LessonProgress {
    const existing = this._progress();
    if (existing) return existing;

    const lesson = this._parsedLesson();
    const progress = createInitialProgress(this._lessonKey(), lesson?.version ?? '1.0.0');
    this._progress.set(progress);
    return progress;
  }

  private _persist(progress: LessonProgress): void {
    this._progress.set({ ...progress, stepStates: { ...progress.stepStates } });
    this._progressService.saveProgress(progress);
  }
}

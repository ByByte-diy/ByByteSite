import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LessonProgress } from '../models/lesson.model';

const STORAGE_KEY = 'bybyte:lessonProgress:v1';

@Injectable({
  providedIn: 'root',
})
export class LessonProgressService {
  private readonly platformId = inject(PLATFORM_ID);

  getProgress(lessonKey: string): LessonProgress | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const store = this._readStore();
    const progress = store[lessonKey];
    return progress ?? null;
  }

  saveProgress(progress: LessonProgress): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const store = this._readStore();
    store[progress.lessonKey] = {
      ...progress,
      updatedAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  clearProgress(lessonKey: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const store = this._readStore();
    delete store[lessonKey];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  isVersionStale(progress: LessonProgress, lessonVersion: string): boolean {
    const savedMajor = progress.lessonVersion.split('.')[0];
    const currentMajor = lessonVersion.split('.')[0];
    return savedMajor !== currentMajor;
  }

  private _readStore(): Record<string, LessonProgress> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      return JSON.parse(raw) as Record<string, LessonProgress>;
    } catch {
      return {};
    }
  }
}

export function createInitialProgress(lessonKey: string, lessonVersion: string): LessonProgress {
  return {
    lessonKey,
    introCompleted: false,
    currentStepIndex: 0,
    phase: 'intro',
    stepStates: {},
    lessonVersion,
    updatedAt: Date.now(),
  };
}

export function getOrCreateStepState(
  progress: LessonProgress,
  stepId: string,
): LessonProgress['stepStates'][string] {
  if (!progress.stepStates[stepId]) {
    progress.stepStates[stepId] = {
      enteredAt: Date.now(),
      actionsUsed: [],
      timerCompleted: false,
    };
  }
  return progress.stepStates[stepId];
}

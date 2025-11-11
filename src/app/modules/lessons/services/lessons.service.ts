import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Lesson, LessonIndex, LessonMeta } from '../models/lesson.model';
import { environment } from '../../../../environments/environment';
import lessonsIndexData from '../../../../assets/content/index.json';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private readonly _http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  private _lessonsIndex = signal<LessonIndex | null>(null);
  private _currentLesson = signal<Lesson | null>(null);
  private _isLoading = signal<boolean>(false);
  private _error = signal<string | null>(null);

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

  loadLessonsIndex(): Observable<LessonIndex> {
    this._isLoading.set(true);
    this._error.set(null);

    return of(lessonsIndexData as LessonIndex).pipe(
      tap((index) => {
        this._lessonsIndex.set(index);
        this._isLoading.set(false);
      }),
      catchError((err) => {
        this._error.set('Failed to load lessons index');
        this._isLoading.set(false);
        console.error('Error loading lessons index:', err);
        return of({ lessons: [], platforms: [], levels: [], tags: [], languages: [] });
      }),
    );
  }

  loadLesson(slug: string, lang: string, platform: string): Observable<Lesson | null> {
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
        const fs = require('fs');
        const path = require('path');
        const filePath = path.join(
          process.cwd(),
          'src/assets/content',
          lang,
          platform,
          lessonMeta.level,
          `${slug}.md`,
        );
        const content = fs.readFileSync(filePath, 'utf8');

        const lesson: Lesson = {
          ...lessonMeta,
          content,
          contentPath,
        };
        this._currentLesson.set(lesson);
        this._isLoading.set(false);
        return of(lesson);
      } catch (error) {
        console.error('Error reading lesson file:', error);
        const lesson: Lesson = {
          ...lessonMeta,
          content: '',
          contentPath,
        };
        this._currentLesson.set(lesson);
        this._isLoading.set(false);
        return of(lesson);
      }
    }

    return this._http.get(contentPath, { responseType: 'text' }).pipe(
      map((content) => {
        const lesson: Lesson = {
          ...lessonMeta,
          content,
          contentPath,
        };

        this._currentLesson.set(lesson);
        this._isLoading.set(false);
        return lesson;
      }),
      catchError((err) => {
        this._error.set(`Failed to load lesson: ${slug}`);
        this._isLoading.set(false);
        console.error(`Error loading lesson ${slug}:`, err);
        return of(null);
      }),
    );
  }

  filterLessons(options: {
    platform?: string;
    level?: string;
    lang?: string;
    tag?: string;
    searchTerm?: string;
  }): LessonMeta[] {
    const index = this._lessonsIndex();
    if (!index) return [];

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
        return (
          lesson.title.toLowerCase().includes(term) ||
          lesson.description?.toLowerCase().includes(term) ||
          lesson.tags.some((tag) => tag.toLowerCase().includes(term))
        );
      }

      return true;
    });
  }

  private _findLessonMeta(slug: string, lang: string, platform: string): LessonMeta | null {
    const index = this._lessonsIndex();
    if (!index) return null;

    return (
      index.lessons.find(
        (lesson) =>
          lesson.slug === slug && lesson.lang === lang && lesson.platforms.includes(platform),
      ) || null
    );
  }

  private _buildLessonPath(lesson: LessonMeta): string {
    return `${environment.contentBasePath}/${lesson.lang}/${lesson.platforms[0]}/${lesson.level}/${lesson.slug}.md`;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Lesson, LessonIndex, LessonMeta } from '../models/lesson.model';
import { environment } from '../../environments/environment';
import lessonsIndexData from '../../assets/content/index.json';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private readonly _http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  // Signals for reactive state
  private _lessonsIndex = signal<LessonIndex | null>(null);
  private _currentLesson = signal<Lesson | null>(null);
  private _isLoading = signal<boolean>(false);
  private _error = signal<string | null>(null);

  // Getters for public access to signals
  public get lessonsIndex() {
    return this._lessonsIndex;
  }

  public get currentLesson() {
    return this._currentLesson;
  }

  public get isLoading() {
    return this._isLoading;
  }

  public get error() {
    return this._error;
  }

  /**
   * Load lessons index from JSON file, generated during CI
   */
  public loadLessonsIndex(): Observable<LessonIndex> {
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

  /**
   * Load specific lesson by its slug, language and platform
   */
  public loadLesson(slug: string, lang: string, platform: string): Observable<Lesson | null> {
    this._isLoading.set(true);
    this._error.set(null);

    // First, find metadata in index
    const lessonMeta = this._findLessonMeta(slug, lang, platform);

    if (!lessonMeta) {
      this._error.set(`Lesson not found: ${slug}`);
      this._isLoading.set(false);
      return of(null);
    }

    // Build path to lesson file
    const contentPath = this._buildLessonPath(lessonMeta);

    // Load lesson content - різні підходи для server-side та browser
    if (!isPlatformBrowser(this.platformId)) {
      // Server-side: читаємо файл через fs
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

    // Browser: використовуємо HTTP запит
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

  /**
   * Filter lessons by given criteria
   */
  public filterLessons(options: {
    platform?: string;
    level?: string;
    lang?: string;
    tag?: string;
    searchTerm?: string;
  }): LessonMeta[] {
    const index = this._lessonsIndex();
    if (!index) return [];

    return index.lessons.filter((lesson) => {
      // Filter by platform
      if (options.platform && !lesson.platforms.includes(options.platform)) {
        return false;
      }

      // Filter by level
      if (options.level && lesson.level !== options.level) {
        return false;
      }

      // Filter by language
      if (options.lang && lesson.lang !== options.lang) {
        return false;
      }

      // Filter by tag
      if (options.tag && !lesson.tags.includes(options.tag)) {
        return false;
      }

      // Filter by search term
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

  /**
   * Find lesson metadata in index
   */
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

  /**
   * Build path to lesson file
   */
  private _buildLessonPath(lesson: LessonMeta): string {
    // Path format: /content/{lang}/{platform}/{level}/{slug}.md
    return `${environment.contentBasePath}/${lesson.lang}/${lesson.platforms[0]}/${lesson.level}/${lesson.slug}.md`;
  }
}

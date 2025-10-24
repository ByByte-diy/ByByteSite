import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LessonsService } from '../../../../services/lessons.service';
import { LessonMeta } from '../../../../models/lesson.model';
import { LessonFilterComponent } from '../lesson-filter/lesson-filter.component';
import { LessonCardComponent } from '../lesson-card/lesson-card.component';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, LessonFilterComponent, LessonCardComponent],
})
export class LessonsListComponent implements OnInit {
  protected readonly lessonsService = inject(LessonsService);
  private readonly _route = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _translate = inject(TranslateService);

  // Filters
  platform: string | null = null;
  level: string | null = null;
  tag: string | null = null;
  searchTerm: string = '';

  // Data
  filteredLessons: LessonMeta[] = [];

  ngOnInit(): void {
    // Load lessons index, if it's not loaded yet
    if (!this.lessonsService.lessonsIndex()) {
      this.lessonsService.loadLessonsIndex().subscribe();
    }

    // Get parameters from URL
    this._route.paramMap.subscribe((params) => {
      this.platform = params.get('platform');
      this.level = params.get('level');
      this._applyFilters();
    });

    // Track changes in lessons index through effect
    this.lessonsService.lessonsIndex.update((index: any) => {
      if (index) {
        this._applyFilters();
      }
      return index;
    });
  }

  /**
   * Apply filters to lessons list
   */
  private _applyFilters(): void {
    // Get current language from TranslateService
    const currentLang = this._translate.currentLang || this._translate.defaultLang || '';

    this.filteredLessons = this.lessonsService.filterLessons({
      platform: this.platform || undefined,
      level: this.level || undefined,
      lang: currentLang,
      tag: this.tag || undefined,
      searchTerm: this.searchTerm || undefined,
    });
  }

  /**
   * Handle filter changes
   */
  onFilterChange(filters: {
    platform?: string;
    level?: string;
    tag?: string;
    searchTerm?: string;
  }): void {
    this.platform = filters.platform || null;
    this.level = filters.level || null;
    this.tag = filters.tag || null;
    this.searchTerm = filters.searchTerm || '';

    // Update URL, if main parameters have changed
    if (filters.platform !== undefined || filters.level !== undefined) {
      const urlParts = ['/learn'];

      if (filters.platform) {
        urlParts.push(filters.platform);

        if (filters.level) {
          urlParts.push(filters.level);
        }
      }

      this._router.navigate(urlParts);
    } else {
      // If only additional filters (tag, search) have changed, simply apply filters
      this._applyFilters();
    }
  }
}

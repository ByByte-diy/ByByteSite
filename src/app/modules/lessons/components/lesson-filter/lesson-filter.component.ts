import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-lesson-filter',
  templateUrl: './lesson-filter.component.html',
  styleUrls: ['./lesson-filter.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class LessonFilterComponent {
  @Input() platforms: string[] = [];
  @Input() levels: string[] = [];
  @Input() tags: string[] = [];
  @Input() selectedPlatform: string | null = null;
  @Input() selectedLevel: string | null = null;
  @Input() selectedTag: string | null = null;
  @Input() searchTerm: string = '';

  @Output() filterChange = new EventEmitter<{
    platform?: string;
    level?: string;
    tag?: string;
    searchTerm?: string;
  }>();

  /**
   * Handle platform change
   */
  onPlatformChange(platform: string | null): void {
    this.selectedPlatform = platform;
    this.emitFilterChange();
  }

  /**
   * Handle level change
   */
  onLevelChange(level: string | null): void {
    this.selectedLevel = level;
    this.emitFilterChange();
  }

  /**
   * Handle tag change
   */
  onTagChange(tag: string | null): void {
    this.selectedTag = tag;
    this.emitFilterChange();
  }

  /**
   * Handle search term change
   */
  onSearchChange(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.emitFilterChange();
  }

  /**
   * Reset all filters
   */
  resetFilters(): void {
    this.selectedPlatform = null;
    this.selectedLevel = null;
    this.selectedTag = null;
    this.searchTerm = '';
    this.emitFilterChange();
  }

  /**
   * Emit filter change event
   */
  private emitFilterChange(): void {
    this.filterChange.emit({
      platform: this.selectedPlatform || undefined,
      level: this.selectedLevel || undefined,
      tag: this.selectedTag || undefined,
      searchTerm: this.searchTerm || undefined,
    });
  }
}

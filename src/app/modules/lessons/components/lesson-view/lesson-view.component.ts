import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewChecked,
  ElementRef,
  ViewChild,
  inject,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';
import { Lesson } from '../../models/lesson.model';
import { LessonIconsService } from '../../services/lesson-icons.service';

@Component({
  selector: 'app-lesson-view',
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, MarkdownModule],
})
export class LessonViewComponent implements OnChanges, AfterViewChecked, OnDestroy {
  @Input() lesson: Lesson | null = null;
  @ViewChild('markdownContainer') markdownContentRef?: ElementRef;
  @ViewChild('previewImage') previewImageRef?: ElementRef<HTMLImageElement>;

  private readonly _sanitizer = inject(DomSanitizer);
  public readonly iconsService = inject(LessonIconsService);
  private _contentRendered = false;
  private _imageHandlers = new Map<
    HTMLImageElement,
    { click: EventListener; keydown: EventListener }
  >();
  private readonly _activePointers = new Map<number, PointerEvent>();
  private _initialPinchDistance = 0;
  private _initialScale = 1;
  private _lastPointerPosition: { x: number; y: number } | null = null;
  private _lockedScrollPosition = 0;

  private readonly _minScale = 1;
  private readonly _maxScale = 5;

  // View content
  markdownContent: string = '';
  isPreviewOpen = false;
  previewImageSrc = '';
  previewImageAlt = '';
  previewScale = 1;
  previewTranslateX = 0;
  previewTranslateY = 0;
  isPreviewDragging = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lesson'] && this.lesson) {
      // Process Markdown content
      this.markdownContent = this.extractMarkdownContent(this.lesson.content);

      // Reset rendering flag when lesson changes
      this.resetContentRendered();
    }
  }

  ngOnDestroy(): void {
    this.removeImageClickHandlers();
    this.unlockBodyScroll();
  }

  /**
   * Remove frontmatter from Markdown content and process code for correct syntax highlighting
   */
  private extractMarkdownContent(content: string): string {
    // Check if content starts with frontmatter (---)
    if (content.startsWith('---')) {
      // Find end of frontmatter (second ---)
      const endOfFrontmatter = content.indexOf('---', 3);
      if (endOfFrontmatter !== -1) {
        // Get content after frontmatter
        const markdownContent = content.substring(endOfFrontmatter + 3).trim();

        // Process code for Arduino and other languages
        return this.processCodeBlocks(markdownContent);
      }
    }
    return this.processCodeBlocks(content);
  }

  /**
   * Process code blocks for correct syntax highlighting
   */
  private processCodeBlocks(content: string): string {
    // Regular expression for finding code blocks
    const codeBlockRegex = /```(\w+)?\s*([\s\S]*?)```/g;

    // Replace code blocks with correct language
    let processedContent = content.replace(codeBlockRegex, (match, language, code) => {
      // If language is not specified, use text
      if (!language) {
        return '```text\n' + code + '```';
      }

      // Normalize language names for syntax highlighting
      const normalizedLanguage = this.normalizeLanguage(language.toLowerCase());

      return '```' + normalizedLanguage + '\n' + code + '```';
    });

    // Fix image paths from /content/ to /assets/content/
    processedContent = this.fixImagePaths(processedContent);

    return processedContent;
  }

  /**
   * Fix image paths from /content/ to /assets/content/
   */
  private fixImagePaths(content: string): string {
    // Regular expression to match image paths in Markdown
    // Matches: ![alt](path) and <img src="path">
    // Handles both absolute (/content/) and relative (content/) paths
    const imagePathRegex =
      /(!\[.*?\]\(|\<img[^>]+src=["'])(\/?content\/)([^"')]+)(["'][^>]*\>|\))/g;

    const fixedContent = content.replace(
      imagePathRegex,
      (match, prefix, contentPath, imagePath, suffix) => {
        const newPath = prefix + 'assets/content/' + imagePath + suffix;
        return newPath;
      },
    );

    return fixedContent;
  }

  /**
   * Normalize language names for syntax highlighting
   */
  private normalizeLanguage(language: string): string {
    // Mapping of languages for correct syntax highlighting
    const languageMap: Record<string, string> = {
      'c++': 'cpp',
      c: 'c',
      arduino: 'arduino', // Prism підтримує Arduino
      js: 'javascript',
      javascript: 'javascript',
      ts: 'typescript',
      typescript: 'typescript',
      html: 'markup',
      xml: 'markup',
      css: 'css',
      scss: 'scss',
      bash: 'bash',
      shell: 'bash',
      sh: 'bash',
      json: 'json',
      md: 'markdown',
      markdown: 'markdown',
    };

    return languageMap[language] || language;
  }

  /**
   * Initialize Prism.js for syntax highlighting after rendering
   */
  ngAfterViewChecked() {
    // Check if content exists and if it has not been processed
    if (this.lesson && !this._contentRendered && this.markdownContentRef) {
      this._contentRendered = true;

      // Use setTimeout to ensure DOM is fully updated
      setTimeout(() => {
        // Use standard Prism.js highlighting
        if (this.markdownContentRef && typeof window !== 'undefined' && (window as any).Prism) {
          (window as any).Prism.highlightAll();
        }

        this.enhanceImagesForPreview();
      }, 500);
    }
  }

  /**
   * Reset rendering flag when lesson changes
   */
  private resetContentRendered() {
    this._contentRendered = false;
    this.removeImageClickHandlers();
  }

  /**
   * Enhance rendered markdown images with preview functionality
   */
  private enhanceImagesForPreview(): void {
    if (!this.markdownContentRef) return;

    const container: HTMLElement = this.markdownContentRef.nativeElement;
    const images = Array.from(container.querySelectorAll<HTMLImageElement>('img'));

    this.removeImageClickHandlers();

    images.forEach((img) => {
      img.style.cursor = 'zoom-in';
      img.setAttribute('role', 'button');
      img.setAttribute('tabindex', '0');
      const clickHandler: EventListener = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const target = event.currentTarget as HTMLImageElement;
        this.openPreview(target.currentSrc || target.src, target.alt || '');
      };

      const keyHandler: EventListener = (event) => {
        const keyboardEvent = event as KeyboardEvent;
        if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
          keyboardEvent.preventDefault();
          this.openPreview(img.currentSrc || img.src, img.alt || '');
        }
      };

      img.addEventListener('click', clickHandler);
      img.addEventListener('keydown', keyHandler);

      this._imageHandlers.set(img, { click: clickHandler, keydown: keyHandler });
    });
  }

  /**
   * Remove image click handlers to avoid duplicates and leaks
   */
  private removeImageClickHandlers(): void {
    this._imageHandlers.forEach((listeners, img) => {
      img.removeEventListener('click', listeners.click);
      img.removeEventListener('keydown', listeners.keydown);
      img.style.cursor = '';
      img.removeAttribute('role');
      img.removeAttribute('tabindex');
    });
    this._imageHandlers.clear();
  }

  /**
   * Open image preview overlay
   */
  private openPreview(src: string, alt: string): void {
    this.previewImageSrc = src;
    this.previewImageAlt = alt;
    this.resetPreviewTransform();
    this.isPreviewOpen = true;
    this.lockBodyScroll();
  }

  /**
   * Close image preview overlay
   */
  closePreview(): void {
    if (!this.isPreviewOpen) {
      return;
    }

    this.isPreviewOpen = false;
    this.resetPreviewTransform();
    this.unlockBodyScroll();
    this._activePointers.clear();
    this.isPreviewDragging = false;
  }

  /**
   * Reset preview image transform to defaults
   */
  resetPreviewTransform(): void {
    this.previewScale = 1;
    this.previewTranslateX = 0;
    this.previewTranslateY = 0;
    this.isPreviewDragging = false;
    this._initialScale = 1;
    this._initialPinchDistance = 0;
    this._lastPointerPosition = null;
  }

  /**
   * Handle pointer down events for dragging and pinch zoom
   */
  onPreviewPointerDown(event: PointerEvent): void {
    if (!this.isPreviewOpen) {
      return;
    }

    const rawTarget = event.target as HTMLElement | null;
    if (
      rawTarget?.closest('.image-preview-controls') ||
      rawTarget?.closest('.image-preview-close')
    ) {
      return;
    }

    const target = event.currentTarget as HTMLElement;
    target.setPointerCapture(event.pointerId);
    this._activePointers.set(event.pointerId, event);

    if (this._activePointers.size === 1) {
      this._lastPointerPosition = { x: event.clientX, y: event.clientY };
      this.isPreviewDragging = this.previewScale > 1;
    } else if (this._activePointers.size === 2) {
      const [first, second] = Array.from(this._activePointers.values());
      this._initialPinchDistance = this.getPointersDistance(first, second);
      this._initialScale = this.previewScale;
      this.isPreviewDragging = false;
    }

    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Handle pointer move events for dragging and pinch zoom
   */
  onPreviewPointerMove(event: PointerEvent): void {
    if (!this.isPreviewOpen || !this._activePointers.has(event.pointerId)) {
      return;
    }

    const rawTarget = event.target as HTMLElement | null;
    if (
      rawTarget?.closest('.image-preview-controls') ||
      rawTarget?.closest('.image-preview-close')
    ) {
      return;
    }

    this._activePointers.set(event.pointerId, event);

    if (this._activePointers.size === 1 && this.previewScale > 1) {
      if (this._lastPointerPosition) {
        const deltaX = event.clientX - this._lastPointerPosition.x;
        const deltaY = event.clientY - this._lastPointerPosition.y;

        this.previewTranslateX += deltaX;
        this.previewTranslateY += deltaY;
        this._lastPointerPosition = { x: event.clientX, y: event.clientY };
      }
    } else if (this._activePointers.size === 2) {
      const [first, second] = Array.from(this._activePointers.values());
      const distance = this.getPointersDistance(first, second);
      if (this._initialPinchDistance > 0) {
        const scale = (distance / this._initialPinchDistance) * this._initialScale;
        const clamped = Math.max(this._minScale, Math.min(this._maxScale, scale));
        this.previewScale = clamped;
        this.previewTranslateX = 0;
        this.previewTranslateY = 0;
      }
    }

    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Handle pointer up/cancel events
   */
  onPreviewPointerUp(event: PointerEvent): void {
    if (!this._activePointers.has(event.pointerId)) {
      return;
    }

    const rawTarget = event.target as HTMLElement | null;
    if (
      rawTarget?.closest('.image-preview-controls') ||
      rawTarget?.closest('.image-preview-close')
    ) {
      return;
    }

    const target = event.currentTarget as HTMLElement;
    if (target.hasPointerCapture(event.pointerId)) {
      target.releasePointerCapture(event.pointerId);
    }

    this._activePointers.delete(event.pointerId);

    if (this._activePointers.size === 1) {
      const [remaining] = Array.from(this._activePointers.values());
      this._lastPointerPosition = { x: remaining.clientX, y: remaining.clientY };
      this.isPreviewDragging = this.previewScale > 1;
    } else {
      this._lastPointerPosition = null;
      this.isPreviewDragging = false;
    }

    if (this._activePointers.size < 2) {
      this._initialPinchDistance = 0;
      this._initialScale = this.previewScale;
    }

    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Handle mouse wheel zooming
   */
  onPreviewWheel(event: WheelEvent): void {
    if (!this.isPreviewOpen) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const zoomFactor = event.deltaY < 0 ? 1.1 : 0.9;
    let newScale = this.previewScale * zoomFactor;
    newScale = Math.max(this._minScale, Math.min(this._maxScale, newScale));
    if (newScale === this.previewScale) {
      return;
    }

    this.previewScale = newScale;
    this.previewTranslateX = 0;
    this.previewTranslateY = 0;
    this.isPreviewDragging = false;
  }

  /**
   * Helper to calculate distance between two pointers
   */
  private getPointersDistance(first: PointerEvent, second: PointerEvent): number {
    const dx = first.clientX - second.clientX;
    const dy = first.clientY - second.clientY;
    return Math.hypot(dx, dy);
  }

  /**
   * Provide transform styles for preview image
   */
  get previewTransformStyle(): string {
    return `translate(${this.previewTranslateX}px, ${this.previewTranslateY}px) scale(${this.previewScale})`;
  }

  /**
   * Handle zoom control buttons
   */
  changeZoom(delta: number): void {
    const newScale = Math.max(this._minScale, Math.min(this._maxScale, this.previewScale + delta));
    if (newScale === this.previewScale) {
      return;
    }

    this.previewScale = newScale;
    this.previewTranslateX = 0;
    this.previewTranslateY = 0;
    this.isPreviewDragging = false;
    this._initialScale = newScale;
    this._initialPinchDistance = 0;
    this._lastPointerPosition = null;
  }

  /**
   * Lock body scroll when preview is open
   */
  private lockBodyScroll(): void {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    this._lockedScrollPosition = window.scrollY;
    document.body.style.top = `-${this._lockedScrollPosition}px`;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'contain';
  }

  /**
   * Unlock body scroll when preview is closed
   */
  private unlockBodyScroll(): void {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    document.body.style.overscrollBehavior = '';
    window.scrollTo(0, this._lockedScrollPosition);
  }

  /**
   * Close preview on Escape key
   */
  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isPreviewOpen) {
      event.preventDefault();
      this.closePreview();
    }
  }
}

import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewChecked,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';
import { Lesson } from '../../../../models/lesson.model';
import { LessonIconsService } from '../../../../services/lesson-icons.service';

@Component({
  selector: 'app-lesson-view',
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, MarkdownModule],
})
export class LessonViewComponent implements OnChanges, AfterViewChecked {
  @Input() lesson: Lesson | null = null;
  @ViewChild('markdownContainer') markdownContentRef?: ElementRef;

  private readonly _sanitizer = inject(DomSanitizer);
  public readonly iconsService = inject(LessonIconsService);
  private _contentRendered = false;

  // View content
  markdownContent: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lesson'] && this.lesson) {
      // Process Markdown content
      this.markdownContent = this.extractMarkdownContent(this.lesson.content);

      // Reset rendering flag when lesson changes
      this.resetContentRendered();
    }
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
    return content;
  }

  /**
   * Process code blocks for correct syntax highlighting
   */
  private processCodeBlocks(content: string): string {
    // Regular expression for finding code blocks
    const codeBlockRegex = /```(\w+)?\s*([\s\S]*?)```/g;

    // Replace code blocks with correct language
    return content.replace(codeBlockRegex, (match, language, code) => {
      // If language is not specified, use text
      if (!language) {
        return '```text\n' + code + '```';
      }

      // Normalize language names for syntax highlighting
      const normalizedLanguage = this.normalizeLanguage(language.toLowerCase());

      return '```' + normalizedLanguage + '\n' + code + '```';
    });
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
          console.log('Highlighting code in lesson view container');
          (window as any).Prism.highlightAll();
        }
      }, 500);
    }
  }

  /**
   * Reset rendering flag when lesson changes
   */
  private resetContentRendered() {
    this._contentRendered = false;
  }
}

import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PdfExportSource } from '../../models/pdf-export-source.model';
import {
  PdfExportScope,
  PdfOrientation,
  PdfPageFormat,
  PdfSettings,
  PdfTheme,
} from '../../models/pdf-settings.model';
import {
  DEFAULT_PDF_SETTINGS,
  PDF_CUSTOM_CSS_ACCEPT,
  PDF_CUSTOM_CSS_THEME,
  PDF_FILE_EXTENSION,
  PDF_FORMAT_OPTIONS,
  PDF_INTRO_SECTION_ID,
  PDF_ORIENTATION_OPTIONS,
  PDF_SCOPE_OPTIONS,
  PDF_THEME_OPTIONS,
} from '../../constants/pdf-defaults.constants';
import { PdfGeneratorService } from '../../services/pdf-generator.service';
import { filterPdfSections } from '../../utils/pdf-section-filter';
import { ButtonComponent } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-pdf-export-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, ButtonComponent],
  templateUrl: './pdf-export-dialog.component.html',
  styleUrls: ['./pdf-export-dialog.component.scss'],
})
export class PdfExportDialogComponent {
  @Input({ required: true }) source!: PdfExportSource;
  @Output() readonly closed = new EventEmitter<void>();

  private readonly _generator = inject(PdfGeneratorService);

  protected readonly settings = signal<PdfSettings>({ ...DEFAULT_PDF_SETTINGS });
  protected readonly isGenerating = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  protected readonly orientations = PDF_ORIENTATION_OPTIONS;
  protected readonly formats = PDF_FORMAT_OPTIONS;
  protected readonly themes = PDF_THEME_OPTIONS;
  protected readonly scopes = PDF_SCOPE_OPTIONS;

  protected readonly customCssAccept = PDF_CUSTOM_CSS_ACCEPT;

  protected get hasIntroSection(): boolean {
    return this.source.sections.some((section) => section.id === PDF_INTRO_SECTION_ID);
  }

  protected get hasStepSections(): boolean {
    return this.source.sections.some((section) => section.id !== PDF_INTRO_SECTION_ID);
  }

  close(): void {
    if (this.isGenerating()) return;
    this.closed.emit();
  }

  updateOrientation(value: PdfOrientation): void {
    this.settings.update((current) => ({ ...current, orientation: value }));
  }

  updateFormat(value: PdfPageFormat): void {
    this.settings.update((current) => ({ ...current, format: value }));
  }

  updateTheme(value: PdfTheme): void {
    this.settings.update((current) => ({ ...current, theme: value }));
  }

  updateScope(value: PdfExportScope): void {
    this.settings.update((current) => ({ ...current, scope: value }));
  }

  updateIncludeIntro(checked: boolean): void {
    this.settings.update((current) => ({ ...current, includeIntro: checked }));
  }

  async onCssFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    try {
      const css = await file.text();
      this.settings.update((current) => ({
        ...current,
        customCss: css,
        theme: PDF_CUSTOM_CSS_THEME,
      }));
    } catch {
      this.errorMessage.set('pdfExport.errors.cssRead');
    }
  }

  async generateAndDownload(): Promise<void> {
    if (this.isGenerating()) return;

    this.isGenerating.set(true);
    this.errorMessage.set(null);

    try {
      const currentSettings = this.settings();
      const sections = filterPdfSections(this.source, currentSettings);

      if (sections.length === 0) {
        this.errorMessage.set('pdfExport.errors.noSections');
        return;
      }

      const blob = await this._generator.generate(this.source, currentSettings, sections);
      this._downloadBlob(blob, this.source.fileName);
      this.close();
    } catch {
      this.errorMessage.set('pdfExport.errors.generation');
    } finally {
      this.isGenerating.set(false);
    }
  }

  private _downloadBlob(blob: Blob, fileName: string): void {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName.endsWith(PDF_FILE_EXTENSION) ? fileName : `${fileName}${PDF_FILE_EXTENSION}`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && !this.isGenerating()) {
      event.preventDefault();
      this.close();
    }
  }
}

import {
  PdfExportScope,
  PdfOrientation,
  PdfPageFormat,
  PdfSettings,
  PdfTheme,
} from '../models/pdf-settings.model';

/** Default export dialog settings applied on first open. */
export const DEFAULT_PDF_SETTINGS: PdfSettings = {
  orientation: 'portrait',
  format: 'a4',
  margins: { top: 15, right: 15, bottom: 15, left: 15 },
  includeIntro: true,
  scope: 'all_steps',
  customCss: null,
  theme: 'default',
};

/** Orientation choices shown in the export dialog. */
export const PDF_ORIENTATION_OPTIONS: PdfOrientation[] = ['portrait', 'landscape'];

/** Page format choices shown in the export dialog. */
export const PDF_FORMAT_OPTIONS: PdfPageFormat[] = ['a4', 'letter'];

/** Built-in theme choices shown in the export dialog. */
export const PDF_THEME_OPTIONS: PdfTheme[] = ['default', 'compact', 'custom'];

/** Content scope choices for stepped lessons. */
export const PDF_SCOPE_OPTIONS: PdfExportScope[] = ['all_steps', 'completed_steps', 'current_step'];

/** Section id treated as lesson introduction in filters. */
export const PDF_INTRO_SECTION_ID = 'intro';

/** File extension appended when download name lacks it. */
export const PDF_FILE_EXTENSION = '.pdf';

/** Accepted MIME/type filter for custom CSS upload input. */
export const PDF_CUSTOM_CSS_ACCEPT = '.css,text/css';

/** Theme applied automatically after a custom CSS file is loaded. */
export const PDF_CUSTOM_CSS_THEME: PdfTheme = 'custom';

/** Fallback theme used when custom CSS is selected but no preset should apply. */
export const PDF_CUSTOM_CSS_FALLBACK_THEME: Exclude<PdfTheme, 'custom'> = 'default';

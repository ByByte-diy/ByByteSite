export type PdfOrientation = 'portrait' | 'landscape';
export type PdfPageFormat = 'a4' | 'letter';
export type PdfExportScope = 'all_steps' | 'completed_steps' | 'current_step';
export type PdfTheme = 'default' | 'compact' | 'custom';

export interface PdfMargins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface PdfSettings {
  orientation: PdfOrientation;
  format: PdfPageFormat;
  margins: PdfMargins;
  includeIntro: boolean;
  scope: PdfExportScope;
  customCss: string | null;
  theme: PdfTheme;
}

export { DEFAULT_PDF_SETTINGS } from '../constants/pdf-defaults.constants';

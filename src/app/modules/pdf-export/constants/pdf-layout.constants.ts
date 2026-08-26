import { PdfPageFormat } from '../models/pdf-settings.model';

/** ISO page sizes used by jsPDF (millimetres). */
export const PAGE_SIZES_MM: Record<PdfPageFormat, { width: number; height: number }> = {
  a4: { width: 210, height: 297 },
  letter: { width: 215.9, height: 279.4 },
};

/** html2canvas scale factor; higher = sharper output, slower render. */
export const CANVAS_SCALE = 2;

/** Off-screen render width for portrait pages (px, ~A4 at 96dpi). */
export const CONTENT_WIDTH_PX_PORTRAIT = 794;

/** Off-screen render width for landscape pages (px). */
export const CONTENT_WIDTH_PX_LANDSCAPE = 1100;

/** Cursor tolerance when deciding whether a PDF page is full (mm). */
export const PAGE_BREAK_TOLERANCE_MM = 1;

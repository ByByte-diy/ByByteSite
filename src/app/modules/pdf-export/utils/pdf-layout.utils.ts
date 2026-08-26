import { PdfSettings } from '../models/pdf-settings.model';
import { PDF_CSS_CLASS } from '../constants/pdf-dom.constants';
import {
  CONTENT_WIDTH_PX_LANDSCAPE,
  CONTENT_WIDTH_PX_PORTRAIT,
  PAGE_SIZES_MM,
} from '../constants/pdf-layout.constants';

export { CANVAS_SCALE, PAGE_SIZES_MM } from '../constants/pdf-layout.constants';

export interface PrintableArea {
  pageWidthMm: number;
  pageHeightMm: number;
  printableWidthMm: number;
  printableHeightMm: number;
  contentWidthPx: number;
}

export function getPrintableArea(settings: PdfSettings): PrintableArea {
  const pageSize = PAGE_SIZES_MM[settings.format];
  const pageWidthMm =
    settings.orientation === 'landscape' ? pageSize.height : pageSize.width;
  const pageHeightMm =
    settings.orientation === 'landscape' ? pageSize.width : pageSize.height;

  const contentWidthPx =
    settings.orientation === 'landscape'
      ? CONTENT_WIDTH_PX_LANDSCAPE
      : CONTENT_WIDTH_PX_PORTRAIT;

  return {
    pageWidthMm,
    pageHeightMm,
    printableWidthMm: pageWidthMm - settings.margins.left - settings.margins.right,
    printableHeightMm: pageHeightMm - settings.margins.top - settings.margins.bottom,
    contentWidthPx,
  };
}

export function isNoBreakBlock(block: HTMLElement): boolean {
  return block.classList.contains(PDF_CSS_CLASS.blockNoBreak);
}

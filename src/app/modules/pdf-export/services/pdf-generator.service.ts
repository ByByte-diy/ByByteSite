import { Injectable } from '@angular/core';
import { PdfRenderService } from './pdf-render.service';
import { PdfExportSource, PdfSection } from '../models/pdf-export-source.model';
import { PdfSettings } from '../models/pdf-settings.model';
import {
  CANVAS_SCALE,
  PAGE_BREAK_TOLERANCE_MM,
} from '../constants/pdf-layout.constants';
import {
  PDF_CANVAS_BACKGROUND,
  PDF_IMAGE_FORMAT,
} from '../constants/pdf-dom.constants';
import { getPrintableArea, isNoBreakBlock } from '../utils/pdf-layout.utils';
import type { PrintableArea } from '../utils/pdf-layout.utils';

interface RenderedBlock {
  element: HTMLElement;
  canvas: HTMLCanvasElement;
  widthMm: number;
  heightMm: number;
  noBreak: boolean;
}

type JsPdfInstance = {
  addPage: () => void;
  addImage: (
    imageData: string,
    format: string,
    x: number,
    y: number,
    width: number,
    height: number,
  ) => void;
  output: (type: 'blob') => Blob;
};

type Html2CanvasFn = (
  element: HTMLElement,
  options?: {
    scale?: number;
    useCORS?: boolean;
    logging?: boolean;
    backgroundColor?: string;
  },
) => Promise<HTMLCanvasElement>;

@Injectable()
export class PdfGeneratorService {
  constructor(private readonly _renderService: PdfRenderService) { }

  async generate(source: PdfExportSource, settings: PdfSettings, sections: PdfSection[]): Promise<Blob> {
    const [{ jsPDF }, { default: html2canvas }] = await Promise.all([
      import('jspdf'),
      import('html2canvas'),
    ]);

    const container = await this._renderService.renderSections(sections, settings, source.title);
    const printableArea = getPrintableArea(settings);

    try {
      const blockGroups = this._renderService.getPrintBlockGroups(container);

      const pdf = new jsPDF({
        orientation: settings.orientation,
        unit: 'mm',
        format: settings.format,
      }) as unknown as JsPdfInstance;

      let isFirstPage = true;

      for (const group of blockGroups) {
        const renderedBlocks = await this._renderBlocks(group, html2canvas, printableArea);
        isFirstPage = this._packSectionIntoPdf(
          pdf,
          renderedBlocks,
          settings,
          printableArea,
          isFirstPage,
        );
      }

      return pdf.output('blob');
    } finally {
      this._renderService.cleanup();
    }
  }

  private async _renderBlocks(
    blocks: HTMLElement[],
    html2canvas: Html2CanvasFn,
    printableArea: PrintableArea,
  ): Promise<RenderedBlock[]> {
    const rendered: RenderedBlock[] = [];

    for (const block of blocks) {
      const canvas = await html2canvas(block, {
        scale: CANVAS_SCALE,
        useCORS: true,
        logging: false,
        backgroundColor: PDF_CANVAS_BACKGROUND,
      });

      const widthMm = printableArea.printableWidthMm;
      const heightMm = (canvas.height / canvas.width) * widthMm;

      rendered.push({
        element: block,
        canvas,
        widthMm,
        heightMm,
        noBreak: isNoBreakBlock(block),
      });
    }

    return rendered;
  }

  private _packSectionIntoPdf(
    pdf: JsPdfInstance,
    blocks: RenderedBlock[],
    settings: PdfSettings,
    printableArea: PrintableArea,
    isFirstPage: boolean,
  ): boolean {
    if (!isFirstPage) {
      pdf.addPage();
    }

    let cursorYmm = 0;

    for (const block of blocks) {
      const blockHeightMm = this._resolveBlockHeight(block, printableArea.printableHeightMm);

      if (cursorYmm > 0 && cursorYmm + blockHeightMm > printableArea.printableHeightMm) {
        pdf.addPage();
        cursorYmm = 0;
      }

      if (block.noBreak && blockHeightMm > printableArea.printableHeightMm) {
        if (cursorYmm > 0) {
          pdf.addPage();
          cursorYmm = 0;
        }
        this._addScaledBlock(pdf, block, settings, printableArea, cursorYmm, printableArea.printableHeightMm);
        cursorYmm = printableArea.printableHeightMm;
        isFirstPage = false;
        continue;
      }

      if (!block.noBreak && block.heightMm > printableArea.printableHeightMm) {
        cursorYmm = this._addSplittableBlock(pdf, block, settings, printableArea, cursorYmm);
        isFirstPage = false;
        continue;
      }

      this._addBlockToPage(pdf, block, settings, printableArea, cursorYmm, blockHeightMm);
      cursorYmm += blockHeightMm;
      isFirstPage = false;
    }

    return false;
  }

  private _resolveBlockHeight(block: RenderedBlock, maxHeightMm: number): number {
    if (block.noBreak && block.heightMm > maxHeightMm) {
      return maxHeightMm;
    }
    return block.heightMm;
  }

  private _addScaledBlock(
    pdf: JsPdfInstance,
    block: RenderedBlock,
    settings: PdfSettings,
    printableArea: PrintableArea,
    cursorYmm: number,
    targetHeightMm: number,
  ): void {
    const scale = targetHeightMm / block.heightMm;
    const widthMm = block.widthMm * scale;
    const imgData = block.canvas.toDataURL('image/png');
    const x = settings.margins.left + (printableArea.printableWidthMm - widthMm) / 2;

    pdf.addImage(
      imgData,
      PDF_IMAGE_FORMAT,
      x,
      settings.margins.top + cursorYmm,
      widthMm,
      targetHeightMm,
    );
  }

  private _addBlockToPage(
    pdf: JsPdfInstance,
    block: RenderedBlock,
    settings: PdfSettings,
    printableArea: PrintableArea,
    cursorYmm: number,
    heightMm: number,
  ): void {
    const imgData = block.canvas.toDataURL('image/png');

    pdf.addImage(
      imgData,
      PDF_IMAGE_FORMAT,
      settings.margins.left,
      settings.margins.top + cursorYmm,
      block.widthMm,
      heightMm,
    );
  }

  private _addSplittableBlock(
    pdf: JsPdfInstance,
    block: RenderedBlock,
    settings: PdfSettings,
    printableArea: PrintableArea,
    initialCursorYmm: number,
  ): number {
    const widthMm = block.widthMm;
    const pxPerMm = block.canvas.width / widthMm;
    let sourceY = 0;
    let cursorYmm = initialCursorYmm;

    while (sourceY < block.canvas.height) {
      if (cursorYmm > 0 && cursorYmm >= printableArea.printableHeightMm - PAGE_BREAK_TOLERANCE_MM) {
        pdf.addPage();
        cursorYmm = 0;
      }

      const availableMm = printableArea.printableHeightMm - cursorYmm;
      const maxSlicePx = Math.max(1, Math.floor(availableMm * pxPerMm));
      const remainingPx = block.canvas.height - sourceY;
      const currentSliceHeight = Math.min(maxSlicePx, remainingPx);

      const sliceCanvas = document.createElement('canvas');
      sliceCanvas.width = block.canvas.width;
      sliceCanvas.height = currentSliceHeight;

      const ctx = sliceCanvas.getContext('2d');
      if (!ctx) break;

      ctx.drawImage(
        block.canvas,
        0,
        sourceY,
        block.canvas.width,
        currentSliceHeight,
        0,
        0,
        block.canvas.width,
        currentSliceHeight,
      );

      const sliceHeightMm = currentSliceHeight / pxPerMm;
      const imgData = sliceCanvas.toDataURL('image/png');

      pdf.addImage(
        imgData,
        PDF_IMAGE_FORMAT,
        settings.margins.left,
        settings.margins.top + cursorYmm,
        widthMm,
        sliceHeightMm,
      );

      sourceY += currentSliceHeight;
      cursorYmm += sliceHeightMm;
    }

    return cursorYmm >= printableArea.printableHeightMm - PAGE_BREAK_TOLERANCE_MM ? 0 : cursorYmm;
  }
}

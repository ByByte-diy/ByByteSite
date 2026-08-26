import { Injectable } from '@angular/core';
import { marked } from 'marked';
import { PdfSection } from '../models/pdf-export-source.model';
import { PdfSettings, PdfTheme } from '../models/pdf-settings.model';
import {
  PDF_BLOCK_CSS,
  PDF_LANDSCAPE_LAYOUT_CSS,
  PDF_PAGE_SPACING_CSS,
  PDF_THEME_STYLES,
} from '../constants/pdf-css.constants';
import { PDF_CUSTOM_CSS_FALLBACK_THEME } from '../constants/pdf-defaults.constants';
import {
  PDF_ASSETS_CONTENT_PREFIX,
  PDF_CODE_BLOCK_REGEX,
  PDF_CONTAINER_STYLES,
  PDF_CSS_CLASS,
  PDF_DEFAULT_CODE_LANGUAGE,
  PDF_DOC_TITLE_INLINE_STYLE,
  PDF_EXPORT_CONTAINER_ID,
  PDF_IMAGE_PATH_REGEX,
} from '../constants/pdf-dom.constants';
import { getPrintableArea } from '../utils/pdf-layout.utils';

@Injectable()
export class PdfRenderService {
  private _container: HTMLElement | null = null;

  async renderSections(sections: PdfSection[], settings: PdfSettings, docTitle: string): Promise<HTMLElement> {
    this.cleanup();
    this._container = this._createContainer(settings, docTitle);

    for (const section of sections) {
      const pageEl = document.createElement('div');
      pageEl.className = PDF_CSS_CLASS.page;
      pageEl.dataset['sectionId'] = section.id;

      if (section.title) {
        const titleEl = document.createElement('div');
        titleEl.className = `${PDF_CSS_CLASS.sectionTitle} ${PDF_CSS_CLASS.block} ${PDF_CSS_CLASS.blockNoBreak}`;
        titleEl.textContent = section.title;
        pageEl.appendChild(titleEl);
      }

      const contentEl = document.createElement('div');
      contentEl.className = PDF_CSS_CLASS.content;
      contentEl.innerHTML = await this._markdownToHtml(section.markdownContent);
      this._structureContent(contentEl, settings);
      pageEl.appendChild(contentEl);

      this._container.appendChild(pageEl);
    }

    document.body.appendChild(this._container);
    await this._waitForImages(this._container);
    this._applySyntaxHighlighting(this._container);

    return this._container;
  }

  cleanup(): void {
    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._container = null;
  }

  getPrintBlockGroups(container: HTMLElement): HTMLElement[][] {
    const groups: HTMLElement[][] = [];

    container.querySelectorAll<HTMLElement>(`.${PDF_CSS_CLASS.page}`).forEach((page) => {
      const blocks: HTMLElement[] = [];

      page.querySelectorAll<HTMLElement>(`:scope > .${PDF_CSS_CLASS.block}`).forEach((block) => {
        blocks.push(block);
      });

      const content = page.querySelector<HTMLElement>(`:scope > .${PDF_CSS_CLASS.content}`);
      if (content) {
        content.querySelectorAll<HTMLElement>(`:scope > .${PDF_CSS_CLASS.block}`).forEach((block) => {
          blocks.push(block);
        });
      }

      if (blocks.length > 0) {
        groups.push(blocks);
      }
    });

    return groups;
  }

  getPrintBlocks(container: HTMLElement): HTMLElement[] {
    return this.getPrintBlockGroups(container).flat();
  }

  private _structureContent(contentEl: HTMLElement, settings: PdfSettings): void {
    const hasImages = contentEl.querySelector('img') !== null;

    if (settings.orientation === 'landscape' && hasImages) {
      this._applyLandscapeSplit(contentEl);
      return;
    }

    this._wrapContentBlocks(contentEl);
  }

  private _wrapContentBlocks(contentEl: HTMLElement): void {
    const children = Array.from(contentEl.children) as HTMLElement[];
    contentEl.innerHTML = '';

    for (const child of children) {
      contentEl.appendChild(this._wrapBlock(child, this._isMediaElement(child)));
    }
  }

  private _applyLandscapeSplit(contentEl: HTMLElement): void {
    const children = Array.from(contentEl.children) as HTMLElement[];
    contentEl.innerHTML = '';

    const textCol = document.createElement('div');
    textCol.className = PDF_CSS_CLASS.splitText;
    const mediaCol = document.createElement('div');
    mediaCol.className = PDF_CSS_CLASS.splitMedia;

    for (const child of children) {
      if (child.tagName === 'IMG') {
        mediaCol.appendChild(this._wrapMediaBlock(child as HTMLImageElement));
        continue;
      }

      const imgs = Array.from(child.querySelectorAll('img'));
      if (imgs.length > 0) {
        imgs.forEach((img) => {
          mediaCol.appendChild(this._wrapMediaBlock(img.cloneNode(true) as HTMLImageElement));
          img.remove();
        });
      }

      if (child.textContent?.trim() || child.children.length > 0) {
        textCol.appendChild(this._wrapBlock(child));
      }
    }

    const split = document.createElement('div');
    split.className = `${PDF_CSS_CLASS.splitLayout} ${PDF_CSS_CLASS.block} ${PDF_CSS_CLASS.blockNoBreak}`;

    split.appendChild(textCol);
    if (mediaCol.children.length > 0) {
      split.appendChild(mediaCol);
    } else {
      split.classList.remove(PDF_CSS_CLASS.blockNoBreak);
    }

    contentEl.appendChild(split);
  }

  private _wrapBlock(el: HTMLElement, isMedia = false): HTMLElement {
    const block = document.createElement('div');
    block.className = isMedia
      ? `${PDF_CSS_CLASS.block} ${PDF_CSS_CLASS.blockNoBreak} ${PDF_CSS_CLASS.blockMedia}`
      : PDF_CSS_CLASS.block;
    block.appendChild(el);
    return block;
  }

  private _wrapMediaBlock(img: HTMLImageElement): HTMLElement {
    const block = document.createElement('div');
    block.className = `${PDF_CSS_CLASS.block} ${PDF_CSS_CLASS.blockNoBreak} ${PDF_CSS_CLASS.blockMedia}`;
    block.appendChild(img);
    return block;
  }

  private _isMediaElement(el: HTMLElement): boolean {
    if (el.tagName === 'IMG') {
      return true;
    }
    if (el.tagName === 'P' && el.children.length === 1 && el.firstElementChild?.tagName === 'IMG') {
      return true;
    }
    return el.querySelector(':scope > img') !== null && el.textContent?.trim() === '';
  }

  private _createContainer(settings: PdfSettings, docTitle: string): HTMLElement {
    const container = document.createElement('div');
    container.id = PDF_EXPORT_CONTAINER_ID;
    container.setAttribute('aria-hidden', 'true');

    const { contentWidthPx } = getPrintableArea(settings);
    container.style.cssText = `
      position: ${PDF_CONTAINER_STYLES.position};
      left: ${PDF_CONTAINER_STYLES.left};
      top: ${PDF_CONTAINER_STYLES.top};
      width: ${contentWidthPx}px;
      background: ${PDF_CONTAINER_STYLES.background};
      z-index: ${PDF_CONTAINER_STYLES.zIndex};
      pointer-events: ${PDF_CONTAINER_STYLES.pointerEvents};
    `;

    const styleEl = document.createElement('style');
    const themeCss =
      settings.theme === 'custom'
        ? PDF_THEME_STYLES[PDF_CUSTOM_CSS_FALLBACK_THEME]
        : PDF_THEME_STYLES[settings.theme as Exclude<PdfTheme, 'custom'>];
    styleEl.textContent = `
      ${themeCss}
      ${PDF_BLOCK_CSS}
      ${settings.orientation === 'landscape' ? PDF_LANDSCAPE_LAYOUT_CSS : ''}
      ${settings.customCss ?? ''}
      .${PDF_CSS_CLASS.page} {
        padding: ${settings.margins.top}px ${settings.margins.right}px ${settings.margins.bottom}px ${settings.margins.left}px;
      }
      ${PDF_PAGE_SPACING_CSS}
    `;
    container.appendChild(styleEl);

    const titleMeta = document.createElement('div');
    titleMeta.className = `${PDF_CSS_CLASS.docTitle} ${PDF_CSS_CLASS.block} ${PDF_CSS_CLASS.blockNoBreak}`;
    titleMeta.style.cssText = PDF_DOC_TITLE_INLINE_STYLE;
    titleMeta.textContent = docTitle;
    container.appendChild(titleMeta);

    return container;
  }

  private async _markdownToHtml(markdown: string): Promise<string> {
    const processed = this._processMarkdown(markdown);
    return marked.parse(processed, { async: true }) as Promise<string>;
  }

  private _processMarkdown(content: string): string {
    let processed = content.replace(PDF_CODE_BLOCK_REGEX, (match, language, code) => {
      if (!language) {
        return '```' + PDF_DEFAULT_CODE_LANGUAGE + '\n' + code + '```';
      }
      return '```' + language + '\n' + code + '```';
    });

    processed = this._fixImagePaths(processed);
    return processed;
  }

  private _fixImagePaths(content: string): string {
    return content.replace(PDF_IMAGE_PATH_REGEX, (match, prefix, contentPath, imagePath, suffix) => {
      return prefix + PDF_ASSETS_CONTENT_PREFIX + imagePath + suffix;
    });
  }

  private async _waitForImages(container: HTMLElement): Promise<void> {
    const images = Array.from(container.querySelectorAll('img'));
    await Promise.all(
      images.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) {
              resolve();
              return;
            }
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }),
      ),
    );
  }

  private _applySyntaxHighlighting(container: HTMLElement): void {
    if (typeof window === 'undefined') return;

    const prism = (window as unknown as {
      Prism?: { highlightAllUnder?: (el: Element) => void; highlightAll?: () => void };
    }).Prism;
    if (!prism) return;

    if (prism.highlightAllUnder) {
      prism.highlightAllUnder(container);
    } else if (prism.highlightAll) {
      prism.highlightAll();
    }
  }
}

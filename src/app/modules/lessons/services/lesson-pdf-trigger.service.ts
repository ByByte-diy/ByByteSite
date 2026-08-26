import { Injectable, Injector, inject } from '@angular/core';
import { PdfExportSource } from '../../pdf-export/models/pdf-export-source.model';
import type { PdfExportLauncherService } from '../../pdf-export/services/pdf-export-launcher.service';

@Injectable({
  providedIn: 'root',
})
export class LessonPdfTriggerService {
  private readonly _injector = inject(Injector);
  private _launcherPromise: Promise<PdfExportLauncherService> | null = null;

  async openExport(source: PdfExportSource): Promise<void> {
    if (!this._launcherPromise) {
      this._launcherPromise = import('../../pdf-export/pdf-export.bootstrap').then(
        ({ bootstrapPdfExportLauncher }) => bootstrapPdfExportLauncher(this._injector),
      );
    }

    const launcher = await this._launcherPromise;
    await launcher.open(source);
  }
}

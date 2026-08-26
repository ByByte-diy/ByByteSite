import { Injector } from '@angular/core';
import type { PdfExportLauncherService } from './services/pdf-export-launcher.service';

export async function bootstrapPdfExportLauncher(
  parentInjector: Injector,
): Promise<PdfExportLauncherService> {
  const [
    { PdfExportLauncherService },
    { PdfGeneratorService },
    { PdfRenderService },
  ] = await Promise.all([
    import('./services/pdf-export-launcher.service'),
    import('./services/pdf-generator.service'),
    import('./services/pdf-render.service'),
  ]);

  const childInjector = Injector.create({
    providers: [PdfExportLauncherService, PdfGeneratorService, PdfRenderService],
    parent: parentInjector,
  });

  return childInjector.get(PdfExportLauncherService);
}

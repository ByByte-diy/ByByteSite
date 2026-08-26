import {
  ApplicationRef,
  ComponentRef,
  EnvironmentInjector,
  Injectable,
  Injector,
  createComponent,
} from '@angular/core';
import { PdfExportSource } from '../models/pdf-export-source.model';

@Injectable()
export class PdfExportLauncherService {
  private _activeDialog: ComponentRef<unknown> | null = null;

  constructor(
    private readonly _appRef: ApplicationRef,
    private readonly _injector: Injector,
    private readonly _environmentInjector: EnvironmentInjector,
  ) {}

  async open(source: PdfExportSource): Promise<void> {
    this._destroyActiveDialog();

    const { PdfExportDialogComponent } = await import(
      '../components/pdf-export-dialog/pdf-export-dialog.component'
    );

    const dialogRef = createComponent(PdfExportDialogComponent, {
      environmentInjector: this._environmentInjector,
      elementInjector: this._injector,
    });

    dialogRef.setInput('source', source);
    dialogRef.instance.closed.subscribe(() => this._destroyDialog(dialogRef));

    this._appRef.attachView(dialogRef.hostView);
    document.body.appendChild(dialogRef.location.nativeElement);
    this._activeDialog = dialogRef;
  }

  private _destroyActiveDialog(): void {
    if (this._activeDialog) {
      this._destroyDialog(this._activeDialog);
    }
  }

  private _destroyDialog(ref: ComponentRef<unknown>): void {
    this._appRef.detachView(ref.hostView);
    ref.destroy();
    if (this._activeDialog === ref) {
      this._activeDialog = null;
    }
  }
}

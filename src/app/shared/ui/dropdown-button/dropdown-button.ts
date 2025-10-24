import {
  Component,
  HostListener,
  Input,
  OnDestroy,
  ViewEncapsulation,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  standalone: true,
  template: `
    <div class="dropdown" (keydown.escape)="close()">
      <button
        class="dropdown__btn"
        type="button"
        [attr.aria-label]="ariaLabel"
        aria-haspopup="listbox"
        [attr.aria-expanded]="open()"
        (click)="toggle()"
      >
        <ng-content select="[dropdownTrigger]"></ng-content>
      </button>
      @if (open()) {
        <ul class="dropdown__menu" role="listbox">
          <ng-content select="[dropdownMenu]"></ng-content>
        </ul>
      }
    </div>
  `,
  styleUrls: ['./dropdown-button.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownButtonComponent implements OnDestroy {
  @Input() ariaLabel = 'Menu';
  protected open = signal(false);
  private static openedInstance: DropdownButtonComponent | null = null;

  protected toggle() {
    const willOpen = !this.open();
    if (willOpen) {
      if (
        DropdownButtonComponent.openedInstance &&
        DropdownButtonComponent.openedInstance !== this
      ) {
        DropdownButtonComponent.openedInstance.close();
      }
      this.open.set(true);
      DropdownButtonComponent.openedInstance = this;
    } else {
      this.close();
    }
  }
  protected close() {
    this.open.set(false);
    if (DropdownButtonComponent.openedInstance === this) {
      DropdownButtonComponent.openedInstance = null;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent) {
    const path = ev.composedPath?.() as Array<EventTarget>;
    const isInside = path.some((n: any) => n?.classList?.contains?.('dropdown'));
    if (!isInside) this.close();
  }

  @HostListener('document:focusin', ['$event'])
  onDocFocusIn(ev: FocusEvent) {
    const path = (ev.composedPath?.() as Array<EventTarget>) || [];
    const isInside = path.some((n: any) => n?.classList?.contains?.('dropdown'));
    if (!isInside) this.close();
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.close();
  }

  ngOnDestroy(): void {
    if (DropdownButtonComponent.openedInstance === this) {
      DropdownButtonComponent.openedInstance = null;
    }
  }
}

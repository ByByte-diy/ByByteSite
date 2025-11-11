import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ByByteSite');
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private _router: Router) {
    // Browser only add scroll logic
    if (isPlatformBrowser(this.platformId)) {
      this._router.events
        .pipe(filter((e) => e instanceof NavigationStart || e instanceof NavigationEnd))
        .subscribe(() => {
          // Simple scroll to top
          setTimeout(() => {
            if (typeof window !== 'undefined') {
              window.scrollTo(0, 0);
            }
          }, 0);
        });
    }
  }
}

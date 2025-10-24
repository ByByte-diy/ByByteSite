import { Component, NgZone, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './layout/header/header';
import { FooterComponent } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ByByteSite');

  constructor(
    private _router: Router,
    private _ngZone: NgZone,
  ) {
    const scrollTopAll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.querySelector('.community-page')?.scrollTo?.(0, 0);
    };

    this._ngZone.runOutsideAngular(() => {
      this._router.events
        .pipe(filter((e) => e instanceof NavigationStart || e instanceof NavigationEnd))
        .subscribe(() => {
          requestAnimationFrame(() => {
            scrollTopAll();
            setTimeout(scrollTopAll, 0);
          });
        });
    });
  }
}

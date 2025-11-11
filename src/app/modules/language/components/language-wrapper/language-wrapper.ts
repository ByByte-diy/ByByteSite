import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment.js';

@Component({
  selector: 'app-language-wrapper',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styles: '',
})
export class LanguageWrapperComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly translate = inject(TranslateService);

  ngOnInit(): void {
    const lang = this.route.snapshot.paramMap.get('lang');

    if (lang && environment.supportedLangs.includes(lang)) {
      this.translate.use(lang);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('app-lang', lang);
      }
    } else {
      const currentPath = this.router.url.replace(/^\/[a-z]{2}/, '');
      this.router.navigate([`/${environment.defaultLang}${currentPath}`]);
    }
  }
}

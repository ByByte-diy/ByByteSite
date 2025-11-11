import { Component, OnInit, inject } from '@angular/core';
import { Home } from '../../pages/home/home';
import { SeoModule } from '../../modules/seo/seo.module';
import { SeoService } from '../../modules/seo/services/seo.service';

/**
 * Root page component that renders Home component with default language
 * This component is used for prerendering the root route '/'
 */
@Component({
  selector: 'app-root-page',
  standalone: true,
  imports: [Home, SeoModule],
  template: `<app-home></app-home>`,
  styles: '',
})
export class RootPageComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    // Set SEO for root page (default language)
    this.seoService.updateSeoFromConfig({
      titleKey: 'seo.home.title',
      descriptionKey: 'seo.home.description',
      keywordsKey: 'seo.home.keywords',
      imageKey: 'seo.home.image',
      structuredDataKey: 'seo.home.structuredData',
      type: 'website',
    });
  }
}

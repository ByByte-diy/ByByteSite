import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-docs',
  imports: [],
  template: ` <h1>Docs</h1> `,
  styles: ``,
})
export class Docs implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateSeoFromConfig({
      titleKey: 'seo.docs.title',
      descriptionKey: 'seo.docs.description',
      keywordsKey: 'seo.docs.keywords',
      type: 'website',
    });
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-products',
  imports: [],
  template: ` <h1>Products</h1> `,
  styles: ``,
})
export class Products implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateSeoFromConfig({
      titleKey: 'seo.products.title',
      descriptionKey: 'seo.products.description',
      keywordsKey: 'seo.products.keywords',
      type: 'website',
    });
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { HeroCarouselComponent } from '../../components/hero-carousel/hero-carousel.js';
import { AboutSectionComponent } from '../../components/about-section/about-section.js';
import { WhyImportantComponent } from '../../components/why-important/why-important.js';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.js';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [
    HeroCarouselComponent,
    AboutSectionComponent,
    WhyImportantComponent,
    CtaSectionComponent,
  ],
  template: `
    <app-hero-carousel></app-hero-carousel>
    <app-about-section></app-about-section>
    <app-why-important></app-why-important>
    <app-cta-section></app-cta-section>
  `,
  styles: ``,
})
export class Home implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
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

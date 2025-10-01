import { Component } from '@angular/core';
import { HeroCarouselComponent } from '../../components/hero-carousel/hero-carousel.js';

@Component({
  selector: 'app-home',
  imports: [HeroCarouselComponent],
  template: ` <app-hero-carousel></app-hero-carousel> `,
  styles: ``,
})
export class Home {}

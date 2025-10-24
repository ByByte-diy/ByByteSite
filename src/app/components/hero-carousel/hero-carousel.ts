import { CommonModule } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface CarouselSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttons?: CarouselButton[];
}

type CarouselButtonColor = 'primary' | 'accent' | 'secondary' | 'success' | 'neutral';

interface CarouselButton {
  href: string;
  color: CarouselButtonColor;
  text: string; // i18n key
}
interface FeatureCard {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="hero-carousel">
      <!-- Carousel Section -->
      <div class="carousel-container">
        <div
          class="carousel-wrapper"
          [style.transform]="'translateX(-' + currentSlide() * 100 + '%)'"
        >
          @for (slide of slides(); track slide.id) {
            <div class="carousel-slide">
              <img [src]="slide.image" [alt]="slide.title" class="carousel-image" />
              <div class="carousel-overlay">
                <div class="carousel-content">
                  <h1 class="carousel-title">{{ slide.title | translate }}</h1>
                  <p class="carousel-subtitle">{{ slide.subtitle | translate }}</p>
                  <p class="carousel-description">{{ slide.description | translate }}</p>
                  @if (slide.buttons?.length) {
                    <div class="carousel-buttons">
                      @for (btn of slide.buttons | slice: 0 : 2; track btn.href) {
                        <a [href]="btn.href" class="btn" [ngClass]="'btn--' + btn.color">{{
                          btn.text | translate
                        }}</a>
                      }
                    </div>
                  }
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Navigation Dots -->
        @if (slides().length > 1) {
          <div class="carousel-dots">
            @for (slide of slides(); track slide.id; let i = $index) {
              <button
                class="carousel-dot"
                [class.carousel-dot--active]="currentSlide() === i"
                (click)="goToSlide(i)"
                [attr.aria-label]="'Go to slide ' + (i + 1)"
              ></button>
            }
          </div>
        }
      </div>

      <!-- Feature Cards Section -->
      <div class="feature-cards">
        @for (card of featureCards(); track card.id) {
          <div class="feature-card" [style.background-color]="card.color">
            <div class="feature-card__icon">
              <span
                class="feature-icon"
                [style.--icon-url]="'url(' + card.icon + ')'"
                aria-hidden="true"
              ></span>
            </div>
            <h3 class="feature-card__title">{{ card.title | translate }}</h3>
            <p class="feature-card__description">{{ card.description | translate }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styleUrls: ['./hero-carousel.scss'],
})
export class HeroCarouselComponent {
  protected currentSlide = signal(0);

  protected slides = signal<CarouselSlide[]>([
    {
      id: 'slide-1',
      image: 'img/car.png',
      title: 'hero.slide1.title',
      subtitle: 'hero.slide1.subtitle',
      description: 'hero.slide1.description',
      buttons: [
        {
          href: 'https://github.com/ByByte-diy/ByByteNano',
          color: 'primary',
          text: 'hero.buttons.letsBuild',
        },
        { href: '/#community', color: 'accent', text: 'hero.buttons.letsLearn' },
      ],
    },
  ]);

  protected featureCards = signal<FeatureCard[]>([
    {
      id: 'feature-1',
      title: 'hero.feature1.title',
      description: 'hero.feature1.description',
      color: 'var(--color-primary)', // Blue for assembling
      icon: 'icons/carusel/assembling.svg',
    },
    {
      id: 'feature-2',
      title: 'hero.feature2.title',
      description: 'hero.feature2.description',
      color: 'var(--color-success)', // Green for like/affordable
      icon: 'icons/carusel/like.svg',
    },
    {
      id: 'feature-3',
      title: 'hero.feature3.title',
      description: 'hero.feature3.description',
      color: 'var(--color-secondary)', // Orange for learning
      icon: 'icons/carusel/rocket.svg',
    },
    {
      id: 'feature-4',
      title: 'hero.feature4.title',
      description: 'hero.feature4.description',
      color: 'var(--color-accent)', // Purple for expandable
      icon: 'icons/carusel/expand.svg',
    },
  ]);

  protected goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}

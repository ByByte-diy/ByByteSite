import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { HeroCarouselComponent } from './hero-carousel';

describe('HeroCarouselComponent', () => {
  let component: HeroCarouselComponent;
  let fixture: ComponentFixture<HeroCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCarouselComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: TranslateService,
          useValue: {
            get: () => of('Test'),
            getCurrentLang: () => 'en',
            onLangChange: of({ lang: 'en' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial slide at 0', () => {
    expect(component['currentSlide']()).toBe(0);
  });

  it('should go to specific slide', () => {
    component['goToSlide'](1);
    expect(component['currentSlide']()).toBe(1);
  });
});

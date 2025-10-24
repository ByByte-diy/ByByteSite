import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { AboutSectionComponent } from './about-section';

describe('AboutSectionComponent', () => {
  let component: AboutSectionComponent;
  let fixture: ComponentFixture<AboutSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionComponent, TranslateModule],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: TranslateService,
          useValue: {
            get: () => of(''),
            instant: (key: string) => key,
            onLangChange: of({}),
            onTranslationChange: of({}),
            onDefaultLangChange: of({}),
            onFallbackLangChange: of({}),
            getLangs: () => ['en', 'uk', 'ru'],
            currentLang: 'en',
            getCurrentLang: () => 'en',
            getDefaultLang: () => 'en',
            use: () => {},
            addLangs: () => {},
            setDefaultLang: () => {},
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have robots configuration', () => {
    const robots = (component as any).robots();
    expect(robots.length).toBe(2);
    expect(robots[0].title).toBe('about.mega.title');
    expect(robots[1].title).toBe('about.nano.title');
  });

  it('each robot should expose 4 features', () => {
    const robots = (component as any).robots();
    expect(
      robots.every((r: any) => Array.isArray(r.features) && r.features.length === 4),
    ).toBeTrue();
  });
});

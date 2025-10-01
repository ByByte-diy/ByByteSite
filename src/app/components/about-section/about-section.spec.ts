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
    expect(robots[0].key).toBe('mega');
    expect(robots[1].key).toBe('nano');
  });

  it('should have feature indexes', () => {
    const indexes = (component as any).featureIndexes();
    expect(indexes.length).toBe(4);
    expect(indexes).toEqual([0, 1, 2, 3]);
  });
});

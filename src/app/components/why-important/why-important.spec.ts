import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { WhyImportantComponent } from './why-important';

describe('WhyImportantComponent', () => {
  let component: WhyImportantComponent;
  let fixture: ComponentFixture<WhyImportantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyImportantComponent, TranslateModule],
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

    fixture = TestBed.createComponent(WhyImportantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have points configuration', () => {
    const points = (component as any).points();
    expect(points.length).toBe(4);
    expect(points[0].image).toBe('img/placeholder/education.png');
    expect(points[1].image).toBe('img/placeholder/tools.png');
    expect(points[2].image).toBe('img/placeholder/global.png');
    expect(points[3].image).toBe('img/placeholder/rocket.png');
  });
});

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
    expect(points[0].icon).toBe('📚');
    expect(points[1].icon).toBe('🛠️');
    expect(points[2].icon).toBe('🌍');
    expect(points[3].icon).toBe('🚀');
  });
});

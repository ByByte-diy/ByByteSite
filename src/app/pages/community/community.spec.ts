import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { Community } from './community';

describe('Community', () => {
  let component: Community;
  let fixture: ComponentFixture<Community>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Community, TranslateModule],
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

    fixture = TestBed.createComponent(Community);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

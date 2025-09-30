import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LangSwitcher } from './lang-switcher.ts';
import { provideRouter } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('LangSwitcher', () => {
  let component: LangSwitcher;
  let fixture: ComponentFixture<LangSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), LangSwitcher],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: TranslateService,
          useValue: {
            getLangs: () => ['en', 'uk', 'ru'],
            currentLang: 'en',
            getDefaultLang: () => 'en',
            use: () => {},
            get: (key: string) => of(key),
            instant: (key: string) => key,
            onLangChange: of({ lang: 'en' }),
            onTranslationChange: of({}),
            onDefaultLangChange: of({ lang: 'en' }),
          },
        },
      ],
    })
      .overrideComponent(LangSwitcher, { set: { template: '<select></select>' } })
      .compileComponents();

    fixture = TestBed.createComponent(LangSwitcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

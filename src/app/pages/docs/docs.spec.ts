import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Docs } from './docs.ts';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

describe('Docs', () => {
  let component: Docs;
  let fixture: ComponentFixture<Docs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), Docs],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Docs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

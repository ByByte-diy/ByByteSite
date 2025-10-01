import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Learn } from './learn';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

describe('Learn', () => {
  let component: Learn;
  let fixture: ComponentFixture<Learn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), Learn],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Learn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

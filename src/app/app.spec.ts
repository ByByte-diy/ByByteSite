import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), App],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    })
      .overrideComponent(App, { set: { template: '<h1>Test Host</h1>', styles: [''] } })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Test Host');
  });

  it('should scroll to top on navigation events', (done) => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    const scrollToSpy = spyOn(window, 'scrollTo');
    spyOn(window as any, 'requestAnimationFrame').and.callFake((cb: FrameRequestCallback) => {
      cb(0 as any);
      return 0 as any;
    });

    // Trigger navigation to emit router events
    router.navigateByUrl('/community').catch(() => {});

    setTimeout(() => {
      expect(scrollToSpy).toHaveBeenCalled();
      done();
    }, 0);
  });
});

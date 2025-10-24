import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { EnvironmentProviders, Provider } from '@angular/core';
import { errorInterceptor } from './interceptors/error.interceptor';

export function provideCore(): Array<Provider | EnvironmentProviders> {
  return [provideHttpClient(withFetch(), withInterceptors([errorInterceptor]))];
}

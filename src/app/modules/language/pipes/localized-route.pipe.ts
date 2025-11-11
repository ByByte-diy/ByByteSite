import { Pipe, PipeTransform, inject } from '@angular/core';
import { RouterService } from '../services/router.service';

@Pipe({
  name: 'localizedRoute',
  standalone: true,
  pure: false,
})
export class LocalizedRoutePipe implements PipeTransform {
  private readonly routerService = inject(RouterService);

  transform(path: string | null | undefined): string {
    if (!path) {
      return this.routerService.getLocalizedRoute('/');
    }

    return this.routerService.getLocalizedRoute(path);
  }
}

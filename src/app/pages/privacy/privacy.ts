import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SeoModule } from '../../modules/seo/seo.module';
import { SeoService } from '../../modules/seo/services/seo.service';
import { TextPageComponent } from '../../shared/text-page/text-page';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule, SeoModule, TextPageComponent],
  templateUrl: './privacy.html',
})
export class PrivacyComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateSeoFromConfig({
      titleKey: 'seo.privacy.title',
      descriptionKey: 'seo.privacy.description',
      keywordsKey: 'seo.privacy.keywords',
      type: 'website',
    });
  }
}

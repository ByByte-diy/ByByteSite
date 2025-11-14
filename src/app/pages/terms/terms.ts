import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SeoModule } from '../../modules/seo/seo.module';
import { SeoService } from '../../modules/seo/services/seo.service';
import { TextPageComponent } from '../../shared/text-page/text-page';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [TranslateModule, SeoModule, TextPageComponent],
  templateUrl: './terms.html',
})
export class TermsComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateSeoFromConfig({
      titleKey: 'seo.terms.title',
      descriptionKey: 'seo.terms.description',
      keywordsKey: 'seo.terms.keywords',
      type: 'website',
    });
  }
}

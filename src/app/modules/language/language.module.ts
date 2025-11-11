import { NgModule } from '@angular/core';
import { LanguageWrapperComponent } from './components/language-wrapper/language-wrapper';
import { LangSwitcher } from './components/lang-switcher/lang-switcher';
import { LocalizedRoutePipe } from './pipes/localized-route.pipe';

@NgModule({
  imports: [LanguageWrapperComponent, LangSwitcher, LocalizedRoutePipe],
  exports: [LangSwitcher, LocalizedRoutePipe],
})
export class LanguageModule {}

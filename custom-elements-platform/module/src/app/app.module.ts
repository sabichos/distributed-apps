import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Injector, ApplicationRef, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { HomeComponent } from './components/home/home.component';
import { WizardComponent } from './components/wizard/wizard.component';

@NgModule({
  declarations: [
    HomeComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //bootstrap:[HomeComponent]
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const webComponent = createCustomElement(HomeComponent, { injector });
    customElements.define('new-card', webComponent);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('app-home')) {
      appRef.bootstrap(HomeComponent);
    }
  }
}

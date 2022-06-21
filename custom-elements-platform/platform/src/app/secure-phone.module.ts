import { NgModule, Injector, DoBootstrap, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SecurePhoneComponent } from './components/secure-phone/secure-phone.component';



@NgModule({
  declarations: [
    SecurePhoneComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  exports: [SecurePhoneComponent]
})
export class SecurePhoneModule implements DoBootstrap {
  constructor(injector: Injector) {
    const webComponent = createCustomElement(SecurePhoneComponent, { injector });
    customElements.define('secure-phone', webComponent);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(SecurePhoneComponent);
  }
}

import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SecurePhoneComponent } from './components/secure-phone/secure-phone.component';



@NgModule({
  declarations: [
    SecurePhoneComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [SecurePhoneComponent],
  bootstrap:[SecurePhoneComponent]
})
export class SecurePhoneModule implements DoBootstrap {
  constructor(private injector: Injector) { }
  ngDoBootstrap(): void {
    const webComponent = createCustomElement(SecurePhoneComponent, { injector: this.injector });
    customElements.define('secure-phone', webComponent);
  }
}

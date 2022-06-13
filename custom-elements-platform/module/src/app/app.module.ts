import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [HomeComponent]
})
export class AppModule { }

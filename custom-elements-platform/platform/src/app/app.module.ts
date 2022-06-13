import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { SecurePhoneModule } from './secure-phone.module';
import { HomeComponent } from './components/home/home.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { CardComponent } from './components/card/card.component';
import { IdentityDetailsComponent } from './components/identity-details/identity-details.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { OffersComponent } from './components/offers/offers.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    HomeComponent,
    ConnectionsComponent,
    CardComponent,
    IdentityDetailsComponent,
    TransactionsComponent,
    OffersComponent,
    SpinnerComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SecurePhoneModule
  ],
  providers: [HttpClient],
  bootstrap: [HomeComponent]
})
export class AppModule { }

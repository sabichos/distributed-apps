import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentLoaderComponent } from './components/component-loader/component-loader.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    UserDetailsComponent,
    CardPageComponent,
    PageLoaderComponent,
    ComponentLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [HomeComponent]
})
export class AppModule { }

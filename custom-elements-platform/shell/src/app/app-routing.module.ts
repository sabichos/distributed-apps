import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPageComponent } from "./components/card-page/card-page.component";
import { ComponentLoaderComponent } from './components/component-loader/component-loader.component';

const routes: Routes = [
  { path: '', component: CardPageComponent, pathMatch: "full" },
  { path: 'cards/new-card', component: ComponentLoaderComponent },
  { path: 'secure-phone', component: ComponentLoaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
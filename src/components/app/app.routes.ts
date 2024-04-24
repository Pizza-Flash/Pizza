import { RouterModule, Routes } from '@angular/router';
import {StartsiteComponent} from "../startsite/startsite.component";
import {AnmeldenComponent} from "../anmelden/anmelden.component";
import {WarenkorbComponent} from "../warenkorb/warenkorb.component";
import {CheckoutComponent} from "../checkout/checkout.component";
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: StartsiteComponent
  },
  {
    path: 'login',
    component: AnmeldenComponent
  },
  {
    path: 'cart',
    component: WarenkorbComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }


];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}

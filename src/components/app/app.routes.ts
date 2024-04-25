import { RouterModule, Routes } from '@angular/router';
import {StartsiteComponent} from "../startsite/startsite.component";
import {AnmeldenComponent} from "../anmelden/anmelden.component";
import {WarenkorbComponent} from "../warenkorb/warenkorb.component";
import {CheckoutComponent} from "../checkout/checkout.component";
import { NgModule } from '@angular/core';
import { UeberUnsComponent } from '../ueber-uns/ueber-uns.component';
import { KonfiguratorComponent } from '../konfigurator/konfigurator.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: StartsiteComponent,
    
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
  },
  {
path:'impressum',
component : UeberUnsComponent
  },
  {
    path:'konfigurator',
    component:KonfiguratorComponent
  }


];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}

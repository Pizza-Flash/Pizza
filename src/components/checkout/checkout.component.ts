import { Component, OnInit } from '@angular/core';
import { WarenkorbComponent } from '../warenkorb/warenkorb.component';
import { LieferadresseFormComponent } from '../lieferadresse.form/lieferadresseForm.component';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  standalone: true,
  styleUrls: ['./checkout.component.css'],
  imports:[WarenkorbComponent,LieferadresseFormComponent]
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

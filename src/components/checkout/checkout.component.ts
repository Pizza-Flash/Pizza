import { Component, OnInit } from '@angular/core';
import { WarenkorbComponent } from '../warenkorb/warenkorb.component';
import { LieferadresseFormComponent } from '../lieferadresse.form/lieferadresseForm.component';
import { LieferadresseListComponent } from '../lieferadresse.list/lieferadresseList.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  standalone: true,
  styleUrls: ['./checkout.component.css'],
  imports:[WarenkorbComponent,LieferadresseFormComponent,LieferadresseListComponent]
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { WarenkorbComponent } from '../warenkorb/warenkorb.component';
import { LieferadresseFormComponent } from '../lieferadresse.form/lieferadresseForm.component';
import { AppComponent } from '../app/app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  standalone: true,
  styleUrls: ['./checkout.component.css'],
  imports:[WarenkorbComponent,LieferadresseFormComponent ,AppComponent]
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    
  }

  




  

}

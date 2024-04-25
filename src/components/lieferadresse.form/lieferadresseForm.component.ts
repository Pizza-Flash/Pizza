import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {Adresse} from "../../models/adresse";
import {Kunde} from "../../models/kunde";
import {KundenService} from "../../services/kunden.service";

import { KundenAdresseService } from '../../services/adresse-kunde.service';
import { AdresseUnternehmenService } from '../../services/adresse-unternehmen.service';

@Component({
  selector: 'app-lieferadresseForm',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './lieferadresseForm.component.html',
  styleUrls: ['./lieferadresseForm.component.css'],
  providers:[KundenService,KundenAdresseService,AdresseUnternehmenService]
  
})
export class LieferadresseFormComponent implements OnInit {
  adresse: Adresse;
  kunde: Kunde;

  constructor(
    private kundenService: KundenService,
  ) {
    this.kunde = new Kunde(null, null, null, null);
    this.kunde.adresse = new Adresse(null, null, null, null);
  }

  ngOnInit() {
    const localData = localStorage.getItem('kunde')
    if (localData != null) {
      this.kunde = JSON.parse(localData)
    }
  }

  saveKunde() {
    this.kunde = new Kunde(null, null, null, null);
    this.kunde.adresse = new Adresse(null, null, null, null);

    this.kundenService.saveKunde(this.kunde);
    localStorage.setItem('kunde', JSON.stringify(this.kunde))
  }
    
}


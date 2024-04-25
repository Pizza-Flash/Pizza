import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {LieferadresseListComponent} from "../lieferadresse.list/lieferadresseList.component";
import {Adresse} from "../../models/adresse";
import {Kunde} from "../../models/kunde";
import {KundenService} from "../../services/kunden.service";
import {UnternehmenService} from "../../services/unternehmen.service";
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
  providers:[KundenService,KundenAdresseService,UnternehmenService,AdresseUnternehmenService]
})
export class LieferadresseFormComponent implements OnInit {
  adresse: Adresse;
  kunde: Kunde;

  constructor(
    private kundenService: KundenService,
    private unternehmenService: UnternehmenService
  ) {
    this.kunde = new Kunde(null, null, null, null);
    this.kunde.adresse = new Adresse(null, null, null, null);
  }

  ngOnInit() {}

  saveKunde() {
    this.kunde = new Kunde(null, null, null, null);
    this.kunde.adresse = new Adresse(null, null, null, null);
    this.kundenService.saveKunde(this.kunde);
  }
}

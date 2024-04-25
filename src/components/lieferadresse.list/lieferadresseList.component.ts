import { Component, OnInit } from '@angular/core';
import {UnternehmenService} from "../../services/unternehmen.service";
import {KundenService} from "../../services/kunden.service";
import {Kunde} from "../../models/kunde";
import { KundenAdresseService } from '../../services/adresse-kunde.service';
import { AdresseUnternehmenService } from '../../services/adresse-unternehmen.service';
import { LieferadresseFormComponent } from '../lieferadresse.form/lieferadresseForm.component';

@Component({
  selector: 'app-lieferadresseList',
  standalone: true,
  templateUrl: './lieferadresseList.component.html',
  styleUrls: ['./lieferadresseList.component.css'],
  providers:[KundenService,KundenAdresseService,UnternehmenService,AdresseUnternehmenService]
})
export class LieferadresseListComponent implements OnInit {
  kunde: Kunde[];
  constructor(
    private unternehmenService: UnternehmenService,
    private kundenService: KundenService
  ) {}

  ngOnInit() {}

  get kunden(): Kunde[] {
    return this.kundenService.kunden;
  }
}

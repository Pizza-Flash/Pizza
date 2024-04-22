import { Component, OnInit } from '@angular/core';
import {UnternehmenService} from "../../services/unternehmen.service";
import {KundenService} from "../../services/kunden.service";
import {Kunde} from "../../models/kunde";

@Component({
  selector: 'app-lieferadresseList',
  standalone: true,
  templateUrl: './lieferadresseList.component.html',
  styleUrls: ['./lieferadresseList.component.css'],
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

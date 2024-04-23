import { Injectable } from '@angular/core';
import { Unternehmen } from '../models/unternehmen';
import { AdresseUnternehmenService } from './adresse-unternehmen.service';

@Injectable()
export class UnternehmenService {
  unternehmens: Unternehmen[] = [];
  constructor(public unternehmen: AdresseUnternehmenService) {
    this.unternehmens.push(
      new Unternehmen('Pizza Land', unternehmen.adressenU[0]),
      new Unternehmen('Pizza Paradies', unternehmen.adressenU[1]),
      new Unternehmen('Pizza Piece', unternehmen.adressenU[2]),
      new Unternehmen('One Piece', unternehmen.adressenU[3]),
      new Unternehmen('Pizza Flizza', unternehmen.adressenU[4]),
      new Unternehmen('Hey Pizza', unternehmen.adressenU[5]),
      new Unternehmen('Pizza Bros', unternehmen.adressenU[6]),
      new Unternehmen('Pizza Mangolds', unternehmen.adressenU[7]),
      new Unternehmen('Pizza Heaven', unternehmen.adressenU[8])

      // [0] = Holunderstr
      // [1] = Alter Weg
      // [2] = Jäger Allee
      // [3] = Müllersweg
      // [4] = Daimlerdamm
      // [5] = Theater von Marcos
      // [6] = Mülltonnenstraße
      // [7] = Parkallee
      // [8] = Potsdammer Platz
    );
  }
}

import { Injectable } from '@angular/core';
import { Adresse } from '../models/adresse';

@Injectable()
export class AdresseUnternehmenService {
  adressenU: Adresse[] = [];
  constructor() {
    this.adressenU.push(new Adresse('Holunderstr', '5b', '2817', 'Teststadt')),
      this.adressenU.push(new Adresse('Alter Weg', '33', '2817', 'Teststadt')),
      this.adressenU.push(
        new Adresse('Jäger Allee', '11', '2817', 'Teststadt')
      ),
      this.adressenU.push(new Adresse('Müllersweg', '18', '2817', 'Teststadt')),
      this.adressenU.push(new Adresse('Daimlerdamm', '1', '2817', 'Teststadt')),
      this.adressenU.push(
        new Adresse('Theater von Marcos Platz', '41', '2817', 'Teststadt')
      ),
      this.adressenU.push(
        new Adresse('Mülltonnenstraße', '31', '2817', 'Teststadt')
      ),
      this.adressenU.push(
        new Adresse('Park Allee', '11c', '2817', 'Teststadt')
      ),
      this.adressenU.push(
        new Adresse('Potsdammer Platz', '9 3/4', '2817', 'Teststadt')
      );
  }

  // [0] = Holunderstr
  // [1] = Alter Weg
  // [2] = Jäger Allee
  // [3] = Müllersweg
  // [4] = Daimlerdamm
  // [5] = Theater von Marcos
  // [6] = Mülltonnenstraße
  // [7] = Parkallee
  // [8] = Potsdammer Platz
}

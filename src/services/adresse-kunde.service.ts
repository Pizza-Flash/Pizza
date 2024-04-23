import { Injectable } from '@angular/core';
import { Adresse } from '../models/adresse';

@Injectable()
export class KundenAdresseService {
  adresseK: Adresse[] = [];
  constructor() {
    this.adresseK.push(
      new Adresse('Müllstraße', '31', 'Teststadt', '2817'),
      new Adresse('Schwarzer Weg', '11', 'Teststadt', '2817'),
      new Adresse('Müllerstraße', '21', 'Teststadt', '2817'),
      new Adresse('Adolf-von-Ritter-Straße ', '1a', 'Teststadt', '2817'),
      new Adresse('Helenstraße', '96', 'Teststadt', '2817'),
      new Adresse('Loststraße', '31', 'Teststadt', '2817'),
      new Adresse('Rotenplatz', '61', 'Teststadt', '2817'),
      new Adresse('Gold-Rodger-Allee', '19', 'Teststadt', '2817'),
      new Adresse('Piratenplatz', '6', 'Teststadt', '2817'),
      new Adresse('Alexanderplatz', '105', 'Teststadt', '2817'),
      new Adresse('Karauallee', '71', 'Teststadt', '2817'),
      new Adresse('Blue Dead Straße', '5', 'Teststadt', '2817'),
      new Adresse('Am Stern', '16', 'Teststadt', '2817'),
      new Adresse('Baustellen Weg', '15', 'Teststadt', '2817'),
      new Adresse('Ali Baba Werk', '10', 'Teststadt', '2817'),
      new Adresse('Mülltonnenstraße', '31', 'Teststadt', '2817'),
      new Adresse('Mangolder Ring', '21', 'Teststadt', '2817'),
      new Adresse('Hokage Straße', '106', 'Teststadt', '2817'),
      new Adresse('Kaiserstraße', '101', 'Teststadt', '2817'),
      new Adresse('Tengokustraße', '98', 'Teststadt', '2817')

      // [0] = Müllstraße
      // [1] = Schwarzer Weg
      // [2] = Müllerstraße
      // [3] = Adolf-von-Ritter-Straße
      // [4] = Helenstraße
      // [5] = Loststraße
      // [6] = Rotenplatz
      // [7] = Gold-Rodger-Allee
      // [8] = Piratenplatz
      // [9] = Alexanderplatz
      // [10] = Karauallee
      // [11] = Blue Dead Straße
      // [12] = Am Stern
      // [13] = Baustellen Weg
      // [14] = Ali Baba Werk
      // [15] = Mülltonnenstraße
      // [16] = Mangolder Ring
      // [17] = Hokage Straße
      // [18] = Kaiserstraße
      // [19] = Tengokustraße
    );
  }
}

import { Injectable } from '@angular/core';
import { Kunde } from '../models/kunde';
import { KundenAdresseService } from './adresse-kunde.service';

@Injectable()
export class KundenService {
  kunden: Kunde[] = [];
  constructor(public kunde: KundenAdresseService) {
    this.kunden.push(
      new Kunde(1, 'Sohail', 'Pirouz', kunde.adresseK[0]),
      new Kunde(1, 'Ahmd', 'Alalami', kunde.adresseK[1]),
      new Kunde(1, 'Azem', 'Alali', kunde.adresseK[2]),
      new Kunde(1, 'Jojo Amjad', 'Alhamad', kunde.adresseK[3]),
      new Kunde(1, 'Ramo Mohammad', 'Alrajap', kunde.adresseK[4]),
      new Kunde(1, 'Joost', 'Michaelis', kunde.adresseK[5]),
      new Kunde(1, 'David', 'Botrous', kunde.adresseK[6]),
      new Kunde(1, 'Boris', 'Dekic', kunde.adresseK[7]),
      new Kunde(1, 'Jordan', 'Gregg', kunde.adresseK[8]),
      new Kunde(1, 'Anna', 'Haase', kunde.adresseK[9]),
      new Kunde(1, 'Mika', 'Hensel', kunde.adresseK[10]),
      new Kunde(1, 'Jäger', 'Marvin', kunde.adresseK[11]),
      new Kunde(1, 'Mika', 'König', kunde.adresseK[12]),
      new Kunde(1, 'Bobo Bogdan', 'Lenmaru', kunde.adresseK[13]),
      new Kunde(1, 'Marvin', 'Mangold', kunde.adresseK[16]),
      new Kunde(1, 'Melanie', 'Moreno Solis', kunde.adresseK[16]),
      new Kunde(1, 'Dennis', 'Merzlikin', kunde.adresseK[14]),
      new Kunde(1, 'Abed', 'Südländer', kunde.adresseK[19]),
      new Kunde(1, 'Mirko', 'Schwarzzien', kunde.adresseK[18]),
      new Kunde(1, 'Uren', 'Umanmageswaran', kunde.adresseK[17])
    );
  }
  saveKunde(kunde: Kunde) {
    this.kunden.push(kunde);
  }

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
  // [11] = Blue Dead Str
  // [12] = Am Stern
  // [13] = Baustellen Weg
  // [14] = Ali Baba Werk
  // [15] = Mülltonnenstraße
  // [16] = Mangolder Ring
  // [17] = Hokage Straße
  // [18] = Kaiserstraße
  // [19] = Tengokustraße
}

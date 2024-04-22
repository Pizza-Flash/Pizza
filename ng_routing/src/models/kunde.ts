import { Adresse } from './adresse';

export class Kunde {
  constructor(
    public kundenNr: number,
    public vorname: string,
    public nachname: string,
    public adresse: Adresse
  ) {}
}

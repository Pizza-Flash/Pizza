import { Injectable } from '@angular/core';
import { Zutaten } from '../models/zutaten';

@Injectable()
export class ZutatenService {
  zutaten: Zutaten[] = [];
  constructor() {
    this.zutaten.push(
      new Zutaten('Käse'),
      new Zutaten('Salami'),
      new Zutaten('Pilze'),
      new Zutaten('Thunfisch'),
      new Zutaten('Ei'),
      new Zutaten('Hänchen'),
      new Zutaten('Holandaise Soße'),
      new Zutaten('Zwiebeln'),
      new Zutaten('Mais'),
      new Zutaten('Paprika'),
      new Zutaten('Schinken'),
      new Zutaten('Brokoli'),
      new Zutaten('Ananas '),
      new Zutaten('Sucuc')
    );
  }
}

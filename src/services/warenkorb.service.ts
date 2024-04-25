import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { warenkorb } from '../models/warenkorb';



@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {
  warenkorb: warenkorb[] = [];
  constructor() {
    warenkorb:warenkorb;

  }
}



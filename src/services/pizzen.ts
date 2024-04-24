import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';



@Injectable()
export class PizzenService {
  pizzen: Pizza[] = [];
  constructor(public pizza: PizzenService) {
    this.pizzen.push(
     new Pizza(1,'Margherita','Die klassische Pizza mit Tomatensauce und Mozzarella.',7.50)
    );
  }
}


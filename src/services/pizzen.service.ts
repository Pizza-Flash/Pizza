import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';



@Injectable({
  providedIn: 'root'
})
export class PizzenService {
  pizzen: Pizza[] = [];
  constructor() {
    
    this.pizzen.push(
     new Pizza('https://i.postimg.cc/HshhkS6y/Magherita.jpg ',0,'Pizza Margherita','Die klassische Pizza mit Tomatensauce und Mozzarella.',7.50),
     new Pizza('https://i.postimg.cc/P5H8YHVs/Pizza-Slami.jpg ',1,'Pizza Salami','Pizza mit Tomatensauce, Mozzarella und Salami.',9.00)
    );
  }
}


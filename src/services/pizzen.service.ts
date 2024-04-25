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
     new Pizza('https://i.postimg.cc/P5H8YHVs/Pizza-Slami.jpg ',1,'Pizza Salami','Pizza mit Tomatensauce, Mozzarella und Salami.',7.50),
     new Pizza('https://i.imgur.com/hr8J5QT.jpeg',2,'Pizza Sucuk','Pizza mit Tomatensauce, Mozzarella und Knoblauchwurst.',9.00),
     new Pizza('https://i.postimg.cc/4NSB8S93/speciale.avif',3,'Pizza JoJo','Pizza mit Salami und Schinken.',7.80),

    );
  }
}


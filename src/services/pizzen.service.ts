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
     new Pizza('https://i.postimg.cc/jSVkBDFG/tonno-neu.jpg',4,'Pizza Tonno','Pizza mit Tomatensauce, Mozzarella und Tonno',9.80),
     new Pizza('https://i.postimg.cc/VksZgx5p/Hawaii.avif',5,'Pizza Hawaii','Pizza mit Tomatensauce, Schinken und Ananas.',9.50),
     new Pizza('https://i.postimg.cc/QtSJFtJM/gyros.jpg',6,'Pizza Gyros-Art','Pizza mit Tomatensauce, Gyros und Zwiebeln.',9.50),
     new Pizza('https://i.postimg.cc/JnmLQ1HJ/Mafia.jpg',7,'Pizza Mafia','Pizza mit Tomatensauce, Schinken, Champignons, Zwiebeln, Jalapenund Knoblauch.',10.00),
     new Pizza('https://i.postimg.cc/ZnLTGP55/diavolo2.jpg',8,'Pizza Diavolo','mit Tomatensauce, Mozzarella-Käse, scharfer Salami und scharfenChilischoten',9.00),
     new Pizza('https://i.postimg.cc/fTXyKXNp/Hollandaise.avif',9,'Pizza Hollandaise','mit Sauce Hollandaise anstatt Tomatensauce, Hähnchen, Champignons,roten Zwiebeln und Bacon (Hähnchen)',9.00),
     new Pizza('https://i.postimg.cc/hG5vP0ny/chicken-teriyaki.jpg',10,'Pizza Chicken Teriyaki','mit BBQ-Sauce statt Tomatensauce, Hähnchen, roten Zwiebeln,Broccoli, Teriyakisauce Sauce Swirl und Sesam.',9.00),
     new Pizza('https://i.postimg.cc/zBqkk56H/d-ner.jpg',11,'Pizza Döner ','mit Dönerfleisch, Knoblauchsauce und Eisbergsalat.',9.00),
     new Pizza('https://i.postimg.cc/nLsvY2H7/quattro-Formaggi.webp',12,'Pizza Quattro Formaggi','mit Creme fraiche statt Tomatensauce, Mozzarella und Gouda, Cheddar sowie Gorgonzola',9.00),
     new Pizza('https://i.postimg.cc/t4F1XcCB/Pizza-Frutti-Di-Mare.jpg',13,'Pizza Frutti di Mare','mit verschiedenen Meeresfrüchten',9.00),
     new Pizza('https://i.postimg.cc/63Qy8Y5k/JoJo.jpg',14,'Pizza Klassik','mit Rindersalami und Peperoni',9.00),
     

    );
  }
}


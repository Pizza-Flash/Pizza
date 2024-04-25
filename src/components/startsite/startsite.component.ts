
import { Component, isStandalone, OnInit } from '@angular/core';
import { PizzenService } from '../../services/pizzen.service';
import { WarenkorbComponent } from '../warenkorb/warenkorb.component';
import { WarenkorbService } from '../../services/warenkorb.service';

@Component({
  selector: 'app-startsite',
  templateUrl: './startsite.component.html',
  styleUrls: ['./startsite.component.css'],
  providers: [PizzenService,WarenkorbService],
  standalone: true,
})
export class StartsiteComponent implements OnInit {



  constructor(
    public pizzenService: PizzenService,
    public warenkorb: WarenkorbService

  ) { }


  ngOnInit() {
  }


  pizzaOptions = { size: '', };
  setSize(size: string) {
    this.pizzaOptions.size = size;
  }


  artikelHinzufügen(name: string, preis: number): void {
    const vorhandenerArtikel = this.warenkorb.warenkorb.find(artikel => artikel.name === name);
    if (vorhandenerArtikel) {
      vorhandenerArtikel.menge++;
    } else {
      this.warenkorb.warenkorb.push({ name, preis, menge: 1 });
    }
  }

  addPizzaMargherita(): void {
    this.artikelHinzufügen('Pizza Margherita', 7.50);
  }
  addPizzaSalami(): void {
    this.artikelHinzufügen('Pizza Tunfisch', 9);
  }
  addPizzaSucuk(): void {
    this.artikelHinzufügen('Pizza Margherita', 9);
  }
  addPizzaJoJo(): void {
    this.artikelHinzufügen('Pizza Margherita', 7.80);
  }
  addPizzaTonno(): void {
    this.artikelHinzufügen('Pizza Margherita', 9);
  }
  addPizzaHawaii(): void {
    this.artikelHinzufügen('Pizza Margherita', 9.50);
  }
  addPizzaGyros(): void {
    this.artikelHinzufügen('Pizza Margherita', 9.50);
  }
  addPizzaChickenTeriyaki(): void {
    this.artikelHinzufügen('Pizza Margherita', 10);
  }
  addPizzaMafia(): void {
    this.artikelHinzufügen('Pizza Margherita', 9);
  }
  addPizzaDiavolo(): void {
    this.artikelHinzufügen('Pizza Margherita', 9);
  }
  addPizzaHollandaise(): void {
    this.artikelHinzufügen('Pizza Margherita', 9);
  }
  addPizzaDöner(): void {
    this.artikelHinzufügen('Pizza Margherita', 9);
  }
  addPizzaQuattroFormaggi(): void {
    this.artikelHinzufügen('Pizza Margherita', 9);
  }
  addPizzaFruttidiMare(): void {
    this.artikelHinzufügen('Pizza Margherita', 9);
  }
  addPizzaKlassik(): void {
    this.artikelHinzufügen('Pizza Margherita', 9);
  }
  addPizzaMozzarella(): void {
    this.artikelHinzufügen('Pizza Margherita', 14);
  }
  addPizzaFunghi(): void {
    this.artikelHinzufügen('Pizza Margherita', 14);
  }
  addPizzaProsciuttoCrudo(): void {
    this.artikelHinzufügen('Pizza Margherita', 14);
  }
}












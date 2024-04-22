import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css'],
  imports: [CommonModule] 
})
export class WarenkorbComponent {
  artikelListe: { name: string, preis: number, menge: number }[] = [];

 
  artikelHinzufügen(name: string, preis: number): void {
    const vorhandenerArtikel = this.artikelListe.find(artikel => artikel.name === name);
    if (vorhandenerArtikel) {
      vorhandenerArtikel.menge++;
    } else {
      this.artikelListe.push({ name, preis, menge: 1 });
    }
  }


  artikelEntfernen(name: string): void {
    const index = this.artikelListe.findIndex(artikel => artikel.name === name);
    if (index !== -1) {
      const artikel = this.artikelListe[index];
      if (artikel.menge > 1) {
        artikel.menge--;
      } else {
        this.artikelListe.splice(index, 1);
      }
    }
  }


  gesamtAnzahlArtikel(): number {
    return this.artikelListe.reduce((gesamt, artikel) => gesamt + artikel.menge, 0);
  }

  
  gesamtPreis(): number {
    return this.artikelListe.reduce((gesamt, artikel) => gesamt + (artikel.preis * artikel.menge), 0);
  }


  addPizzaMargherita(): void {
    this.artikelHinzufügen('Pizza Margherita', 8.50);
  }


  addPizzaTunfisch(): void {
    this.artikelHinzufügen('Pizza Tunfisch', 9.50);
  }


  removeArtikel(name: string): void {
    this.artikelEntfernen(name);
  }
}
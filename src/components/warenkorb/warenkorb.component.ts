import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WarenkorbService } from '../../services/warenkorb.service';
import { KonfiguratorComponent } from "../konfigurator/konfigurator.component";

@Component({
    standalone: true,
    selector: 'app-warenkorb',
    templateUrl: './warenkorb.component.html',
    styleUrls: ['./warenkorb.component.css'],
    providers: [WarenkorbService],
    imports: [CommonModule, KonfiguratorComponent]
})
export class WarenkorbComponent {
  constructor(
    public warenkorb: WarenkorbService
  ){ }


  ngOnInit() {
      const localData = localStorage.getItem('warenkorb')
      if (localData != null) {
        this.warenkorb = JSON.parse(localData)
      }
  }

  

  artikelHinzufügen(name: string, preis: number): void {
    const vorhandenerArtikel = this.warenkorb.warenkorb.find(artikel => artikel.name === name);
    if (vorhandenerArtikel) {
      vorhandenerArtikel.menge++;
    } else {
      this.warenkorb.warenkorb.push({ name, preis, menge: 1 ,});
      localStorage.setItem('warenkorb', JSON.stringify(this.warenkorb))
    }
  }


  artikelEntfernen(name: string): void {
    const index = this.warenkorb.warenkorb.findIndex(artikel => artikel.name === name);
    if (index !== -1) {
      const artikel = this.warenkorb.warenkorb[index];
      if (artikel.menge > 1) {
        artikel.menge--;
      } else {
        this.warenkorb.warenkorb.splice(index, 1);
      }
    }
  }


  gesamtAnzahlArtikel(): number {
    return this.warenkorb.warenkorb.reduce((gesamt, artikel) => gesamt + artikel.menge, 0);
  }


  gesamtPreis(): number {
    return this.warenkorb.warenkorb.reduce((gesamt, artikel) => gesamt + (artikel.preis * artikel.menge), 0);
  }


  removeArtikel(name: string): void {
    this.artikelEntfernen(name);
  }
}

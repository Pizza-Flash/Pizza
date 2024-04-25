
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

  addPizza(pizzavariante:string,pizzapreis:string): void {
    this.artikelHinzufügen(pizzavariante, Number(pizzapreis));
  }
  
}












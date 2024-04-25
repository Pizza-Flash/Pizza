
import { Component, isStandalone, NgModule, OnInit } from '@angular/core';
import { PizzenService } from '../../services/pizzen.service';
import { WarenkorbComponent } from '../warenkorb/warenkorb.component';
import { WarenkorbService } from '../../services/warenkorb.service';
import { Router, RouterModule } from '@angular/router';
import { KonfiguratorComponent } from '../konfigurator/konfigurator.component';
import { warenkorb } from '../../models/warenkorb';



@Component({
    selector: 'app-startsite',
    templateUrl: './startsite.component.html',
    styleUrls: ['./startsite.component.css'],
    providers: [PizzenService, WarenkorbService, KonfiguratorComponent, RouterModule],
    standalone: true,
    imports: [KonfiguratorComponent]
})
export class StartsiteComponent implements OnInit {



  constructor(
    public pizzenService: PizzenService,
    public warenkorb: WarenkorbService,
    public router: Router,
    

  ) { }
  


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
      this.warenkorb.warenkorb.push({ name, preis, menge: 1 });

      localStorage.setItem('warenkorb', JSON.stringify(this.warenkorb))
    }
  }

  addPizza(pizzavariante:string,pizzapreis:string): void {
    this.artikelHinzufügen(pizzavariante, Number(pizzapreis));
  }

  popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    
  }
  
}












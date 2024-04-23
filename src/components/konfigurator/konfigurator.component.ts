import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-konfigurator',
  templateUrl: './konfigurator.component.html',
  styleUrls: ['./konfigurator.component.css'],
  imports: [CommonModule],
})
export class KonfiguratorComponent {
  pizzaOptions = { size: '', crust: '', belaege: [] as string[] }; 
  belaege: string[] = [
    'Knoblauch',
    'Oregano',
    'Champignons',
    'Spinat',
    'Frische Tomaten',
    'Zwiebeln',
    'Vier verschiedene Käsesorten',
    'Auberginen',
    'Paprika',
    'Broccoli',
    'Rucola',
    'Weiße Pizza (ohne Tomatensoße) mit Kartoffelscheiben und Kräutern',
    'Pizza Tartufo – Weiße Pizza mit frisch gehobeltem Trüffel',
    'Artischocken',
    'Oliven',
    'Gekochter Schinken',
    'Scharfe Salami',
    'Chili',
    'Verschiedene Meeresfrüchte',
    'Garnelen',
    'Petersilie',
    'Sardellen',
    'Kapern',
    'Thunfisch',
    'Parmaschinken',
    'Tintenfisch',
    'Muscheln',
    'Kalabrische Streichsalami',
    'Rindercarpaccio',
    'Sauce Hollandaise',
    'Hähnchenfleisch',
    'Currysauce',
    'Hackfleisch',
    'Speck',
    'Sauce BBQ',
    'Mais',
    'Sauce Hollandaise',
    'Chilis',
    'Fleischbällchen',
    'Bohnen',
    'Räucherlachs',
    'Mango',
    'Kräutersoße',
    'Karotten',
    'Zucchini',
    'Gorgonzola',
    'Schinken',
    'Gyros',
    'Tzatziki',
    'Souvlakifleisch',
    'Joghurtsoße',
    'Kreuzkümmel',
    'Koriander',
    'Ricotta',
    'Nektarinen',
    'Sojasoße',
    'Entenfleisch',
    'Sesamöl',
    'Kartoffelscheiben',
    'Eingelegte Gurken',
    'Ketchup',
    'Avocado',
  ];

  showIngredients = false;

  setSize(size: string) {
    this.pizzaOptions.size = size;
  }

  toggleIngredients() {
    this.showIngredients = !this.showIngredients;
  }

  setCrust(crust: string) {
    this.pizzaOptions.crust = crust;
  }

  toggleTopping(topping: string) {
    const index = this.pizzaOptions.belaege.indexOf(topping);
    if (index === -1) {
      this.pizzaOptions.belaege.push(topping);
    } else {
      this.pizzaOptions.belaege.splice(index, 1);
    }
  }
}

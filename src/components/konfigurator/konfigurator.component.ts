import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Ingredient {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-konfigurator',
  templateUrl: './konfigurator.component.html',
  styleUrls: ['./konfigurator.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers:[]
})
export class KonfiguratorComponent {
  ingredients: Ingredient[] = [
    { name: 'Knoblauch', price: 0.5, quantity: 0 },
    { name: 'Oregano', price: 0.3, quantity: 0 },
    { name: 'Champignons', price: 1.0, quantity: 0 },
    { name: 'Spinat', price: 0.8, quantity: 0 },
    { name: 'Zwiebeln', price: 0.6, quantity: 0 },
    { name: 'Auberginen', price: 1.5, quantity: 0 },
    { name: 'Paprika', price: 0.9, quantity: 0 },
    { name: 'Broccoli', price: 1.2, quantity: 0 },
    { name: 'Rucola', price: 0.7, quantity: 0 },
    { name: 'Artischocken', price: 1.8, quantity: 0 },
    { name: 'Oliven', price: 0.8, quantity: 0 },
    { name: 'Scharfe Salami', price: 1.8, quantity: 0 },
    { name: 'Chili', price: 0.5, quantity: 0 },
    { name: 'Garnelen', price: 2.5, quantity: 0 },
    { name: 'Petersilie', price: 0.4, quantity: 0 },
    { name: 'Sardellen', price: 1.2, quantity: 0 },
    { name: 'Kapern', price: 0.8, quantity: 0 },
    { name: 'Thunfisch', price: 2.0, quantity: 0 },
    { name: 'Parmaschinken', price: 3.0, quantity: 0 },
    { name: 'Tintenfisch', price: 2.5, quantity: 0 },
    { name: 'Muscheln', price: 3.0, quantity: 0 },
    { name: 'Rindercarpaccio', price: 4.5, quantity: 0 },
    { name: 'Sauce Hollandaise', price: 1.0, quantity: 0 },
    { name: 'Hähnchenfleisch', price: 2.5, quantity: 0 },
    { name: 'Currysauce', price: 1.5, quantity: 0 },
    { name: 'Hackfleisch', price: 2.0, quantity: 0 },
    { name: 'Speck', price: 1.8, quantity: 0 },
    { name: 'Sauce BBQ', price: 1.5, quantity: 0 },
    { name: 'Mais', price: 0.8, quantity: 0 },
    { name: 'Chilis', price: 0.6, quantity: 0 },
    { name: 'Fleischbällchen', price: 2.2, quantity: 0 },
    { name: 'Bohnen', price: 0.9, quantity: 0 },
    { name: 'Räucherlachs', price: 3.5, quantity: 0 },
    { name: 'Mango', price: 1.5, quantity: 0 },
    { name: 'Kräutersoße', price: 1.0, quantity: 0 },
    { name: 'Karotten', price: 0.7, quantity: 0 },
    { name: 'Zucchini', price: 1.0, quantity: 0 },
    { name: 'Gorgonzola', price: 1.8, quantity: 0 },
    { name: 'Schinken', price: 2.0, quantity: 0 },
    { name: 'Gyros', price: 2.5, quantity: 0 },
    { name: 'Tzatziki', price: 1.5, quantity: 0 },
    { name: 'Souvlakifleisch', price: 2.8, quantity: 0 },
    { name: 'Joghurtsoße', price: 1.2, quantity: 0 },
    { name: 'Kreuzkümmel', price: 0.4, quantity: 0 },
    { name: 'Koriander', price: 0.5, quantity: 0 },
    { name: 'Ricotta', price: 2.0, quantity: 0 },
    { name: 'Nektarinen', price: 1.2, quantity: 0 },
    { name: 'Sojasoße', price: 1.0, quantity: 0 },
    { name: 'Entenfleisch', price: 3.5, quantity: 0 },
    { name: 'Sesamöl', price: 1.5, quantity: 0 },
    { name: 'Kartoffelscheiben', price: 1.0, quantity: 0 },
    { name: 'Ketchup', price: 0.5, quantity: 0 },
    { name: 'Avocado', price: 1.5, quantity: 0 },
  ];

  selectedIngredients: Ingredient[] = [];

  addIngredient(ingredient: Ingredient): void {
    const existingIngredient = this.selectedIngredients.find(
      (item) => item.name === ingredient.name
    );
    if (existingIngredient) {
      existingIngredient.quantity++;
    } else {
      const newIngredient = { ...ingredient, quantity: 1 };
      this.selectedIngredients.push(newIngredient);
    }
  }
  

  removeIngredient(ingredient: Ingredient): void {
    const existingIngredient = this.selectedIngredients.find(
      (item) => item.name === ingredient.name
    );
    if (existingIngredient) {
      if (existingIngredient.quantity > 1) {
        existingIngredient.quantity--;
      } else {
        const index = this.selectedIngredients.indexOf(existingIngredient);
        this.selectedIngredients.splice(index, 1);
      }
    }
  }

  totalPrice(): number {
    return this.selectedIngredients.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getTotalQuantity(ingredient: Ingredient): number {
    const selectedIngredient = this.selectedIngredients.find(
      (item) => item.name === ingredient.name
    );
    return selectedIngredient ? selectedIngredient.quantity : 0;
    
  }

  getTotalItems(): number {
    return this.selectedIngredients.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

 
  ngOnInit() {
    const localData = localStorage.getItem('Ingridient')
    if (localData != null) {
      this.selectedIngredients = JSON.parse(localData)
    }
  }

  saveingridient(ingredient:Ingredient){
    localStorage.setItem('Ingridient', JSON.stringify(this.selectedIngredients))
  }
  
  
  
  
  
}
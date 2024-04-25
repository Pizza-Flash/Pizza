import { DecimalPipe } from "@angular/common";

export class Pizza {
  constructor(
    public pzzaimg:string,
    public pizzaid:number,
    public pizzavariante:string,
    public pizzabeschribung:string,
    public pizzapreis: string,
  ) {}
}

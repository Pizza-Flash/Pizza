import { ZutatenService } from "../services/zutaten.service";

export class zutaten {
  constructor(
    public  name: string,
    public preis:number,
    public menge: number,
  ) {}
}

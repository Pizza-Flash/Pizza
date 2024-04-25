import { Injectable } from '@angular/core';
import { zutaten } from '../models/zutaten';


@Injectable()
export class ZutatenService {
  public zutaten: zutaten[] = [];
  constructor() {
    
  }
}

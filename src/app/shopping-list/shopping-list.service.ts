import { EventEmitter, Injectable } from '@angular/core';
import { Accessorie } from '../shared/accessories.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  accessorieChanged = new EventEmitter<Accessorie[]>();

  constructor() { }

  private accessories: Accessorie[] = [
    new Accessorie('Printer', 1),
    new Accessorie('Speakers', 1)
  ];

  getAccessorie() {
    return this.accessories.slice();
  }

  addAccessorie(accessorie: Accessorie) {
    this.accessories.push(accessorie);
    this.accessorieChanged.emit(this.accessories.slice());
  }
}

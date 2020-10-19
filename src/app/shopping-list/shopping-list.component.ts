import { Component, OnInit } from '@angular/core';

import { Accessorie } from '../shared/accessories.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  accessories: Accessorie[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.accessories = this.slService.getAccessorie();
    this.slService.accessorieChanged
      .subscribe(
        (accessories: Accessorie[]) => {
          this.accessories = accessories;
        }
      )
  }
}

import { Component, OnInit } from '@angular/core';

import { Accessorie } from '../shared/accessories.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  accessories: Accessorie[] = [
    new Accessorie('Printer', 1),
    new Accessorie('Speakers', 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

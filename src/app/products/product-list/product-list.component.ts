import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product('A test Product', 'This is simple test', 'https://images.app.goo.gl/fjeyXDo8LGekkBeY9'),
    new Product('A test Product', 'This is simple test', 'https://images.app.goo.gl/fjeyXDo8LGekkBeY9')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

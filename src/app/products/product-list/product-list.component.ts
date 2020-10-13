import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product('A test Product', 'This is simple test', 'https://images-na.ssl-images-amazon.com/images/I/51qgpZOgN-L._AC_.jpg'),
    new Product('A test Product', 'This is simple test', 'https://images-na.ssl-images-amazon.com/images/I/51qgpZOgN-L._AC_.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

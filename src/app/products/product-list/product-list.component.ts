import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() productWasSelected = new EventEmitter<Product>();

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProduct();
  }

  onProductSelected(product: Product) {
    this.productWasSelected.emit(product);
  }

}

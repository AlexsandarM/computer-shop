import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productSelected = new EventEmitter<Product>();

  constructor() { }

  private products: Product[] = [
    new Product('G3 AVENGER', 'The G3 Avenger will be the centerpiece of any room with its gorgeous tempered glass window. These Desktops are prebuilt, meaning they out of our hands and into yours much faster. Allowing you to get the gear you need fast, and get in the game!', 'https://images-na.ssl-images-amazon.com/images/I/51qgpZOgN-L._AC_.jpg'),
    new Product('G5 LITE 5', 'The G5 Lite 5 has a great translucent front panel that is perfect for RGB fans. Paired with the tempered glass side the G5 Lite 5 is a great chassis for your own personal light show.', 'https://cdn.shopify.com/s/files/1/0228/7629/1136/products/V200Ryzen_2000x.png?v=1592585583')
  ];

  getProduct() {
    return this.products.slice();
  }

}

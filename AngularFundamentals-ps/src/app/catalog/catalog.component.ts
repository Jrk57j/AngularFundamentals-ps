import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {
  products?: IProduct[];
  filter: string = '';

  constructor(private cartSvc: CartService, private productSvc: ProductService) {
  }

  ngOnInit() {
    this.productSvc.getProducts().subscribe(products => {
      this.products = products;
    })
  }

  getFilteredProducts() {
    return this.filter === '' ? this.products :
      this.products?.filter((product) => product.category === this.filter);
  }


  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }
}

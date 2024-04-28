import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buyEvent = new EventEmitter()

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getDiscountedProducts(product: IProduct) {
    if (product.discount > 0) {
      return ['strikethrough'];
    }
    return [];
  }


  buyButtonClicked(product: IProduct) {
    this.buyEvent.emit();
  }

}

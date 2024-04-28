import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';


@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {
  products?: IProduct[];
  filter: string = '';

  constructor(private cartSvc: CartService) {

    this.products = [
      {
        id: 1,
        description:
          "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
        name: "Large Cyclops",
        imageName: "head-big-eye.png",
        category: "Heads",
        price: 1220.5,
        discount: 0.2
      },
      {
        id: 17,
        description: "A spring base - great for reaching high places.",
        name: "Spring Base",
        imageName: "base-spring.png",
        category: "Bases",
        price: 1190.5,
        discount: 0
      },
      {
        id: 6,
        description:
          "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
        name: "Articulated Arm",
        imageName: "arm-articulated-claw.png",
        category: "Arms",
        price: 275.0,
        discount: 0.50
      },
      {
        id: 2,
        description:
          "A friendly robot head with two eyes and a smile -- great for domestic use.",
        name: "Friendly Bot",
        imageName: "head-friendly.png",
        category: "Heads",
        price: 945.0,
        discount: 0.2
      },
      {
        id: 3,
        description:
          "A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.",
        name: "Shredder",
        imageName: "head-shredder.png",
        category: "Heads",
        price: 1275.5,
        discount: 0
      }
    ];
  }

  getFilteredProducts() {
    return this.filter === '' ? this.products :
      this.products?.filter((product) => product.category === this.filter);
  }


  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }
}

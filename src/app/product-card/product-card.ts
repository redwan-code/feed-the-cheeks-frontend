import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../product';
import { Cart } from '../cart';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input()
  product!: Product;

  constructor(private cart: Cart) {}

  addToCart(): void {
    this.cart.addToCart(this.product);

  }
}

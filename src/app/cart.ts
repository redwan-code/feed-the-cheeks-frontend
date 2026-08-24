import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  items: CartItem[] = [];
  addToCart(product: Product): void {
    const existingItem = this.items.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({
        product: product,
        quantity: 1,
      });
    }
  }
}

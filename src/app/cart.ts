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
        product,
        quantity: 1,
      });
    }
  }

  getTotalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  increaseQuantity(item: CartItem): void {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: CartItem): void {
    this.items = this.items.filter((cartItem) => cartItem.product.id !== item.product.id);
  }

  getSubtotal(): number {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}

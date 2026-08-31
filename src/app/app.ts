import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from './product';
import { ProductCard } from './product-card/product-card';
import { Cart } from './cart';

@Component({
  selector: 'app-root',
  imports: [ProductCard, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  cartOpen = false;

  constructor(public cart: Cart) {}

  products: Product[] = [
    {
      id: 1,
      name: 'Chocolate Chip',
      description: 'Classic chocolate chip cookie.',
      price: 4.5,
      imageUrl: '/images/Chocolate_chip_cookie.jpg',
      category: 'Cookies',
      available: true,
    },
    {
      id: 2,
      name: 'Funfetti',
      description: 'A soft cookie packed with colorful sprinkles.',
      price: 4.5,
      imageUrl: '/images/funfetti.jpg',
      category: 'Cookies',
      available: true,
    },
    {
      id: 3,
      name: 'Cookies & Cream',
      description: 'Cookies and cream packed into a soft baked cookie.',
      price: 4.5,
      imageUrl: '/images/cookies-and-cream.jpg',
      category: 'Cookies',
      available: true,
    },
    {
      id: 4,
      name: 'Peanut Butter Chocolate Chip',
      description: 'A peanut butter cookie loaded with chocolate chips.',
      price: 4.5,
      imageUrl: '/images/peanut-butter-chocolate-chip.jpg',
      category: 'Cookies',
      available: true,
    },
  ];

  openCart(): void {
    this.cartOpen = true;
  }

  closeCart(): void {
    this.cartOpen = false;
  }
}

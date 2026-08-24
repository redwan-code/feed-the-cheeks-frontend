import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
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
}

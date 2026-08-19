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
      imageUrl: 'assets/images/chocolate-chip.jpg',
      category: 'Cookies',
      available: true,
    },
    {
      id: 2,
      name: 'Biscoff',
      description: 'Cookie butter inspired goodness.',
      price: 4.5,
      imageUrl: 'assets/images/biscoff.jpg',
      category: 'Cookies',
      available: true,
    },
    {
      id: 3,
      name: 'Cookies & Cream',
      description: 'Cookies and cream packed into a soft baked cookie.',
      price: 4.5,
      imageUrl: 'assets/images/cookies-and-cream.jpg',
      category: 'Cookies',
      available: true,
    },
    {
      id: 4,
      name: 'Red Velvet',
      description: 'Rich red velvet cookie with a sweet creamy finish.',
      price: 4.5,
      imageUrl: 'assets/images/red-velvet.jpg',
      category: 'Cookies',
      available: true,
    },
  ];
}

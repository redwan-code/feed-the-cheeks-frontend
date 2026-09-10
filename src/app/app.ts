import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from './product';
import { ProductCard } from './product-card/product-card';
import { Cart } from './cart';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [ProductCard, CurrencyPipe, FormsModule],
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
      price: 5.99,
      imageUrl: '/images/Chocolate_chip_cookie.jpg',
      category: 'Cookies',
      available: true,
    },
    {
      id: 2,
      name: 'Funfetti',
      description: 'A soft cookie packed with colorful sprinkles.',
      price: 5.99,
      imageUrl: '/images/funfetti.jpg',
      category: 'Cookies',
      available: true,
    },
    {
      id: 3,
      name: 'Cookies & Cream',
      description: 'Cookies and cream packed into a soft baked cookie.',
      price: 5.99,
      imageUrl: '/images/cookies-and-cream.jpg',
      category: 'Cookies',
      available: true,
    },
    {
      id: 4,
      name: 'Peanut Butter Chip',
      description: 'A coco base cookie loaded with peanut butter chips.',
      price: 4.5,
      imageUrl: '/images/peanut-butter-chocolate-chip.jpg',
      category: 'Cookies',
      available: true,
    },
    {
      id: 5,
      name: 'Strawberry Milk',
      description: '12 oz strawberry milk.',
      price: 3.5,
      imageUrl: '/images/strawberry-milk.jpg',
      category: 'Milk',
      available: true,
    },
    {
      id: 6,
      name: 'Whole Milk',
      description: '12 oz whole milk.',
      price: 3.5,
      imageUrl: '/images/whole-milk.jpg',
      category: 'Milk',
      available: true,
    },
    {
      id: 7,
      name: 'Coffee Milk',
      description: '12 oz coffee milk.',
      price: 3.5,
      imageUrl: '/images/coffee-milk.jpg',
      category: 'Milk',
      available: true,
    },
    {
      id: 8,
      name: 'Chocolate Milk',
      description: '12 oz chocolate milk.',
      price: 3.5,
      imageUrl: '/images/chocolate-milk.jpg',
      category: 'Milk',
      available: true,
    },
    {
      id: 9,
      name: 'Iced Tiramisu',
      description: 'Iced coffee topped with creamy tiramisu foam.',
      price: 8.5,
      imageUrl: '/images/iced-tiramisu.jpg',
      category: 'Drinks',
      available: true,
    },
    {
      id: 10,
      name: 'Iced Biscoff',
      description: 'Iced coffee topped with Biscoff cream and cookie crumble.',
      price: 8.5,
      imageUrl: '/images/iced-biscoff.jpg',
      category: 'Drinks',
      available: true,
    },
    {
      id: 11,
      name: 'Iced Chai',
      description: 'Smooth and refreshing iced chai.',
      price: 8,
      imageUrl: '/images/iced-chai.jpg',
      category: 'Drinks',
      available: true,
    },
    {
      id: 12,
      name: 'Iced Latte',
      description: 'Classic espresso and milk served over ice.',
      price: 8,
      imageUrl: '/images/iced-latte.jpg',
      category: 'Drinks',
      available: true,
    },
  ];

  get cookieProducts(): Product[] {
    return this.filteredProducts.filter((product) => product.category === 'Cookies');
  }

  get milkProducts(): Product[] {
    return this.filteredProducts.filter((product) => product.category === 'Milk');
  }

  get drinkProducts(): Product[] {
    return this.filteredProducts.filter((product) => product.category === 'Drinks');
  }
  openCart(): void {
    this.cartOpen = true;
  }

  closeCart(): void {
    this.cartOpen = false;
  }
  get filteredProducts(): Product[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.products;
    }

    return this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term),
    );
  }
  searchTerm = '';
}

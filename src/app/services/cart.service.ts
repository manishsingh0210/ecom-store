import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);
  addToCart(product: Product) {
    const existingProduct = this.cart().find(item => item.id === product.id);

    if (existingProduct) {
      this.cart.update(items =>
        items.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      this.cart.update(items => [...items, { ...product, quantity: 1 }]);
    }
  }

  removeFromCart(id: number) {
    const existingProduct = this.cart().find(item => item.id === id);

    if (existingProduct && existingProduct.quantity && existingProduct.quantity > 1) {
      // Decrease quantity if more than 1
      this.cart.update(items =>
        items.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity! - 1 }
            : item
        )
      );
    } else {
      this.cart.update(items => items.filter(item => item.id !== id));
    }
  }

  constructor() { }
}

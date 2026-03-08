import { computed, Injectable, signal } from '@angular/core';
import type { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<Product[]>([]);

  product = this.cart.asReadonly();
  total = computed(() => this.cart().reduce((sum, p) => sum + p.price, 0));

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  remove(productId: number) {
    this.cart.set(this.cart().filter((p) => p.id !== productId));
  }

  isInCart(productId: number) {
    return this.cart().some((p) => p.id === productId);
  }
}

import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
        <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsList {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Blouse',
      price: 20.43,
      image:
        'https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: 21,
    },
    {
      id: 2,
      title: 'Blouse',
      price: 20.43,
      image:
        'https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: 0,
    },
    {
      id: 3,
      title: 'Blouse',
      price: 20.43,
      image:
        'https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: 10,
    },
    {
      id: 4,
      title: 'Blouse',
      price: 2,
      image:
        'https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: 11,
    },
  ]);
}

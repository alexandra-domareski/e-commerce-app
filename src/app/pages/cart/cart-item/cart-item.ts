import { Component, inject, input } from '@angular/core';
import type { Product } from '../../../models/products.model';
import { Button } from '../../../components/button/button';
import { Cart } from '../../../services/cart-service';

@Component({
  selector: 'app-cart-item',
  imports: [Button],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center">
      <img [src]="product().image" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm">{{ '€' + product().price }}</span>
      </div>
      <div class="flex-1">
        <app-button label="Remove" (btnClicked)="cartService.remove(product().id)" />
      </div>
    </div>
  `,
  styles: ``,
})
export class CartItem {
  cartService = inject(Cart);

  product = input.required<Product>();
}

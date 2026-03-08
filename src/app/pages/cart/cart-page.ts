import { Component, inject } from '@angular/core';
import { Cart } from '../../services/cart-service';
import { CartItem } from './cart-item/cart-item';
import { OderSummary } from './oder-summary/oder-summary';

@Component({
  selector: 'app-cart',
  imports: [CartItem, OderSummary],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shopping Cart</h2>

      @for (product of cartService.cart(); track product.id) {
        <app-cart-item [product]="product" />
      }
      <app-oder-summary />
    </div>
  `,
  styles: ``,
})
export class CartPage {
  cartService = inject(Cart);
}

import { Component, inject } from '@angular/core';
import { Cart } from '../../../services/cart-service';
import { PrimaryButton } from '../../../components/primary-button/primary-button';

@Component({
  selector: 'app-oder-summary',
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 mt-2">
          <span class="text-lg">Total</span>
          <span class="text-lg font-bold">{{ '€' + cartService.total() }}</span>
        </div>
        <app-primary-button label="Proceed to Checkout" />
      </div>
    </div>
  `,
  styles: ``,
})
export class OderSummary {
  cartService = inject(Cart);
}

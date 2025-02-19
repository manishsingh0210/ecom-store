import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();

  cartService = inject(CartService)

  quantity: number = 0;

  ngOnInit() {
    const cartItem = this.cartService.cart().find(item => item.id === this.product().id);
    this.quantity = cartItem?.quantity || 0;
  }

  incrementQuantity() {
    if (this.quantity < (this.product().stock || 0)) {
      this.quantity++;
      this.cartService.addToCart(this.product());
    }
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.cartService.removeFromCart(this.product().id);
    }
  }

  updateQuantity(event: Event) {
    const input = event.target as HTMLInputElement;
    const newQuantity = parseInt(input.value);

    if (newQuantity >= 0 && newQuantity <= (this.product().stock || 0)) {
      const diff = newQuantity - this.quantity;

      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          this.cartService.addToCart(this.product());
        }
      } else if (diff < 0) {
        for (let i = 0; i < Math.abs(diff); i++) {
          this.cartService.removeFromCart(this.product().id);
        }
      }

      this.quantity = newQuantity;
    } else {
      input.value = this.quantity.toString();
    }
  }

}

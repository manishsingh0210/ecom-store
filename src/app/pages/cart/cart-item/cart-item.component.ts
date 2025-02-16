import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { Product } from '../../../models/products.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  templateUrl: './cart-item.component.html',
  styles: ``
})
export class CartItemComponent {
  item = input.required<Product>();

  cartService = inject(CartService);
}

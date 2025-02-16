import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ButtonComponent } from "../../components/button/button.component";
import { RouterLink } from '@angular/router';
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, ButtonComponent, RouterLink, OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent {
  cartService = inject(CartService);
}

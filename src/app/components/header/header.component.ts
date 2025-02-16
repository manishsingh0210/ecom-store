import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  cartService = inject(CartService);

  handleButtonClick() {
    console.log('Button is clicked')
  }
}

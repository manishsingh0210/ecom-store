import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from "./pages/products-list/products-list.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header />
    <router-outlet />
  `
})
export class AppComponent {

}

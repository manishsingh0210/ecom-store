import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';
import productList from '../../utils/mockData';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>(productList);

  //* Make API call through a service
  // async ngOnInit() {
  //   const res = await fetch('https://fakestoreapi.com/products'); //store constant data in a separate file
  //   const data = await res.json();
  //   this.products.set(data);
  // }
}

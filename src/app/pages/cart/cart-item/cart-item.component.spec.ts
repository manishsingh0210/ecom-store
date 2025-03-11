import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let item = {
    id: 1,
    title: 'test',
    category: 'test',
    image: 'test',
    price: 1,
    stock: 1,
    rating: {
      rate: 1,
      count: 1
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have item input as required', () => {
    fixture.componentRef.setInput('item', item);
    fixture.detectChanges();
    expect(component.item()).toBe(item);
  })
});

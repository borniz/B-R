import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCobranz } from './cart-cobranz';

describe('CartCobranz', () => {
  let component: CartCobranz;
  let fixture: ComponentFixture<CartCobranz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartCobranz],
    }).compileComponents();

    fixture = TestBed.createComponent(CartCobranz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

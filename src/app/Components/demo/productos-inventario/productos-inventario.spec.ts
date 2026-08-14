import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosInventario } from './productos-inventario';

describe('ProductosInventario', () => {
  let component: ProductosInventario;
  let fixture: ComponentFixture<ProductosInventario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosInventario],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosInventario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

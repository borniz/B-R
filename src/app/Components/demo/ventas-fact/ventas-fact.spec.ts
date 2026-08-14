import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasFact } from './ventas-fact';

describe('VentasFact', () => {
  let component: VentasFact;
  let fixture: ComponentFixture<VentasFact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasFact],
    }).compileComponents();

    fixture = TestBed.createComponent(VentasFact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

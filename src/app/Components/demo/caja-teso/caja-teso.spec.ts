import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaTeso } from './caja-teso';

describe('CajaTeso', () => {
  let component: CajaTeso;
  let fixture: ComponentFixture<CajaTeso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaTeso],
    }).compileComponents();

    fixture = TestBed.createComponent(CajaTeso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

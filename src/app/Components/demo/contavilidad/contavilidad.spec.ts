import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contavilidad } from './contavilidad';

describe('Contavilidad', () => {
  let component: Contavilidad;
  let fixture: ComponentFixture<Contavilidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contavilidad],
    }).compileComponents();

    fixture = TestBed.createComponent(Contavilidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

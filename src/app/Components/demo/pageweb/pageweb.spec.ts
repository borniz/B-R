import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pageweb } from './pageweb';

describe('Pageweb', () => {
  let component: Pageweb;
  let fixture: ComponentFixture<Pageweb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pageweb],
    }).compileComponents();

    fixture = TestBed.createComponent(Pageweb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

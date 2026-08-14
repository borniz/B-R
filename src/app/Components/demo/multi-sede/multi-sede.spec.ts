import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSede } from './multi-sede';

describe('MultiSede', () => {
  let component: MultiSede;
  let fixture: ComponentFixture<MultiSede>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSede],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSede);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

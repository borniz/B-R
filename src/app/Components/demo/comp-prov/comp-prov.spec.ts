import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompProv } from './comp-prov';

describe('CompProv', () => {
  let component: CompProv;
  let fixture: ComponentFixture<CompProv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompProv],
    }).compileComponents();

    fixture = TestBed.createComponent(CompProv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

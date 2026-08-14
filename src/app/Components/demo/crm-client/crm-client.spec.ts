import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmClient } from './crm-client';

describe('CrmClient', () => {
  let component: CrmClient;
  let fixture: ComponentFixture<CrmClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmClient],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmClient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

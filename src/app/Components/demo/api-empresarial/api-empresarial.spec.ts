import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEmpresarial } from './api-empresarial';

describe('ApiEmpresarial', () => {
  let component: ApiEmpresarial;
  let fixture: ComponentFixture<ApiEmpresarial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiEmpresarial],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiEmpresarial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

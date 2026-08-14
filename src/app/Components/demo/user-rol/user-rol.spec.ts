import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRol } from './user-rol';

describe('UserRol', () => {
  let component: UserRol;
  let fixture: ComponentFixture<UserRol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRol],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

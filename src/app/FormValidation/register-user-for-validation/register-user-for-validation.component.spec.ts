import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserForValidationComponent } from './register-user-for-validation.component';

describe('RegisterUserForValidationComponent', () => {
  let component: RegisterUserForValidationComponent;
  let fixture: ComponentFixture<RegisterUserForValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterUserForValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUserForValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

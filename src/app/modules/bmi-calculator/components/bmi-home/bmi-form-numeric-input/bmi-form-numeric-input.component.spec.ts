import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiFormNumericInputComponent } from './bmi-form-numeric-input.component';

describe('BmiFormNumericInputComponent', () => {
  let component: BmiFormNumericInputComponent;
  let fixture: ComponentFixture<BmiFormNumericInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiFormNumericInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiFormNumericInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

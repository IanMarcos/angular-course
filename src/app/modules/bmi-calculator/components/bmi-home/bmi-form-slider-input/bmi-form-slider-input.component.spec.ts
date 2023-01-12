import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiFormSliderInputComponent } from './bmi-form-slider-input.component';

describe('BmiFormSliderInputComponent', () => {
  let component: BmiFormSliderInputComponent;
  let fixture: ComponentFixture<BmiFormSliderInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiFormSliderInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiFormSliderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

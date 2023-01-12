import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BMICalculatorRoutingModule } from './bmi-calculator-routing.module';
import { BmiHomeComponent } from './components/bmi-home/bmi-home.component';
import { BmiResultComponent } from './components/bmi-result/bmi-result.component';
import { BmiFormNumericInputComponent } from './components/bmi-home/bmi-form-numeric-input/bmi-form-numeric-input.component';
import { BmiFormSliderInputComponent } from './components/bmi-home/bmi-form-slider-input/bmi-form-slider-input.component';


@NgModule({
  declarations: [
    BmiHomeComponent,
    BmiResultComponent,
    BmiFormNumericInputComponent,
    BmiFormSliderInputComponent
  ],
  imports: [
    CommonModule,
    BMICalculatorRoutingModule
  ]
})
export class BMICalculatorModule { }

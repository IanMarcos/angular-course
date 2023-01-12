import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiHomeComponent } from './components/bmi-home/bmi-home.component';
import { BmiResultComponent } from './components/bmi-result/bmi-result.component';

const routes: Routes = [
  { path: '', component: BmiHomeComponent },
  { path: 'result/:value', component: BmiResultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BMICalculatorRoutingModule { }

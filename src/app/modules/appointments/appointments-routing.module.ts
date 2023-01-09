import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsMainComponent } from './components/appointments-main/appointments-main.component';

const routes: Routes = [
  { path: '', component: AppointmentsMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListMainComponent } from './components/employee-list-main/employee-list-main.component';

const routes: Routes = [
  { path:'', component: EmployeeListMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeListRoutingModule { }

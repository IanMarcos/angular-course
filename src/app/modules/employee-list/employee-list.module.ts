import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListMainComponent } from './components/employee-list-main/employee-list-main.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { FilterMenuComponent } from './components/employee-table/filter-menu/filter-menu.component';


@NgModule({
  declarations: [
    EmployeeListMainComponent,
    EmployeeTableComponent,
    FilterMenuComponent
  ],
  imports: [
    SharedModule,
    EmployeeListRoutingModule
  ]
})
export class EmployeeListModule { }

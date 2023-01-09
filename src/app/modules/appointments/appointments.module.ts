import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsMainComponent } from './components/appointments-main/appointments-main.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';


@NgModule({
  declarations: [
    AppointmentsMainComponent,
    AppointmentFormComponent,
    AppointmentsListComponent
  ],
  imports: [
    SharedModule,
    AppointmentsRoutingModule
  ]
})
export class AppointmentsModule { }

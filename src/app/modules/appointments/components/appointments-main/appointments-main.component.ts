import { Component } from '@angular/core';
import Appointment from '../../models/Appointment';

@Component({
  selector: 'app-appointments-main',
  templateUrl: './appointments-main.component.html',
})
export class AppointmentsMainComponent {
  appointmentList: Appointment[] = [];

  addAppointment(appointment: Appointment) {
    this.appointmentList.push(appointment);
  }

  deleteAppointment(index: number) {
    this.appointmentList.splice(index, 1);
  }
}

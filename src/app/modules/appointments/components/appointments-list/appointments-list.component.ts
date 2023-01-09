import { Component, EventEmitter, Input, Output } from '@angular/core';
import Appointment from '../../models/Appointment';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
})
export class AppointmentsListComponent {
  @Input() appointmentList: Appointment[];
  @Output() deleteAppointmentEvent: EventEmitter<number>;

  constructor() {
    this.appointmentList = [];
    this.deleteAppointmentEvent = new EventEmitter<number>();
  }

  deleteAppointment(index: number) {
    this.deleteAppointmentEvent.emit(index);
  }
}

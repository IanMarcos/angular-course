import { Component, EventEmitter, Output } from '@angular/core';
import Appointment from '../../models/Appointment';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
})
export class AppointmentFormComponent {
  patient: string;
  date: string;
  time: string;
  symptoms: string;
  isErrorInForm: boolean;
  @Output() newAppointment: EventEmitter<Appointment>;

  constructor() {
    this.patient = '';
    this.date = '';
    this.time = '';
    this.symptoms = '';
    this.isErrorInForm = false;
    this.newAppointment = new EventEmitter<Appointment>();
  }

  handleSubmit() {
    if(this.patient === '' || this.date === '' || this.time === '' || this.symptoms === ''){
      this.isErrorInForm = true;

      setTimeout(() => {
        this.isErrorInForm = false;
      }, 2500);

      return;
    }

    this.isErrorInForm = false;

    this.newAppointment.emit(new Appointment(this.patient, this.date, this.time, this.symptoms));
    this.resetForm();
  }

  resetForm() {
    this.patient = '';
    this.date = '';
    this.time = '';
    this.symptoms = '';
  }
}

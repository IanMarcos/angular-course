export default class Appointment {
  patient: string;
  date: string;
  time: string;
  symptoms: string;

  constructor(patient: string, date: string, time: string, symptoms: string) {
    this.patient = patient;
    this.date = date;
    this.time = time;
    this.symptoms = symptoms;
  }
}
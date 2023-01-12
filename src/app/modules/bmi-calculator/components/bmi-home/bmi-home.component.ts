import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bmi-home',
  templateUrl: './bmi-home.component.html',
})
export class BmiHomeComponent {
  sex: string;
  height: number;
  weight: number;
  age: number;

  constructor(private router: Router) {
    this.sex = '';
    this.height = 170;
    this.weight = 60;
    this.age = 20;
  }

  updateSex(value: string) {
    if (value === 'male' || value === 'female') {
      this.sex = value;
    }
  }

  updateHeight(value: number) {
    this.height = value;
  }

  updateWeight(value: number) {
    this.weight = value;
  }

  updateAge(value: number) {
    this.age = value;
  }

  private calculateBMI() {
    return (this.weight / Math.pow((this.height / 100), 2)).toFixed(1);
  }

  handleSubmit() {
    if (this.sex === '') {
      alert('Please select a sex!');
      return;
    }

    this.router.navigate(
      ['bmi/result', this.calculateBMI()],
      { queryParams: { age: this.age, sex: this.sex } }
    );
  }
}

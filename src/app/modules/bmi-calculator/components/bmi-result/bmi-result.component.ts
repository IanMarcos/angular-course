import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bmi-result',
  templateUrl: './bmi-result.component.html',
})
export class BmiResultComponent {
  bmi: number;
  age!: number | null;
  sex!: string | null;
  category!: string;
  state!: string;
  score!: number;
  recommendations!: string[];

  constructor(private route: ActivatedRoute) {
    this.bmi = parseFloat(this.route.snapshot.paramMap.get('value')!);

    this.route.queryParamMap.subscribe(params => {
      let isAge = params.get('age');  
      if (isAge) {
        this.age = parseInt(isAge);
      } else {
        this.age = <null>isAge;
      }
      this.sex = params.get('sex');
    });
    
    this.recommendations = ['Consider a diet with caloric supplus.', 'Everything is dandy!', 'Consider a diet with caloric deficit and exercise.'];
    this.determineClassification();
  }

  determineClassification() : void {
    if (this.age && this.age < 20) {
      if (this.bmi < 16.5) {
        this.category = 'Underweigth';
        this.state = 'mid';
        this.score = 0;
      } else if (this.bmi <= 23) {
        this.category = 'Normal';
        this.state = 'good';
        this.score = 1;
      } else if (this.bmi <= 28) {
        this.category = 'Overweight';
        this.state = 'mid';
        this.score = 2;
      } else {
        this.category = 'Obese';
        this.state = 'bad';
        this.score = 2;
      }
      
    } else {
      if (this.bmi < 16) {
        this.category = 'Severe Thinness';
        this.state = 'bad';
        this.score = 0;
      } else if (this.bmi <= 17) {
        this.category = 'Moderate Thinness';
        this.state = 'bad';
        this.score = 0;
      } else if (this.bmi <= 18.5) {
        this.category = 'Mild Thinness';
        this.state = 'mid';
        this.score = 0;
      } else if (this.bmi <= 25) {
        this.category = 'Normal';
        this.state = 'good';
        this.score = 1;
      } else if (this.bmi <= 30) {
        this.category = 'Overweight';
        this.state = 'mid';
        this.score = 2;
      } else if (this.bmi <= 35) {
        this.category = 'Obese Class I';
        this.state = 'bad';
        this.score = 2;
      } else if (this.bmi <= 40) {
        this.category = 'Obese Class II';
        this.state = 'bad';
        this.score = 2;
      } else {
        this.category = 'Obese Class III';
        this.state = 'bad';
        this.score = 2;
      }
    }
  }
}

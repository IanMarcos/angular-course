import { Component } from '@angular/core';
import Employee from '../../models/Employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
})
export class EmployeeTableComponent {
  employeeList: Employee[];
  selectedGender: string;

  constructor() {
    this.employeeList = [
      new Employee('1', 'Joe', 'Doe', 'male', 1200),
      new Employee('2', 'Maria', 'Doe', 'female', 1500),
      new Employee('3', 'John', 'Smith', 'male', 1300),
      new Employee('4', 'Carlos', 'Ramirez', 'male', 1500),
      new Employee('5', 'Susan', 'N/A', 'female', 1300)
    ];

    this.selectedGender = 'all';
  }

  getTotalEmployees(): number {
    return this.employeeList.length;
  }

  getGenderEmployeeCount(gender: string): number {
    return this.employeeList.filter(employee => employee.getGender() === gender).length;
  }

  updateSelectedGender(selection: string) {
    this.selectedGender = selection;
  }
}

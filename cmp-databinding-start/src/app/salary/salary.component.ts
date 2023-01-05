import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css'],
})
export class SalaryComponent implements OnInit {
  empsalary: number = 0;
  message: string = '';
  constructor() {}
  salaryIncrement() {
    this.empsalary = this.empsalary + 500;
    this.message = 'Employee Incremented Salary: ';
  }
  salaryDecrement() {
    this.empsalary = this.empsalary - 500;
    this.message = 'Employee Decremented Salary: ';
  }
  ngOnInit(): void {}
}

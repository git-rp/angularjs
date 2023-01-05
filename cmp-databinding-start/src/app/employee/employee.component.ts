import { Component, OnInit, ViewChild } from '@angular/core';
import { SalaryComponent } from '../salary/salary.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @ViewChild(SalaryComponent) salaryComponent: SalaryComponent;
  constructor() {}
  increment() {
    console.log('Salary Incremented');
    this.salaryComponent.salaryIncrement();
  }
  decrement() {
    console.log('Salary Decremented');
    this.salaryComponent.salaryDecrement();
  }
  ngOnInit(): void {}
}

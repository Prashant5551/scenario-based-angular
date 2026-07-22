import { Component, inject } from '@angular/core';
import { Employee } from '../../../core/service/employee/employee';
import { IEmployeeList } from '../../../core/model/interfaces/employee.interface';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employeeList: IEmployeeList[] = [];
  employeeService = inject(Employee);

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getAllEmployee().subscribe((res: any) => {
      // console.log(res);
      this.employeeList = res;
    })
  }
}

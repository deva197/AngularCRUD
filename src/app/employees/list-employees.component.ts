import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
// import Employee Model
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html'
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  employeeToDisplay: Employee;
  private arrayIndex = 1;
  dataFromChild:Employee;
  selectedEmployeeId:number
  constructor( private _employeeService: EmployeeService , private _router:Router,private _route: ActivatedRoute) { }

  ngOnInit() {

    this.employees = this._route.snapshot.data['employeeList'];
    // this._employeeService.getEmployees().subscribe((empList) => {
    //   // This code executes asynchronously. When the data is returned
    //   // after the 2 seconds delay, that's when the employees property is set
    //   this.employees = empList;
    //   this.employeeToDisplay = this.employees[0];
    // });
   
  }

  nextEmployee(): void {
    if (this.employeeToDisplay.id <= 2) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }

  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId]);
  }
}
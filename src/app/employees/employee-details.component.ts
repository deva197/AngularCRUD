
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  private _id;
  constructor(private _route: ActivatedRoute,
    private _employeeService: EmployeeService, private _router: Router) { }

  // ngOnInit() {
  //   //const id = +this._route.snapshot.paramMap.get('id');
  //   this._id = +this._route.snapshot.params['id']; // Since Angular 4, params have been deprecated in favor of the new interface paramMap. 
  //   this.employee = this._employeeService.getEmployee(this._id);
  // }

  // Please note : paramMap is introduced in Angular 4. So if you are using Angular 4 or any version beyond it, then the above code works. If you are using Angular 2, then use params instead of paramMap as shown below. 

  // ngOnInit() {
  //   this._route.params.subscribe(params => {
  //     this._id = +params['id'];
  //     this.employee = this._employeeService.getEmployee(this._id);
  //   });
  // }
  

  // The paramMap property returns an Observable. So subscribe to it
// if you want to react and execute some piece of code in response
// to the route parameter value changes
ngOnInit() {
  debugger
  const idd = +this._route.snapshot.paramMap.get('id');
  this._route.paramMap.subscribe(params => {
    this._id = +params.get('id');
    this.employee = this._employeeService.getEmployee(this._id);
  });
}

  getNextEmployee() {
    if (this._id < 3) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }

    this._router.navigate(['/employees', this._id]);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { SelectRequiredValidatorDirective } from '../shared/select-required-validator.directive';
import { Router } from '@angular/router'
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html'
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  contactPreference = 'phone';
  //department='3';
  previewPhoto = false;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null
  };
  constructor(private _employeeService: EmployeeService,
    private _router: Router) {


  }

  ngOnInit() {
    //this.contactPreference = 'email'
  }
  saveEmployee(empForm:NgForm): void {
    debugger;
   const newEmployee:Employee = Object.assign({},this.employee);
    this._employeeService.save(newEmployee);
    this.createEmployeeForm.reset();
    empForm.reset();
    this._router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}

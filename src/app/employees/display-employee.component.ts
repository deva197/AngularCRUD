import { Component, OnInit, Output, Input, SimpleChanges, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html'
})
export class DisplayEmployeeComponent implements OnInit {
  private _employee: Employee;
  selectedEmployeeId:number;
  // Parent component will use this Input property to pass
  // the employee object to which the template binds to
  @Input() employee: Employee;
  @Input()
  set employee2(val: Employee) {
    console.log('Previous(employee2) : ' + (this._employee ? this._employee.name : 'NULL'));
    console.log('Current(employee2) : ' + val.name);
    this._employee = val;
  }

  // This getter is called when reading and displaying data
  get employee2(): Employee {
    return this._employee;
  }
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  //Angular component input property change detection
  ngOnChanges(changes: SimpleChanges) {
    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;

    console.log('Previous(employee) : ' + (previousEmployee ? previousEmployee.name : 'NULL'));
    console.log('Current(employee) : ' + currentEmployee.name);
  }

  handleClick() {
    this.notify.emit(this.employee);
  }
  
  getNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }

}

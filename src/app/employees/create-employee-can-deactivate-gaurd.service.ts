import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService
  implements CanDeactivate<CreateEmployeeComponent> {

  constructor() { }

  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.createEmployeeForm.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }

    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger;
    return true;
  };
}
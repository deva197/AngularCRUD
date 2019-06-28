import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-gaurd.service';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';

const appRoutes: Routes = [
  {
    path: 'list', component: ListEmployeesComponent,
    canActivate: [CreateEmployeeCanDeactivateGuardService],
    resolve: { employeeList: EmployeeListResolverService }
  },
  {
    path: 'create', component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  }, { path: 'employees/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes ,{enableTracing:true}),
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [CreateEmployeeCanDeactivateGuardService,
    EmployeeService,EmployeeListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }

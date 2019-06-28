import { TestBed } from '@angular/core/testing';
import { CreateEmployeeCanDeactivateGuardService } from './create-employee-can-deactivate-gaurd.service';

describe('CreateEmployeeCanDeactivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateEmployeeCanDeactivateGuardService = TestBed.get(CreateEmployeeCanDeactivateGuardService);
    expect(service).toBeTruthy();
  });
});

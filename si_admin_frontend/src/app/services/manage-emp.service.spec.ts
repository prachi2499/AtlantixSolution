import { TestBed } from '@angular/core/testing';

import { ManageEmpService } from './manage-emp.service';

describe('ManageEmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageEmpService = TestBed.get(ManageEmpService);
    expect(service).toBeTruthy();
  });
});

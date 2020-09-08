import { TestBed } from '@angular/core/testing';

import { ManagePkgsService } from './manage-pkgs.service';

describe('ManagePkgsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagePkgsService = TestBed.get(ManagePkgsService);
    expect(service).toBeTruthy();
  });
});

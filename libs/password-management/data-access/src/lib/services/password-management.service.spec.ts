/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PasswordManagementService } from './password-management.service';

describe('Service: PasswordManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordManagementService],
    });
  });

  it('should ...', inject(
    [PasswordManagementService],
    (service: PasswordManagementService) => {
      expect(service).toBeTruthy();
    }
  ));
});

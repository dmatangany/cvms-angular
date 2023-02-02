import { TestBed } from '@angular/core/testing';

import { AccountTransationsService } from './account-transations.service';

describe('AccountTransationsService', () => {
  let service: AccountTransationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountTransationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

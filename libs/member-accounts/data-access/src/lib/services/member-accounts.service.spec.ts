import { TestBed } from '@angular/core/testing';

import { MemberAccountsService } from './member-accounts.service';

describe('MemberAccountsService', () => {
  let service: MemberAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

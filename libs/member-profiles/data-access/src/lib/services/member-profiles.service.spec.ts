/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MemberProfilesService } from './member-profiles.service';

describe('Service: MemberProfiles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberProfilesService]
    });
  });

  it('should ...', inject([MemberProfilesService], (service: MemberProfilesService) => {
    expect(service).toBeTruthy();
  }));
});

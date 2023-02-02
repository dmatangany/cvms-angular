/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MemberPackagesService } from './member-packages.service';

describe('Service: MemberPackages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberPackagesService]
    });
  });

  it('should ...', inject([MemberPackagesService], (service: MemberPackagesService) => {
    expect(service).toBeTruthy();
  }));
});

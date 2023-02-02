/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MemberTypesService } from './member-types.service';

describe('Service: MemberTypes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberTypesService]
    });
  });

  it('should ...', inject([MemberTypesService], (service: MemberTypesService) => {
    expect(service).toBeTruthy();
  }));
});

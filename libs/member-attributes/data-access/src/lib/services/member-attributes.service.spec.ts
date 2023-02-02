/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MemberAttributesService } from './member-attributes.service';

describe('Service: MemberAttributes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberAttributesService]
    });
  });

  it('should ...', inject([MemberAttributesService], (service: MemberAttributesService) => {
    expect(service).toBeTruthy();
  }));
});

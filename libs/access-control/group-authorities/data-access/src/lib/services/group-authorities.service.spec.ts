import { TestBed } from '@angular/core/testing';

import { GroupAuthoritiesService } from './group-authorities.service';

describe('GroupAuthoritiesService', () => {
  let service: GroupAuthoritiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupAuthoritiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

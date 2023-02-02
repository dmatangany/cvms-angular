import { TestBed } from '@angular/core/testing';

import { EventPackagesService } from './event-packages.service';

describe('EventPackagesService', () => {
  let service: EventPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

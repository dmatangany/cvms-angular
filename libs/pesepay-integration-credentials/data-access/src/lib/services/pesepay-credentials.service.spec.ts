/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PesepayCredentialsService } from './pesepay-credentials.service';

describe('Service: PesepayCredentials', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PesepayCredentialsService]
    });
  });

  it('should ...', inject([PesepayCredentialsService], (service: PesepayCredentialsService) => {
    expect(service).toBeTruthy();
  }));
});

import { AuthoritiesEntity } from './../+state/authorities.models';
import { Injectable } from '@angular/core';
import { ApiService } from '@membership-application/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class AuthoritiesService {
  constructor(private apiService: ApiService) {}

  getAllAuthorities() {
    return this.apiService.get<AuthoritiesEntity[]>(
      `/v1/access-control/authorities/all`
    );
  }
}

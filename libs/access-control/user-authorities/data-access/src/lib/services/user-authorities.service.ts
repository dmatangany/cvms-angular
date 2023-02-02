import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { ApiService, Page } from '@membership-application/shared/data-access';

import { UserAuthoritiesEntity } from '../+state/user-authorities.models';

@Injectable({
  providedIn: 'root',
})
export class UserAuthoritiesService {
  constructor(private apiService: ApiService) {}

  getPaginatedUserAuthorities(userId: string | number, filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<UserAuthoritiesEntity>>(
      `/v1/access-control/user-authorities/by-user/${userId}`,
      httpParams
    );
  }

  createUserAuthorities(request: any) {
    console.log(request);
    return this.apiService.put<UserAuthoritiesEntity[]>(
      `/v1/access-control/user-authorities/bundled`,
      request.request
    );
  }

  deleteUserAuthorities(userAuthorityIds: string | number[]) {
    return this.apiService.patch(
      `/v1/access-control/user-authorities/bundled`,
      userAuthorityIds
    );
  }

  getAllUserAuthorities(userId: string | number) {
    return this.apiService.get<UserAuthoritiesEntity[]>(
      `/v1/access-control/user-authorities/by-user/${userId}/all`
    );
  }

  getAdminUnassignedUserAuthorities(userId: string) {
    return this.apiService.get<UserAuthoritiesEntity[]>(
      `/v1/access-control/user-authorities/unassigned/${userId}`
    );
  }
}

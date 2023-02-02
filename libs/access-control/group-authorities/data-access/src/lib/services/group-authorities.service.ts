import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { ApiService, Page } from '@membership-application/shared/data-access';

import { GroupAuthoritiesEntity } from '../+state/group-authorities.models';

@Injectable({
  providedIn: 'root',
})
export class GroupAuthoritiesService {
  constructor(private apiService: ApiService) {}

  getPaginatedGroupAuthorities(groupId: string | number, filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<GroupAuthoritiesEntity>>(
      `/v1/access-control/group-authorities/by-group/${groupId}`,
      httpParams
    );
  }

  createGroupAuthorities(request: any) {
    return this.apiService.put<GroupAuthoritiesEntity[]>(
      `/v1/access-control/group-authorities/bundled`,
      request
    );
  }

  deleteGroupAuthorities(groupAuthorityIds: number[]) {
    return this.apiService.patch(
      `/v1/access-control/group-authorities/bundled`,
      groupAuthorityIds
    );
  }

  getAllGroupAuthorities(groupId: string | number) {
    return this.apiService.get<GroupAuthoritiesEntity[]>(
      `/v1/access-control/group-authorities/by-group/${groupId}/all`
    );
  }

  getAdminUnassignedGroupAuthorities(groupId: string) {
    return this.apiService.get<GroupAuthoritiesEntity[]>(
      `/v1/access-control/group-authorities/unassigned/${groupId}`
    );
  }
}

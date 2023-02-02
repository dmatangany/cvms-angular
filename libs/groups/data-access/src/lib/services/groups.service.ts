import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { ApiService, Page } from '@membership-application/shared/data-access';

import { GroupsEntity } from '../+state/groups.models';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private apiService: ApiService) {}

  getPaginatedGroups(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<GroupsEntity>>(`/v1/groups`, httpParams);
  }

  createGroup(groupDetails: GroupsEntity) {
    return this.apiService.post<GroupsEntity>(`/v1/groups`, groupDetails);
  }

  getGroup(groupId: string | number) {
    return this.apiService.get<GroupsEntity>(`/v1/groups/${groupId}`);
  }

  updateGroup(groupDetails: GroupsEntity) {
    return this.apiService.put<GroupsEntity>(
      `/v1/groups/${groupDetails.id}`,
      groupDetails
    );
  }

  deleteGroup(groupId: string | number) {
    return this.apiService.delete(`/v1/groups/${groupId}`);
  }

  getAllGroups() {
    return this.apiService.get<GroupsEntity[]>(`/v1/groups/all`);
  }
}

import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService, Page } from '@membership-application/shared/data-access';
import { MemberTypesEntity } from '../+state/member-types.models';

@Injectable({
  providedIn: 'root',
})
export class MemberTypesService {
  constructor(private apiService: ApiService) {}

  getPaginatedMemberTypes(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<MemberTypesEntity>>(
      `/v1/member-types`,
      httpParams
    );
  }

  createMemberType(memberType: MemberTypesEntity) {
    return this.apiService.post<MemberTypesEntity>(
      `/v1/member-types`,
      memberType
    );
  }

  deleteMemberType(memberTypeId: string | number) {
    return this.apiService.delete<MemberTypesEntity>(
      `/v1/member-types/${memberTypeId}`
    );
  }

  updateMemberType(memberType: MemberTypesEntity) {
    return this.apiService.put<MemberTypesEntity>(
      `/v1/member-types/${memberType.id}`,
      memberType
    );
  }

  getMemberTypeById(memberTypeId: string | number) {
    return this.apiService.get<MemberTypesEntity>(
      `/v1/member-types/${memberTypeId}`
    );
  }

  getAllMemberTypes() {
    return this.apiService.get<MemberTypesEntity[]>(`/v1/member-types/all`);
  }
}

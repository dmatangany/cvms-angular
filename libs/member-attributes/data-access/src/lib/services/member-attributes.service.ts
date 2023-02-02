import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService, Page } from '@membership-application/shared/data-access';
import { MemberAttributesEntity } from '../+state/member-attributes.models';

@Injectable({
  providedIn: 'root',
})
export class MemberAttributesService {
  constructor(private apiService: ApiService) {}

  getPaginatedMemberAttributes(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<MemberAttributesEntity>>(
      `/v1/member-attributes`,
      httpParams
    );
  }

  createMemberAttribute(memberAttribute: MemberAttributesEntity) {
    return this.apiService.post<MemberAttributesEntity>(
      `/v1/member-attributes`,
      memberAttribute
    );
  }

  deleteMemberAttribute(memberAttributeId: string | number) {
    return this.apiService.delete<MemberAttributesEntity>(
      `/v1/member-attributes/${memberAttributeId}`
    );
  }

  updateMemberAttribute(memberAttribute: MemberAttributesEntity) {
    return this.apiService.put<MemberAttributesEntity>(
      `/v1/member-attributes/${memberAttribute.id}`,
      memberAttribute
    );
  }

  getMemberAttributeById(memberAttributeId: string | number) {
    return this.apiService.get<MemberAttributesEntity>(
      `/cmn/v1/member-attributes/${memberAttributeId}`
    );
  }

  getAllMemberAttributes() {
    return this.apiService.get<MemberAttributesEntity[]>(
      `/v1/member-attributes/all`
    );
  }

  getAllMemberAttributesByMemberTypeId(memberTypeId: any) {
    console.log(memberTypeId);

    return this.apiService.get<MemberAttributesEntity[]>(
      `/v1/member-types/${memberTypeId}/attributes`
    );
  }
}

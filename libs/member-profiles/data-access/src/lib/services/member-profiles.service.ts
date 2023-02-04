import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService, Page } from '@membership-application/shared/data-access';
import {MemberApprovalEntity, MemberProfileRequestEntity, MemberProfilesEntity} from '../+state/member-profiles.models';

@Injectable({
  providedIn: 'root',
})
export class MemberProfilesService {
  constructor(private apiService: ApiService) {}

  getPaginatedMemberProfiles(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<MemberProfilesEntity>>(
      `/v1/member-profiles`,
      httpParams
    );
  }

  createMemberProfile(memberProfile: MemberProfilesEntity) {
    return this.apiService.post<MemberProfilesEntity>(
      `/v1/member-profiles`,
      memberProfile
    );
  }

  createMemberPayment(memberProfile: MemberProfileRequestEntity) {
    return this.apiService.post<MemberProfileRequestEntity>(
      `/v1/member-profiles/payments/subscribe`,
      memberProfile
    );
  }
  getMyMemberProfile() {
    return this.apiService.get<MemberProfilesEntity>(
      `/v1/member-profiles/my-profile`
    );
  }

  updateMemberProfile(memberProfile: MemberProfilesEntity) {
    return this.apiService.put<MemberProfilesEntity>(
      `/v1/member-profiles/${memberProfile.id}`,
      memberProfile
    );
  }

  updateMemberApprovalProfile(memberApprovalEntity: MemberApprovalEntity) {
    return this.apiService.post<MemberApprovalEntity>(
      `/v1/member-profiles/${memberApprovalEntity.memberProfileId}/${memberApprovalEntity.approved}/approval`,
      memberApprovalEntity
    );
  }

  getMemberProfileById(memberProfileId: string | number) {
    return this.apiService.get<MemberProfilesEntity>(
      `/v1/member-profiles/${memberProfileId}`
    );
  }

  getAllMemberProfiles() {
    return this.apiService.get<MemberProfilesEntity[]>(
      `/v1/member-profiles/all`
    );
  }

  getPaginatedMemberProfilesByMemberType(member_type_id: any, filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<MemberProfilesEntity>>(
      `/v1/member-profiles/${member_type_id}/membertype`,
      httpParams
    );
  }

  getPaginatedMemberProfilesByByApproved(approved: any, filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<MemberProfilesEntity>>(
      `/v1/member-profiles/${approved}/approved`,
      httpParams
    );
  }
  getMemberProfileByUser(user_id: any) {
    return this.apiService.get<Page<MemberProfilesEntity>>(
      `/v1/member-profiles/${user_id}/userid`
    );
  }
}

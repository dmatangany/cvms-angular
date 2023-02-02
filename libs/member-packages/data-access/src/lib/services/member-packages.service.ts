import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService, Page } from '@membership-application/shared/data-access';
import { MemberPackageEntity } from '../+state/member-packages.models';

@Injectable({
  providedIn: 'root',
})
export class MemberPackagesService {
  constructor(private apiService: ApiService) {}

  getPaginatedMemberPackages(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<MemberPackageEntity>>(
      `/v1/member-packages`,
      httpParams
    );
  }

  createMemberPackage(memberPackage: MemberPackageEntity) {
    return this.apiService.post<MemberPackageEntity>(
      `/v1/member-packages`,
      memberPackage
    );
  }

  deleteMemberPackage(memberPackageId: string | number) {
    return this.apiService.delete<MemberPackageEntity>(
      `/v1/member-packages/${memberPackageId}`
    );
  }

  updateMemberPackage(memberPackage: MemberPackageEntity) {
    return this.apiService.put<MemberPackageEntity>(
      `/v1/member-packages/${memberPackage.id}`,
      memberPackage
    );
  }

  getMemberPackageById(memberPackageId: string | number) {
    return this.apiService.get<MemberPackageEntity>(
      `/v1/member-packages/${memberPackageId}`
    );
  }

  getAllMemberPackages() {
    return this.apiService.get<MemberPackageEntity[]>(
      `/v1/member-packages/all`
    );
  }

  getAllMemberPackagesByMemberType(memberTypeId: string) {
    return this.apiService.get<MemberPackageEntity[]>(
      `/v1/member-packages/type/${memberTypeId}/all`
    );
  }
}

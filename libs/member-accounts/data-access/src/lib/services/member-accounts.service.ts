import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService, Page } from '@membership-application/shared/data-access';
import { MemberAccountsEntity } from '../+state/member-accounts.models';

@Injectable({
  providedIn: 'root',
})
export class MemberAccountsService {
  constructor(private apiService: ApiService) {}

  getPaginatedMemberAccounts(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<MemberAccountsEntity>>(
      `/v1/member-accounts`,
      httpParams
    );
  }

  createMemberAccount(memberAccount: MemberAccountsEntity) {
    return this.apiService.post<MemberAccountsEntity>(
      `/v1/member-accounts`,
      memberAccount
    );
  }

  getMyMemberAccount() {
    return this.apiService.get<MemberAccountsEntity>(
      `/v1/member-accounts/my-account`
    );
  }

  updateMemberAccount(memberAccount: MemberAccountsEntity) {
    return this.apiService.put<MemberAccountsEntity>(
      `/v1/member-accounts/${memberAccount.id}`,
      memberAccount
    );
  }

  getMemberAccountById(memberAccountId: string | number) {
    return this.apiService.get<MemberAccountsEntity>(
      `/cmn/v1/member-accounts/${memberAccountId}`
    );
  }

  getAllMemberAccounts() {
    return this.apiService.get<MemberAccountsEntity[]>(
      `/cmn/v1/member-accounts/all`
    );
  }
}

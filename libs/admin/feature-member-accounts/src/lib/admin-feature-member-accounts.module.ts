import { RouterModule } from '@angular/router';
import { UpdateMemberAccountsComponent } from './update-member-accounts/update-member-accounts.component';
import { MemberAccountsListComponent } from './member-accounts-list/member-accounts-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberAccountsUiModule } from '@membership-application/member-accounts/ui';
import { MemberAccountsDataAccessModule } from '@membership-application/member-accounts/data-access';

@NgModule({
  imports: [
    CommonModule,
    MemberAccountsDataAccessModule,
    MemberAccountsUiModule,
    RouterModule.forChild([
      { path: '', component: MemberAccountsListComponent },
    ]),
  ],
  declarations: [MemberAccountsListComponent, UpdateMemberAccountsComponent],
})
export class AdminFeatureMemberAccountsModule {}

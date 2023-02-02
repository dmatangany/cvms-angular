import { MemberAccountsListUiComponent } from './member-accounts-list-ui/member-accounts-list-ui.component';
import { UpdateMemberAccountsFormComponent } from './update-member-accounts-form/update-member-accounts-form.component';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountDetailsUiComponent } from './account-details-ui/account-details-ui.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ClarityModule],
  declarations: [
    UpdateMemberAccountsFormComponent,
    MemberAccountsListUiComponent,
    AccountDetailsUiComponent,
  ],
  exports: [
    UpdateMemberAccountsFormComponent,
    MemberAccountsListUiComponent,
    AccountDetailsUiComponent,
  ],
})
export class MemberAccountsUiModule {}

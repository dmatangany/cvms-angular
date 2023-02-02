import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { UsersUiModule } from '@membership-application/users/ui';
import { UsersDataAccessModule } from '@membership-application/users/data-access';
import { PasswordManagementUiModule } from '@membership-application/password-management/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsContainerComponent } from './accounts-container/accounts-container.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ClientFeatureMemberAccountsModule } from '@membership-application/client/feature-member-accounts';
import { ClientFeatureMemberProfileModule } from '@membership-application/client/feature-member-profile';
import { PasswordManagementDataAccessModule } from '@membership-application/password-management/data-access';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    PasswordManagementDataAccessModule,
    PasswordManagementUiModule,
    UsersDataAccessModule,
    UsersUiModule,
    ClientFeatureMemberAccountsModule,
    ClientFeatureMemberProfileModule,
    RouterModule.forChild([
      { path: '', component: AccountsContainerComponent },
    ]),
  ],
  declarations: [
    AccountsContainerComponent,
    UserAccountComponent,
    ChangePasswordComponent,
  ],
})
export class ClientFeatureAccountsModule {}

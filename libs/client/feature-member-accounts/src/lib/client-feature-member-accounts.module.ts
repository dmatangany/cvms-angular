import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentTransactionsDataAccessModule } from '@membership-application/payment-transactions/data-access';
import { PaymentTransactionsUiModule } from '@membership-application/payment-transactions/ui';
import { CurrenciesDataAccessModule } from '@membership-application/currencies/data-access';
import { MemberAccountsDataAccessModule } from '@membership-application/member-accounts/data-access';
import { MemberAccountsUiModule } from '@membership-application/member-accounts/ui';
import { MemberProfilesDataAccessModule } from '@membership-application/member-profiles/data-access';
import { MyMemberAccountComponent } from './my-member-account/my-member-account.component';
import { LoadAccountComponent } from './load-account/load-account.component';
@NgModule({
  imports: [
    CommonModule,
    MemberAccountsDataAccessModule,
    MemberAccountsUiModule,
    PaymentTransactionsDataAccessModule,
    PaymentTransactionsUiModule,
    CurrenciesDataAccessModule,
    MemberProfilesDataAccessModule,
  ],
  declarations: [MyMemberAccountComponent, LoadAccountComponent],
  exports: [MyMemberAccountComponent, LoadAccountComponent],
})
export class ClientFeatureMemberAccountsModule {}

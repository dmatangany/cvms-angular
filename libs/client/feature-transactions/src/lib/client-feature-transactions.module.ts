import { RouterModule } from '@angular/router';
import { LoadAccountsComponent } from './load-accounts/load-accounts.component';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentTransactionsListComponent } from './payment-transactions-list/payment-transactions-list.component';
import { AccountTransactionsListComponent } from './account-transactions-list/account-transactions-list.component';
import { TransactionsContainerComponent } from './transactions-container/transactions-container.component';
import { AccountTransactionsDataAccessModule } from '@membership-application/account-transactions/data-access';
import { PaymentTransactionsDataAccessModule } from '@membership-application/payment-transactions/data-access';
import { PaymentTransactionsUiModule } from '@membership-application/payment-transactions/ui';
import { MemberProfilesDataAccessModule } from '@membership-application/member-profiles/data-access';
import { AccountTransactionsUiModule } from '@membership-application/account-transactions/ui';
import { CurrenciesDataAccessModule } from '@membership-application/currencies/data-access';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    AccountTransactionsDataAccessModule,
    AccountTransactionsUiModule,
    PaymentTransactionsDataAccessModule,
    PaymentTransactionsUiModule,
    MemberProfilesDataAccessModule,
    CurrenciesDataAccessModule,
    RouterModule.forChild([
      { path: '', component: TransactionsContainerComponent },
    ]),
  ],
  declarations: [
    PaymentTransactionsListComponent,
    AccountTransactionsListComponent,
    TransactionsContainerComponent,
    LoadAccountsComponent,
  ],
})
export class ClientFeatureTransactionsModule {}

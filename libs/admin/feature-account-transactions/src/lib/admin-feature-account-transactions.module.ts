import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTransactionsDataAccessModule } from '@membership-application/account-transactions/data-access';
import { AccountTransactionsUiModule } from '@membership-application/account-transactions/ui';
import { AccountsTransactionsListComponent } from './accounts-transactions-list/accounts-transactions-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountTransactionsDataAccessModule,
    AccountTransactionsUiModule,
  ],
  declarations: [AccountsTransactionsListComponent],
  exports: [AccountsTransactionsListComponent],
})
export class AdminFeatureAccountTransactionsModule {}

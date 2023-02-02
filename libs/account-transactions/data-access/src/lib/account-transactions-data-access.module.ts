import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromAccountTransactions from './+state/account-transactions.reducer';
import { AccountTransactionsEffects } from './+state/account-transactions.effects';
import { AccountTransactionsFacade } from './+state/account-transactions.facade';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forFeature(
      fromAccountTransactions.ACCOUNT_TRANSACTIONS_FEATURE_KEY,
      fromAccountTransactions.accountTransactionsReducer
    ),
    EffectsModule.forFeature([AccountTransactionsEffects]),
  ],
  providers: [AccountTransactionsFacade],
})
export class AccountTransactionsDataAccessModule {}

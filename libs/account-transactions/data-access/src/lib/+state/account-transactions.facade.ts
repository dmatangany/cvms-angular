import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store, Action } from '@ngrx/store';

import * as AccountTransactionsActions from './account-transactions.actions';
import * as AccountTransactionsFeature from './account-transactions.reducer';
import * as AccountTransactionsSelectors from './account-transactions.selectors';

@Injectable()
export class AccountTransactionsFacade {
  loaded$ = this.store.pipe(
    select(AccountTransactionsSelectors.getAccountTransactionsLoaded)
  );
  allAccountTransactions$ = this.store.pipe(
    select(AccountTransactionsSelectors.getAllAccountTransactions)
  );
  selectedAccountTransaction$ = this.store.pipe(
    select(AccountTransactionsSelectors.getSelectedAccountTransaction)
  );
  loading$ = this.store.pipe(
    select(AccountTransactionsSelectors.getAccountTransactionsLoadingState)
  );
  totalAccountTransactions$ = this.store.pipe(
    select(AccountTransactionsSelectors.getTotalAccountTransactions)
  );
  btnState$ = this.store.pipe(select(AccountTransactionsSelectors.getBtnState));

  constructor(
    private store: Store<AccountTransactionsFeature.AccountTransactionsPartialState>
  ) {}

  getPaginatedAccountTransactions(state: ClrDatagridStateInterface) {
    this.store.dispatch(
      AccountTransactionsActions.getPaginatedAccountTransactions({ state })
    );
  }

  getPaginatedAccountTransactionsByMemberId(
    state: ClrDatagridStateInterface
  ) {
    this.store.dispatch(
      AccountTransactionsActions.getPaginatedAccountTransactionsByMemberId({
        state,
      })
    );
  }

  getAccountTransaction(accountTransactionId: string | number) {
    this.store.dispatch(
      AccountTransactionsActions.getAccountTransactionById({
        accountTransactionId,
      })
    );
  }

  getAccountTransactionReport(reportContext: any) {
    this.store.dispatch(
      AccountTransactionsActions.getAccountTransactionsReports({
        reportContext,
      })
    );
  }
}

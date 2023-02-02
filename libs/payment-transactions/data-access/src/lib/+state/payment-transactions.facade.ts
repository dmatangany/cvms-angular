import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store, Action } from '@ngrx/store';

import * as PaymentTransactionsActions from './payment-transactions.actions';
import { PaymentTransactionsEntity } from './payment-transactions.models';
import * as PaymentTransactionsFeature from './payment-transactions.reducer';
import * as PaymentTransactionsSelectors from './payment-transactions.selectors';

@Injectable()
export class PaymentTransactionsFacade {
  loaded$ = this.store.pipe(
    select(PaymentTransactionsSelectors.getPaymentTransactionsLoaded)
  );
  allPaymentTransactions$ = this.store.pipe(
    select(PaymentTransactionsSelectors.getAllPaymentTransactions)
  );
  selectedPaymentTransaction$ = this.store.pipe(
    select(PaymentTransactionsSelectors.getSelectedPaymentTransaction)
  );
  loading$ = this.store.pipe(
    select(PaymentTransactionsSelectors.getPaymentTransactionsLoadingState)
  );
  totalPaymentTransactions$ = this.store.pipe(
    select(PaymentTransactionsSelectors.getTotalPaymentTransactions)
  );
  btnState$ = this.store.pipe(select(PaymentTransactionsSelectors.getBtnState));

  constructor(
    private store: Store<PaymentTransactionsFeature.PaymentTransactionsPartialState>
  ) {}

  getPaginatedPaymentTransactions(state: ClrDatagridStateInterface) {
    this.store.dispatch(
      PaymentTransactionsActions.getPaginatedPaymentTransactions({ state })
    );
  }

  getPaginatedPaymentTransactionsByMemberId(
    memberId: any,
    state: ClrDatagridStateInterface
  ) {
    this.store.dispatch(
      PaymentTransactionsActions.getPaginatedPaymentTransactionsByMemberId({
        memberId,
        state,
      })
    );
  }
  getPaymentTransaction(paymentTransactionId: string | number) {
    this.store.dispatch(
      PaymentTransactionsActions.getPaymentTransactionById({
        paymentTransactionId,
      })
    );
  }

  loadAccount(loadAccountContext: any) {
    this.store.dispatch(
      PaymentTransactionsActions.loadAccount({
        loadAccountContext,
      })
    );
  }

  walkInLoadAccount(walkInLoadAccountContext: any) {
    this.store.dispatch(
      PaymentTransactionsActions.walkinLoadAccount({
        walkInLoadAccountContext,
      })
    );
  }

  getPaymentTransactionReport(reportContext: any) {
    this.store.dispatch(
      PaymentTransactionsActions.getPaymentTransactionsReports({
        reportContext,
      })
    );
  }
}

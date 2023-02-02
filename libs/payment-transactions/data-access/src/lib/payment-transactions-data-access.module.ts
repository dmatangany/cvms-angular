import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPaymentTransactions from './+state/payment-transactions.reducer';
import { PaymentTransactionsEffects } from './+state/payment-transactions.effects';
import { PaymentTransactionsFacade } from './+state/payment-transactions.facade';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forFeature(
      fromPaymentTransactions.PAYMENT_TRANSACTIONS_FEATURE_KEY,
      fromPaymentTransactions.paymentTransactionsReducer
    ),
    EffectsModule.forFeature([PaymentTransactionsEffects]),
  ],
  providers: [PaymentTransactionsFacade],
})
export class PaymentTransactionsDataAccessModule {}

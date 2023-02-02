import { ListPaymentTransactionsComponent } from './list-payment-transactions/list-payment-transactions.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { PaymentTransactionsUiModule } from '@membership-application/payment-transactions/ui';
import { PaymentTransactionsDataAccessModule } from '@membership-application/payment-transactions/data-access';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    PaymentTransactionsDataAccessModule,
    PaymentTransactionsUiModule,
  ],
  declarations: [ListPaymentTransactionsComponent],
  exports: [ListPaymentTransactionsComponent],
})
export class AdminFeaturePaymentTransactionsModule {}

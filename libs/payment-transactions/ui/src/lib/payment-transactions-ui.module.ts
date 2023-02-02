
import { PaymentTransactionDetailsComponent } from './payment-transaction-details/payment-transaction-details.component';
import { PaymentTransactionsUiComponent } from './payment-transactions-ui/payment-transactions-ui.component';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PaymentsFormComponent } from './payments-form/payments-form.component';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, ClarityModule, ReactiveFormsModule],
  declarations: [
    PaymentTransactionsUiComponent,
    PaymentTransactionDetailsComponent,
    PaymentsFormComponent,
	FilterPipe,
  ],
  exports: [PaymentTransactionsUiComponent, PaymentTransactionDetailsComponent,PaymentsFormComponent],
})
export class PaymentTransactionsUiModule {}

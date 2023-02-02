import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTransactionsComponent } from './list-transactions/list-transactions.component';
import { ClarityModule } from '@clr/angular';
import { AdminFeatureAccountTransactionsModule } from '@membership-application/admin/feature-account-transactions';
import { AdminFeaturePaymentTransactionsModule } from '@membership-application/admin/feature-payment-transactions';
import { ReportsComponent } from './reports/reports.component';
import { ReportsUiModule } from '@membership-application/reports/ui';
import { CurrenciesDataAccessModule } from '@membership-application/currencies/data-access';
import { MemberProfilesDataAccessModule } from '@membership-application/member-profiles/data-access';
import { PaymentTransactionsDataAccessModule } from '@membership-application/payment-transactions/data-access';
import { PaymentTransactionsUiModule } from '@membership-application/payment-transactions/ui';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    AdminFeatureAccountTransactionsModule,
    AdminFeaturePaymentTransactionsModule,
    ReportsUiModule,
    PaymentTransactionsDataAccessModule,
    PaymentTransactionsUiModule,
    CurrenciesDataAccessModule,
    MemberProfilesDataAccessModule,
    RouterModule.forChild([{ path: '', component: ListTransactionsComponent }]),
  ],
  declarations: [ListTransactionsComponent, ReportsComponent],
})
export class AdminFeatureTransactionsModule {}

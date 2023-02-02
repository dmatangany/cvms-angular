import { Component, OnInit } from '@angular/core';
import { AccountTransactionsFacade } from '@membership-application/account-transactions/data-access';
import { PaymentTransactionsFacade } from '@membership-application/payment-transactions/data-access';

@Component({
  selector: 'membership-application-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  constructor(
    private accountTransactionFacade: AccountTransactionsFacade,
    private paymentTransactionFacade: PaymentTransactionsFacade
  ) {}

  ngOnInit(): void {}

  onSubmit(reportContext: any) {
    if (reportContext.type === 'ACCOUNT') {
      this.accountTransactionFacade.getAccountTransactionReport(reportContext);
    }
    if (reportContext.type === 'PAYMENT') {
      this.paymentTransactionFacade.getPaymentTransactionReport(reportContext);
    }
  }
}

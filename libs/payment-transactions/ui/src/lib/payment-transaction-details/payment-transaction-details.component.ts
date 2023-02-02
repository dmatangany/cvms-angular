import { Component, Input, OnInit } from '@angular/core';
import { PaymentTransactionsEntity } from '@membership-application/payment-transactions/data-access';

@Component({
  selector: 'membership-application-payment-transaction-details',
  templateUrl: './payment-transaction-details.component.html',
  styleUrls: ['./payment-transaction-details.component.scss'],
})
export class PaymentTransactionDetailsComponent implements OnInit {
  @Input() paymentTransaction!: PaymentTransactionsEntity;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { PaymentTransactionsEntity } from '@membership-application/payment-transactions/data-access';

@Component({
  selector: 'membership-application-payment-transactions-ui',
  templateUrl: './payment-transactions-ui.component.html',
  styleUrls: ['./payment-transactions-ui.component.scss'],
})
export class PaymentTransactionsUiComponent implements OnInit {
  @Input() paymentTransactionsList: PaymentTransactionsEntity[] = [];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage = '';
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  searchText = '';
  term: String = '';
  constructor() {}

  ngOnInit(): void {}
}

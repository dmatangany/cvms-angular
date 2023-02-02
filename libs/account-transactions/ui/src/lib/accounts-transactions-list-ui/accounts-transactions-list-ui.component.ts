import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';

import {
  AccountTransactionsEntity,
  PaymentStatus,
} from '@membership-application/account-transactions/data-access';

@Component({
  selector: 'membership-application-accounts-transactions-list-ui',
  templateUrl: './accounts-transactions-list-ui.component.html',
  styleUrls: ['./accounts-transactions-list-ui.component.css'],
})
export class AccountsTransactionsListUiComponent implements OnInit {
  @Input() accountTransactionsList: AccountTransactionsEntity[] = [];
  @Input() total = 0;
  @Input() loading = true;
  @Input() placeholderMessage = '';
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
  searchText = '';
  term: String = ''; 
  public transactionStatus = PaymentStatus;

  constructor() {}

  ngOnInit(): void {}
}

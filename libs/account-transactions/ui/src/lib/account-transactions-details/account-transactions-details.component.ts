import { Component, Input, OnInit } from '@angular/core';
import { AccountTransactionsEntity } from '@membership-application/account-transactions/data-access';

@Component({
  selector: 'membership-application-account-transactions-details',
  templateUrl: './account-transactions-details.component.html',
  styleUrls: ['./account-transactions-details.component.css'],
})
export class AccountTransactionsDetailsComponent implements OnInit {
  @Input() transactions!: AccountTransactionsEntity;
  constructor() {}

  ngOnInit() {}
}

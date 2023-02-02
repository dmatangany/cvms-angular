import {
  Component,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { AccountTransactionsFacade } from '@membership-application/account-transactions/data-access';

@Component({
  selector: 'membership-application-accounts-transactions-list',
  templateUrl: './accounts-transactions-list.component.html',
  styleUrls: ['./accounts-transactions-list.component.css'],
})
export class AccountsTransactionsListComponent
  implements OnInit, AfterViewChecked
{
  constructor(
    public accountTransactionsFacade: AccountTransactionsFacade,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {}

  public getAccountTransactions(state: ClrDatagridStateInterface) {
    this.accountTransactionsFacade.getPaginatedAccountTransactions(state);
  }
}

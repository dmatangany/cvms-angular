import { Subscription } from 'rxjs';
import { MemberProfilesEntity } from './../../../../../member-profiles/data-access/src/lib/+state/member-profiles.models';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { AccountTransactionsFacade } from '@membership-application/account-transactions/data-access';
import { MemberProfilesFacade } from '@membership-application/member-profiles/data-access';

@Component({
  selector: 'membership-application-account-transactions-list',
  templateUrl: './account-transactions-list.component.html',
  styleUrls: ['./account-transactions-list.component.scss'],
})
export class AccountTransactionsListComponent
  implements OnInit, AfterViewChecked, OnDestroy
{
  sub = new Subscription();
  constructor(
    public accountTransactionsFacade: AccountTransactionsFacade,
    private cdr: ChangeDetectorRef,
    private memberProfileFacade: MemberProfilesFacade
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
  }

  public getAccountTransactions(state: ClrDatagridStateInterface) {
    this.accountTransactionsFacade.getPaginatedAccountTransactionsByMemberId(
      state
    );
  }
}

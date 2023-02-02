import {
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { MemberProfilesFacade } from '@membership-application/member-profiles/data-access';
import { PaymentTransactionsFacade } from '@membership-application/payment-transactions/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-payment-transactions-list',
  templateUrl: './payment-transactions-list.component.html',
  styleUrls: ['./payment-transactions-list.component.scss'],
})
export class PaymentTransactionsListComponent
  implements OnInit, OnDestroy, AfterViewChecked
{
  memberProfile: any;
  sub = new Subscription();
  constructor(
    public paymentTransactionsFacade: PaymentTransactionsFacade,
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
    this.sub = this.memberProfileFacade.selectedMemberProfile$.subscribe(
      (res) => {
        this.memberProfile = res;
      }
    );
  }

  public getPaymentTransactions(state: ClrDatagridStateInterface) {
    this.paymentTransactionsFacade.getPaginatedPaymentTransactionsByMemberId(
      this.memberProfile?.memberId,
      state
    );
  }
}

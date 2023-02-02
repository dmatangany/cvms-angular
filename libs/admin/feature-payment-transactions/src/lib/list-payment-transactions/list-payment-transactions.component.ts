import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { PaymentTransactionsFacade } from '@membership-application/payment-transactions/data-access';

@Component({
  selector: 'membership-application-list-payment-transactions',
  templateUrl: './list-payment-transactions.component.html',
  styleUrls: ['./list-payment-transactions.component.scss'],
})
export class ListPaymentTransactionsComponent
  implements OnInit, AfterViewChecked
{
  constructor(
    public paymentTransactionsFacade: PaymentTransactionsFacade,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {}

  public getPaymentTransactions(state: ClrDatagridStateInterface) {
    this.paymentTransactionsFacade.getPaginatedPaymentTransactions(state);
  }
}

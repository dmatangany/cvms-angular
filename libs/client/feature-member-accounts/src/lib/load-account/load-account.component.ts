import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrenciesFacade } from '@membership-application/currencies/data-access';
import { MemberProfilesFacade } from '@membership-application/member-profiles/data-access';
import { PaymentTransactionsFacade } from '@membership-application/payment-transactions/data-access';

@Component({
  selector: 'membership-application-load-account',
  templateUrl: './load-account.component.html',
  styleUrls: ['./load-account.component.scss'],
})
export class LoadAccountComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  constructor(
    public transactionsFacade: PaymentTransactionsFacade,
    public currenciesFacade: CurrenciesFacade,
    public userData: MemberProfilesFacade
  ) {}

  ngOnInit(): void {
    this.currenciesFacade.getAllCurrencies();
  }

  onSubmit(walkInLoadAccountContext: any) {
    this.transactionsFacade.loadAccount(walkInLoadAccountContext);
    this.transactionsFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }
}

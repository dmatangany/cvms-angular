import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrenciesFacade } from '@membership-application/currencies/data-access';
import { PaymentTransactionsFacade } from '@membership-application/payment-transactions/data-access';

@Component({
  selector: 'membership-application-walk-in-load-account',
  templateUrl: './walk-in-load-account.component.html',
  styleUrls: ['./walk-in-load-account.component.scss'],
})
export class WalkInLoadAccountComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  constructor(
    public transactionsFacade: PaymentTransactionsFacade,
    public currenciesFacade: CurrenciesFacade
  ) {}

  ngOnInit(): void {
    this.currenciesFacade.getAllActiveCurrencies();
  }

  onSubmit(walkInLoadAccountContext: any) {
    console.log(walkInLoadAccountContext);
    this.transactionsFacade.walkInLoadAccount(walkInLoadAccountContext);
    this.transactionsFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }
}

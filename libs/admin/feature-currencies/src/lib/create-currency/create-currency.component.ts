import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';

import {
  CurrenciesFacade,
  CurrenciesEntity,
} from '@membership-application/currencies/data-access';

@Component({
  selector: 'membership-application-create-currency',
  templateUrl: './create-currency.component.html',
  styleUrls: ['./create-currency.component.scss'],
})
export class CreateCurrencyComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  private loadedSubscription = new Subscription();

  constructor(public currenciesFacade: CurrenciesFacade) {}

  ngOnInit(): void {}

  onSubmit(currency: CurrenciesEntity) {
    this.currenciesFacade.createNewCurrency(currency);
    this.loadedSubscription = this.currenciesFacade.loaded$.subscribe((res) =>
      res ? this.closeModal.emit(true) : null
    );
  }

  ngOnDestroy() {
    this.loadedSubscription.unsubscribe();
  }
}

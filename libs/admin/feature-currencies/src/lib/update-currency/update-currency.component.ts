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
  selector: 'membership-application-update-currency',
  templateUrl: './update-currency.component.html',
  styleUrls: ['./update-currency.component.scss'],
})
export class UpdateCurrencyComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  private loadedSubscription = new Subscription();

  constructor(public currenciesFacade: CurrenciesFacade) {}

  ngOnInit(): void {}

  onSubmit(currency: CurrenciesEntity) {
    this.currenciesFacade.updateCurrency(currency);
    this.loadedSubscription = this.currenciesFacade.loaded$.subscribe((res) =>
      res ? this.closeModal.emit(true) : null
    );
  }

  ngOnDestroy() {
    this.loadedSubscription.unsubscribe();
  }
}

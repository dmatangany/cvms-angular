import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { CurrenciesFacade } from '@membership-application/currencies/data-access';

@Component({
  selector: 'membership-application-delete-currency',
  templateUrl: './delete-currency.component.html',
  styleUrls: ['./delete-currency.component.scss'],
})
export class DeleteCurrencyComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  public selectedCurrencySubscription = new Subscription();
  public loadedCurrencySubscription = new Subscription();

  constructor(public currenciesFacade: CurrenciesFacade) {}

  ngOnInit(): void {}

  onSubmit() {
    this.selectedCurrencySubscription =
      this.currenciesFacade.selectedCurrency$.subscribe((currency) => {
        this.currenciesFacade.deleteCurrency(currency?.id!);
        this.loadedCurrencySubscription =
          this.currenciesFacade.loaded$.subscribe((res) => {
            return res ? this.closeModal.emit(true) : null;
          });
      });
  }

  ngOnDestroy() {
    this.selectedCurrencySubscription.unsubscribe();
    this.loadedCurrencySubscription.unsubscribe();
  }
}

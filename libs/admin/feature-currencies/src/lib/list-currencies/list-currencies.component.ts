import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';

import {
  CurrenciesFacade,
  CurrenciesEntity,
} from '@membership-application/currencies/data-access';

@Component({
  selector: 'membership-application-list-currencies',
  templateUrl: './list-currencies.component.html',
  styleUrls: ['./list-currencies.component.scss'],
})
export class ListCurrenciesComponent implements OnInit, AfterViewChecked {
  public placeholderMessage: string | undefined;
  public isUpdate = false;
  public isCreate = false;
  public isDelete = false;

  constructor(
    public currenciesFacade: CurrenciesFacade,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  public getCurrencyList(state: ClrDatagridStateInterface) {
    this.currenciesFacade.getPaginatedCurrencies(state);
    this.cdr.detectChanges();
  }

  refresh(isRefresh: boolean) {
    this.isUpdate = false;
    this.isCreate = false;
    this.isDelete = false;
    return isRefresh ? this.getCurrencyList({}) : null;
  }

  updateCurrency(currency: CurrenciesEntity) {
    this.currenciesFacade.getCurrency(currency.id);
    this.isUpdate = true;
  }

  deleteCurrency(currency: CurrenciesEntity) {
    this.currenciesFacade.getCurrency(currency.id);
    this.isDelete = true;
  }
}

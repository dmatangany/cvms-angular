import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromCurrencies from './currencies.reducer';
import * as CurrenciesSelectors from './currencies.selectors';
import * as CurrenciesActions from './currencies.actions';
import { ClrDatagridStateInterface } from '@clr/angular';
import { CurrenciesEntity } from './currencies.models';

@Injectable()
export class CurrenciesFacade {
  loaded$ = this.store.pipe(select(CurrenciesSelectors.getCurrenciesLoaded));
  allCurrencies$ = this.store.pipe(
    select(CurrenciesSelectors.getAllCurrencies)
  );
  selectedCurrency$ = this.store.pipe(
    select(CurrenciesSelectors.getSelectedCurrency)
  );
  loading$ = this.store.pipe(
    select(CurrenciesSelectors.getCurrenciesLoadingState)
  );
  totalCurrencies$ = this.store.pipe(
    select(CurrenciesSelectors.getTotalCurrencies)
  );
  btnState$ = this.store.pipe(select(CurrenciesSelectors.getBtnState));

  constructor(private store: Store<fromCurrencies.CurrenciesPartialState>) {}

  getPaginatedCurrencies(state: ClrDatagridStateInterface) {
    this.store.dispatch(CurrenciesActions.getPaginatedCurrencies({ state }));
  }

  getCurrencyByCode(currencyCode: string) {
    this.store.dispatch(CurrenciesActions.getCurrencyByCode({ currencyCode }));
  }

  getAllCurrencies() {
    this.store.dispatch(CurrenciesActions.getAllCurrencies());
  }

  getAllActiveCurrencies() {
    this.store.dispatch(CurrenciesActions.getAllActiveCurrencies());
  }

  getDefaultCurrency() {
    this.store.dispatch(CurrenciesActions.getDefaultCurrency());
  }

  getCurrency(currencyId: string | number) {
    this.store.dispatch(
      CurrenciesActions.getCurrencyById({
        currencyId,
      })
    );
  }

  createNewCurrency(currency: CurrenciesEntity) {
    this.store.dispatch(CurrenciesActions.createCurrency(currency));
  }

  updateCurrency(currency: CurrenciesEntity) {
    this.store.dispatch(CurrenciesActions.updateCurrency(currency));
  }

  deleteCurrency(currencyId: string | number) {
    this.store.dispatch(
      CurrenciesActions.deleteCurrency({
        currencyId,
      })
    );
  }
}

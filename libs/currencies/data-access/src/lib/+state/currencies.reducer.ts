import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as CurrenciesActions from './currencies.actions';
import { CurrenciesEntity } from './currencies.models';
import { ClrLoadingState } from '@clr/angular';

export const CURRENCIES_FEATURE_KEY = 'currencies';

export interface State extends EntityState<CurrenciesEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedCurrencies: CurrenciesEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface CurrenciesPartialState {
  readonly [CURRENCIES_FEATURE_KEY]: State;
}

export const currenciesAdapter: EntityAdapter<CurrenciesEntity> =
  createEntityAdapter<CurrenciesEntity>();

export const initialState: State = currenciesAdapter.getInitialState({
  loaded: false,
  loading: false,
  error: undefined,
  selectedCurrencies: undefined,
  total: 0,
  btnState: ClrLoadingState.DEFAULT,
  currentPage: 0,
});

const currenciesReducer = createReducer(
  initialState,
  on(
    CurrenciesActions.getCurrencyById,
    CurrenciesActions.getPaginatedCurrencies,
    CurrenciesActions.getDefaultCurrency,
    CurrenciesActions.getAllCurrencies,
    CurrenciesActions.getCurrencyByCode,
    CurrenciesActions.getAllActiveCurrencies,
    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(
    CurrenciesActions.getCurrencyByIdSuccess,
    CurrenciesActions.getCurrencyByCodeSuccess,
    CurrenciesActions.getDefaultCurrencySuccess,
    (state, { currency }) => ({
      ...state,
      loading: false,
      loaded: true,
      selectedCurrencies: currency,
    })
  ),

  on(
    CurrenciesActions.getAllCurrenciesSuccess,
    CurrenciesActions.getAllActiveCurrenciesSuccess,
    (state, { currencies }) =>
      currenciesAdapter.setAll(currencies, {
        ...state,
        loading: false,
        loaded: true,
      })
  ),

  on(
    CurrenciesActions.getPaginatedCurrenciesSuccess,
    (state, { currencies, total, page }) =>
      currenciesAdapter.setAll(currencies, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    CurrenciesActions.getAllCurrenciesFailure,
    CurrenciesActions.getDefaultCurrencyFailure,
    CurrenciesActions.getCurrencyByIdFailure,
    CurrenciesActions.getPaginatedCurrenciesFailure,
    CurrenciesActions.getCurrencyByCodeFailure,
    CurrenciesActions.getAllActiveCurrenciesFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    CurrenciesActions.createCurrency,
    CurrenciesActions.updateCurrency,
    CurrenciesActions.deleteCurrency,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    CurrenciesActions.createCurrencySuccess,
    CurrenciesActions.updateCurrencySuccess,
    CurrenciesActions.deleteCurrencySuccess,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: true,
      error: undefined,
    })
  ),

  on(
    CurrenciesActions.createCurrencyFailure,
    CurrenciesActions.updateCurrencyFailure,
    CurrenciesActions.deleteCurrencyFailure,
    (state, { error }) => ({
      ...state,
      error,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return currenciesReducer(state, action);
}

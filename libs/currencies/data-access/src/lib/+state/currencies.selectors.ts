import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CURRENCIES_FEATURE_KEY,
  State,
  CurrenciesPartialState,
  currenciesAdapter,
} from './currencies.reducer';

export const getCurrenciesState = createFeatureSelector<
  CurrenciesPartialState,
  State
>(CURRENCIES_FEATURE_KEY);

const { selectAll, selectEntities } = currenciesAdapter.getSelectors();

export const getCurrenciesLoaded = createSelector(
  getCurrenciesState,
  (state: State) => state.loaded
);

export const getCurrenciesError = createSelector(
  getCurrenciesState,
  (state: State) => state.error
);

export const getAllCurrencies = createSelector(
  getCurrenciesState,
  (state: State) => selectAll(state)
);

export const getCurrenciesEntities = createSelector(
  getCurrenciesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCurrenciesState,
  (state: State) => state.selectedId
);

export const getSelected = (currencyId: string | number) =>
  createSelector(getCurrenciesEntities, (entities) => entities[currencyId]);

export const getSelectedCurrency = createSelector(
  getCurrenciesState,
  (state: State) => state.selectedCurrencies
);

export const getTotalCurrencies = createSelector(
  getCurrenciesState,
  (state: State) => state.total
);

export const getCurrentPageState = createSelector(
  getCurrenciesState,
  (state: State) => state.currentPage
);

export const getCurrenciesLoadingState = createSelector(
  getCurrenciesState,
  (state: State) => state.loading
);

export const getBtnState = createSelector(
  getCurrenciesState,
  (state: State) => state.btnState
);

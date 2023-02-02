import { createAction, props } from '@ngrx/store';
import { CurrenciesEntity } from './currencies.models';
import { ClrDatagridStateInterface } from '@clr/angular';

export const getPaginatedCurrencies = createAction(
  '[Currencies] Get Paginated Currencies',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedCurrenciesSuccess = createAction(
  '[Currencies] Get Paginated Currencies Success',
  props<{
    currencies: CurrenciesEntity[];
    total: number;
    page: number;
  }>()
);

export const getPaginatedCurrenciesFailure = createAction(
  '[Currencies] Get Paginated Currencies Failure',
  props<{ error: Error }>()
);

export const createCurrency = createAction(
  '[Currencies] Create Currency',
  (currencyDetails: CurrenciesEntity) => ({
    currencyDetails,
  })
);

export const createCurrencySuccess = createAction(
  '[Currencies] Create Currency Success',
  (currencyDetails: CurrenciesEntity) => ({
    currencyDetails,
  })
);

export const createCurrencyFailure = createAction(
  '[Currencies] Create Currency Failure',
  props<{ error: Error }>()
);

export const deleteCurrency = createAction(
  '[Currencies] Delete Currency',
  props<{ currencyId: string | number }>()
);

export const deleteCurrencySuccess = createAction(
  '[Currencies] Delete Currency Success'
);

export const deleteCurrencyFailure = createAction(
  '[Currencies] Delete Currency Failure',
  props<{ error: Error }>()
);

export const updateCurrency = createAction(
  '[Currencies] Update Currency',
  (currencyDetails: CurrenciesEntity) => ({
    currencyDetails,
  })
);

export const updateCurrencySuccess = createAction(
  '[Currencies] Update Currency Success',
  (currencyDetails: CurrenciesEntity) => ({
    currencyDetails,
  })
);

export const updateCurrencyFailure = createAction(
  '[Currencies] Update Currency Failure',
  props<{ error: Error }>()
);

export const getCurrencyById = createAction(
  '[Currencies] Get Currency',
  props<{ currencyId: string | number }>()
);

export const getCurrencyByIdSuccess = createAction(
  '[Currencies] Get Currency Success',
  props<{ currency: CurrenciesEntity }>()
);

export const getCurrencyByIdFailure = createAction(
  '[Currencies] Get Currency Failure',
  props<{ error: any }>()
);

export const getAllCurrencies = createAction('[Currencies] Get All Currencies');

export const getAllCurrenciesSuccess = createAction(
  '[Currencies] Get All Currencies Success',
  props<{
    currencies: CurrenciesEntity[];
  }>()
);

export const getAllCurrenciesFailure = createAction(
  '[Currencies] Get All Currencies Failure',
  props<{ error: Error }>()
);

export const getCurrencyByCode = createAction(
  '[Currencies] Get Currency By Code',
  props<{ currencyCode: string }>()
);

export const getCurrencyByCodeSuccess = createAction(
  '[Currencies] Get Currency By Code Success',
  props<{ currency: CurrenciesEntity }>()
);

export const getCurrencyByCodeFailure = createAction(
  '[Currencies] Get Currency By Code Failure',
  props<{ error: any }>()
);

export const getDefaultCurrency = createAction(
  '[Currencies] Get Default Currency'
);

export const getDefaultCurrencySuccess = createAction(
  '[Currencies] Get Default Currency Success',
  props<{ currency: CurrenciesEntity }>()
);

export const getDefaultCurrencyFailure = createAction(
  '[Currencies] Get Default Currency Failure',
  props<{ error: any }>()
);

export const getAllActiveCurrencies = createAction(
  '[Currencies] Get All Active Currencies'
);

export const getAllActiveCurrenciesSuccess = createAction(
  '[Currencies] Get All Active Currencies Success',
  props<{
    currencies: CurrenciesEntity[];
  }>()
);

export const getAllActiveCurrenciesFailure = createAction(
  '[Currencies] Get All Active Currencies Failure',
  props<{ error: Error }>()
);

import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { ApiService, Page } from '@membership-application/shared/data-access';

import { CurrenciesEntity } from '../+state/currencies.models';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  constructor(private apiService: ApiService) {}

  getPaginatedCurrencies(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<CurrenciesEntity>>(
      `/v1/currencies`,
      httpParams
    );
  }

  createCurrency(currency: CurrenciesEntity) {
    return this.apiService.post<CurrenciesEntity>(`/v1/currencies`, currency);
  }

  deleteCurrency(currencyId: string | number) {
    return this.apiService.delete<CurrenciesEntity>(
      `/v1/currencies/${currencyId}`
    );
  }

  updateCurrency(currency: CurrenciesEntity) {
    return this.apiService.put<CurrenciesEntity>(
      `/v1/currencies/${currency.id}`,
      currency
    );
  }

  getCurrencyById(currencyId: string | number) {
    return this.apiService.get<CurrenciesEntity>(
      `/cmn/v1/currencies/${currencyId}`
    );
  }

  getAllCurrencies() {
    return this.apiService.get<CurrenciesEntity[]>(`/v1/currencies/all`);
  }

  getCurrencyByCode(currencyCode: string) {
    return this.apiService.get<CurrenciesEntity>(
      `/cmn/v1/currencies/by-code`,
      new HttpParams().set('currencyCode', currencyCode)
    );
  }

  getDefaultCurrency() {
    return this.apiService.get<CurrenciesEntity>(
      `/cmn/v1/currencies/default-currency`
    );
  }

  getAllActiveCurrencies() {
    return this.apiService.get<CurrenciesEntity[]>(`/v1/currencies/all-active`);
  }
}

import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@membership-application/shared/data-access';
import { AccountTransactionsEntity } from '../+state/account-transactions.models';

@Injectable({
  providedIn: 'root',
})
export class AccountTransationsService {
  constructor(private http: ApiService) {}

  getAccountTransactionById(accountTransactionId: string | number) {
    return this.http.get<AccountTransactionsEntity>(
      `/v1/account-payment-transaction/${accountTransactionId}`
    );
  }

  getPaginatedAccountTransactions(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.http.get<any>(`/v1/account-payment-transactions`, httpParams);
  }

  getMyPaginatedAccountTransactions(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.http.get<any>(
      `/v1/members/account-payment-transactions`,
      httpParams
    );
  }

  getAccountTransactionsReport(reportContext: any) {
    const httpParams = new HttpParams()
      .set('fromDate', reportContext.fromDate)
      .set('toDate', reportContext.toDate)
      .set('paymentStatus', reportContext.status)
      .set('reportType', reportContext.reportType);

    return this.http.getFile<any>(
      `/v1/reports/account-transactions`,
      httpParams
    );
  }
}

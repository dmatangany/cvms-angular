import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@membership-application/shared/data-access';
import { PaymentTransactionsEntity } from '../+state/payment-transactions.models';

@Injectable({
  providedIn: 'root',
})
export class PaymentTransactionsService {
  constructor(private http: ApiService) {}

  getPaymentTransactionById(paymentTransactionId: string | number) {
    return this.http.get<PaymentTransactionsEntity>(
      `/v1/payment-transaction/${paymentTransactionId}`
    );
  }

  getPaginatedPaymentTransactions(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.http.get<any>(`/v1/payment-transactions`, httpParams);
  }

  getMyPaginatedPaymentTransactions(memberId: any, filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.http.get<any>(
      `/v1/members/${memberId}/payment-transactions`,
      httpParams
    );
  }

  walkInLoadAccount(loadAccountContext: any) {
    return this.http.post<any>(
      `/v1/member-accounts/walk-in-load-account`,
      loadAccountContext
    );
  }

  loadAccount(loadAccountContext: any) {
    return this.http.post<any>(
      `/v1/member-accounts/load-account`,
      loadAccountContext
    );
  }

  getPaymentTransactionsReport(reportContext: any) {
    const httpParams = new HttpParams()
      .set('fromDate', reportContext.fromDate)
      .set('toDate', reportContext.toDate)
      .set('paymentStatus', reportContext.status)
      .set('reportType', reportContext.reportType);

    return this.http.getFile<any>(
      `/v1/reports/payment-transactions`,
      httpParams
    );
  }
}

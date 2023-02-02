import { DashboardEntity } from './../+state/dashboard.models';
import { ApiService } from '@membership-application/shared/data-access';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: ApiService) {}

  getDashBoardDetails() {
    return this.http.get<DashboardEntity>(`/v1/dashboard/admin`);
  }

  /*getMyPaginatedPaymentTransactions() {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.http.get<DashboardEntity>(
      `/v1/members/${memberId}/payment-transactions`,
      httpParams
    );
  }*/
}

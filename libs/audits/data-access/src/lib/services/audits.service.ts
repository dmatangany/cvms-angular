import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Page, ApiService } from '@membership-application/shared/data-access';

import { AuditsEntity } from '../+state/audits.models';

@Injectable({
  providedIn: 'root',
})
export class AuditsService {
  constructor(private apiService: ApiService) {}

  getPaginatedAudits(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<AuditsEntity>>(`/v1/audits`, httpParams);
  }

  getClientPaginatedAudits(fromDate: string, filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters }).append(
      'fromDate',
      fromDate
    );
    return this.apiService.get<Page<AuditsEntity>>(
      `/v1/my-audits/period`,
      httpParams
    );
  }

  getAuditById(auditId: string | number) {
    return this.apiService.get<AuditsEntity>(`/v1/audits/${auditId}`);
  }

  getPaginatedAuditsByPerformerForPeriod(
    fromDate: string,
    username: string,
    filters?: any
  ) {
    const httpParams = new HttpParams({ fromObject: filters })
      .append('fromDate', fromDate)
      .append('username', username);
    return this.apiService.get<Page<AuditsEntity>>(
      `/v1/audits/by-performer/period`,
      httpParams
    );
  }
}

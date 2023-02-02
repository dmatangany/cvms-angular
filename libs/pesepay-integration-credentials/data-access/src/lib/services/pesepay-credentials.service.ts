import { ApiService, Page } from '@membership-application/shared/data-access';

import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { CredentialsEntity } from '../+state/credentials.models';

@Injectable({
  providedIn: 'root',
})
export class PesepayCredentialsService {
  constructor(private apiService: ApiService) {}
  getPaginatedCredentials(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<CredentialsEntity>>(
      `/v1/pesepay-integration-credentials`,
      httpParams
    );
  }

  createCredential(credentialDetails: CredentialsEntity) {
    return this.apiService.post<CredentialsEntity>(
      `/v1/pesepay-integration-credentials`,
      credentialDetails
    );
  }

  getCredential(credentialId: string | number) {
    return this.apiService.get<CredentialsEntity>(
      `/v1/pesepay-integration-credentials/${credentialId}`
    );
  }

  updateCredential(credentialDetails: CredentialsEntity) {
    return this.apiService.put<CredentialsEntity>(
      `/v1/pesepay-integration-credentials/${credentialDetails.id}`,
      credentialDetails
    );
  }

  deleteCredential(credentialId: string | number) {
    return this.apiService.delete(
      `/v1/pesepay-integration-credentials/${credentialId}`
    );
  }

  getAllCredentials() {
    return this.apiService.get<CredentialsEntity[]>(
      `/v1/pesepay-integration-credentials/all`
    );
  }
}

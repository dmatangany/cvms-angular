import { Injectable } from '@angular/core';
import { CreateUserContext, UsersEntity } from '../+state/users.models';

import { ApiService, Page } from '@membership-application/shared/data-access';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private apiService: ApiService) {}

  createUser(user: CreateUserContext) {
    return this.apiService.post<UsersEntity>(`/v1/users`, user);
  }

  createMemberUser(user: CreateUserContext, filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY3NTMzNTg1NCwiaWF0IjoxNjc1MjQ5NDU0LCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiVVBEQVRFX0NBVEVHT1JZIn0seyJhdXRob3JpdHkiOiJSRUFEX09SR0FOSVpBVElPTl9BVURJVFMifSx7ImF1dGhvcml0eSI6IlVQREFURV9NRU1CRVIifSx7ImF1dGhvcml0eSI6IkNSRUFURV9VU0VSIn0seyJhdXRob3JpdHkiOiJVUERBVEVfRVZFTlRfUEFDS0FHRSJ9LHsiYXV0aG9yaXR5IjoiREVMRVRFX0VWRU5UX1BBQ0tBR0UifSx7ImF1dGhvcml0eSI6IkNSRUFURV9NRU1CRVJfVFlQRSJ9LHsiYXV0aG9yaXR5IjoiQ1JFQVRFX1VTRVJfQVVUSE9SSVRZIn0seyJhdXRob3JpdHkiOiJVUERBVEVfTUVNQkVSX0FUVFJJQlVURSJ9LHsiYXV0aG9yaXR5IjoiQ1JFQVRFX01FTUJFUl9BVFRSSUJVVEUifSx7ImF1dGhvcml0eSI6IlVQREFURV9FVkVOVCJ9LHsiYXV0aG9yaXR5IjoiVVBEQVRFX01FTUJFUl9UWVBFIn0seyJhdXRob3JpdHkiOiJDUkVBVEVfTUVNQkVSIn0seyJhdXRob3JpdHkiOiJDUkVBVEVfR1JPVVAifSx7ImF1dGhvcml0eSI6IlVQREFURV9HUk9VUCJ9LHsiYXV0aG9yaXR5IjoiQ1JFQVRFX0VWRU5UIn0seyJhdXRob3JpdHkiOiJSRUFEX1VTRVJfQVVESVRTIn0seyJhdXRob3JpdHkiOiJERUxFVEVfTUVNQkVSIn0seyJhdXRob3JpdHkiOiJDUkVBVEVfQ0FURUdPUlkifSx7ImF1dGhvcml0eSI6IlVQREFURV9VU0VSIn0seyJhdXRob3JpdHkiOiJERUxFVEVfQ0FURUdPUlkifSx7ImF1dGhvcml0eSI6IlJFQURfR0VORVJBTF9BVURJVFMifSx7ImF1dGhvcml0eSI6IkRFTEVURV9NRU1CRVJfQVRUUklCVVRFIn0seyJhdXRob3JpdHkiOiJERUxFVEVfVVNFUl9BVVRIT1JJVFkifSx7ImF1dGhvcml0eSI6IkNSRUFURV9HUk9VUF9VU0VSIn0seyJhdXRob3JpdHkiOiJMT0NLX1VTRVIifSx7ImF1dGhvcml0eSI6IkRFTEVURV9FVkVOVCJ9LHsiYXV0aG9yaXR5IjoiUkVBRF9BVURJVCJ9LHsiYXV0aG9yaXR5IjoiREVMRVRFX01FTUJFUl9UWVBFIn0seyJhdXRob3JpdHkiOiJDUkVBVEVfTUVNQkVSU0hJUF9QQUNLQUdFIn0seyJhdXRob3JpdHkiOiJVUERBVEVfTUVNQkVSU0hJUF9QQUNLQUdFIn0seyJhdXRob3JpdHkiOiJERUxFVEVfTUVNQkVSU0hJUF9QQUNLQUdFIn0seyJhdXRob3JpdHkiOiJDUkVBVEVfRVZFTlRfUEFDS0FHRSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LHsiYXV0aG9yaXR5IjoiREVMRVRFX0dST1VQX0FVVEhPUklUWSJ9LHsiYXV0aG9yaXR5IjoiRElTQUJMRV9VU0VSIn0seyJhdXRob3JpdHkiOiJDUkVBVEVfR1JPVVBfQVVUSE9SSVRZIn1dfQ.6ncKgtKVmLWf4DN-dKbC0gru7y-srzbXaeIQkDU7KGEWxaUPtmwEBWDDvRV4NYUNFG8xTVCZnS6RiEt1u5zcAg'
    });
    return this.apiService.post<UsersEntity>(`/authenticate/admin-token`, user);
  }
  getUserProfile() {
    return this.apiService.get<UsersEntity>(`/v1/users/profile`);
  }

  getUserById(userId: any) {
    return this.apiService.get<UsersEntity>(`/v1/users/${userId}`);
  }

  getMemberUserByGroupId(groupId: any) {
    return this.apiService.get<UsersEntity>(`/v1/users/group/${groupId}`);
  }

  getClientUserProfile() {
    return this.apiService.get<any>(`/client/v1/users/profile`);
  }

  changeUserStatus(context: any) {
    const http = new HttpParams().set('status', context.status);
    return this.apiService.patch<UsersEntity>(
      `/v1/users/${context.userId}`,
      {},
      http
    );
  }

  updateMyAccount(updateContext: any) {
    return this.apiService.put<any>('/v1/accounts/my-account', updateContext);
  }

  getAllUsers() {
    return this.apiService.get<UsersEntity[]>(`/v1/Users/all`);
  }

  getPaginatedUsers(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<UsersEntity>>(`/v1/users`, httpParams);
  }

  getPaginatedUsersByGroup(groupId: any, filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<UsersEntity>>(
      `/v1/users/group/${groupId}`,
      httpParams
    );
  }

  updateUser(updateUserContext: any) {
    return this.apiService.put<any>(
      '/v1/accounts/my-account',
      updateUserContext
    );
  }
}

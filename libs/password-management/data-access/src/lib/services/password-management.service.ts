import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@membership-application/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class PasswordManagementService {
  constructor(private apiService: ApiService) {}

  forgotPassword(forgotPasswordDetails: any) {
    return this.apiService.post(
      `/v1/users/forgot-password`,
      forgotPasswordDetails
    );
  }

  resetPassword(resetPasswordDetails: any) {
    return this.apiService.post(
      `/v1/users/reset-password`,
      resetPasswordDetails
    );
  }

  updatePassword(updatePasswordDetails: any) {
    return this.apiService.post(
      `/v1/users/update-password`,
      updatePasswordDetails
    );
  }
}

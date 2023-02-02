import { PasswordManagementDataAccessModule } from '@membership-application/password-management/data-access';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { AuthDataAccessModule } from '@membership-application/auth/data-access';
import { AuthUiModule } from '@membership-application/auth/ui';

import { LoginFeatureComponent } from './login-feature/login-feature.component';
import { ForgotPasswordFeatureComponent } from './forgot-password-feature/forgot-password-feature.component';
import { ResetPasswordFeatureComponent } from './reset-password-feature/reset-password-feature.component';
import { PasswordManagementUiModule } from '@membership-application/password-management/ui';

export const adminFeatureAuthRoutes: Route[] = [
  { path: 'login', component: LoginFeatureComponent },
  { path: 'forgot-password', component: ForgotPasswordFeatureComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminFeatureAuthRoutes),
    AuthUiModule,
    AuthDataAccessModule,
    PasswordManagementUiModule,
    PasswordManagementDataAccessModule,
  ],
  declarations: [
    LoginFeatureComponent,
    ForgotPasswordFeatureComponent,
    ResetPasswordFeatureComponent,
  ],
})
export class AdminFeatureAuthModule {}

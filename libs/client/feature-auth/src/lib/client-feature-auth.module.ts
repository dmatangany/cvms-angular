import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDataAccessModule } from '@membership-application/auth/data-access';
import { AuthUiModule } from '@membership-application/auth/ui';
import { ClarityModule } from '@clr/angular';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { PasswordManagementUiModule } from '@membership-application/password-management/ui';
import { PasswordManagementDataAccessModule } from '@membership-application/password-management/data-access';
import { WalkInLoadAccountComponent } from './walk-in-load-account/walk-in-load-account.component';
import { TransactionsUiModule } from '@membership-application/transactions/ui';
import { PaymentTransactionsDataAccessModule } from '@membership-application/payment-transactions/data-access';
import { UsersDataAccessModule } from '@membership-application/users/data-access';
import { PaymentTransactionsUiModule } from '@membership-application/payment-transactions/ui';
import { CurrenciesDataAccessModule } from '@membership-application/currencies/data-access';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { FeatureRegistrationComponent } from './feature-registration/feature-registration.component';

@NgModule({
  imports: [
    CommonModule,
    AuthDataAccessModule,
    AuthUiModule,
    ClarityModule,
    PasswordManagementDataAccessModule,
    PasswordManagementUiModule,
    PaymentTransactionsDataAccessModule,
    PaymentTransactionsUiModule,
    CurrenciesDataAccessModule,
    UsersDataAccessModule,
    TransactionsUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthContainerComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'forgot-password', component: ForgotPasswordComponent },
          { path: 'register', component: FeatureRegistrationComponent },
        ],
      },
      { path: 'register', component: FeatureRegistrationComponent },
    ]),
  ],
  declarations: [
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LoginComponent,
    WalkInLoadAccountComponent,
    AuthContainerComponent,
    FeatureRegistrationComponent,
  ],
})
export class ClientFeatureAuthModule {}

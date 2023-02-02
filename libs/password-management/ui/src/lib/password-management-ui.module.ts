import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { UpdatePasswordFormComponent } from './update-password-form/update-password-form.component';
import { SharedUiModule } from '@membership-application/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    SharedUiModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent,
    UpdatePasswordFormComponent,
  ],
  exports: [
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent,
    UpdatePasswordFormComponent,
  ],
})
export class PasswordManagementUiModule {}

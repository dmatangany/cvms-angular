import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';

import { SharedUiModule } from '@membership-application/shared/ui';

import { AdminLoginFormComponent } from './admin-login-form/admin-login-form.component';
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedUiModule,
  ],
  declarations: [
    AdminLoginFormComponent,
    ClientLoginFormComponent,
    RegistrationFormComponent,
  ],
  exports: [
    AdminLoginFormComponent,
    ClientLoginFormComponent,
    RegistrationFormComponent,
  ],
})
export class AuthUiModule {}

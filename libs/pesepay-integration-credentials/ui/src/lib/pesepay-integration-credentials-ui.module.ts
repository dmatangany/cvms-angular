import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { PesepayCredentialsFormComponent } from './pesepay-credentials-form/pesepay-credentials-form.component';
import { PesepayCredentialsDetailsComponent } from './pesepay-credentials-details/pesepay-credentials-details.component';
import { ListCredentialsComponent } from './list-credentials/list-credentials.component';

@NgModule({
  imports: [CommonModule, ClarityModule, ReactiveFormsModule],
  declarations: [
    PesepayCredentialsFormComponent,
    PesepayCredentialsDetailsComponent,
    ListCredentialsComponent,
  ],
  exports: [
    PesepayCredentialsFormComponent,
    PesepayCredentialsDetailsComponent,
    ListCredentialsComponent,
  ],
})
export class PesepayIntegrationCredentialsUiModule {}

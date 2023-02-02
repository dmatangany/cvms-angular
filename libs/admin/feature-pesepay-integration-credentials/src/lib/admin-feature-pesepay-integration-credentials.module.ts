import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { PesepayIntegrationCredentialsDataAccessModule } from '@membership-application/pesepay-integration-credentials/data-access';
import { PesepayIntegrationCredentialsUiModule } from '@membership-application/pesepay-integration-credentials/ui';

import { ViewCredentialsComponent } from './view-credentials/view-credentials.component';
import { UpdateCredentialsComponent } from './update-credentials/update-credentials.component';
import { CreatePesepayCredentialsComponent } from './create-pesepay-credentials/create-pesepay-credentials.component';
import { ListPesepayCredentialsComponent } from './list-pesepay-credentials/list-pesepay-credentials.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ListPesepayCredentialsComponent },
    ]),
    ClarityModule,
    PesepayIntegrationCredentialsDataAccessModule,
    PesepayIntegrationCredentialsUiModule,
  ],
  declarations: [
    ViewCredentialsComponent,
    UpdateCredentialsComponent,
    CreatePesepayCredentialsComponent,
    ListPesepayCredentialsComponent,
  ],
})
export class AdminFeaturePesepayIntegrationCredentialsModule {}

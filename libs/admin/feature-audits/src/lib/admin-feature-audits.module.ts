import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAuditsComponent } from './list-audits/list-audits.component';
import { AuditsUiModule } from '@membership-application/audits/ui';
import { AuditsDataAccessModule } from '@membership-application/audits/data-access';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    AuditsDataAccessModule,
    AuditsUiModule,
    RouterModule.forChild([{ path: '', component: ListAuditsComponent }]),
  ],
  declarations: [ListAuditsComponent],
})
export class AdminFeatureAuditsModule {}

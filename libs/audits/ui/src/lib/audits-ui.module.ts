import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuditsListUiComponent } from './audits-list-ui/audits-list-ui.component';
import { AuditDetailsComponent } from './audit-details/audit-details.component';

@NgModule({
  imports: [CommonModule, ClarityModule, ReactiveFormsModule],
  declarations: [AuditsListUiComponent, AuditDetailsComponent],
  exports: [AuditsListUiComponent, AuditDetailsComponent],
})
export class AuditsUiModule {}

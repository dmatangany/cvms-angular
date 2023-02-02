import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsFormComponent } from './reports-form/reports-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ClarityModule, ReactiveFormsModule],
  declarations: [ReportsFormComponent],
  exports: [ReportsFormComponent],
})
export class ReportsUiModule {}

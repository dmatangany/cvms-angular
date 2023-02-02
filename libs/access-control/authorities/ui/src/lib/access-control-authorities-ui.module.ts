import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthoritiesFormComponent } from './authorities-form/authorities-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ClarityModule, ReactiveFormsModule],
  declarations: [AuthoritiesFormComponent],
  exports: [AuthoritiesFormComponent],
})
export class AccessControlAuthoritiesUiModule {}

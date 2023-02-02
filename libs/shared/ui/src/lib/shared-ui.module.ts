import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { ActionConfirmationFormComponent } from './action-confirmation-form/action-confirmation-form.component';

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [ActionConfirmationFormComponent],
  exports: [ActionConfirmationFormComponent],
})
export class SharedUiModule {}

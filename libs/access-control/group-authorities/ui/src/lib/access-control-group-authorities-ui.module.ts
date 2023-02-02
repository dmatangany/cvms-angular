import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { GroupAuthoritiesFormComponent } from './group-authorities-form/group-authorities-form.component';
import { GroupAuthoritiesListUiComponent } from './group-authorities-list-ui/group-authorities-list-ui.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ClarityModule],
  declarations: [
    GroupAuthoritiesFormComponent,
    GroupAuthoritiesListUiComponent,
  ],
  exports: [GroupAuthoritiesFormComponent, GroupAuthoritiesListUiComponent],
})
export class AccessControlGroupAuthoritiesUiModule {}

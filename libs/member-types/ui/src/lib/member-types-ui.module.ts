import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { MemberTypeFormComponent } from './member-type-form/member-type-form.component';
import { MemberTypeDetailsComponent } from './member-type-details/member-type-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberTypesListUiComponent } from './member-types-list-ui/member-types-list-ui.component';

@NgModule({
  imports: [CommonModule, ClarityModule, ReactiveFormsModule],
  declarations: [
    MemberTypeDetailsComponent,
    MemberTypeFormComponent,
    MemberTypesListUiComponent,
  ],
  exports: [
    MemberTypeDetailsComponent,
    MemberTypeFormComponent,
    MemberTypesListUiComponent,
  ],
})
export class MemberTypesUiModule {}

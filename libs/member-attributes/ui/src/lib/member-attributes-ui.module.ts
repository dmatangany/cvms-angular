import { MemberAttributesFormComponent } from './member-attributes-form/member-attributes-form.component';
import { MemberAttributesListUiComponent } from './member-attributes-list-ui/member-attributes-list-ui.component';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ClarityModule, ReactiveFormsModule],
  declarations: [
    MemberAttributesListUiComponent,
    MemberAttributesFormComponent,
  ],
  exports: [MemberAttributesListUiComponent, MemberAttributesFormComponent],
})
export class MemberAttributesUiModule {}

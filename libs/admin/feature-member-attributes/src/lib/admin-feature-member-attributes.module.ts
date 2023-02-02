import { RouterModule } from '@angular/router';
import { UpdateAttributeComponent } from './update-attribute/update-attribute.component';
import { ListAttributesComponent } from './list-attributes/list-attributes.component';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberAttributesUiModule } from '@membership-application/member-attributes/ui';
import { CreateAttributeComponent } from './create-attribute/create-attribute.component';
import { DeleteAttributeComponent } from './delete-attribute/delete-attribute.component';
import { SharedUiModule } from '@membership-application/shared/ui';
import { MemberAttributesDataAccessModule } from '@membership-application/member-attributes/data-access';
import { MemberTypesDataAccessModule } from '@membership-application/member-types/data-access';

@NgModule({
  imports: [
    CommonModule,
    MemberAttributesDataAccessModule,
    MemberAttributesUiModule,
    MemberTypesDataAccessModule,
    ClarityModule,
    SharedUiModule,
  ],
  declarations: [
    CreateAttributeComponent,
    DeleteAttributeComponent,
    ListAttributesComponent,
    UpdateAttributeComponent,
  ],
  exports: [
    CreateAttributeComponent,
    DeleteAttributeComponent,
    ListAttributesComponent,
    UpdateAttributeComponent,
  ],
})
export class AdminFeatureMemberAttributesModule {}

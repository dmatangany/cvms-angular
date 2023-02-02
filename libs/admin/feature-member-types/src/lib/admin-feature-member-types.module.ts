import { AdminFeatureMemberAttributesModule } from './../../../feature-member-attributes/src/lib/admin-feature-member-attributes.module';
import { MemberAttributesDataAccessModule } from '@membership-application/member-attributes/data-access';
import { RouterModule } from '@angular/router';
import { DeleteMemberTypeComponent } from './delete-member-type/delete-member-type.component';
import { CreateMemberTypeComponent } from './create-member-type/create-member-type.component';

import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberTypesUiModule } from '@membership-application/member-types/ui';
import { MemberTypesDataAccessModule } from '@membership-application/member-types/data-access';
import { ListMemberTypesComponent } from './list-member-types/list-member-types.component';
import { UpdateMemberTypeComponent } from './update-member-type/update-member-type.component';
import { ViewMemberTypeComponent } from './view-member-type/view-member-type.component';
import { SharedUiModule } from '@membership-application/shared/ui';
import { AddMemberAttributeComponent } from './add-member-attribute/add-member-attribute.component';
import { MemberAttributesUiModule } from '@membership-application/member-attributes/ui';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    MemberTypesDataAccessModule,
    MemberTypesUiModule,
    MemberAttributesDataAccessModule,
    MemberAttributesUiModule,
    AdminFeatureMemberAttributesModule,
    SharedUiModule,
    RouterModule.forChild([
      { path: '', component: ListMemberTypesComponent },
      { path: 'details/:memberTypeId', component: ViewMemberTypeComponent },
    ]),
  ],
  declarations: [
    CreateMemberTypeComponent,
    DeleteMemberTypeComponent,
    ListMemberTypesComponent,
    UpdateMemberTypeComponent,
    ViewMemberTypeComponent,
    AddMemberAttributeComponent,
  ],
})
export class AdminFeatureMemberTypesModule {}

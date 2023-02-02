import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersDataAccessModule } from '@membership-application/users/data-access';
import { MemberProfilesDataAccessModule } from '@membership-application/member-profiles/data-access';
import { MemberPackagesDataAccessModule } from '@membership-application/member-packages/data-access';
import { MemberAttributesDataAccessModule } from '@membership-application/member-attributes/data-access';
import { MemberTypesDataAccessModule } from '@membership-application/member-types/data-access';
import {
  ClientFeatureMemberUserProfileModule
} from "../../../feature-member-user-profile/src/lib/client-feature-member-user-profile.module";

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    UsersDataAccessModule,
    MemberProfilesDataAccessModule,
    MemberPackagesDataAccessModule,
    MemberAttributesDataAccessModule,
    MemberTypesDataAccessModule,
    RouterModule.forChild([{path: '', component: DashboardComponent}]),
    ClientFeatureMemberUserProfileModule,
  ],
  declarations: [DashboardComponent],
})
export class ClientFeatureDashboardModule {}

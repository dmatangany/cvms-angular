import { FormsModule } from '@angular/forms';
import { MemberTypesDataAccessModule } from '@membership-application/member-types/data-access';
import { ClarityModule } from '@clr/angular';
import { MemberAttributesDataAccessModule } from '@membership-application/member-attributes/data-access';
import { ViewMemberProfileComponent } from './view-member-profile/view-member-profile.component';
import { UpdateMemberProfileComponent } from './update-member-profile/update-member-profile.component';
import { MemberProfilesListComponent } from './member-profiles-list/member-profiles-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberProfilesDataAccessModule } from '@membership-application/member-profiles/data-access';
import { MemberProfilesUiModule } from '@membership-application/member-profiles/ui';
import { CreateMemberProfileComponent } from './create-member-profile/create-member-profile.component';
import { DeleteMemberProfileComponent } from './delete-member-profile/delete-member-profile.component';
import { SharedUiModule } from '@membership-application/shared/ui';
import { UsersDataAccessModule } from '@membership-application/users/data-access';
import { MemberProfilesContainerComponent } from './member-profiles-container/member-profiles-container.component';
import { ListMemberProfilesByGroupComponent } from './list-member-profiles-by-group/list-member-profiles-by-group.component';
import { MemberPackagesDataAccessModule } from '@membership-application/member-packages/data-access';
import { SubscriptionsDataAccessModule } from '@membership-application/subscriptions/data-access';
import { SubscriptionsUiModule } from '@membership-application/subscriptions/ui';
@NgModule({
  imports: [
    CommonModule,
	FormsModule,
	ClarityModule,
    MemberProfilesDataAccessModule,
    MemberProfilesUiModule,
    MemberAttributesDataAccessModule,
    MemberTypesDataAccessModule,
    UsersDataAccessModule,
	MemberPackagesDataAccessModule,
	SubscriptionsDataAccessModule,
	SubscriptionsUiModule,
    SharedUiModule,
    ClarityModule,
    RouterModule.forChild([
      { path: '', component: MemberProfilesContainerComponent },
      { path: 'update/:profileId', component: UpdateMemberProfileComponent },
      { path: 'create', component: CreateMemberProfileComponent },
      { path: 'view-more/:profileId', component: ViewMemberProfileComponent },
    ]),
  ],

  declarations: [
    CreateMemberProfileComponent,
    DeleteMemberProfileComponent,
    MemberProfilesListComponent,
    UpdateMemberProfileComponent,
    ViewMemberProfileComponent,
	MemberProfilesContainerComponent,
	ListMemberProfilesByGroupComponent,
  ],
})
export class AdminFeatureMemberProfileModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMemberUserProfileComponent } from './feature-member-user-profile/my-member-user-profile.component';
import { MemberProfilesDataAccessModule } from '@membership-application/member-profiles/data-access';
import { MemberProfilesUiModule } from '@membership-application/member-profiles/ui';

@NgModule({
  imports: [CommonModule,MemberProfilesDataAccessModule,MemberProfilesUiModule],
  declarations: [MyMemberUserProfileComponent],
  exports: [MyMemberUserProfileComponent],
})
export class ClientFeatureMemberUserProfileModule {}

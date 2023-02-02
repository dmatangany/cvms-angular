import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMemberProfileComponent } from './my-member-profile/my-member-profile.component';
import { MemberProfilesDataAccessModule } from '@membership-application/member-profiles/data-access';
import { MemberProfilesUiModule } from '@membership-application/member-profiles/ui';

@NgModule({
  imports: [CommonModule,MemberProfilesDataAccessModule,MemberProfilesUiModule],
  declarations: [MyMemberProfileComponent],
  exports: [MyMemberProfileComponent],
})
export class ClientFeatureMemberProfileModule {}

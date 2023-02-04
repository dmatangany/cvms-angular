import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { MemberProfilesDetailsComponent } from './member-profiles-details/member-profiles-details.component';
import { MemberProfileFormComponent } from './member-profile-form/member-profile-form.component';
import { MemberApprovalsFormComponent } from './member-approvals-form/member-approvals-form.component';
import { MemberSelfProfileFormComponent } from './member-self-profile-form/member-self-profile-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailsFormComponent } from './emails-form/emails-form.component';
import { MemberProfilesListUiComponent } from './member-profiles-list-ui/member-profiles-list-ui.component';
import { PhoneNumberFormComponent } from './phone-number-form/phone-number-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileManagerModule } from '@membership-application/file-manager';
import { FilterPipe } from './filter/filter.pipe';
@NgModule({
  imports: [
    CommonModule,
	FormsModule,
    ClarityModule,
    ReactiveFormsModule,
    RouterModule,
    FileManagerModule,
  ],
  declarations: [
    EmailsFormComponent,
    MemberProfileFormComponent,
    MemberSelfProfileFormComponent,
    MemberProfilesDetailsComponent,
    MemberProfilesListUiComponent,
    MemberApprovalsFormComponent,
    PhoneNumberFormComponent,
	FilterPipe,
  ],
  exports: [
    EmailsFormComponent,
    MemberProfileFormComponent,
    MemberSelfProfileFormComponent,
    MemberProfilesDetailsComponent,
    MemberProfilesListUiComponent,
    MemberApprovalsFormComponent,
    PhoneNumberFormComponent,
  ],
})
export class MemberProfilesUiModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMemberProfiles from './+state/member-profiles.reducer';
import { MemberProfilesEffects } from './+state/member-profiles.effects';
import { MemberProfilesFacade } from './+state/member-profiles.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMemberProfiles.MEMBER_PROFILES_FEATURE_KEY,
      fromMemberProfiles.memberProfilesReducer
    ),
    EffectsModule.forFeature([MemberProfilesEffects]),
  ],
  providers: [MemberProfilesFacade],
})
export class MemberProfilesDataAccessModule {}

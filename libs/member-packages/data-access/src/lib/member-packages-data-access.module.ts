import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMemberPackages from './+state/member-packages.reducer';
import { MemberPackagesEffects } from './+state/member-packages.effects';
import { MemberPackagesFacade } from './+state/member-packages.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMemberPackages.MEMBER_PACKAGES_FEATURE_KEY,
      fromMemberPackages.memberPackagesReducer
    ),
    EffectsModule.forFeature([MemberPackagesEffects]),
  ],
  providers: [MemberPackagesFacade],
})
export class MemberPackagesDataAccessModule {}

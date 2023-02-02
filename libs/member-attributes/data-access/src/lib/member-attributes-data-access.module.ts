import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMemberAttributes from './+state/member-attributes.reducer';
import { MemberAttributesEffects } from './+state/member-attributes.effects';
import { MemberAttributesFacade } from './+state/member-attributes.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMemberAttributes.MEMBER_ATTRIBUTES_FEATURE_KEY,
      fromMemberAttributes.memberAttributesReducer
    ),
    EffectsModule.forFeature([MemberAttributesEffects]),
  ],
  providers: [MemberAttributesFacade],
})
export class MemberAttributesDataAccessModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMemberTypes from './+state/member-types.reducer';
import { MemberTypesEffects } from './+state/member-types.effects';
import { MemberTypesFacade } from './+state/member-types.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMemberTypes.MEMBER_TYPES_FEATURE_KEY,
      fromMemberTypes.memberTypesReducer
    ),
    EffectsModule.forFeature([MemberTypesEffects]),
  ],
  providers: [MemberTypesFacade],
})
export class MemberTypesDataAccessModule {}

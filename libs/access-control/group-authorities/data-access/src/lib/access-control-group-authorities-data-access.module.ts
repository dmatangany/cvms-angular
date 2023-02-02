import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGroupAuthorities from './+state/group-authorities.reducer';
import { GroupAuthoritiesEffects } from './+state/group-authorities.effects';
import { GroupAuthoritiesFacade } from './+state/group-authorities.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromGroupAuthorities.GROUP_AUTHORITIES_FEATURE_KEY,
      fromGroupAuthorities.reducer
    ),
    EffectsModule.forFeature([GroupAuthoritiesEffects]),
  ],
  providers: [GroupAuthoritiesFacade],
})
export class AccessControlGroupAuthoritiesDataAccessModule {}

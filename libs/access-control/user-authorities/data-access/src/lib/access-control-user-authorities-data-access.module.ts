import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUserAuthorities from './+state/user-authorities.reducer';
import { UserAuthoritiesEffects } from './+state/user-authorities.effects';
import { UserAuthoritiesFacade } from './+state/user-authorities.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromUserAuthorities.USER_AUTHORITIES_FEATURE_KEY,
      fromUserAuthorities.reducer
    ),
    EffectsModule.forFeature([UserAuthoritiesEffects]),
  ],
  providers: [UserAuthoritiesFacade],
})
export class AccessControlUserAuthoritiesDataAccessModule {}

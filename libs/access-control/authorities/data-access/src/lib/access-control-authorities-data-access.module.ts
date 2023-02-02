import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuthorities from './+state/authorities.reducer';
import { AuthoritiesEffects } from './+state/authorities.effects';
import { AuthoritiesFacade } from './+state/authorities.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromAuthorities.AUTHORITIES_FEATURE_KEY,
      fromAuthorities.reducer
    ),
    EffectsModule.forFeature([AuthoritiesEffects]),
  ],
  providers: [AuthoritiesFacade],
})
export class AccessControlAuthoritiesDataAccessModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEventPackages from './+state/event-packages.reducer';
import { EventPackagesEffects } from './+state/event-packages.effects';
import { EventPackagesFacade } from './+state/event-packages.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromEventPackages.EVENT_PACKAGES_FEATURE_KEY,
      fromEventPackages.eventPackagesReducer
    ),
    EffectsModule.forFeature([EventPackagesEffects]),
  ],
  providers: [EventPackagesFacade],
})
export class EventPackagesDataAccessModule {}

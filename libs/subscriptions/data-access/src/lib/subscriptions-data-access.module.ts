import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSubscriptions from './+state/subscriptions.reducer';
import { SubscriptionsEffects } from './+state/subscriptions.effects';
import { SubscriptionsFacade } from './+state/subscriptions.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromSubscriptions.SUBSCRIPTIONS_FEATURE_KEY,
      fromSubscriptions.subscriptionsReducer
    ),
    EffectsModule.forFeature([SubscriptionsEffects]),
  ],
  providers: [SubscriptionsFacade],
})
export class SubscriptionsDataAccessModule {}

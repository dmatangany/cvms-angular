import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEvents from './+state/events.reducer';
import { EventsEffects } from './+state/events.effects';
import { EventsFacade } from './+state/events.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromEvents.EVENTS_FEATURE_KEY,
      fromEvents.eventsReducer
    ),
    EffectsModule.forFeature([EventsEffects]),
  ],
  providers: [EventsFacade],
})
export class EventsDataAccessModule {}

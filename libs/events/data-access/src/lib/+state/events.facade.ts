import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store, Action } from '@ngrx/store';

import * as EventsActions from './events.actions';
import { EventsEntity } from './events.models';
import * as EventsFeature from './events.reducer';
import * as EventsSelectors from './events.selectors';

@Injectable()
export class EventsFacade {
  loaded$ = this.store.pipe(select(EventsSelectors.getEventsLoaded));
  allEvents$ = this.store.pipe(select(EventsSelectors.getAllEvents));
  selectedEvent$ = this.store.pipe(select(EventsSelectors.getSelectedEvent));
  loading$ = this.store.pipe(select(EventsSelectors.getEventsLoadingState));
  totalEvents$ = this.store.pipe(select(EventsSelectors.getTotalEvents));
  btnState$ = this.store.pipe(select(EventsSelectors.getBtnState));

  constructor(private store: Store<EventsFeature.EventsPartialState>) {}

  getPaginatedEvents(state: ClrDatagridStateInterface) {
    this.store.dispatch(EventsActions.getPaginatedEvents({ state }));
  }

  getAllEvents() {
    this.store.dispatch(EventsActions.getAllEvents());
  }

  getEvent(eventId: string | number) {
    this.store.dispatch(EventsActions.getEventById({ eventId }));
  }

  createNewEvent(event: EventsEntity) {
    this.store.dispatch(EventsActions.createEvent(event));
  }

  updateEvent(event: EventsEntity) {
    this.store.dispatch(EventsActions.updateEvent(event));
  }

  subscribeToAnEvent(eventId: any) {
    this.store.dispatch(EventsActions.subscribeToAnEvent({ eventId }));
  }

  unsubscribeToAnEvent(eventId: any) {
    this.store.dispatch(EventsActions.unSubscribeToAnEvent({ eventId }));
  }

  publishEvent(eventId: any) {
    this.store.dispatch(EventsActions.publishEvent({ eventId }));
  }

  unpublishEvent(eventId: any) {
    this.store.dispatch(EventsActions.unPublishEvent({ eventId }));
  }
}

import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as EventsActions from './events.actions';
import { EventsEntity } from './events.models';

export const EVENTS_FEATURE_KEY = 'events';

export interface EventsState extends EntityState<EventsEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedEvent: EventsEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface EventsPartialState {
  readonly [EVENTS_FEATURE_KEY]: EventsState;
}

export const eventsAdapter: EntityAdapter<EventsEntity> =
  createEntityAdapter<EventsEntity>();

export const initialEventsState: EventsState = eventsAdapter.getInitialState({
  loaded: false,
  loading: false,
  error: undefined,
  selectedEvent: undefined,
  total: 0,
  btnState: ClrLoadingState.DEFAULT,
  currentPage: 0,
});

const reducer = createReducer(
  initialEventsState,
  on(
    EventsActions.getEventById,
    EventsActions.getPaginatedEvents,
    EventsActions.getAllEvents,
    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(EventsActions.getEventByIdSuccess, (state, { event }) => ({
    ...state,
    loading: false,
    loaded: true,
    selectedEvent: event,
  })),

  on(EventsActions.getAllEventsSuccess, (state, { events }) =>
    eventsAdapter.setAll(events, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),

  on(
    EventsActions.getPaginatedEventsSuccess,
    (state, { events, total, page }) =>
      eventsAdapter.setAll(events, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    EventsActions.getAllEventsFailure,
    EventsActions.getEventByIdFailure,
    EventsActions.getPaginatedEventsFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    EventsActions.createEvent,
    EventsActions.updateEvent,
    EventsActions.deleteEvent,
    EventsActions.unPublishEvent,
    EventsActions.unSubscribeToAnEvent,
    EventsActions.publishEvent,
    EventsActions.subscribeToAnEvent,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    EventsActions.createEventSuccess,
    EventsActions.updateEventSuccess,
    EventsActions.deleteEventSuccess,
    EventsActions.unPublishEventSuccess,
    EventsActions.unSubscribeToAnEventSuccess,
    EventsActions.publishEventSuccess,
    EventsActions.subscribeToAnEventSuccess,
    (state) => ({
      ...state,
      loaded: true,
      btnState: ClrLoadingState.SUCCESS,
    })
  ),

  on(
    EventsActions.createEventFailure,
    EventsActions.updateEventFailure,
    EventsActions.deleteEventFailure,
    EventsActions.unPublishEventFailure,
    EventsActions.unSubscribeToAnEventFailure,
    EventsActions.publishEventFailure,
    EventsActions.subscribeToAnEventFailure,
    (state, { error }) => ({
      ...state,
      error: error,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function eventsReducer(state: EventsState | undefined, action: Action) {
  return reducer(state, action);
}

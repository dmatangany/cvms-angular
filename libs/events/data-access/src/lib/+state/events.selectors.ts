import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  EVENTS_FEATURE_KEY,
  EventsState,
  eventsAdapter,
} from './events.reducer';

// Lookup the 'Events' feature state managed by NgRx
export const getEventsState =
  createFeatureSelector<EventsState>(EVENTS_FEATURE_KEY);

const { selectAll, selectEntities } = eventsAdapter.getSelectors();

export const getEventsLoaded = createSelector(
  getEventsState,
  (state: EventsState) => state.loaded
);

export const getEventsError = createSelector(
  getEventsState,
  (state: EventsState) => state.error
);

export const getAllEvents = createSelector(
  getEventsState,
  (state: EventsState) => selectAll(state)
);

export const getEventsEntities = createSelector(
  getEventsState,
  (state: EventsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getEventsState,
  (state: EventsState) => state.selectedId
);

export const getSelected = (eventId: string | number) =>
  createSelector(getEventsEntities, (entities) => entities[eventId]);

export const getSelectedEvent = createSelector(
  getEventsState,
  (state: EventsState) => state.selectedEvent
);

export const getTotalEvents = createSelector(
  getEventsState,
  (state: EventsState) => state.total
);

export const getCurrentPageState = createSelector(
  getEventsState,
  (state: EventsState) => state.currentPage
);

export const getEventsLoadingState = createSelector(
  getEventsState,
  (state: EventsState) => state.loading
);

export const getBtnState = createSelector(
  getEventsState,
  (state: EventsState) => state.btnState
);

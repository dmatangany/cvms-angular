import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as EventPackagesActions from './event-packages.actions';
import { EventPackagesEntity } from './event-packages.models';

export const EVENT_PACKAGES_FEATURE_KEY = 'eventPackages';

export interface EventPackagesState extends EntityState<EventPackagesEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedEventPackages: EventPackagesEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface EventPackagesPartialState {
  readonly [EVENT_PACKAGES_FEATURE_KEY]: EventPackagesState;
}

export const eventPackagesAdapter: EntityAdapter<EventPackagesEntity> =
  createEntityAdapter<EventPackagesEntity>();

export const initialEventPackagesState: EventPackagesState =
  eventPackagesAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: undefined,
    selectedEventPackages: undefined,
    total: 0,
    btnState: ClrLoadingState.DEFAULT,
    currentPage: 0,
  });

const reducer = createReducer(
  initialEventPackagesState,
  on(
    EventPackagesActions.getEventPackageById,
    EventPackagesActions.getPaginatedEventPackages,
    EventPackagesActions.getAllEventPackages,

    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(
    EventPackagesActions.getEventPackageByIdSuccess,

    (state, { eventPackage }) => ({
      ...state,
      loading: false,
      loaded: true,
      selectedEventPackages: eventPackage,
    })
  ),

  on(
    EventPackagesActions.getAllEventPackagesSuccess,
    (state, { eventPackages }) =>
      eventPackagesAdapter.setAll(eventPackages, {
        ...state,
        loading: false,
        loaded: true,
      })
  ),

  on(
    EventPackagesActions.getPaginatedEventPackagesSuccess,
    (state, { eventPackages, total, page }) =>
      eventPackagesAdapter.setAll(eventPackages, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    EventPackagesActions.getAllEventPackagesFailure,

    EventPackagesActions.getEventPackageByIdFailure,
    EventPackagesActions.getPaginatedEventPackagesFailure,

    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    EventPackagesActions.createEventPackage,
    EventPackagesActions.updateEventPackage,
    EventPackagesActions.deleteEventPackage,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    EventPackagesActions.createEventPackageSuccess,
    EventPackagesActions.updateEventPackageSuccess,
    EventPackagesActions.deleteEventPackageSuccess,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: true,
      error: undefined,
    })
  ),

  on(
    EventPackagesActions.createEventPackageFailure,
    EventPackagesActions.updateEventPackageFailure,
    EventPackagesActions.deleteEventPackageFailure,
    (state, { error }) => ({
      ...state,
      error,
      loaded: false,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function eventPackagesReducer(
  state: EventPackagesState | undefined,
  action: Action
) {
  return reducer(state, action);
}

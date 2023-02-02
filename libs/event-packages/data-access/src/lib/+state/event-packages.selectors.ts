import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  EVENT_PACKAGES_FEATURE_KEY,
  EventPackagesState,
  eventPackagesAdapter,
} from './event-packages.reducer';

// Lookup the 'EventPackages' feature state managed by NgRx
export const getEventPackagesState = createFeatureSelector<EventPackagesState>(
  EVENT_PACKAGES_FEATURE_KEY
);

const { selectAll, selectEntities } = eventPackagesAdapter.getSelectors();

export const getEventPackagesLoaded = createSelector(
  getEventPackagesState,
  (state: EventPackagesState) => state.loaded
);

export const getEventPackagesError = createSelector(
  getEventPackagesState,
  (state: EventPackagesState) => state.error
);

export const getAllEventPackages = createSelector(
  getEventPackagesState,
  (state: EventPackagesState) => selectAll(state)
);

export const getEventPackagesEntities = createSelector(
  getEventPackagesState,
  (state: EventPackagesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getEventPackagesState,
  (state: EventPackagesState) => state.selectedId
);

export const getSelected = (eventPackageId: string | number) =>
  createSelector(
    getEventPackagesEntities,
    (entities) => entities[eventPackageId]
  );

export const getSelectedEventPackage = createSelector(
  getEventPackagesState,
  (state: EventPackagesState) => state.selectedEventPackages
);

export const getTotalEventPackages = createSelector(
  getEventPackagesState,
  (state: EventPackagesState) => state.total
);

export const getCurrentPageState = createSelector(
  getEventPackagesState,
  (state: EventPackagesState) => state.currentPage
);

export const getEventPackagesLoadingState = createSelector(
  getEventPackagesState,
  (state: EventPackagesState) => state.loading
);

export const getBtnState = createSelector(
  getEventPackagesState,
  (state: EventPackagesState) => state.btnState
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AUTHORITIES_FEATURE_KEY,
  State,
  AuthoritiesPartialState,
  authoritiesAdapter,
} from './authorities.reducer';

export const getAuthoritiesState = createFeatureSelector<
  State
>(AUTHORITIES_FEATURE_KEY);

const { selectAll, selectEntities } = authoritiesAdapter.getSelectors();

export const getAuthoritiesLoaded = createSelector(
  getAuthoritiesState,
  (state: State) => state.loaded
);

export const getAuthoritiesError = createSelector(
  getAuthoritiesState,
  (state: State) => state.error
);

export const getAllAuthorities = createSelector(
  getAuthoritiesState,
  (state: State) => selectAll(state)
);

export const getAuthoritiesEntities = createSelector(
  getAuthoritiesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAuthoritiesState,
  (state: State) => state.selectedId
);

export const getSelected = (authoritieId: string | number) =>
    createSelector(getAuthoritiesEntities, (entities) => entities[authoritieId]);

export const getSelectedAuthoritie = createSelector(
    getAuthoritiesState,
    (state: State) => state.selectedAuthoritie
);

export const getTotalAuthorities = createSelector(
    getAuthoritiesState,
    (state: State) => state.total
);

export const getCurrentPageState = createSelector(
    getAuthoritiesState,
    (state: State) => state.currentPage
);

export const getAuthoritiesLoadingState = createSelector(
    getAuthoritiesState,
    (state: State) => state.loading
);

export const getBtnState = createSelector(
    getAuthoritiesState,
    (state: State) => state.btnState
);

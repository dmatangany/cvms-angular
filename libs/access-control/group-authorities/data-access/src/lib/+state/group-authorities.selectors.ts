import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  GROUP_AUTHORITIES_FEATURE_KEY,
  State,
  GroupAuthoritiesPartialState,
  groupAuthoritiesAdapter,
} from './group-authorities.reducer';

export const getGroupAuthoritiesState = createFeatureSelector<
  State
>(GROUP_AUTHORITIES_FEATURE_KEY);

const { selectAll, selectEntities } = groupAuthoritiesAdapter.getSelectors();

export const getGroupAuthoritiesLoaded = createSelector(
  getGroupAuthoritiesState,
  (state: State) => state.loaded
);

export const getGroupAuthoritiesError = createSelector(
  getGroupAuthoritiesState,
  (state: State) => state.error
);

export const getAllGroupAuthorities = createSelector(
  getGroupAuthoritiesState,
  (state: State) => selectAll(state)
);

export const getGroupAuthoritiesEntities = createSelector(
  getGroupAuthoritiesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getGroupAuthoritiesState,
  (state: State) => state.selectedId
);

export const getSelected = (groupAuthorityId: string | number) =>
  createSelector(
    getGroupAuthoritiesEntities,
    (entities) => entities[groupAuthorityId]
  );

export const getTotalGroupAuthorities = createSelector(
  getGroupAuthoritiesState,
  (state: State) => state.total
);

export const getCurrentPageState = createSelector(
  getGroupAuthoritiesState,
  (state: State) => state.currentPage
);

export const getGroupAuthoritiesLoadingState = createSelector(
  getGroupAuthoritiesState,
  (state: State) => state.loading
);

export const getBtnState = createSelector(
  getGroupAuthoritiesState,
  (state: State) => state.btnState
);

export const getUnassignedAuthoritiesState = createSelector(
  getGroupAuthoritiesState,
  (state: State) => state.unassignedGroupAuthorities
);

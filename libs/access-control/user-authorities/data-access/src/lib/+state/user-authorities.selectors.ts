import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USER_AUTHORITIES_FEATURE_KEY,
  State,
  UserAuthoritiesPartialState,
  userAuthoritiesAdapter,
} from './user-authorities.reducer';

export const getUserAuthoritiesState = createFeatureSelector<
  State
>(USER_AUTHORITIES_FEATURE_KEY);

const { selectAll, selectEntities } = userAuthoritiesAdapter.getSelectors();

export const getUserAuthoritiesLoaded = createSelector(
  getUserAuthoritiesState,
  (state: State) => state.loaded
);

export const getUserAuthoritiesError = createSelector(
  getUserAuthoritiesState,
  (state: State) => state.error
);

export const getAllUserAuthorities = createSelector(
  getUserAuthoritiesState,
  (state: State) => selectAll(state)
);

export const getUserAuthoritiesEntities = createSelector(
  getUserAuthoritiesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getUserAuthoritiesState,
  (state: State) => state.selectedId
);

export const getSelected = (userAuthorityId: string | number) =>
  createSelector(
    getUserAuthoritiesEntities,
    (entities) => entities[userAuthorityId]
  );

export const getTotalUserAuthorities = createSelector(
  getUserAuthoritiesState,
  (state: State) => state.total
);

export const getCurrentPageState = createSelector(
  getUserAuthoritiesState,
  (state: State) => state.currentPage
);

export const getUserAuthoritiesLoadingState = createSelector(
  getUserAuthoritiesState,
  (state: State) => state.loading
);

export const getBtnState = createSelector(
  getUserAuthoritiesState,
  (state: State) => state.btnState
);

export const getUnassignedAuthoritiesState = createSelector(
  getUserAuthoritiesState,
  (state: State) => state.unassignedUserAuthorities
);

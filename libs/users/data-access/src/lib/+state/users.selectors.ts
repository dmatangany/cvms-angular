import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USERS_FEATURE_KEY,
  State,
  UsersPartialState,
  usersAdapter,
} from './users.reducer';

export const getUsersState = createFeatureSelector<UsersPartialState, State>(
  USERS_FEATURE_KEY
);

const { selectAll, selectEntities } = usersAdapter.getSelectors();

export const getUsersLoaded = createSelector(
  getUsersState,
  (state: State) => state.loaded
);

export const getUsersError = createSelector(
  getUsersState,
  (state: State) => state.error
);

export const getAllUsers = createSelector(getUsersState, (state: State) =>
  selectAll(state)
);

export const getUsersEntities = createSelector(getUsersState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getUsersState,
  (state: State) => state.selectedId
);

export const getSelected = (userId: string | number) =>
  createSelector(getUsersEntities, (entities) => entities[userId]);

export const getSelectedUser = createSelector(
  getUsersState,
  (state: State) => state.selectedUser
);

export const getTotalUsers = createSelector(
  getUsersState,
  (state: State) => state.total
);

export const getCurrentPageState = createSelector(
  getUsersState,
  (state: State) => state.currentPage
);

export const getUsersLoadingState = createSelector(
  getUsersState,
  (state: State) => state.loading
);

export const getBtnState = createSelector(
  getUsersState,
  (state: State) => state.btnState
);

import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ClrLoadingState } from '@clr/angular';

import * as UserAuthoritiesActions from './user-authorities.actions';
import { UserAuthoritiesEntity } from './user-authorities.models';

export const USER_AUTHORITIES_FEATURE_KEY = 'userAuthorities';

export interface State extends EntityState<UserAuthoritiesEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: Error;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
  loading: boolean;
  unassignedUserAuthorities: UserAuthoritiesEntity[];
}

export interface UserAuthoritiesPartialState {
  readonly [USER_AUTHORITIES_FEATURE_KEY]: State;
}

export const userAuthoritiesAdapter: EntityAdapter<UserAuthoritiesEntity> = createEntityAdapter<UserAuthoritiesEntity>();

export const initialState: State = userAuthoritiesAdapter.getInitialState({
  loaded: false,
  total: 0,
  btnState: ClrLoadingState.DEFAULT,
  currentPage: 0,
  loading: false,
  unassignedUserAuthorities: [],
});

const userAuthoritiesReducer = createReducer(
  initialState,
  on(
    UserAuthoritiesActions.loadAllUserAuthorities,
    UserAuthoritiesActions.loadPaginatedUserAuthorities,
    (state) =>
      userAuthoritiesAdapter.removeAll({
        ...state,
        loaded: false,
        error: undefined,
        loading: true,
      })
  ),

  on(UserAuthoritiesActions.loadAdminUnassignedUserAuthorities, (state) => ({
    ...state,
    loaded: false,
    error: undefined,
    loading: true,
    unassignedUserAuthorities: [],
  })),

  on(
    UserAuthoritiesActions.createUserAuthorities,
    UserAuthoritiesActions.deleteUserAuthorities,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      error: undefined,
      loaded: false,
    })
  ),

  on(
    UserAuthoritiesActions.createUserAuthoritiesSuccess,
    UserAuthoritiesActions.deleteUserAuthoritiesSuccess,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.SUCCESS,
      error: undefined,
      loaded: true,
    })
  ),

  on(
    UserAuthoritiesActions.loadAdminUnassignedUserAuthoritiesSuccess,
    (state, { userAuthorities }) => ({
      ...state,
      loading: false,
      error: undefined,
      loaded: true,
      unassignedUserAuthorities: userAuthorities,
    })
  ),

  on(
    UserAuthoritiesActions.loadAllUserAuthoritiesSuccess,
    (state, { userAuthorities }) =>
      userAuthoritiesAdapter.setAll(userAuthorities, {
        ...state,
        loaded: true,
        loading: false,
      })
  ),

  on(
    UserAuthoritiesActions.loadAllUserAuthoritiesFailure,
    UserAuthoritiesActions.loadPaginatedUserAuthoritiesFailure,
    UserAuthoritiesActions.createUserAuthoritiesFailure,
    UserAuthoritiesActions.deleteUserAuthoritiesFailure,
    UserAuthoritiesActions.loadAdminUnassignedUserAuthoritiesFailure,
    (state, { error }) => ({
      ...state,
      error,
      btnState: ClrLoadingState.ERROR,
      loading: false,
    })
  ),

  on(
    UserAuthoritiesActions.deleteUserAuthoritiesSuccess,
    (state, { userAuthorityIds }) =>
      userAuthoritiesAdapter.removeMany(userAuthorityIds, {
        ...state,
        btnState: ClrLoadingState.SUCCESS,
        error: undefined,
        loaded: true,
      })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return userAuthoritiesReducer(state, action);
}

import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ClrLoadingState } from '@clr/angular';

import * as GroupAuthoritiesActions from './group-authorities.actions';
import { GroupAuthoritiesEntity } from './group-authorities.models';

export const GROUP_AUTHORITIES_FEATURE_KEY = 'groupAuthorities';

export interface State extends EntityState<GroupAuthoritiesEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: Error;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
  loading: boolean;
  unassignedGroupAuthorities: GroupAuthoritiesEntity[];
}

export interface GroupAuthoritiesPartialState {
  readonly [GROUP_AUTHORITIES_FEATURE_KEY]: State;
}

export const groupAuthoritiesAdapter: EntityAdapter<GroupAuthoritiesEntity> = createEntityAdapter<GroupAuthoritiesEntity>();

export const initialState: State = groupAuthoritiesAdapter.getInitialState({
  loaded: false,
  total: 0,
  btnState: ClrLoadingState.DEFAULT,
  currentPage: 0,
  loading: false,
  unassignedGroupAuthorities: [],
});

const groupAuthoritiesReducer = createReducer(
  initialState,
  on(
    GroupAuthoritiesActions.loadAllGroupAuthorities,
    GroupAuthoritiesActions.loadPaginatedGroupAuthorities,
    (state) =>
      groupAuthoritiesAdapter.removeAll({
        ...state,
        loaded: false,
        error: undefined,
        loading: true,
      })
  ),

  on(GroupAuthoritiesActions.loadAdminUnassignedGroupAuthorities, (state) => ({
    ...state,
    loaded: false,
    error: undefined,
    loading: true,
    unassignedGroupAuthorities: [],
  })),

  on(
    GroupAuthoritiesActions.createGroupAuthorities,
    GroupAuthoritiesActions.deleteGroupAuthorities,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      error: undefined,
      loaded: false,
    })
  ),

  /*on(
    GroupAuthoritiesActions.createGroupAuthoritiesSuccess,
    GroupAuthoritiesActions.deleteGroupAuthoritiesSuccess,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.SUCCESS,
      error: null,
      loaded: true,
    })
  ),*/

  on(
    GroupAuthoritiesActions.createGroupAuthoritiesSuccess,
    (state, { groupAuthorities }) =>
      groupAuthoritiesAdapter.addMany(groupAuthorities, {
        ...state,
        btnState: ClrLoadingState.SUCCESS,
        error: undefined,
        loaded: true,
      })
  ),

  on(
    GroupAuthoritiesActions.deleteGroupAuthoritiesSuccess,
    (state, { groupAuthorityIds }) =>
      groupAuthoritiesAdapter.removeMany(groupAuthorityIds, {
        ...state,
        btnState: ClrLoadingState.SUCCESS,
        error: undefined,
        loaded: true,
      })
  ),

  on(
    GroupAuthoritiesActions.loadAdminUnassignedGroupAuthoritiesSuccess,
    (state, { groupAuthorities }) => ({
      ...state,
      loading: false,
      error: undefined,
      loaded: true,
      unassignedGroupAuthorities: groupAuthorities,
    })
  ),

  on(
    GroupAuthoritiesActions.loadAllGroupAuthoritiesSuccess,
    (state, { groupAuthorities }) =>
      groupAuthoritiesAdapter.setAll(groupAuthorities, {
        ...state,
        loaded: true,
        loading: false,
      })
  ),

  on(
    GroupAuthoritiesActions.loadAllGroupAuthoritiesFailure,
    GroupAuthoritiesActions.loadPaginatedGroupAuthoritiesFailure,
    GroupAuthoritiesActions.createGroupAuthoritiesFailure,
    GroupAuthoritiesActions.deleteGroupAuthoritiesFailure,
    GroupAuthoritiesActions.loadAdminUnassignedGroupAuthoritiesFailure,
    (state, { error }) => ({
      ...state,
      error,
      btnState: ClrLoadingState.ERROR,
      loading: false,
    })
  )

  /* on(
    GroupAuthoritiesActions.deleteGroupAuthoritiesSuccess,
    (state, { groupAuthorityIds }) =>
      groupAuthoritiesAdapter.removeMany(groupAuthorityIds, {
        ...state,
        btnState: ClrLoadingState.SUCCESS,
        error: null,
        loaded: true,
      })
  )*/
);

export function reducer(state: State | undefined, action: Action) {
  return groupAuthoritiesReducer(state, action);
}

import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as GroupsActions from './groups.actions';
import { GroupsEntity } from './groups.models';
import { ClrLoadingState } from '@clr/angular';

export const GROUPS_FEATURE_KEY = 'groups';

export interface State extends EntityState<GroupsEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedGroup: GroupsEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface GroupsPartialState {
  readonly [GROUPS_FEATURE_KEY]: State;
}

export const groupsAdapter: EntityAdapter<GroupsEntity> =
  createEntityAdapter<GroupsEntity>();

export const initialState: State = groupsAdapter.getInitialState({
  loaded: false,
  loading: false,
  error: undefined,
  selectedGroup: undefined,
  total: 0,
  btnState: ClrLoadingState.DEFAULT,
  currentPage: 0,
});

const groupsReducer = createReducer(
  initialState,
  on(
    GroupsActions.getGroupById,
    GroupsActions.getPaginatedGroups,
    GroupsActions.getAllGroups,
    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(GroupsActions.getGroupByIdSuccess, (state, { group }) => ({
    ...state,
    loading: false,
    loaded: true,
    selectedGroup: group,
  })),

  on(GroupsActions.getAllGroupsSuccess, (state, { groups }) =>
    groupsAdapter.setAll(groups, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),

  on(
    GroupsActions.getPaginatedGroupsSuccess,
    (state, { groups, total, page }) =>
      groupsAdapter.setAll(groups, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    GroupsActions.getAllGroupsFailure,
    GroupsActions.getGroupByIdFailure,
    GroupsActions.getPaginatedGroupsFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    GroupsActions.createGroup,
    GroupsActions.updateGroup,
    GroupsActions.deleteGroup,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    GroupsActions.createGroupSuccess,
    GroupsActions.updateGroupSuccess,
    GroupsActions.deleteGroupSuccess,
    (state) => ({
      ...state,
      loaded: true,
      btnState: ClrLoadingState.SUCCESS,
    })
  ),

  on(
    GroupsActions.createGroupFailure,
    GroupsActions.updateGroupFailure,
    GroupsActions.deleteGroupFailure,
    (state, { error }) => ({
      ...state,
      error: error,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return groupsReducer(state, action);
}

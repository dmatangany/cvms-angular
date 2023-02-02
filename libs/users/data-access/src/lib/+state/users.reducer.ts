import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as UsersActions from './users.actions';
import { UsersEntity } from './users.models';
import { ClrLoadingState } from '@clr/angular';

export const USERS_FEATURE_KEY = 'users';

export interface State extends EntityState<UsersEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  total: number;
  btnState: ClrLoadingState;
  selectedUser: UsersEntity | undefined;
  currentPage: number;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: State;
}

export const usersAdapter: EntityAdapter<UsersEntity> =
  createEntityAdapter<UsersEntity>();

export const initialState: State = usersAdapter.getInitialState({
  loaded: false,
  loading: false,
  error: undefined,
  total: 0,
  btnState: ClrLoadingState.DEFAULT,
  selectedUser: undefined,
  currentPage: 0,
});

const usersReducer = createReducer(
  initialState,

  on(
    UsersActions.createUser,
    UsersActions.createMemberUser,
    UsersActions.createUser,
    UsersActions.updateMyAccount,
    UsersActions.updateUserUserSuccess,
    UsersActions.changeUserStatus,

    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      error: undefined,
      loaded: false,
    })
  ),

  on(
    UsersActions.getUserProfile,
    UsersActions.getUserById,
    UsersActions.getAllUsers,
    UsersActions.getPaginatedUsers,
    UsersActions.getPaginatedUsersByGroup,
    (state) => ({
      ...state,
      loading: true,
      error: undefined,
      loaded: false,
    })
  ),

  on(
    UsersActions.getUserProfileSuccess,
    UsersActions.getUserByIdSuccess,

    (state, { user }) => ({
      ...state,
      loading: false,
      error: undefined,
      loaded: true,
      selectedUser: user,
    })
  ),

  on(UsersActions.getAllUsersSuccess, (state, { users }) =>
    usersAdapter.setAll(users, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),

  on(
    UsersActions.getPaginatedUsersSuccess,
    UsersActions.getPaginatedUsersByGroupSuccess,
    (state, { users, total, page }) =>
      usersAdapter.setAll(users, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    UsersActions.getUserProfileFailure,
    UsersActions.getUserByIdFailure,
    UsersActions.getAllUsersFailure,
    UsersActions.getPaginatedUsersFailure,
    UsersActions.getPaginatedUsersByGroupFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error: error,
      loaded: false,
    })
  ),

  on(
    UsersActions.createUserSuccess,
    UsersActions.createMemberUserSuccess,
    UsersActions.updateMyAccountSuccess,
    UsersActions.updateUserUserSuccess,
    UsersActions.changeUserStatusSuccess,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.SUCCESS,
      loaded: true,
    })
  ),

  on(
    UsersActions.createUserFailure,
    UsersActions.createMemberUserFailure,
    UsersActions.updateMyAccountFailure,
    UsersActions.updateUserUserFailure,
    UsersActions.changeUserStatusFailure,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.SUCCESS,
      loaded: true,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return usersReducer(state, action);
}

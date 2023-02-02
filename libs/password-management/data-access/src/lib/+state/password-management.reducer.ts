import { ClrLoadingState } from '@clr/angular';
import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as PasswordManagementActions from './password-management.actions';
import { PasswordManagementEntity } from './password-management.models';

export const PASSWORD_MANAGEMENT_FEATURE_KEY = 'passwordManagement';

export interface State extends EntityState<PasswordManagementEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: Error;
  loading: boolean;
  btnState: ClrLoadingState;
}

export interface PasswordManagementPartialState {
  readonly [PASSWORD_MANAGEMENT_FEATURE_KEY]: State;
}

export const passwordManagementAdapter: EntityAdapter<PasswordManagementEntity> =
  createEntityAdapter<PasswordManagementEntity>();

export const initialState: State = passwordManagementAdapter.getInitialState({
  loaded: false,
  error: undefined,
  loading: false,
  btnState: ClrLoadingState.DEFAULT,
});

const passwordManagementReducer = createReducer(
  initialState,
  on(
    PasswordManagementActions.forgotPassword,
    PasswordManagementActions.updatePassword,
    PasswordManagementActions.resetPassword,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    PasswordManagementActions.forgotPasswordSuccess,
    PasswordManagementActions.updatePasswordSuccess,
    PasswordManagementActions.resetPasswordSuccess,
    (state) => ({
      ...state,
      loaded: true,
      btnState: ClrLoadingState.SUCCESS,
    })
  ),

  on(
    PasswordManagementActions.forgotPasswordFailure,
    PasswordManagementActions.updatePasswordFailure,
    PasswordManagementActions.resetPasswordFailure,
    (state, { error }) => ({
      ...state,
      error: error,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return passwordManagementReducer(state, action);
}

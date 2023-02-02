import { ClrLoadingState } from '@clr/angular';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  loaded?: boolean;
  loading: boolean;
  error?: any;
  btnState: ClrLoadingState;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const authAdapter: EntityAdapter<State> = createEntityAdapter<State>();

export const initialState: State = authAdapter.getInitialState({
  loaded: false,
  loading: false,
  error: undefined,
  btnState: ClrLoadingState.DEFAULT,
});

const authReducer = createReducer(
  initialState,
  on(
    AuthActions.clientLogin,
    AuthActions.adminLogin,
    AuthActions.register,
    (state) => ({
      ...state,
      loaded: false,
      loading: true,
      error: undefined,
      btnState: ClrLoadingState.LOADING,
    })
  ),

  on(
    AuthActions.clientLoginSuccess,
    AuthActions.adminLoginSuccess,
    AuthActions.registerSuccess,
    (state) => ({
      ...state,
      loading: false,
      loaded: true,
      error: undefined,
      btnState: ClrLoadingState.SUCCESS,
    })
  ),

  on(
    AuthActions.clientLoginFailure,
    AuthActions.adminLoginFailure,
    AuthActions.registerFailure,
    (state) => ({
      ...state,
      loading: false,
      loaded: false,
      error: true,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}

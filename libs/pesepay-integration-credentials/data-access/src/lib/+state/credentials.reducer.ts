import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CredentialsActions from './credentials.actions';
import { CredentialsEntity } from './credentials.models';

export const CREDENTIALS_FEATURE_KEY = 'credentials';

export interface CredentialsState extends EntityState<CredentialsEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedCredential: CredentialsEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface CredentialsPartialState {
  readonly [CREDENTIALS_FEATURE_KEY]: CredentialsState;
}

export const credentialsAdapter: EntityAdapter<CredentialsEntity> =
  createEntityAdapter<CredentialsEntity>();

export const initialCredentialsState: CredentialsState =
  credentialsAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: undefined,
    selectedCredential: undefined,
    total: 0,
    btnState: ClrLoadingState.DEFAULT,
    currentPage: 0,
  });

const reducer = createReducer(
  initialCredentialsState,
  on(
    CredentialsActions.getCredentialById,
    CredentialsActions.getPaginatedCredentials,
    CredentialsActions.getAllCredentials,
    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(CredentialsActions.getCredentialByIdSuccess, (state, { credential }) => ({
    ...state,
    loading: false,
    loaded: true,
    selectedCredential: credential,
  })),

  on(CredentialsActions.getAllCredentialsSuccess, (state, { credentials }) =>
    credentialsAdapter.setAll(credentials, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),

  on(
    CredentialsActions.getPaginatedCredentialsSuccess,
    (state, { credentials, total, page }) =>
      credentialsAdapter.setAll(credentials, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    CredentialsActions.getAllCredentialsFailure,
    CredentialsActions.getCredentialByIdFailure,
    CredentialsActions.getPaginatedCredentialsFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    CredentialsActions.createCredential,
    CredentialsActions.updateCredential,
    CredentialsActions.deleteCredential,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    CredentialsActions.createCredentialSuccess,
    CredentialsActions.updateCredentialSuccess,
    CredentialsActions.deleteCredentialSuccess,
    (state) => ({
      ...state,
      loaded: true,
      btnState: ClrLoadingState.SUCCESS,
    })
  ),

  on(
    CredentialsActions.createCredentialFailure,
    CredentialsActions.updateCredentialFailure,
    CredentialsActions.deleteCredentialFailure,
    (state, { error }) => ({
      ...state,
      error: error,
      btnState: ClrLoadingState.ERROR,
    })
  )

);

export function credentialsReducer(
  state: CredentialsState | undefined,
  action: Action
) {
  return reducer(state, action);
}

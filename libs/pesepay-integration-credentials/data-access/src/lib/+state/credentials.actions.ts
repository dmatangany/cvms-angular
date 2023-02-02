import { createAction, props } from '@ngrx/store';
import { CredentialsEntity } from './credentials.models';
import { ClrDatagridStateInterface } from '@clr/angular';

export const getPaginatedCredentials = createAction(
  '[PesepayCredentials] Get Paginated Credentials',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedCredentialsSuccess = createAction(
  '[PesepayCredentials] Get Paginated Credentials Success',
  props<{ credentials: CredentialsEntity[]; total: number; page: number }>()
);

export const getPaginatedCredentialsFailure = createAction(
  '[PesepayCredentials] Get Paginated Credentials Failure',
  props<{ error: Error }>()
);

export const getAllCredentials = createAction(
  '[PesepayCredentials] Get All Credentials'
);

export const getAllCredentialsSuccess = createAction(
  '[PesepayCredentials] Get All Credentials Success',
  props<{ credentials: CredentialsEntity[] }>()
);

export const getAllCredentialsFailure = createAction(
  '[PesepayCredentials] Get All Credentials Failure',
  props<{ error: Error }>()
);

export const getCredentialById = createAction(
  '[PesepayCredentials] Get Credential',
  props<{ credentialId: string | number }>()
);

export const getCredentialByIdSuccess = createAction(
  '[PesepayCredentials] Get Credential Success',
  props<{ credential: CredentialsEntity }>()
);

export const getCredentialByIdFailure = createAction(
  '[PesepayCredentials] Get Credential Failure',
  props<{ error: any }>()
);

export const createCredential = createAction(
  '[PesepayCredentials] Create Credential',
  (credentialDetails: CredentialsEntity) => ({ credentialDetails })
);

export const createCredentialSuccess = createAction(
  '[PesepayCredentials] Create Credential Success',
  (credentialDetails: CredentialsEntity) => ({ credentialDetails })
);

export const createCredentialFailure = createAction(
  '[PesepayCredentials] Create Credential Failure',
  props<{ error: Error }>()
);

export const deleteCredential = createAction(
  '[PesepayCredentials] Delete Credential',
  props<{ credentialId: string | number }>()
);

export const deleteCredentialSuccess = createAction(
  '[PesepayCredentials] Delete Credential Success'
);

export const deleteCredentialFailure = createAction(
  '[PesepayCredentials] Delete Credential Failure',
  props<{ error: Error }>()
);

export const updateCredential = createAction(
  '[PesepayCredentials] Update Credential',
  (credentialDetails: CredentialsEntity) => ({ credentialDetails })
);

export const updateCredentialSuccess = createAction(
  '[PesepayCredentials] Update Credential Success',
  (credentialDetails: CredentialsEntity) => ({ credentialDetails })
);

export const updateCredentialFailure = createAction(
  '[PesepayCredentials] Update Credential Failure',
  props<{ error: Error }>()
);

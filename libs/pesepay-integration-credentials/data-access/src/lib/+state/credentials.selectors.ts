import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CREDENTIALS_FEATURE_KEY,
  CredentialsState,
  credentialsAdapter,
} from './credentials.reducer';

// Lookup the 'Credentials' feature state managed by NgRx
export const getCredentialsState = createFeatureSelector<CredentialsState>(
  CREDENTIALS_FEATURE_KEY
);

const { selectAll, selectEntities } = credentialsAdapter.getSelectors();

export const getCredentialsLoaded = createSelector(
  getCredentialsState,
  (state: CredentialsState) => state.loaded
);

export const getCredentialsError = createSelector(
  getCredentialsState,
  (state: CredentialsState) => state.error
);

export const getAllCredentials = createSelector(
  getCredentialsState,
  (state: CredentialsState) => selectAll(state)
);

export const getCredentialsEntities = createSelector(
  getCredentialsState,
  (state: CredentialsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCredentialsState,
  (state: CredentialsState) => state.selectedId
);

export const getSelected = (credentialId: string | number) =>
    createSelector(getCredentialsEntities, (entities) => entities[credentialId]);

export const getSelectedCredential = createSelector(
    getCredentialsState,
    (state: CredentialsState) => state.selectedCredential
);

export const getTotalCredentials = createSelector(
    getCredentialsState,
    (state: CredentialsState) => state.total
);

export const getCurrentPageState = createSelector(
    getCredentialsState,
    (state: CredentialsState) => state.currentPage
);

export const getCredentialsLoadingState = createSelector(
    getCredentialsState,
    (state: CredentialsState) => state.loading
);

export const getBtnState = createSelector(
    getCredentialsState,
    (state: CredentialsState) => state.btnState
);

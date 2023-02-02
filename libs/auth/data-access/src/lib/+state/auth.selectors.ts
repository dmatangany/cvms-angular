import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthPartialState, State } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthPartialState, State>(
  AUTH_FEATURE_KEY
);

export const getAuthLoaded = createSelector(
  getAuthState,
  (state: State) => state.loaded
);

export const getAuthError = createSelector(
  getAuthState,
  (state: State) => state.error
);

export const getAuthBtnState = createSelector(
  getAuthState,
  (state: State) => state.btnState
);

export const getAuthLoading = createSelector(
  getAuthState,
  (state: State) => state.loading
);

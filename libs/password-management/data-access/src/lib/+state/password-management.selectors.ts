import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PASSWORD_MANAGEMENT_FEATURE_KEY,
  State,
  PasswordManagementPartialState,
  passwordManagementAdapter,
} from './password-management.reducer';

export const getPasswordManagementState = createFeatureSelector<
  PasswordManagementPartialState,
  State
>(PASSWORD_MANAGEMENT_FEATURE_KEY);

const { selectAll, selectEntities } = passwordManagementAdapter.getSelectors();

export const getPasswordManagementLoaded = createSelector(
  getPasswordManagementState,
  (state: State) => state.loaded
);

export const getPasswordManagementError = createSelector(
  getPasswordManagementState,
  (state: State) => state.error
);

export const getAllPasswordManagement = createSelector(
  getPasswordManagementState,
  (state: State) => selectAll(state)
);

export const getPasswordManagementEntities = createSelector(
  getPasswordManagementState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getPasswordManagementState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getPasswordManagementEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
export const getPasswordManagementLoading = createSelector(
  getPasswordManagementState,
  (state: State) => state.loading
);
export const getPasswordManagementBtnState = createSelector(
  getPasswordManagementState,
  (state: State) => state.btnState
);

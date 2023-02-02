import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AUDITS_FEATURE_KEY,
  State,
  AuditsPartialState,
  auditsAdapter,
} from './audits.reducer';

export const getAuditsState = createFeatureSelector<State>(AUDITS_FEATURE_KEY);

const { selectAll, selectEntities } = auditsAdapter.getSelectors();

export const getAuditsLoaded = createSelector(
  getAuditsState,
  (state: State) => state.loaded
);

export const getAuditsError = createSelector(
  getAuditsState,
  (state: State) => state.error
);

export const getAllAudits = createSelector(getAuditsState, (state: State) =>
  selectAll(state)
);

export const getAuditsEntities = createSelector(
  getAuditsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAuditsState,
  (state: State) => state.selectedId
);

export const getSelected = (auditId: string | number) =>
  createSelector(getAuditsEntities, (entities) => entities[auditId]);

export const getSelectedAudit = createSelector(
  getAuditsState,
  (state: State) => state.selectedAudit
);

export const getTotalAudits = createSelector(
  getAuditsState,
  (state: State) => state.total
);

export const getCurrentPageState = createSelector(
  getAuditsState,
  (state: State) => state.currentPage
);

export const getAuditsLoadingState = createSelector(
  getAuditsState,
  (state: State) => state.loading
);

export const getBtnState = createSelector(
  getAuditsState,
  (state: State) => state.btnState
);

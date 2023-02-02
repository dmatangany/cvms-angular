import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DASHBOARD_FEATURE_KEY,
  DashboardState,
  dashboardAdapter,
} from './dashboard.reducer';

// Lookup the 'Dashboard' feature state managed by NgRx
export const getDashboardState = createFeatureSelector<DashboardState>(
  DASHBOARD_FEATURE_KEY
);

const { selectAll, selectEntities } = dashboardAdapter.getSelectors();

export const getDashboardLoaded = createSelector(
  getDashboardState,
  (state: DashboardState) => state.loaded
);

export const getDashboardError = createSelector(
  getDashboardState,
  (state: DashboardState) => state.error
);

export const getAllDashboard = createSelector(
  getDashboardState,
  (state: DashboardState) => selectAll(state)
);

export const getDashboardEntities = createSelector(
  getDashboardState,
  (state: DashboardState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDashboardState,
  (state: DashboardState) => state.selectedId
);

export const getSelected = createSelector(
  getDashboardEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

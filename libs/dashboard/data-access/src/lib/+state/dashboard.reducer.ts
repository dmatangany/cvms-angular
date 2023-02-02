import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as DashboardActions from './dashboard.actions';
import { DashboardEntity } from './dashboard.models';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

export interface DashboardState extends EntityState<DashboardEntity> {
  selectedId?: string | number; // which Dashboard record has been selected
  loaded: boolean; // has the Dashboard list been loaded
  error?: string | null; // last known error (if any)
}

export interface DashboardPartialState {
  readonly [DASHBOARD_FEATURE_KEY]: DashboardState;
}

export const dashboardAdapter: EntityAdapter<DashboardEntity> =
  createEntityAdapter<DashboardEntity>();

export const initialDashboardState: DashboardState =
  dashboardAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialDashboardState,
  on(DashboardActions.initDashboard, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DashboardActions.loadDashboardSuccess, (state, { dashboard }) =>
    dashboardAdapter.setAll(dashboard, { ...state, loaded: true })
  ),
  on(DashboardActions.loadDashboardFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function dashboardReducer(
  state: DashboardState | undefined,
  action: Action
) {
  return reducer(state, action);
}

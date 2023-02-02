import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AuditsActions from './audits.actions';
import { AuditsEntity } from './audits.models';
import { ClrLoadingState } from '@clr/angular';

export const AUDITS_FEATURE_KEY = 'audits';

export interface State extends EntityState<AuditsEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedAudit: AuditsEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface AuditsPartialState {
  readonly [AUDITS_FEATURE_KEY]: State;
}

export const auditsAdapter: EntityAdapter<AuditsEntity> =
  createEntityAdapter<AuditsEntity>();

export const initialState: State = auditsAdapter.getInitialState({
  loaded: false,
  loading: false,
  error: undefined,
  selectedAudit: undefined,
  total: 0,
  btnState: ClrLoadingState.DEFAULT,
  currentPage: 0,
});

const auditsReducer = createReducer(
  initialState,
  on(
    AuditsActions.loadAudits,
    AuditsActions.loadClientAudits,
    AuditsActions.loadAuditsByPerformer,
    (state) => ({
      ...state,
      loaded: false,
      error: undefined,
      loading: true,
    })
  ),

  on(
    AuditsActions.loadAuditsSuccess,
    AuditsActions.loadClientAuditsSuccess,
    AuditsActions.loadAuditsByPerformerSuccess,
    (state, { audits, total, page }) =>
      auditsAdapter.setAll(audits, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    AuditsActions.loadAuditsFailure,
    AuditsActions.loadClientAuditsFailure,
    AuditsActions.loadAuditsByPerformerFailure,
    (state, { error }) => ({
      ...state,
      error,
      loading: false,
      loaded: false,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return auditsReducer(state, action);
}

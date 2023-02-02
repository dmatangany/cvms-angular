import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AuthoritiesActions from './authorities.actions';
import { AuthoritiesEntity } from './authorities.models';
import { ClrLoadingState } from '@clr/angular';

export const AUTHORITIES_FEATURE_KEY = 'authorities';

export interface State extends EntityState<AuthoritiesEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedAuthoritie: AuthoritiesEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface AuthoritiesPartialState {
  readonly [AUTHORITIES_FEATURE_KEY]: State;
}

export const authoritiesAdapter: EntityAdapter<AuthoritiesEntity> =
  createEntityAdapter<AuthoritiesEntity>();

export const initialState: State = authoritiesAdapter.getInitialState({
  loaded: false,
  loading: false,
  error: undefined,
  selectedAuthoritie: undefined,
  total: 0,
  btnState: ClrLoadingState.DEFAULT,
  currentPage: 0,
});

const authoritiesReducer = createReducer(
  initialState,
  on(AuthoritiesActions.getAllAuthorities, (state) => ({
    ...state,
    loading: true,
  })),

  on(AuthoritiesActions.getAllAuthoritiesSuccess, (state, { authorities }) =>
    authoritiesAdapter.setAll(authorities, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),

  on(
    AuthoritiesActions.getAllAuthoritiesFailure,

    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return authoritiesReducer(state, action);
}

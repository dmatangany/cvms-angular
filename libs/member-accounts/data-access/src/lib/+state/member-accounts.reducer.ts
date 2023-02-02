import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as MemberAccountsActions from './member-accounts.actions';
import { MemberAccountsEntity } from './member-accounts.models';

export const MEMBER_ACCOUNTS_FEATURE_KEY = 'memberAccounts';

export interface MemberAccountsState extends EntityState<MemberAccountsEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedMemberAccounts: MemberAccountsEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface MemberAccountsPartialState {
  readonly [MEMBER_ACCOUNTS_FEATURE_KEY]: MemberAccountsState;
}

export const memberAccountsAdapter: EntityAdapter<MemberAccountsEntity> =
  createEntityAdapter<MemberAccountsEntity>();

export const initialMemberAccountsState: MemberAccountsState =
  memberAccountsAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: undefined,
    selectedMemberAccounts: undefined,
    total: 0,
    btnState: ClrLoadingState.DEFAULT,
    currentPage: 0,
  });

const reducer = createReducer(
  initialMemberAccountsState,
  on(
    MemberAccountsActions.getMemberAccountById,
    MemberAccountsActions.getPaginatedMemberAccounts,
    MemberAccountsActions.getAllMemberAccounts,
    MemberAccountsActions.getMyMemberAccount,

    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(
    MemberAccountsActions.getMemberAccountByIdSuccess,
    MemberAccountsActions.getMyMemberAccountSuccess,
    (state, { memberAccount }) => ({
      ...state,
      loading: false,
      loaded: true,
      selectedMemberAccounts: memberAccount,
    })
  ),

  on(
    MemberAccountsActions.getAllMemberAccountsSuccess,
    (state, { memberAccounts }) =>
      memberAccountsAdapter.setAll(memberAccounts, {
        ...state,
        loading: false,
        loaded: true,
      })
  ),

  on(
    MemberAccountsActions.getPaginatedMemberAccountsSuccess,
    (state, { memberAccounts, total, page }) =>
      memberAccountsAdapter.setAll(memberAccounts, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    MemberAccountsActions.getAllMemberAccountsFailure,
    MemberAccountsActions.getMyMemberAccountFailure,
    MemberAccountsActions.getMemberAccountByIdFailure,
    MemberAccountsActions.getPaginatedMemberAccountsFailure,

    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    MemberAccountsActions.createMemberAccount,
    MemberAccountsActions.updateMemberAccount,

    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    MemberAccountsActions.createMemberAccountSuccess,
    MemberAccountsActions.updateMemberAccountSuccess,

    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: true,
      error: undefined,
    })
  ),

  on(
    MemberAccountsActions.createMemberAccountFailure,
    MemberAccountsActions.updateMemberAccountFailure,

    (state, { error }) => ({
      ...state,
      error,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function memberAccountsReducer(
  state: MemberAccountsState | undefined,
  action: Action
) {
  return reducer(state, action);
}

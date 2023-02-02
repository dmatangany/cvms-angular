import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AccountTransactionsActions from './account-transactions.actions';
import { AccountTransactionsEntity } from './account-transactions.models';

export const ACCOUNT_TRANSACTIONS_FEATURE_KEY = 'accountTransactions';

export interface AccountTransactionsState
  extends EntityState<AccountTransactionsEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedAccountTransaction: AccountTransactionsEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface AccountTransactionsPartialState {
  readonly [ACCOUNT_TRANSACTIONS_FEATURE_KEY]: AccountTransactionsState;
}

export const accountTransactionsAdapter: EntityAdapter<AccountTransactionsEntity> =
  createEntityAdapter<AccountTransactionsEntity>();

export const initialAccountTransactionsState: AccountTransactionsState =
  accountTransactionsAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: undefined,
    selectedAccountTransaction: undefined,
    total: 0,
    btnState: ClrLoadingState.DEFAULT,
    currentPage: 0,
  });

const reducer = createReducer(
  initialAccountTransactionsState,
  on(
    AccountTransactionsActions.getAccountTransactionById,
    AccountTransactionsActions.getPaginatedAccountTransactions,
    AccountTransactionsActions.getPaginatedAccountTransactionsByMemberId,
    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(
    AccountTransactionsActions.getAccountTransactionByIdSuccess,
    (state, { accountTransaction }) => ({
      ...state,
      loading: false,
      loaded: true,
      selectedAccountTransaction: accountTransaction,
    })
  ),

  on(
    AccountTransactionsActions.getPaginatedAccountTransactionsSuccess,
    AccountTransactionsActions.getPaginatedAccountTransactionsByMemberIdSuccess,
    (state, { accountTransactions, total, page }) =>
      accountTransactionsAdapter.setAll(accountTransactions, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    AccountTransactionsActions.getAccountTransactionByIdFailure,
    AccountTransactionsActions.getPaginatedAccountTransactionsFailure,
    AccountTransactionsActions.getPaginatedAccountTransactionsByMemberIdFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(AccountTransactionsActions.getAccountTransactionsReports, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    btnState: ClrLoadingState.LOADING,
  })),
  on(
    AccountTransactionsActions.getAccountTransactionsReportsSuccess,
    (state) => ({
      ...state,
      loading: false,
      loaded: false,
      btnState: ClrLoadingState.SUCCESS,
    })
  ),
  on(
    AccountTransactionsActions.getAccountTransactionsReportsFailure,
    (state) => ({
      ...state,
      loading: false,
      loaded: false,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function accountTransactionsReducer(
  state: AccountTransactionsState | undefined,
  action: Action
) {
  return reducer(state, action);
}

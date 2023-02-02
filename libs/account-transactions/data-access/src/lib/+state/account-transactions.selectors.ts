import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ACCOUNT_TRANSACTIONS_FEATURE_KEY,
  AccountTransactionsState,
  accountTransactionsAdapter,
} from './account-transactions.reducer';

// Lookup the 'AccountTransactions' feature state managed by NgRx
export const getAccountTransactionsState =
  createFeatureSelector<AccountTransactionsState>(
    ACCOUNT_TRANSACTIONS_FEATURE_KEY
  );

const { selectAll, selectEntities } = accountTransactionsAdapter.getSelectors();

export const getAccountTransactionsLoaded = createSelector(
  getAccountTransactionsState,
  (state: AccountTransactionsState) => state.loaded
);

export const getAccountTransactionsError = createSelector(
  getAccountTransactionsState,
  (state: AccountTransactionsState) => state.error
);

export const getAllAccountTransactions = createSelector(
  getAccountTransactionsState,
  (state: AccountTransactionsState) => selectAll(state)
);

export const getAccountTransactionsEntities = createSelector(
  getAccountTransactionsState,
  (state: AccountTransactionsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAccountTransactionsState,
  (state: AccountTransactionsState) => state.selectedId
);

export const getSelected = (accountTransactionId: string | number) =>
  createSelector(
    getAccountTransactionsEntities,
    (entities) => entities[accountTransactionId]
  );

export const getSelectedAccountTransaction = createSelector(
  getAccountTransactionsState,
  (state: AccountTransactionsState) => state.selectedAccountTransaction
);

export const getTotalAccountTransactions = createSelector(
  getAccountTransactionsState,
  (state: AccountTransactionsState) => state.total
);

export const getCurrentPageState = createSelector(
  getAccountTransactionsState,
  (state: AccountTransactionsState) => state.currentPage
);

export const getAccountTransactionsLoadingState = createSelector(
  getAccountTransactionsState,
  (state: AccountTransactionsState) => state.loading
);

export const getBtnState = createSelector(
  getAccountTransactionsState,
  (state: AccountTransactionsState) => state.btnState
);

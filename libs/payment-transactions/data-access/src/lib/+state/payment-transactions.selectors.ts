import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PAYMENT_TRANSACTIONS_FEATURE_KEY,
  PaymentTransactionsState,
  paymentTransactionsAdapter,
} from './payment-transactions.reducer';

// Lookup the 'PaymentTransactions' feature state managed by NgRx
export const getPaymentTransactionsState =
  createFeatureSelector<PaymentTransactionsState>(
    PAYMENT_TRANSACTIONS_FEATURE_KEY
  );

const { selectAll, selectEntities } = paymentTransactionsAdapter.getSelectors();

export const getPaymentTransactionsLoaded = createSelector(
  getPaymentTransactionsState,
  (state: PaymentTransactionsState) => state.loaded
);

export const getPaymentTransactionsError = createSelector(
  getPaymentTransactionsState,
  (state: PaymentTransactionsState) => state.error
);

export const getAllPaymentTransactions = createSelector(
  getPaymentTransactionsState,
  (state: PaymentTransactionsState) => selectAll(state)
);

export const getPaymentTransactionsEntities = createSelector(
  getPaymentTransactionsState,
  (state: PaymentTransactionsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getPaymentTransactionsState,
  (state: PaymentTransactionsState) => state.selectedId
);

export const getSelected = (paymentTransactionId: string | number) =>
  createSelector(
    getPaymentTransactionsEntities,
    (entities) => entities[paymentTransactionId]
  );

export const getSelectedPaymentTransaction = createSelector(
  getPaymentTransactionsState,
  (state: PaymentTransactionsState) => state.selectedPaymentTransaction
);

export const getTotalPaymentTransactions = createSelector(
  getPaymentTransactionsState,
  (state: PaymentTransactionsState) => state.total
);

export const getCurrentPageState = createSelector(
  getPaymentTransactionsState,
  (state: PaymentTransactionsState) => state.currentPage
);

export const getPaymentTransactionsLoadingState = createSelector(
  getPaymentTransactionsState,
  (state: PaymentTransactionsState) => state.loading
);

export const getBtnState = createSelector(
  getPaymentTransactionsState,
  (state: PaymentTransactionsState) => state.btnState
);

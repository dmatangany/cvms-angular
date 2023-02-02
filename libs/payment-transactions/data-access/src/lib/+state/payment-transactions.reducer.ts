import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PaymentTransactionsActions from './payment-transactions.actions';
import { PaymentTransactionsEntity } from './payment-transactions.models';

export const PAYMENT_TRANSACTIONS_FEATURE_KEY = 'paymentTransactions';

export interface PaymentTransactionsState
  extends EntityState<PaymentTransactionsEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedPaymentTransaction: PaymentTransactionsEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface PaymentTransactionsPartialState {
  readonly [PAYMENT_TRANSACTIONS_FEATURE_KEY]: PaymentTransactionsState;
}

export const paymentTransactionsAdapter: EntityAdapter<PaymentTransactionsEntity> =
  createEntityAdapter<PaymentTransactionsEntity>();

export const initialPaymentTransactionsState: PaymentTransactionsState =
  paymentTransactionsAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: undefined,
    selectedPaymentTransaction: undefined,
    total: 0,
    btnState: ClrLoadingState.DEFAULT,
    currentPage: 0,
  });

const reducer = createReducer(
  initialPaymentTransactionsState,
  on(
    PaymentTransactionsActions.getPaymentTransactionById,
    PaymentTransactionsActions.getPaginatedPaymentTransactions,
    PaymentTransactionsActions.getPaginatedPaymentTransactionsByMemberId,
    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(
    PaymentTransactionsActions.getPaymentTransactionByIdSuccess,
    (state, { paymentTransaction }) => ({
      ...state,
      loading: false,
      loaded: true,
      selectedPaymentTransaction: paymentTransaction,
    })
  ),

  on(
    PaymentTransactionsActions.getPaginatedPaymentTransactionsSuccess,
    PaymentTransactionsActions.getPaginatedPaymentTransactionsByMemberIdSuccess,
    (state, { paymentTransactions, total, page }) =>
      paymentTransactionsAdapter.setAll(paymentTransactions, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    PaymentTransactionsActions.getPaymentTransactionByIdFailure,
    PaymentTransactionsActions.getPaginatedPaymentTransactionsFailure,
    PaymentTransactionsActions.getPaginatedPaymentTransactionsByMemberIdFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    PaymentTransactionsActions.loadAccount,
    PaymentTransactionsActions.walkinLoadAccount,
    PaymentTransactionsActions.getPaymentTransactionsReports,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    PaymentTransactionsActions.loadAccountSuccess,
    PaymentTransactionsActions.walkinLoadAccountSuccess,
    PaymentTransactionsActions.getPaymentTransactionsReportsSuccess,
    (state) => ({
      ...state,
      loaded: true,
      btnState: ClrLoadingState.SUCCESS,
    })
  ),

  on(
    PaymentTransactionsActions.loadAccountFailure,
    PaymentTransactionsActions.walkinLoadAccountFailure,
    PaymentTransactionsActions.getPaymentTransactionsReportsFailure,
    (state, { error }) => ({
      ...state,
      error: error,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function paymentTransactionsReducer(
  state: PaymentTransactionsState | undefined,
  action: Action
) {
  return reducer(state, action);
}

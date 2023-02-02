import { ClrDatagridStateInterface } from '@clr/angular';
import { createAction, props } from '@ngrx/store';
import { PaymentTransactionsEntity } from './payment-transactions.models';

export const getPaymentTransactionById = createAction(
  '[PaymentTransactions] Get PaymentTransaction',
  props<{ paymentTransactionId: string | number }>()
);

export const getPaymentTransactionByIdSuccess = createAction(
  '[PaymentTransactions] Get PaymentTransaction Success',
  props<{ paymentTransaction: PaymentTransactionsEntity }>()
);

export const getPaymentTransactionByIdFailure = createAction(
  '[PaymentTransactions] Get PaymentTransaction Failure',
  props<{ error: any }>()
);

export const getPaginatedPaymentTransactionsByMemberId = createAction(
  '[PaymentTransactions] Get Paginated PaymentTransactions By MemberId',
  props<{ memberId: any; state: ClrDatagridStateInterface }>()
);

export const getPaginatedPaymentTransactionsByMemberIdSuccess = createAction(
  '[PaymentTransactions] Get Paginated PaymentTransactions By MemberId Success',
  props<{
    paymentTransactions: PaymentTransactionsEntity[];
    total: number;
    page: number;
  }>()
);

export const getPaginatedPaymentTransactionsByMemberIdFailure = createAction(
  '[PaymentTransactions] Get Paginated PaymentTransactions By MemberId Failure',
  props<{ error: Error }>()
);

export const getPaginatedPaymentTransactions = createAction(
  '[PaymentTransactions] Get Paginated PaymentTransactions',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedPaymentTransactionsSuccess = createAction(
  '[PaymentTransactions] Get Paginated PaymentTransactions Success',
  props<{
    paymentTransactions: PaymentTransactionsEntity[];
    total: number;
    page: number;
  }>()
);

export const getPaginatedPaymentTransactionsFailure = createAction(
  '[PaymentTransactions] Get Paginated PaymentTransactions Failure',
  props<{ error: Error }>()
);

export const loadAccount = createAction(
  '[Payments/Load Account] Load Account',
  props<{ loadAccountContext: any }>()
);

export const loadAccountSuccess = createAction(
  '[Payments/Load Account] Load Account Success',
  props<{ transaction: PaymentTransactionsEntity }>()
);

export const loadAccountFailure = createAction(
  '[Payments/Load Account] Load Account Failure',
  props<{ error: Error }>()
);

export const walkinLoadAccount = createAction(
  '[Payments/Load Account] Walk in Load Account',
  props<{ walkInLoadAccountContext: any }>()
);

export const walkinLoadAccountSuccess = createAction(
  '[Payments/Load Account]Walk In Load Account Success',
  props<{ transaction: PaymentTransactionsEntity }>()
);

export const walkinLoadAccountFailure = createAction(
  '[Payments/Load Account] Walk In Load Account Failure',
  props<{ error: Error }>()
);

export const getPaymentTransactionsReports = createAction(
  '[PaymentTransactions] Get PaymentTransactions Report',
  props<{ reportContext: any }>()
);

export const getPaymentTransactionsReportsSuccess = createAction(
  '[PaymentTransactions] Get PaymentTransactions Report Success',
  props<{ report: any }>()
);

export const getPaymentTransactionsReportsFailure = createAction(
  '[PaymentTransactions] Get PaymentTransactions Report Failure',
  props<{ error: Error }>()
);

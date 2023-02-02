import { ClrDatagridStateInterface } from '@clr/angular';
import { createAction, props } from '@ngrx/store';
import { AccountTransactionsEntity } from './account-transactions.models';

export const getAccountTransactionById = createAction(
  '[AccountTransactions] Get AccountTransaction',
  props<{ accountTransactionId: string | number }>()
);

export const getAccountTransactionByIdSuccess = createAction(
  '[AccountTransactions] Get AccountTransaction Success',
  props<{ accountTransaction: AccountTransactionsEntity }>()
);

export const getAccountTransactionByIdFailure = createAction(
  '[AccountTransactions] Get AccountTransaction Failure',
  props<{ error: any }>()
);

export const getPaginatedAccountTransactionsByMemberId = createAction(
  '[AccountTransactions] Get Paginated AccountTransactions  By MemberId',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedAccountTransactionsByMemberIdSuccess = createAction(
  '[AccountTransactions] Get Paginated AccountTransactions  By MemberId Success',
  props<{
    accountTransactions: AccountTransactionsEntity[];
    total: number;
    page: number;
  }>()
);

export const getPaginatedAccountTransactionsByMemberIdFailure = createAction(
  '[AccountTransactions] Get Paginated AccountTransactions  By MemberId Failure',
  props<{ error: Error }>()
);

export const getPaginatedAccountTransactions = createAction(
  '[AccountTransactions] Get Paginated AccountTransactions',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedAccountTransactionsSuccess = createAction(
  '[AccountTransactions] Get Paginated AccountTransactions Success',
  props<{
    accountTransactions: AccountTransactionsEntity[];
    total: number;
    page: number;
  }>()
);

export const getPaginatedAccountTransactionsFailure = createAction(
  '[AccountTransactions] Get Paginated AccountTransactions Failure',
  props<{ error: Error }>()
);

export const getAccountTransactionsReports = createAction(
  '[AccountTransactions] Get AccountTransactions Report',
  props<{ reportContext: any }>()
);

export const getAccountTransactionsReportsSuccess = createAction(
  '[AccountTransactions] Get AccountTransactions Report Success',
  props<{ report: any }>()
);

export const getAccountTransactionsReportsFailure = createAction(
  '[AccountTransactions] Get AccountTransactions Report Failure',
  props<{ error: Error }>()
);

import { Injectable } from '@angular/core';
import { Utilities } from '@membership-application/shared/utils';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { AccountTransationsService } from '../services/account-transations.service';

import * as AccountTransactionsActions from './account-transactions.actions';
import * as AccountTransactionsFeature from './account-transactions.reducer';
import * as AccountTransactionsSelectors from './account-transactions.selectors';

@Injectable()
export class AccountTransactionsEffects {
  loadAccountTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountTransactionsActions.getAccountTransactionById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(
                AccountTransactionsSelectors.getSelected(
                  action.accountTransactionId
                )
              )
            )
          )
        )
      ),
      switchMap(([action, cachedAccountTransaction]) => {
        if (cachedAccountTransaction)
          return of(
            AccountTransactionsActions.getAccountTransactionByIdSuccess({
              accountTransaction: cachedAccountTransaction,
            })
          );

        return this.accountTransactionsService
          .getAccountTransactionById(action.accountTransactionId)
          .pipe(
            map((accountTransaction) =>
              AccountTransactionsActions.getAccountTransactionByIdSuccess({
                accountTransaction,
              })
            ),
            catchError((error) =>
              of(
                AccountTransactionsActions.getAccountTransactionByIdFailure({
                  error,
                })
              )
            )
          );
      })
    )
  );

  loadAccountTransactionList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountTransactionsActions.getPaginatedAccountTransactions),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(AccountTransactionsSelectors.getCurrentPageState)
            )
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.accountTransactionsService
          .getPaginatedAccountTransactions(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((accountTransactionsObject) =>
              AccountTransactionsActions.getPaginatedAccountTransactionsSuccess(
                {
                  accountTransactions: accountTransactionsObject.content,
                  total: accountTransactionsObject.totalElements,
                  page: accountTransactionsObject.pageable.pageNumber,
                }
              )
            ),
            catchError((error) =>
              of(
                AccountTransactionsActions.getPaginatedAccountTransactionsFailure(
                  { error }
                )
              )
            )
          )
      )
    )
  );

  loadAccountTransactionListByMemberId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AccountTransactionsActions.getPaginatedAccountTransactionsByMemberId
      ),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(AccountTransactionsSelectors.getCurrentPageState)
            )
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.accountTransactionsService
          .getMyPaginatedAccountTransactions(
               Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((accountTransactionsObject) =>
              AccountTransactionsActions.getPaginatedAccountTransactionsByMemberIdSuccess(
                {
                  accountTransactions: accountTransactionsObject.content,
                  total: accountTransactionsObject.totalElements,
                  page: accountTransactionsObject.pageable.pageNumber,
                }
              )
            ),
            catchError((error) =>
              of(
                AccountTransactionsActions.getPaginatedAccountTransactionsByMemberIdFailure(
                  { error }
                )
              )
            )
          )
      )
    )
  );

  loadReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountTransactionsActions.getAccountTransactionsReports),
      exhaustMap((action) =>
        this.accountTransactionsService
          .getAccountTransactionsReport(action.reportContext)
          .pipe(
            map((report) =>
              AccountTransactionsActions.getAccountTransactionsReportsSuccess({
                report,
              })
            ),
            catchError((error) =>
              of(
                AccountTransactionsActions.getAccountTransactionsReportsFailure(
                  { error }
                )
              )
            )
          )
      )
    )
  );

  onReportSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AccountTransactionsActions.getAccountTransactionsReportsSuccess),
        tap((action) => {
          Utilities.displayFile(action.report);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private accountTransactionsService: AccountTransationsService,
    private store: Store<AccountTransactionsFeature.AccountTransactionsPartialState>
  ) {}
}

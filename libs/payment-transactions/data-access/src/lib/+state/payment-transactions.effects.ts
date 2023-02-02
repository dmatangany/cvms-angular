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
  mergeMap,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { PaymentTransactionsService } from '../services/payment-transactions.service';

import * as PaymentTransactionsActions from './payment-transactions.actions';
import * as PaymentTransactionsFeature from './payment-transactions.reducer';
import * as PaymentTransactionsSelectors from './payment-transactions.selectors';
@Injectable()
export class PaymentTransactionsEffects {
  loadPaymentTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaymentTransactionsActions.getPaymentTransactionById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(
                PaymentTransactionsSelectors.getSelected(
                  action.paymentTransactionId
                )
              )
            )
          )
        )
      ),
      switchMap(([action, cachedPaymentTransaction]) => {
        if (cachedPaymentTransaction)
          return of(
            PaymentTransactionsActions.getPaymentTransactionByIdSuccess({
              paymentTransaction: cachedPaymentTransaction,
            })
          );

        return this.paymentTransactionsService
          .getPaymentTransactionById(action.paymentTransactionId)
          .pipe(
            map((paymentTransaction) =>
              PaymentTransactionsActions.getPaymentTransactionByIdSuccess({
                paymentTransaction,
              })
            ),
            catchError((error) =>
              of(
                PaymentTransactionsActions.getPaymentTransactionByIdFailure({
                  error,
                })
              )
            )
          );
      })
    )
  );

  loadPaymentTransactionList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaymentTransactionsActions.getPaginatedPaymentTransactions),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(PaymentTransactionsSelectors.getCurrentPageState)
            )
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.paymentTransactionsService
          .getPaginatedPaymentTransactions(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((paymentTransactionsObject) =>
              PaymentTransactionsActions.getPaginatedPaymentTransactionsSuccess(
                {
                  paymentTransactions: paymentTransactionsObject.content,
                  total: paymentTransactionsObject.totalElements,
                  page: paymentTransactionsObject.pageable.pageNumber,
                }
              )
            ),
            catchError((error) =>
              of(
                PaymentTransactionsActions.getPaginatedPaymentTransactionsFailure(
                  { error }
                )
              )
            )
          )
      )
    )
  );

  loadPaymentTransactionListByMemberId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        PaymentTransactionsActions.getPaginatedPaymentTransactionsByMemberId
      ),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(PaymentTransactionsSelectors.getCurrentPageState)
            )
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.paymentTransactionsService
          .getMyPaginatedPaymentTransactions(
            action.memberId,
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((paymentTransactionsObject) =>
              PaymentTransactionsActions.getPaginatedPaymentTransactionsByMemberIdSuccess(
                {
                  paymentTransactions: paymentTransactionsObject.content,
                  total: paymentTransactionsObject.totalElements,
                  page: paymentTransactionsObject.pageable.pageNumber,
                }
              )
            ),
            catchError((error) =>
              of(
                PaymentTransactionsActions.getPaginatedPaymentTransactionsByMemberIdFailure(
                  { error }
                )
              )
            )
          )
      )
    )
  );

  initiateSubscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaymentTransactionsActions.loadAccount),
      mergeMap((action) =>
        this.paymentTransactionsService
          .loadAccount(action.loadAccountContext)
          .pipe(
            map((transaction) =>
              PaymentTransactionsActions.loadAccountSuccess({ transaction })
            ),
            catchError((error) =>
              of(PaymentTransactionsActions.loadAccountFailure({ error }))
            )
          )
      )
    )
  );

  walkInloadAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaymentTransactionsActions.walkinLoadAccount),
      mergeMap((action) =>
        this.paymentTransactionsService
          .walkInLoadAccount(action.walkInLoadAccountContext)
          .pipe(
            map((transaction) =>
              PaymentTransactionsActions.walkinLoadAccountSuccess({
                transaction,
              })
            ),
            catchError((error) =>
              of(PaymentTransactionsActions.walkinLoadAccountFailure({ error }))
            )
          )
      )
    )
  );

  /* onSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          PaymentTransactionsActions.loadAccountSuccess,
          PaymentTransactionsActions.walkinLoadAccount
        ),
        tap((transaction) => {
          Utilities.displayToast('success');
        })
      ),
    { dispatch: false }
  );*/

  onPayment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          PaymentTransactionsActions.loadAccountSuccess,
          PaymentTransactionsActions.walkinLoadAccountSuccess
        ),
        tap((result) => {
          result.transaction.redirectUrl
            ? window.open(result.transaction.redirectUrl)
            : Utilities.displayToast(
                'success',
                'Payment Initiated Successfully, You will be redirected to the payment page'
              );
        })
      ),
    { dispatch: false }
  );

  loadReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaymentTransactionsActions.getPaymentTransactionsReports),
      exhaustMap((action) =>
        this.paymentTransactionsService
          .getPaymentTransactionsReport(action.reportContext)
          .pipe(
            map((report) =>
              PaymentTransactionsActions.getPaymentTransactionsReportsSuccess({
                report,
              })
            ),
            catchError((error) =>
              of(
                PaymentTransactionsActions.getPaymentTransactionsReportsFailure(
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
        ofType(PaymentTransactionsActions.getPaymentTransactionsReportsSuccess),
        tap((action) => {
          Utilities.displayFile(action.report);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private paymentTransactionsService: PaymentTransactionsService,
    private store: Store<PaymentTransactionsFeature.PaymentTransactionsPartialState>
  ) {}
}

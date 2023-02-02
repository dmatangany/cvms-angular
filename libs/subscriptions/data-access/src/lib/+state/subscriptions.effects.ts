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
import { SubscriptionsSelectors } from '../..';
import { SubscriptionsService } from '../services/subscriptions.service';

import * as SubscriptionsActions from './subscriptions.actions';
import * as SubscriptionsFeature from './subscriptions.reducer';
import {
  getMemberSubscriptionsByMemberIdFailure,
  getMemberSubscriptionsByMemberIdSuccess
} from "./subscriptions.actions";

@Injectable()
export class SubscriptionsEffects {
  loadSubscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubscriptionsActions.getSubscriptionById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(SubscriptionsSelectors.getSelected(action.subscriptionId))
            )
          )
        )
      ),
      switchMap(([action, cachedSubscription]) => {
        if (cachedSubscription)
          return of(
            SubscriptionsActions.getSubscriptionByIdSuccess({
              subscription: cachedSubscription,
            })
          );

        return this.subscriptionsService
          .getSubscription(action.subscriptionId)
          .pipe(
            map((subscription) =>
              SubscriptionsActions.getSubscriptionByIdSuccess({ subscription })
            ),
            catchError((error) =>
              of(SubscriptionsActions.getSubscriptionByIdFailure({ error }))
            )
          );
      })
    )
  );

  loadAllSubscriptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubscriptionsActions.getAllSubscriptions),
      exhaustMap(() =>
        this.subscriptionsService.getAllSubscriptions().pipe(
          map((subscriptions) =>
            SubscriptionsActions.getAllSubscriptionsSuccess({ subscriptions })
          ),
          catchError((error) =>
            of(SubscriptionsActions.getAllSubscriptionsFailure({ error }))
          )
        )
      )
    )
  );

  loadSubscriptionList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubscriptionsActions.getPaginatedSubscriptions),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(SubscriptionsSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.subscriptionsService
          .getPaginatedSubscriptions(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((subscriptionsObject) =>
              SubscriptionsActions.getPaginatedSubscriptionsSuccess({
                subscriptions: subscriptionsObject.content,
                total: subscriptionsObject.totalElements,
                page: subscriptionsObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(
                SubscriptionsActions.getPaginatedSubscriptionsFailure({ error })
              )
            )
          )
      )
    )
  );

  loadMemberSubscriptionList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubscriptionsActions.getMyMemberSubscriptions),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(SubscriptionsSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.subscriptionsService
          .getMemberSubscriptions(
            action.memberId,
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((subscriptionsObject) =>
              SubscriptionsActions.getMyMemberSubscriptionsSuccess({
                subscriptions: subscriptionsObject.content,
                total: subscriptionsObject.totalElements,
                page: subscriptionsObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(
                SubscriptionsActions.getMyMemberSubscriptionsFailure({ error })
              )
            )
          )
      )
    )
  );

 loadPaginatedMemberSubscriptionList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubscriptionsActions.getPaginatedSubscriptionsByMember),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(SubscriptionsSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.subscriptionsService
          .getPaginatedMemberSubscriptions(
            action.memberId,
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((subscriptionsObject) =>
              SubscriptionsActions.getPaginatedSubscriptionsByMemberSuccess({
                subscriptions: subscriptionsObject.content,
                total: subscriptionsObject.totalElements,
                page: subscriptionsObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(
                SubscriptionsActions.getPaginatedSubscriptionsByMemberFailure({ error })
              )
            )
          )
      )
    )
  );

  loadMemberSubscriptionByMemberIdList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubscriptionsActions.getMemberSubscriptionsByMemberId),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(SubscriptionsSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.subscriptionsService
          .getMemberSubscriptionsByMemberId(
            action.memberId
          )
          .pipe(
            map((subscriptionsObject) =>
              SubscriptionsActions.getMemberSubscriptionsByMemberIdSuccess({
                subscriptions: subscriptionsObject.content,
                total: subscriptionsObject.totalElements,
                page: subscriptionsObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(
                SubscriptionsActions.getMemberSubscriptionsByMemberIdFailure({ error })
              )
            )
          )
      )
    )
  );
  createSubscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubscriptionsActions.createSubscription),
      mergeMap((action) =>
        this.subscriptionsService
          .createSubscription(action.subscriptionDetails)
          .pipe(
            map((subscription) =>
              SubscriptionsActions.createSubscriptionSuccess(subscription)
            ),
            catchError((error) =>
              of(SubscriptionsActions.createSubscriptionFailure({ error }))
            )
          )
      )
    )
  );

  getMySubscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubscriptionsActions.getMyCurrentSubscription),
      mergeMap((action) =>
        this.subscriptionsService.getMyCurrentSubscription().pipe(
          map((subscription) =>
            SubscriptionsActions.getMyCurrentSubscriptionSuccess({
              subscription,
            })
          ),
          catchError((error) =>
            of(SubscriptionsActions.getMyCurrentSubscriptionFailure({ error }))
          )
        )
      )
    )
  );

  updateSubscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubscriptionsActions.updateSubscription),
      mergeMap((action) =>
        this.subscriptionsService
          .updateSubscription(action.subscriptionDetails)
          .pipe(
            map((subscription) =>
              SubscriptionsActions.updateSubscriptionSuccess(subscription)
            ),
            catchError((error) =>
              of(SubscriptionsActions.updateSubscriptionFailure({ error }))
            )
          )
      )
    )
  );

  initiateSubscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubscriptionsActions.initiateSubscription),
      mergeMap((action) =>
        this.subscriptionsService
          .initiateSubscription(action.subscriptionContext)
          .pipe(
            map(() => SubscriptionsActions.initiateSubscriptionSuccess()),
            catchError((error) =>
              of(SubscriptionsActions.initiateSubscriptionFailure({ error }))
            )
          )
      )
    )
  );

  onSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          SubscriptionsActions.createSubscriptionSuccess,
          SubscriptionsActions.updateSubscriptionSuccess,
          SubscriptionsActions.initiateSubscriptionSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  /*onInitiateSubscriptu$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SubscriptionsActions.initiateSubscriptionFailure),
        tap((error) => {
          error.error.message===''
          Utilities.displayToast('success');
        })
      ),
    { dispatch: false }
  );*/

  constructor(
    private actions$: Actions,
    private subscriptionsService: SubscriptionsService,
    private store: Store<SubscriptionsFeature.SubscriptionsPartialState>
  ) {}
}

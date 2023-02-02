import { Injectable } from '@angular/core';
import { Utilities } from '@membership-application/shared/utils';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import {
  concatMap,
  of,
  withLatestFrom,
  switchMap,
  map,
  catchError,
  mergeMap,
  exhaustMap,
  tap,
} from 'rxjs';
import { MemberAccountsService } from '../services/member-accounts.service';

import * as MemberAccountsActions from './member-accounts.actions';
import * as MemberAccountsFeature from './member-accounts.reducer';
import * as MemberAccountsSelectors from './member-accounts.selectors';

@Injectable()
export class MemberAccountsEffects {
  loadMemberAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAccountsActions.getMemberAccountById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(
                MemberAccountsSelectors.getSelected(action.memberAccountId)
              )
            )
          )
        )
      ),
      switchMap(([action, cachedMemberAccount]) => {
        if (cachedMemberAccount)
          return of(
            MemberAccountsActions.getMemberAccountByIdSuccess({
              memberAccount: cachedMemberAccount,
            })
          );

        return this.memberAccountsService
          .getMemberAccountById(action.memberAccountId)
          .pipe(
            map((memberAccount) =>
              MemberAccountsActions.getMemberAccountByIdSuccess({
                memberAccount,
              })
            ),
            catchError((error) =>
              of(MemberAccountsActions.getMemberAccountByIdFailure({ error }))
            )
          );
      })
    )
  );

  createMemberAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAccountsActions.createMemberAccount),
      mergeMap((action) =>
        this.memberAccountsService
          .createMemberAccount(action.memberAccountDetails)
          .pipe(
            map((memberAccount) =>
              MemberAccountsActions.createMemberAccountSuccess(memberAccount)
            ),
            catchError((error) =>
              of(MemberAccountsActions.createMemberAccountFailure({ error }))
            )
          )
      )
    )
  );

  updateMemberAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAccountsActions.updateMemberAccount),
      mergeMap((action) =>
        this.memberAccountsService
          .updateMemberAccount(action.memberAccountDetails)
          .pipe(
            map((memberAccount) =>
              MemberAccountsActions.updateMemberAccountSuccess(memberAccount)
            ),
            catchError((error) =>
              of(MemberAccountsActions.updateMemberAccountFailure({ error }))
            )
          )
      )
    )
  );

  getMyMemberAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAccountsActions.getMyMemberAccount),
      mergeMap((action) =>
        this.memberAccountsService.getMyMemberAccount().pipe(
          map((memberAccount) =>
            MemberAccountsActions.getMyMemberAccountSuccess({ memberAccount })
          ),
          catchError((error) =>
            of(MemberAccountsActions.getMyMemberAccountFailure({ error }))
          )
        )
      )
    )
  );

  loadAllMemberAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAccountsActions.getAllMemberAccounts),
      exhaustMap(() =>
        this.memberAccountsService.getAllMemberAccounts().pipe(
          map((memberAccounts) =>
            MemberAccountsActions.getAllMemberAccountsSuccess({
              memberAccounts,
            })
          ),
          catchError((error) =>
            of(MemberAccountsActions.getAllMemberAccountsFailure({ error }))
          )
        )
      )
    )
  );

  loadMemberAccountList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAccountsActions.getPaginatedMemberAccounts),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(MemberAccountsSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.memberAccountsService
          .getPaginatedMemberAccounts(
            Utilities.formatDatagridState(
              action?.state,
              action.state?.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((memberAccountsObject) =>
              MemberAccountsActions.getPaginatedMemberAccountsSuccess({
                memberAccounts: memberAccountsObject.content,
                total: memberAccountsObject.totalElements,
                page: memberAccountsObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(
                MemberAccountsActions.getPaginatedMemberAccountsFailure({
                  error,
                })
              )
            )
          )
      )
    )
  );

  onSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          MemberAccountsActions.createMemberAccountSuccess,
          MemberAccountsActions.updateMemberAccountSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private memberAccountsService: MemberAccountsService,
    private store: Store<MemberAccountsFeature.MemberAccountsPartialState>
  ) {}
}

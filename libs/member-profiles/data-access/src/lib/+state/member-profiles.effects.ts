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
import { MemberProfilesSelectors } from '../..';
import { MemberProfilesService } from '../services/member-profiles.service';

import * as MemberProfilesActions from './member-profiles.actions';
import * as MemberProfilesFeature from './member-profiles.reducer';

@Injectable()
export class MemberProfilesEffects {
  loadMemberProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberProfilesActions.getMemberProfileById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(
                MemberProfilesSelectors.getSelected(action.memberProfileId)
              )
            )
          )
        )
      ),
      switchMap(([action, cachedMemberProfile]) => {
        if (cachedMemberProfile)
          return of(
            MemberProfilesActions.getMemberProfileByIdSuccess({
              memberProfile: cachedMemberProfile,
            })
          );

        return this.memberProfilesService
          .getMemberProfileById(action.memberProfileId)
          .pipe(
            map((memberProfile) =>
              MemberProfilesActions.getMemberProfileByIdSuccess({
                memberProfile,
              })
            ),
            catchError((error) =>
              of(MemberProfilesActions.getMemberProfileByIdFailure({ error }))
            )
          );
      })
    )
  );

  createMemberProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberProfilesActions.createMemberProfile),
      mergeMap((action) =>
        this.memberProfilesService
          .createMemberProfile(action.memberProfileDetails)
          .pipe(
            map((memberProfile) =>
              MemberProfilesActions.createMemberProfileSuccess(memberProfile)
            ),
            catchError((error) =>
              of(MemberProfilesActions.createMemberProfileFailure({ error }))
            )
          )
      )
    )
  );

  createMemberPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberProfilesActions.createMemberPayment),
      mergeMap((action) =>
        this.memberProfilesService
          .createMemberPayment(action.memberPaymentDetails)
          .pipe(
            map((memberPayment) =>
              MemberProfilesActions.createMemberPaymentSuccess(memberPayment)
            ),
            catchError((error) =>
              of(MemberProfilesActions.createMemberPaymentFailure({ error }))
            )
          )
      )
    )
  );

  updateMemberProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberProfilesActions.updateMemberProfile),
      mergeMap((action) =>
        this.memberProfilesService
          .updateMemberProfile(action.memberProfileDetails)
          .pipe(
            map((memberProfile) =>
              MemberProfilesActions.updateMemberProfileSuccess(memberProfile)
            ),
            catchError((error) =>
              of(MemberProfilesActions.updateMemberProfileFailure({ error }))
            )
          )
      )
    )
  );

  getMyMemberProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberProfilesActions.getMyMemberProfile),
      mergeMap((action) =>
        this.memberProfilesService.getMyMemberProfile().pipe(
          map((memberProfile) =>
            MemberProfilesActions.getMyMemberProfileSuccess({ memberProfile })
          ),
          catchError((error) =>
            of(MemberProfilesActions.getMyMemberProfileFailure({ error }))
          )
        )
      )
    )
  );

  loadAllMemberProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberProfilesActions.getAllMemberProfiles),
      exhaustMap(() =>
        this.memberProfilesService.getAllMemberProfiles().pipe(
          map((memberProfiles) =>
            MemberProfilesActions.getAllMemberProfilesSuccess({
              memberProfiles,
            })
          ),
          catchError((error) =>
            of(MemberProfilesActions.getAllMemberProfilesFailure({ error }))
          )
        )
      )
    )
  );

  loadMemberProfileList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberProfilesActions.getPaginatedMemberProfiles),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(MemberProfilesSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.memberProfilesService
          .getPaginatedMemberProfiles(
            Utilities.formatDatagridState(
              action?.state,
              action.state?.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((memberProfilesObject) =>
              MemberProfilesActions.getPaginatedMemberProfilesSuccess({
                memberProfiles: memberProfilesObject.content,
                total: memberProfilesObject.totalElements,
                page: memberProfilesObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(
                MemberProfilesActions.getPaginatedMemberProfilesFailure({
                  error,
                })
              )
            )
          )
      )
    )
  );
  loadMemberProfileListByMemberType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberProfilesActions.getPaginatedMemberProfilesByMemberType),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(MemberProfilesSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.memberProfilesService
          .getPaginatedMemberProfilesByMemberType(
            action.memberTypeId,
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((memberProfilesObject) =>
              MemberProfilesActions.getPaginatedMemberProfilesByMemberTypeSuccess({
                memberProfiles: memberProfilesObject.content,
                total: memberProfilesObject.totalElements,
                page: memberProfilesObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(MemberProfilesActions.getPaginatedMemberProfilesByMemberTypeFailure({ error }))
            )
          )
      )
    )
  );

  loadMemberProfileListByUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberProfilesActions.getMemberProfileByUser),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(MemberProfilesSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.memberProfilesService
          .getMemberProfileByUser(
            action.userId
          )
          .pipe(
            map((memberProfilesObject) =>
              MemberProfilesActions.getMemberProfileByUserSuccess({
                memberProfiles: memberProfilesObject.content,
                total: memberProfilesObject.totalElements,
                page: memberProfilesObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(MemberProfilesActions.getMemberProfileByUserFailure({ error }))
            )
          )
      )
    )
  );
  onSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          MemberProfilesActions.createMemberProfileSuccess,
          MemberProfilesActions.updateMemberProfileSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private memberProfilesService: MemberProfilesService,
    private store: Store<MemberProfilesFeature.MemberProfilesPartialState>
  ) {}
}

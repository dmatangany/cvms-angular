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
import { MemberPackagesSelectors } from '../..';
import { MemberPackagesService } from '../services/member-packages.service';

import * as MemberPackagesActions from './member-packages.actions';
import * as MemberPackagesFeature from './member-packages.reducer';

@Injectable()
export class MemberPackagesEffects {
  loadMemberPackage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberPackagesActions.getMemberPackageById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(
                MemberPackagesSelectors.getSelected(action.memberPackageId)
              )
            )
          )
        )
      ),
      switchMap(([action, cachedMemberPackage]) => {
        if (cachedMemberPackage)
          return of(
            MemberPackagesActions.getMemberPackageByIdSuccess({
              memberPackage: cachedMemberPackage,
            })
          );

        return this.memberPackagesService
          .getMemberPackageById(action.memberPackageId)
          .pipe(
            map((memberPackage) =>
              MemberPackagesActions.getMemberPackageByIdSuccess({
                memberPackage,
              })
            ),
            catchError((error) =>
              of(MemberPackagesActions.getMemberPackageByIdFailure({ error }))
            )
          );
      })
    )
  );

  createMemberPackage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberPackagesActions.createMemberPackage),
      mergeMap((action) =>
        this.memberPackagesService
          .createMemberPackage(action.memberPackageDetails)
          .pipe(
            map((memberPackage) =>
              MemberPackagesActions.createMemberPackageSuccess(memberPackage)
            ),
            catchError((error) =>
              of(MemberPackagesActions.createMemberPackageFailure({ error }))
            )
          )
      )
    )
  );

  updateMemberPackage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberPackagesActions.updateMemberPackage),
      mergeMap((action) =>
        this.memberPackagesService
          .updateMemberPackage(action.memberPackageDetails)
          .pipe(
            map((memberPackage) =>
              MemberPackagesActions.updateMemberPackageSuccess(memberPackage)
            ),
            catchError((error) =>
              of(MemberPackagesActions.updateMemberPackageFailure({ error }))
            )
          )
      )
    )
  );

  deleteMemberPackage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberPackagesActions.deleteMemberPackage),
      mergeMap((action) =>
        this.memberPackagesService
          .deleteMemberPackage(action.memberPackageId)
          .pipe(
            map(() => MemberPackagesActions.deleteMemberPackageSuccess()),
            catchError((error) =>
              of(MemberPackagesActions.deleteMemberPackageFailure({ error }))
            )
          )
      )
    )
  );

  loadAllMemberPackages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberPackagesActions.getAllMemberPackages),
      exhaustMap(() =>
        this.memberPackagesService.getAllMemberPackages().pipe(
          map((memberPackages) =>
            MemberPackagesActions.getAllMemberPackagesSuccess({
              memberPackages,
            })
          ),
          catchError((error) =>
            of(MemberPackagesActions.getAllMemberPackagesFailure({ error }))
          )
        )
      )
    )
  );

  loadAllMemberPackagesByMemberType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberPackagesActions.getAllMemberPackagesByMemberType),
      exhaustMap((action) =>
        this.memberPackagesService
          .getAllMemberPackagesByMemberType(action.memberTypeId)
          .pipe(
            map((memberPackages) =>
              MemberPackagesActions.getAllMemberPackagesByMemberTypeSuccess({
                memberPackages,
              })
            ),
            catchError((error) =>
              of(
                MemberPackagesActions.getAllMemberPackagesByMemberTypeFailure({
                  error,
                })
              )
            )
          )
      )
    )
  );

  loadMemberPackageList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberPackagesActions.getPaginatedMemberPackages),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(MemberPackagesSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.memberPackagesService
          .getPaginatedMemberPackages(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((memberPackagesObject) =>
              MemberPackagesActions.getPaginatedMemberPackagesSuccess({
                memberPackages: memberPackagesObject.content,
                total: memberPackagesObject.totalElements,
                page: memberPackagesObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(
                MemberPackagesActions.getPaginatedMemberPackagesFailure({
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
          MemberPackagesActions.createMemberPackageSuccess,
          MemberPackagesActions.updateMemberPackageSuccess,
          MemberPackagesActions.deleteMemberPackageSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private memberPackagesService: MemberPackagesService,
    private store: Store<MemberPackagesFeature.MemberPackagesPartialState>
  ) {}
}

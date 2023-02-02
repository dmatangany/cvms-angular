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
import { MemberTypesSelectors } from '../..';
import { MemberTypesService } from '../services/member-types.service';

import * as MemberTypesActions from './member-types.actions';
import * as MemberTypesFeature from './member-types.reducer';

@Injectable()
export class MemberTypesEffects {
  loadMemberType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberTypesActions.getMemberTypeById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(MemberTypesSelectors.getSelected(action.memberTypeId))
            )
          )
        )
      ),
      switchMap(([action, cachedMemberType]) => {
        if (cachedMemberType)
          return of(
            MemberTypesActions.getMemberTypeByIdSuccess({
              memberType: cachedMemberType,
            })
          );

        return this.memberTypesService
          .getMemberTypeById(action.memberTypeId)
          .pipe(
            map((memberType) =>
              MemberTypesActions.getMemberTypeByIdSuccess({ memberType })
            ),
            catchError((error) =>
              of(MemberTypesActions.getMemberTypeByIdFailure({ error }))
            )
          );
      })
    )
  );

  createMemberType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberTypesActions.createMemberType),
      mergeMap((action) =>
        this.memberTypesService.createMemberType(action.memberTypeDetails).pipe(
          map((memberType) =>
            MemberTypesActions.createMemberTypeSuccess(memberType)
          ),
          catchError((error) =>
            of(MemberTypesActions.createMemberTypeFailure({ error }))
          )
        )
      )
    )
  );

  updateMemberType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberTypesActions.updateMemberType),
      mergeMap((action) =>
        this.memberTypesService.updateMemberType(action.memberTypeDetails).pipe(
          map((memberType) =>
            MemberTypesActions.updateMemberTypeSuccess(memberType)
          ),
          catchError((error) =>
            of(MemberTypesActions.updateMemberTypeFailure({ error }))
          )
        )
      )
    )
  );

  deleteMemberType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberTypesActions.deleteMemberType),
      mergeMap((action) =>
        this.memberTypesService.deleteMemberType(action.memberTypeId).pipe(
          map(() => MemberTypesActions.deleteMemberTypeSuccess()),
          catchError((error) =>
            of(MemberTypesActions.deleteMemberTypeFailure({ error }))
          )
        )
      )
    )
  );

  loadAllMemberTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberTypesActions.getAllMemberTypes),
      exhaustMap(() =>
        this.memberTypesService.getAllMemberTypes().pipe(
          map((memberTypes) =>
            MemberTypesActions.getAllMemberTypesSuccess({ memberTypes })
          ),
          catchError((error) =>
            of(MemberTypesActions.getAllMemberTypesFailure({ error }))
          )
        )
      )
    )
  );

  loadMemberTypeList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberTypesActions.getPaginatedMemberTypes),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(MemberTypesSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.memberTypesService
          .getPaginatedMemberTypes(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((memberTypesObject) =>
              MemberTypesActions.getPaginatedMemberTypesSuccess({
                memberTypes: memberTypesObject.content,
                total: memberTypesObject.totalElements,
                page: memberTypesObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(MemberTypesActions.getPaginatedMemberTypesFailure({ error }))
            )
          )
      )
    )
  );

  onSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          MemberTypesActions.createMemberTypeSuccess,
          MemberTypesActions.updateMemberTypeSuccess,
          MemberTypesActions.deleteMemberTypeSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private memberTypesService: MemberTypesService,
    private store: Store<MemberTypesFeature.MemberTypesPartialState>
  ) {}
}

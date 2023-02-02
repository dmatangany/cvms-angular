import { Injectable } from '@angular/core';
import { Utilities } from '@membership-application/shared/utils';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
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
import { MemberAttributesSelectors } from '../..';
import { MemberAttributesService } from '../services/member-attributes.service';

import * as MemberAttributesActions from './member-attributes.actions';
import * as MemberAttributesFeature from './member-attributes.reducer';

@Injectable()
export class MemberAttributesEffects {
  loadMemberAttribute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAttributesActions.getMemberAttributeById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(
                MemberAttributesSelectors.getSelected(action.memberAttributeId)
              )
            )
          )
        )
      ),
      switchMap(([action, cachedMemberAttribute]) => {
        if (cachedMemberAttribute)
          return of(
            MemberAttributesActions.getMemberAttributeByIdSuccess({
              memberAttribute: cachedMemberAttribute,
            })
          );

        return this.memberAttributesService
          .getMemberAttributeById(action.memberAttributeId)
          .pipe(
            map((memberAttribute) =>
              MemberAttributesActions.getMemberAttributeByIdSuccess({
                memberAttribute,
              })
            ),
            catchError((error) =>
              of(
                MemberAttributesActions.getMemberAttributeByIdFailure({ error })
              )
            )
          );
      })
    )
  );

  createMemberAttribute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAttributesActions.createMemberAttribute),
      mergeMap((action) =>
        this.memberAttributesService
          .createMemberAttribute(action.memberAttributeDetails)
          .pipe(
            map((memberAttribute) =>
              MemberAttributesActions.createMemberAttributeSuccess(
                memberAttribute
              )
            ),
            catchError((error) =>
              of(
                MemberAttributesActions.createMemberAttributeFailure({ error })
              )
            )
          )
      )
    )
  );

  updateMemberAttribute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAttributesActions.updateMemberAttribute),
      mergeMap((action) =>
        this.memberAttributesService
          .updateMemberAttribute(action.memberAttributeDetails)
          .pipe(
            map((memberAttribute) =>
              MemberAttributesActions.updateMemberAttributeSuccess(
                memberAttribute
              )
            ),
            catchError((error) =>
              of(
                MemberAttributesActions.updateMemberAttributeFailure({ error })
              )
            )
          )
      )
    )
  );

  deleteMemberAttribute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAttributesActions.deleteMemberAttribute),
      mergeMap((action) =>
        this.memberAttributesService
          .deleteMemberAttribute(action.memberAttributeId)
          .pipe(
            map(() => MemberAttributesActions.deleteMemberAttributeSuccess()),
            catchError((error) =>
              of(
                MemberAttributesActions.deleteMemberAttributeFailure({ error })
              )
            )
          )
      )
    )
  );

  loadAllMemberAttributes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAttributesActions.getAllMemberAttributes),
      exhaustMap(() =>
        this.memberAttributesService.getAllMemberAttributes().pipe(
          map((memberAttributes) =>
            MemberAttributesActions.getAllMemberAttributesSuccess({
              memberAttributes,
            })
          ),
          catchError((error) =>
            of(MemberAttributesActions.getAllMemberAttributesFailure({ error }))
          )
        )
      )
    )
  );

  loadAllMemberAttributesByMemberType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAttributesActions.getMemberAttributeByMemberTypeId),
      exhaustMap((action) =>
        this.memberAttributesService
          .getAllMemberAttributesByMemberTypeId(action.memberTypeId)
          .pipe(
            map((memberAttributes) =>
              MemberAttributesActions.getMemberAttributeByMemberTypeIdSuccess({
                memberAttributes,
              })
            ),
            catchError((error) =>
              of(
                MemberAttributesActions.getMemberAttributeByMemberTypeIdFailure(
                  { error }
                )
              )
            )
          )
      )
    )
  );

  loadMemberAttributeList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MemberAttributesActions.getPaginatedMemberAttributes),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(MemberAttributesSelectors.getCurrentPageState)
            )
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.memberAttributesService
          .getPaginatedMemberAttributes(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((memberAttributesObject) =>
              MemberAttributesActions.getPaginatedMemberAttributesSuccess({
                memberAttributes: memberAttributesObject.content,
                total: memberAttributesObject.totalElements,
                page: memberAttributesObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(
                MemberAttributesActions.getPaginatedMemberAttributesFailure({
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
          MemberAttributesActions.createMemberAttributeSuccess,
          MemberAttributesActions.updateMemberAttributeSuccess,
          MemberAttributesActions.deleteMemberAttributeSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private memberAttributesService: MemberAttributesService,
    private store: Store<MemberAttributesFeature.MemberAttributesPartialState>
  ) {}
}

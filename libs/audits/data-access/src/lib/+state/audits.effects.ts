import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import {
  concatMap,
  withLatestFrom,
  exhaustMap,
  map,
  catchError,
} from 'rxjs/operators';
import { of } from 'rxjs';

import { Utilities } from '@membership-application/shared/utils';

import * as fromAudits from './audits.reducer';
import * as AuditsActions from './audits.actions';
import * as AuditsSelectors from './audits.selectors';
import { AuditsService } from '../services/audits.service';

@Injectable()
export class AuditsEffects {
  loadAudits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuditsActions.loadAudits),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(AuditsSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.auditsService
          .getPaginatedAudits(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((auditsObject) =>
              AuditsActions.loadAuditsSuccess({
                audits: auditsObject.content,
                total: auditsObject.totalElements,
                page: auditsObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(AuditsActions.loadAuditsFailure({ error }))
            )
          )
      )
    )
  );

  loadClientAudits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuditsActions.loadClientAudits),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(AuditsSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.auditsService
          .getClientPaginatedAudits(
            action.fromDate,
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((auditsObject) =>
              AuditsActions.loadClientAuditsSuccess({
                audits: auditsObject.content,
                total: auditsObject.totalElements,
                page: auditsObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(AuditsActions.loadClientAuditsFailure({ error }))
            )
          )
      )
    )
  );

  loadAuditsByPerformer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuditsActions.loadAuditsByPerformer),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(AuditsSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.auditsService
          .getPaginatedAuditsByPerformerForPeriod(
            action.fromDate,
            action.username,
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((auditsObject) =>
              AuditsActions.loadAuditsByPerformerSuccess({
                audits: auditsObject.content,
                total: auditsObject.totalElements,
                page: auditsObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(AuditsActions.loadAuditsByPerformerFailure({ error }))
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private auditsService: AuditsService,
    private store: Store<fromAudits.AuditsPartialState>
  ) {}
}

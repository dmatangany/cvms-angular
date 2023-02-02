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
import { EventPackagesSelectors } from '../..';
import { EventPackagesService } from '../services/event-packages.service';

import * as EventPackagesActions from './event-packages.actions';
import * as EventPackagesFeature from './event-packages.reducer';

@Injectable()
export class EventPackagesEffects {
  loadEventPackage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventPackagesActions.getEventPackageById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(EventPackagesSelectors.getSelected(action.eventPackageId))
            )
          )
        )
      ),
      switchMap(([action, cachedEventPackage]) => {
        if (cachedEventPackage)
          return of(
            EventPackagesActions.getEventPackageByIdSuccess({
              eventPackage: cachedEventPackage,
            })
          );

        return this.eventPackagesService
          .getEventPackageById(action.eventPackageId)
          .pipe(
            map((eventPackage) =>
              EventPackagesActions.getEventPackageByIdSuccess({
                eventPackage,
              })
            ),
            catchError((error) =>
              of(EventPackagesActions.getEventPackageByIdFailure({ error }))
            )
          );
      })
    )
  );

  createEventPackage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventPackagesActions.createEventPackage),
      mergeMap((action) =>
        this.eventPackagesService
          .createEventPackage(action.eventPackageDetails)
          .pipe(
            map((eventPackage) =>
              EventPackagesActions.createEventPackageSuccess(eventPackage)
            ),
            catchError((error) =>
              of(EventPackagesActions.createEventPackageFailure({ error }))
            )
          )
      )
    )
  );

  updateEventPackage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventPackagesActions.updateEventPackage),
      mergeMap((action) =>
        this.eventPackagesService
          .updateEventPackage(action.eventPackageDetails)
          .pipe(
            map((eventPackage) =>
              EventPackagesActions.updateEventPackageSuccess(eventPackage)
            ),
            catchError((error) =>
              of(EventPackagesActions.updateEventPackageFailure({ error }))
            )
          )
      )
    )
  );

  deleteEventPackage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventPackagesActions.deleteEventPackage),
      mergeMap((action) =>
        this.eventPackagesService
          .deleteEventPackage(action.eventPackageId)
          .pipe(
            map(() => EventPackagesActions.deleteEventPackageSuccess()),
            catchError((error) =>
              of(EventPackagesActions.deleteEventPackageFailure({ error }))
            )
          )
      )
    )
  );

  loadAllEventPackages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventPackagesActions.getAllEventPackages),
      exhaustMap((action) =>
        this.eventPackagesService.getAllEventPackages(action.eventId).pipe(
          map((eventPackages) =>
            EventPackagesActions.getAllEventPackagesSuccess({
              eventPackages,
            })
          ),
          catchError((error) =>
            of(EventPackagesActions.getAllEventPackagesFailure({ error }))
          )
        )
      )
    )
  );

  loadEventPackageList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventPackagesActions.getPaginatedEventPackages),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(EventPackagesSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.eventPackagesService
          .getPaginatedEventPackages(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((eventPackagesObject) =>
              EventPackagesActions.getPaginatedEventPackagesSuccess({
                eventPackages: eventPackagesObject.content,
                total: eventPackagesObject.totalElements,
                page: eventPackagesObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(
                EventPackagesActions.getPaginatedEventPackagesFailure({
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
          EventPackagesActions.createEventPackageSuccess,
          EventPackagesActions.updateEventPackageSuccess,
          EventPackagesActions.deleteEventPackageSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private eventPackagesService: EventPackagesService,
    private store: Store<EventPackagesFeature.EventPackagesPartialState>
  ) {}
}

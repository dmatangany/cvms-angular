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
  exhaustMap,
  mergeMap,
  tap,
} from 'rxjs';
import { EventsService } from '../services/events.service';

import * as EventsActions from './events.actions';
import * as EventsFeature from './events.reducer';
import * as EventsSelectors from './events.selectors';
@Injectable()
export class EventsEffects {
  loadEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.getEventById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(EventsSelectors.getSelected(action.eventId)))
          )
        )
      ),
      switchMap(([action, cachedEvent]) => {
        if (cachedEvent)
          return of(
            EventsActions.getEventByIdSuccess({
              event: cachedEvent,
            })
          );

        return this.eventsService.getEvent(action.eventId).pipe(
          map((event) => EventsActions.getEventByIdSuccess({ event })),
          catchError((error) =>
            of(EventsActions.getEventByIdFailure({ error }))
          )
        );
      })
    )
  );

  loadAllEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.getAllEvents),
      exhaustMap(() =>
        this.eventsService.getAllEvents().pipe(
          map((events) => EventsActions.getAllEventsSuccess({ events })),
          catchError((error) =>
            of(EventsActions.getAllEventsFailure({ error }))
          )
        )
      )
    )
  );

  loadEventList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.getPaginatedEvents),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(EventsSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.eventsService
          .getPaginatedEvents(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((eventsObject) =>
              EventsActions.getPaginatedEventsSuccess({
                events: eventsObject.content,
                total: eventsObject.totalElements,
                page: eventsObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(EventsActions.getPaginatedEventsFailure({ error }))
            )
          )
      )
    )
  );

  createEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.createEvent),
      mergeMap((action) =>
        this.eventsService.createEvent(action.eventDetails).pipe(
          map((event) => EventsActions.createEventSuccess(event)),
          catchError((error) => of(EventsActions.createEventFailure({ error })))
        )
      )
    )
  );

  updateEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.updateEvent),
      mergeMap((action) =>
        this.eventsService.updateEvent(action.eventDetails).pipe(
          map((event) => EventsActions.updateEventSuccess(event)),
          catchError((error) => of(EventsActions.updateEventFailure({ error })))
        )
      )
    )
  );

  deleteEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.deleteEvent),
      mergeMap((action) =>
        this.eventsService.deleteEvent(action.eventId).pipe(
          map(() => EventsActions.deleteEventSuccess()),
          catchError((error) => of(EventsActions.deleteEventFailure({ error })))
        )
      )
    )
  );

  publishEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.publishEvent),
      mergeMap((action) =>
        this.eventsService.publishEvent(action.eventId).pipe(
          map((event) => EventsActions.publishEventSuccess(event)),
          catchError((error) =>
            of(EventsActions.publishEventFailure({ error }))
          )
        )
      )
    )
  );

  unpublishEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.unPublishEvent),
      mergeMap((action) =>
        this.eventsService.unPublishEvent(action.eventId).pipe(
          map((event) => EventsActions.unPublishEventSuccess(event)),
          catchError((error) =>
            of(EventsActions.publishEventFailure({ error }))
          )
        )
      )
    )
  );

  subscribeEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.subscribeToAnEvent),
      mergeMap((action) =>
        this.eventsService.subscribeToAnEvent(action.eventId).pipe(
          map((event) => EventsActions.subscribeToAnEventSuccess(event)),
          catchError((error) =>
            of(EventsActions.subscribeToAnEventFailure({ error }))
          )
        )
      )
    )
  );

  unsubscribeEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.unSubscribeToAnEvent),
      mergeMap((action) =>
        this.eventsService.unSubscribeToAnEvent(action.eventId).pipe(
          map((event) => EventsActions.unSubscribeToAnEventSuccess(event)),
          catchError((error) =>
            of(EventsActions.subscribeToAnEventFailure({ error }))
          )
        )
      )
    )
  );

  onSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          EventsActions.createEventSuccess,
          EventsActions.updateEventSuccess,
          EventsActions.deleteEventSuccess,
          EventsActions.unPublishEventSuccess,
          EventsActions.unSubscribeToAnEventSuccess,
          EventsActions.publishEventSuccess,
          EventsActions.subscribeToAnEventSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private eventsService: EventsService,
    private store: Store<EventsFeature.EventsPartialState>
  ) {}
}

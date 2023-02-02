import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import {
  concatMap,
  withLatestFrom,
  mergeMap,
  map,
  catchError,
  tap,
} from 'rxjs/operators';
import { of } from 'rxjs';

import { Utilities } from '@membership-application/shared/utils';

import * as fromUserAuthorities from './user-authorities.reducer';
import * as UserAuthoritiesActions from './user-authorities.actions';
import * as UserAuthoritiesSelectors from './user-authorities.selectors';
import { UserAuthoritiesService } from '../services/user-authorities.service';

@Injectable()
export class UserAuthoritiesEffects {
  loadUserAuthorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAuthoritiesActions.loadPaginatedUserAuthorities),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(UserAuthoritiesSelectors.getCurrentPageState)
            )
          )
        )
      ),
      mergeMap(([action, page]) =>
        this.userAuthoritiesService
          .getPaginatedUserAuthorities(
            action.userId,
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? Math.round(action.state.page.from! / action.state.page.size!)
                : page
            )
          )
          .pipe(
            map((userAuthorityObject) =>
              UserAuthoritiesActions.loadPaginatedUserAuthoritiesSuccess(
                userAuthorityObject.content,
                userAuthorityObject.totalElements,
                userAuthorityObject.pageable.pageNumber
              )
            ),
            catchError((error) =>
              of(
                UserAuthoritiesActions.loadPaginatedUserAuthoritiesFailure({
                  error,
                })
              )
            )
          )
      )
    )
  );

  loadAllUserAuthorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAuthoritiesActions.loadAllUserAuthorities),

      mergeMap((action) =>
        this.userAuthoritiesService.getAllUserAuthorities(action.userId).pipe(
          map((userAuthorities) =>
            UserAuthoritiesActions.loadAllUserAuthoritiesSuccess(
              userAuthorities
            )
          ),
          catchError((error) =>
            of(
              UserAuthoritiesActions.loadAllUserAuthoritiesFailure({
                error,
              })
            )
          )
        )
      )
    )
  );

  createUserAuthorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAuthoritiesActions.createUserAuthorities),
      mergeMap((action) =>
        this.userAuthoritiesService.createUserAuthorities(action.request).pipe(
          map((userAuthority) =>
            UserAuthoritiesActions.createUserAuthoritiesSuccess(userAuthority)
          ),
          catchError((error) =>
            of(UserAuthoritiesActions.createUserAuthoritiesFailure({ error }))
          )
        )
      )
    )
  );

  deleteUserAuthorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAuthoritiesActions.deleteUserAuthorities),
      mergeMap((action) =>
        this.userAuthoritiesService
          .deleteUserAuthorities(action.userAuthorityIds)
          .pipe(
            map(() =>
              UserAuthoritiesActions.deleteUserAuthoritiesSuccess(
                action.userAuthorityIds
              )
            ),
            catchError((error) =>
              of(UserAuthoritiesActions.deleteUserAuthoritiesFailure({ error }))
            )
          )
      )
    )
  );

  loadAdminUnassignedUserAuthorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAuthoritiesActions.loadAdminUnassignedUserAuthorities),
      mergeMap((action) =>
        this.userAuthoritiesService
          .getAdminUnassignedUserAuthorities(action.userId)
          .pipe(
            map((userAuthorities) =>
              UserAuthoritiesActions.loadAdminUnassignedUserAuthoritiesSuccess(
                userAuthorities
              )
            ),
            catchError((error) =>
              of(
                UserAuthoritiesActions.loadAdminUnassignedUserAuthoritiesFailure(
                  { error }
                )
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
          UserAuthoritiesActions.createUserAuthoritiesSuccess,
          UserAuthoritiesActions.deleteUserAuthoritiesSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private userAuthoritiesService: UserAuthoritiesService,
    private store: Store<fromUserAuthorities.UserAuthoritiesPartialState>
  ) {}
}

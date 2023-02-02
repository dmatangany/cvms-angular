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

import * as fromGroupAuthorities from './group-authorities.reducer';
import * as GroupAuthoritiesActions from './group-authorities.actions';
import * as GroupAuthoritiesSelectors from './group-authorities.selectors';
import { GroupAuthoritiesService } from '../services/group-authorities.service';

@Injectable()
export class GroupAuthoritiesEffects {
  loadGroupAuthorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupAuthoritiesActions.loadPaginatedGroupAuthorities),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(GroupAuthoritiesSelectors.getCurrentPageState)
            )
          )
        )
      ),
      mergeMap(([action, page]) =>
        this.groupAuthoritiesService
          .getPaginatedGroupAuthorities(
            action.groupId,
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? Math.round(action.state.page.from! / action.state.page.size!)
                : page
            )
          )
          .pipe(
            map((groupAuthorityObject) =>
              GroupAuthoritiesActions.loadPaginatedGroupAuthoritiesSuccess(
                groupAuthorityObject.content,
                groupAuthorityObject.totalElements,
                groupAuthorityObject.pageable.pageNumber
              )
            ),
            catchError((error) =>
              of(
                GroupAuthoritiesActions.loadPaginatedGroupAuthoritiesFailure({
                  error,
                })
              )
            )
          )
      )
    )
  );

  loadAllGroupAuthorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupAuthoritiesActions.loadAllGroupAuthorities),

      mergeMap((action) =>
        this.groupAuthoritiesService
          .getAllGroupAuthorities(action.groupId)
          .pipe(
            map((groupAuthorities) =>
              GroupAuthoritiesActions.loadAllGroupAuthoritiesSuccess(
                groupAuthorities
              )
            ),
            catchError((error) =>
              of(
                GroupAuthoritiesActions.loadAllGroupAuthoritiesFailure({
                  error,
                })
              )
            )
          )
      )
    )
  );

  createGroupAuthorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupAuthoritiesActions.createGroupAuthorities),
      mergeMap((action) =>
        this.groupAuthoritiesService
          .createGroupAuthorities(action.request)
          .pipe(
            map((groupAuthority) =>
              GroupAuthoritiesActions.createGroupAuthoritiesSuccess(
                groupAuthority
              )
            ),
            catchError((error) =>
              of(
                GroupAuthoritiesActions.createGroupAuthoritiesFailure({ error })
              )
            )
          )
      )
    )
  );

  /*createGroupAuthoritiesBundled$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupAuthoritiesActions.createGroupAuthoritiesBundled),
      mergeMap((action) =>
        this.groupAuthoritiesService
          .createGroupAuthoritiesBundled(action.request)
          .pipe(
            map((groupAuthority) =>
              GroupAuthoritiesActions.createGroupAuthoritiesBundledSuccess(
                groupAuthority
              )
            ),
            catchError((error) =>
              of(
                GroupAuthoritiesActions.createGroupAuthoritiesBundledFailure({ error })
              )
            )
          )
      )
    )
  );

  removeGroupAuthoritiesBundled$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupAuthoritiesActions.removeGroupAuthoritiesBundled),
      mergeMap((action) =>
        this.groupAuthoritiesService
          .removeGroupAuthoritiesBundled(action.request)
          .pipe(
            map((groupAuthority) =>
              GroupAuthoritiesActions.removeGroupAuthoritiesBundledSuccess(
                groupAuthority
              )
            ),
            catchError((error) =>
              of(
                GroupAuthoritiesActions.removeGroupAuthoritiesBundledFailure({ error })
              )
            )
          )
      )
    )
  );*/

  deleteGroupAuthorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupAuthoritiesActions.deleteGroupAuthorities),
      mergeMap((action) =>
        this.groupAuthoritiesService
          .deleteGroupAuthorities(action.groupAuthorityIds)
          .pipe(
            map(() =>
              GroupAuthoritiesActions.deleteGroupAuthoritiesSuccess(
                action.groupAuthorityIds
              )
            ),
            catchError((error) =>
              of(
                GroupAuthoritiesActions.deleteGroupAuthoritiesFailure({ error })
              )
            )
          )
      )
    )
  );

  loadAdminUnassignedGroupAuthorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupAuthoritiesActions.loadAdminUnassignedGroupAuthorities),
      mergeMap((action) =>
        this.groupAuthoritiesService
          .getAdminUnassignedGroupAuthorities(action.groupId)
          .pipe(
            map((groupAuthorities) =>
              GroupAuthoritiesActions.loadAdminUnassignedGroupAuthoritiesSuccess(
                groupAuthorities
              )
            ),
            catchError((error) =>
              of(
                GroupAuthoritiesActions.loadAdminUnassignedGroupAuthoritiesFailure(
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
          GroupAuthoritiesActions.createGroupAuthoritiesSuccess,
          GroupAuthoritiesActions.deleteGroupAuthoritiesSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private groupAuthoritiesService: GroupAuthoritiesService,
    private store: Store<fromGroupAuthorities.GroupAuthoritiesPartialState>
  ) {}
}

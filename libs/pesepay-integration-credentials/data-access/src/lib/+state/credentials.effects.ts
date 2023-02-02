import { PesepayCredentialsService } from './../services/pesepay-credentials.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as CredentialsActions from './credentials.actions';
import * as CredentialsFeature from './credentials.reducer';
import { Utilities } from '@membership-application/shared/utils';
import { select, Store } from '@ngrx/store';
import { concatMap, of, withLatestFrom, switchMap, map, catchError, exhaustMap, mergeMap, tap } from 'rxjs';
import { CredentialsSelectors } from '../..';

@Injectable()
export class CredentialsEffects {
  loadCredential$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CredentialsActions.getCredentialById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(CredentialsSelectors.getSelected(action.credentialId)))
          )
        )
      ),
      switchMap(([action, cachedCredential]) => {
        if (cachedCredential)
          return of(
            CredentialsActions.getCredentialByIdSuccess({
              credential: cachedCredential,
            })
          );

        return this.credentialsService.getCredential(action.credentialId).pipe(
          map((credential) => CredentialsActions.getCredentialByIdSuccess({ credential })),
          catchError((error) =>
            of(CredentialsActions.getCredentialByIdFailure({ error }))
          )
        );
      })
    )
  );

  loadAllCredentials$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CredentialsActions.getAllCredentials),
      exhaustMap(() =>
        this.credentialsService.getAllCredentials().pipe(
          map((credentials) => CredentialsActions.getAllCredentialsSuccess({ credentials })),
          catchError((error) =>
            of(CredentialsActions.getAllCredentialsFailure({ error }))
          )
        )
      )
    )
  );

  loadCredentialList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CredentialsActions.getPaginatedCredentials),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(CredentialsSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.credentialsService
          .getPaginatedCredentials(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((credentialsObject) =>
              CredentialsActions.getPaginatedCredentialsSuccess({
                credentials: credentialsObject.content,
                total: credentialsObject.totalElements,
                page: credentialsObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(CredentialsActions.getPaginatedCredentialsFailure({ error }))
            )
          )
      )
    )
  );

  createCredential$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CredentialsActions.createCredential),
      mergeMap((action) =>
        this.credentialsService.createCredential(action.credentialDetails).pipe(
          map((credential) => CredentialsActions.createCredentialSuccess(credential)),
          catchError((error) => of(CredentialsActions.createCredentialFailure({ error })))
        )
      )
    )
  );

  updateCredential$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CredentialsActions.updateCredential),
      mergeMap((action) =>
        this.credentialsService.updateCredential(action.credentialDetails).pipe(
          map((credential) => CredentialsActions.updateCredentialSuccess(credential)),
          catchError((error) => of(CredentialsActions.updateCredentialFailure({ error })))
        )
      )
    )
  );

  deleteCredential$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CredentialsActions.deleteCredential),
      mergeMap((action) =>
        this.credentialsService.deleteCredential(action.credentialId).pipe(
          map(() => CredentialsActions.deleteCredentialSuccess()),
          catchError((error) => of(CredentialsActions.deleteCredentialFailure({ error })))
        )
      )
    )
  );

  onSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CredentialsActions.createCredentialSuccess,
          CredentialsActions.updateCredentialSuccess,
          CredentialsActions.deleteCredentialSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private credentialsService: PesepayCredentialsService,
    private store: Store<CredentialsFeature.CredentialsPartialState>
  ) {}
}

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';

import { Utilities } from '@membership-application/shared/utils';

import * as PasswordManagementActions from './password-management.actions';
import { PasswordManagementService } from '../services/password-management.service';

@Injectable()
export class PasswordManagementEffects {
  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PasswordManagementActions.forgotPassword),
      mergeMap((action) =>
        this.passwordManagementService
          .forgotPassword(action.forgotPasswordDetails)
          .pipe(
            map(() => PasswordManagementActions.forgotPasswordSuccess()),
            catchError((error) =>
              of(
                PasswordManagementActions.forgotPasswordFailure({
                  error,
                })
              )
            )
          )
      )
    )
  );

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PasswordManagementActions.resetPassword),
      mergeMap((action) =>
        this.passwordManagementService
          .resetPassword(action.resetPasswordDetails)
          .pipe(
            map(() => PasswordManagementActions.resetPasswordSuccess()),
            catchError((error) =>
              of(
                PasswordManagementActions.resetPasswordFailure({
                  error,
                })
              )
            )
          )
      )
    )
  );

  updatePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PasswordManagementActions.updatePassword),
      mergeMap((action) =>
        this.passwordManagementService
          .updatePassword(action.updatePasswordDetails)
          .pipe(
            map(() => PasswordManagementActions.updatePasswordSuccess()),
            catchError((error) =>
              of(
                PasswordManagementActions.updatePasswordFailure({
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
          PasswordManagementActions.forgotPasswordSuccess,
          PasswordManagementActions.updatePasswordSuccess,
          PasswordManagementActions.resetPasswordSuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private passwordManagementService: PasswordManagementService,
    private router: Router
  ) {}
}

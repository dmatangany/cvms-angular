import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromAuthorities from './authorities.reducer';
import * as AuthoritiesActions from './authorities.actions';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { AuthoritiesService } from '../services/authorities.service';

@Injectable()
export class AuthoritiesEffects {
  loadAllAuthorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthoritiesActions.getAllAuthorities),
      exhaustMap(() =>
        this.authoritiesService.getAllAuthorities().pipe(
          map((authorities) =>
            AuthoritiesActions.getAllAuthoritiesSuccess({ authorities })
          ),
          catchError((error) =>
            of(AuthoritiesActions.getAllAuthoritiesFailure({ error }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,

    private authoritiesService: AuthoritiesService
  ) {}
}

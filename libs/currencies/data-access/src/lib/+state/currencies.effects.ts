import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as fromCurrencies from './currencies.reducer';
import * as CurrenciesActions from './currencies.actions';
import * as CurrenciesSelectors from './currencies.selectors';
import {
  mergeMap,
  map,
  catchError,
  exhaustMap,
  concatMap,
  withLatestFrom,
  tap,
  switchMap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CurrenciesService } from '../services/currencies.service';
import { Utilities } from '@membership-application/shared/utils';

@Injectable()
export class CurrenciesEffects {
  loadCurrency$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrenciesActions.getCurrencyById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(CurrenciesSelectors.getSelected(action.currencyId))
            )
          )
        )
      ),
      switchMap(([action, cachedCurrency]) => {
        if (cachedCurrency)
          return of(
            CurrenciesActions.getCurrencyByIdSuccess({
              currency: cachedCurrency,
            })
          );

        return this.currenciesService.getCurrencyById(action.currencyId).pipe(
          map((currency) =>
            CurrenciesActions.getCurrencyByIdSuccess({ currency })
          ),
          catchError((error) =>
            of(CurrenciesActions.getCurrencyByIdFailure({ error }))
          )
        );
      })
    )
  );

  createCurrency$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrenciesActions.createCurrency),
      mergeMap((action) =>
        this.currenciesService.createCurrency(action.currencyDetails).pipe(
          map((currency) => CurrenciesActions.createCurrencySuccess(currency)),
          catchError((error) =>
            of(CurrenciesActions.createCurrencyFailure({ error }))
          )
        )
      )
    )
  );

  updateCurrency$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrenciesActions.updateCurrency),
      mergeMap((action) =>
        this.currenciesService.updateCurrency(action.currencyDetails).pipe(
          map((currency) => CurrenciesActions.updateCurrencySuccess(currency)),
          catchError((error) =>
            of(CurrenciesActions.updateCurrencyFailure({ error }))
          )
        )
      )
    )
  );

  deleteCurrency$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrenciesActions.deleteCurrency),
      mergeMap((action) =>
        this.currenciesService.deleteCurrency(action.currencyId).pipe(
          map(() => CurrenciesActions.deleteCurrencySuccess()),
          catchError((error) =>
            of(CurrenciesActions.deleteCurrencyFailure({ error }))
          )
        )
      )
    )
  );

  loadAllCurrencies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrenciesActions.getAllCurrencies),
      exhaustMap(() =>
        this.currenciesService.getAllCurrencies().pipe(
          map((currencies) =>
            CurrenciesActions.getAllCurrenciesSuccess({ currencies })
          ),
          catchError((error) =>
            of(CurrenciesActions.getAllCurrenciesFailure({ error }))
          )
        )
      )
    )
  );

  loadCurrencyList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrenciesActions.getPaginatedCurrencies),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(CurrenciesSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.currenciesService
          .getPaginatedCurrencies(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((currenciesObject) =>
              CurrenciesActions.getPaginatedCurrenciesSuccess({
                currencies: currenciesObject.content,
                total: currenciesObject.totalElements,
                page: currenciesObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(CurrenciesActions.getPaginatedCurrenciesFailure({ error }))
            )
          )
      )
    )
  );

  loadCurrencyByCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrenciesActions.getCurrencyByCode),
      exhaustMap((action) =>
        this.currenciesService.getCurrencyByCode(action.currencyCode).pipe(
          map((currency) =>
            CurrenciesActions.getCurrencyByCodeSuccess({ currency })
          ),
          catchError((error) =>
            of(CurrenciesActions.getCurrencyByIdFailure({ error }))
          )
        )
      )
    )
  );

  loadDefaultCurrency$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrenciesActions.getDefaultCurrency),
      exhaustMap(() =>
        this.currenciesService.getDefaultCurrency().pipe(
          map((currency) =>
            CurrenciesActions.getDefaultCurrencySuccess({ currency })
          ),
          catchError((error) =>
            of(CurrenciesActions.getDefaultCurrencyFailure({ error }))
          )
        )
      )
    )
  );

  loadAllActiveCurrencies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrenciesActions.getAllActiveCurrencies),
      exhaustMap(() =>
        this.currenciesService.getAllActiveCurrencies().pipe(
          map((currencies) =>
            CurrenciesActions.getAllActiveCurrenciesSuccess({ currencies })
          ),
          catchError((error) =>
            of(CurrenciesActions.getAllActiveCurrenciesFailure({ error }))
          )
        )
      )
    )
  );

  onSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CurrenciesActions.createCurrencySuccess,
          CurrenciesActions.updateCurrencySuccess,
          CurrenciesActions.deleteCurrencySuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private currenciesService: CurrenciesService,
    private store: Store<fromCurrencies.CurrenciesPartialState>
  ) {}
}

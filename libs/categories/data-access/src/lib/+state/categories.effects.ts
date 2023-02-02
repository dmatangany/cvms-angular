import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
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

import { Utilities } from '@membership-application/shared/utils';

import * as fromCategories from './categories.reducer';
import * as CategoriesActions from './categories.actions';
import * as CategoriesSelectors from './categories.selectors';
import { CategoriesService } from '../services/categories.service';

@Injectable()
export class CategoriesEffects {
  loadCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.getCategoryById),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(
              select(CategoriesSelectors.getSelected(action.categoryId))
            )
          )
        )
      ),
      switchMap(([action, cachedCategory]) => {
        if (cachedCategory)
          return of(
            CategoriesActions.getCategoryByIdSuccess({
              category: cachedCategory,
            })
          );

        return this.categoriesService.getCategoryById(action.categoryId).pipe(
          map((category) =>
            CategoriesActions.getCategoryByIdSuccess({
              category,
            })
          ),
          catchError((error) =>
            of(
              CategoriesActions.getCategoryByIdFailure({
                error,
              })
            )
          )
        );
      })
    )
  );

  loadAllCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.getAllCategories),
      exhaustMap(() =>
        this.categoriesService.getAllCategories().pipe(
          map((categories) =>
            CategoriesActions.getAllCategoriesSuccess({
              categories,
            })
          ),
          catchError((error) =>
            of(CategoriesActions.getAllCategoriesFailure({ error }))
          )
        )
      )
    )
  );

  loadCategoryList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.getPaginatedCategories),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(CategoriesSelectors.getCurrentPageState))
          )
        )
      ),
      exhaustMap(([action, page]) =>
        this.categoriesService
          .getPaginatedCategories(
            Utilities.formatDatagridState(
              action.state,
              action.state.page
                ? action.state.page.from! / action.state.page.size!
                : page
            )
          )
          .pipe(
            map((categoriesObject) =>
              CategoriesActions.getPaginatedCategoriesSuccess({
                categories: categoriesObject.content,
                total: categoriesObject.totalElements,
                page: categoriesObject.pageable.pageNumber,
              })
            ),
            catchError((error) =>
              of(CategoriesActions.getPaginatedCategoriesFailure({ error }))
            )
          )
      )
    )
  );

  createCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.createCategory),
      mergeMap((action) =>
        this.categoriesService.createCategory(action.categoryDetails).pipe(
          map((category) => CategoriesActions.createCategorySuccess(category)),
          catchError((error) =>
            of(
              CategoriesActions.createCategoryFailure({
                error,
              })
            )
          )
        )
      )
    )
  );

  updateCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.updateCategory),
      mergeMap((action) =>
        this.categoriesService.updateCategory(action.categoryDetails).pipe(
          map((category) => CategoriesActions.updateCategorySuccess(category)),
          catchError((error) =>
            of(
              CategoriesActions.updateCategoryFailure({
                error,
              })
            )
          )
        )
      )
    )
  );

  deleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.deleteCategory),
      mergeMap((action) =>
        this.categoriesService.deleteCategory(action.categoryId).pipe(
          map(() => CategoriesActions.deleteCategorySuccess()),
          catchError((error) =>
            of(CategoriesActions.deleteCategoryFailure({ error }))
          )
        )
      )
    )
  );

  onSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CategoriesActions.createCategorySuccess,
          CategoriesActions.updateCategorySuccess,
          CategoriesActions.deleteCategorySuccess
        ),
        tap(() => Utilities.displayToast('success'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
    private store: Store<fromCategories.CategoriesPartialState>
  ) {}
}

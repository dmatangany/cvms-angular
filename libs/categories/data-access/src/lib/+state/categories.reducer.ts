import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CategoriesActions from './categories.actions';
import { CategoriesEntity } from './categories.models';

export const CATEGORIES_FEATURE_KEY = 'categories';

export interface State extends EntityState<CategoriesEntity> {
    selectedId?: string | number;
    loaded?: boolean;
    loading: boolean;
    error?: Error;
    selectedCategories: CategoriesEntity | undefined;
    total: number;
    btnState: ClrLoadingState;
    currentPage: number;
}

export interface CategoriesPartialState {
    readonly [CATEGORIES_FEATURE_KEY]: State;
}

export const categoriesAdapter: EntityAdapter<CategoriesEntity> =
    createEntityAdapter<CategoriesEntity>();

export const initialState: State = categoriesAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: undefined,
    selectedCategories: undefined,
    total: 0,
    btnState: ClrLoadingState.DEFAULT,
    currentPage: 0,
});

const categoriesReducer = createReducer(
    initialState,
    on(
        CategoriesActions.getCategoryById,
        CategoriesActions.getPaginatedCategories,
        CategoriesActions.getAllCategories,
        (state) => ({
            ...state,
            loading: true,
        })
    ),

    on(CategoriesActions.getCategoryByIdSuccess, (state, { category }) => ({
        ...state,
        loading: false,
        loaded: true,
        selectedCategories: category,
    })),

    on(CategoriesActions.getAllCategoriesSuccess, (state, { categories }) =>
        categoriesAdapter.setAll(categories, {
            ...state,
            loading: false,
            loaded: true,
        })
    ),

    on(
        CategoriesActions.getPaginatedCategoriesSuccess,
        (state, { categories, total, page }) =>
            categoriesAdapter.setAll(categories, {
                ...state,
                loading: false,
                loaded: true,
                total: total,
                currentPage: page,
            })
    ),

    on(
        CategoriesActions.getAllCategoriesFailure,
        CategoriesActions.getCategoryByIdFailure,
        CategoriesActions.getPaginatedCategoriesFailure,
        (state, { error }) => ({
            ...state,
            loading: false,
            loaded: false,
            error: error,
        })
    ),

    on(
        CategoriesActions.createCategory,
        CategoriesActions.updateCategory,
        CategoriesActions.deleteCategory,
        (state) => ({
            ...state,
            btnState: ClrLoadingState.LOADING,
            loaded: false,
            error: undefined,
        })
    ),

    on(
        CategoriesActions.createCategorySuccess,
        CategoriesActions.updateCategorySuccess,
        CategoriesActions.deleteCategorySuccess,
        (state) => ({
            ...state,
            loaded: true,
            btnState: ClrLoadingState.SUCCESS,
        })
    ),

    on(
        CategoriesActions.createCategoryFailure,
        CategoriesActions.updateCategoryFailure,
        CategoriesActions.deleteCategoryFailure,
        (state, { error }) => ({
            ...state,
            error,
            btnState: ClrLoadingState.ERROR,
        })
    )
);

export function reducer(state: State | undefined, action: Action) {
    return categoriesReducer(state, action);
}

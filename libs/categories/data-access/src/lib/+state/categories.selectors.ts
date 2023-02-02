import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
    CATEGORIES_FEATURE_KEY,
    State,
    categoriesAdapter,
} from './categories.reducer';

// Lookup the 'Categories' feature state managed by NgRx
export const getCategoriesState = createFeatureSelector<State>(
    CATEGORIES_FEATURE_KEY
);

const { selectAll, selectEntities } = categoriesAdapter.getSelectors();

export const getCategoriesLoaded = createSelector(
    getCategoriesState,
    (state: State) => state.loaded
);

export const getCategoriesError = createSelector(
    getCategoriesState,
    (state: State) => state.error
);

export const getAllCategories = createSelector(
    getCategoriesState,
    (state: State) => selectAll(state)
);

export const getCategoriesEntities = createSelector(
    getCategoriesState,
    (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
    getCategoriesState,
    (state: State) => state.selectedId
);

export const getSelected = (categoryId: string | number) =>
    createSelector(getCategoriesEntities, (entities) => entities[categoryId]);

export const getSelectedCategory = createSelector(
    getCategoriesState,
    (state: State) => state.selectedCategories
);

export const getTotalCategories = createSelector(
    getCategoriesState,
    (state: State) => state.total
);

export const getCurrentPageState = createSelector(
    getCategoriesState,
    (state: State) => state.currentPage
);

export const getCategoriesLoadingState = createSelector(
    getCategoriesState,
    (state: State) => state.loading
);

export const getBtnState = createSelector(
    getCategoriesState,
    (state: State) => state.btnState
);

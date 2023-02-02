import { createAction, props } from '@ngrx/store';
import { CategoriesEntity } from './categories.models';
import { ClrDatagridStateInterface } from '@clr/angular';

export const getPaginatedCategories = createAction(
    '[Categories] Get Paginated Categories',
    props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedCategoriesSuccess = createAction(
    '[Categories] Get Paginated Categories Success',
    props<{
        categories: CategoriesEntity[];
        total: number;
        page: number;
    }>()
);

export const getPaginatedCategoriesFailure = createAction(
    '[Categories] Get Paginated Categories Failure',
    props<{ error: Error }>()
);

export const getAllCategories = createAction('[Categories] Get All Categories');

export const getAllCategoriesSuccess = createAction(
    '[Categories] Get All Categories Success',
    props<{
        categories: CategoriesEntity[];
    }>()
);

export const getAllCategoriesFailure = createAction(
    '[Categories] Get All Categories Failure',
    props<{ error: Error }>()
);

export const getCategoryById = createAction(
    '[Categories] Get Category',
    props<{ categoryId: string | number }>()
);

export const getCategoryByIdSuccess = createAction(
    '[Categories] Get Category Success',
    props<{ category: CategoriesEntity }>()
);

export const getCategoryByIdFailure = createAction(
    '[Categories] Get Category Failure',
    props<{ error: any }>()
);

export const createCategory = createAction(
    '[Categories] Create Category',
    (categoryDetails: CategoriesEntity) => ({
        categoryDetails,
    })
);

export const createCategorySuccess = createAction(
    '[Categories] Create Category Success',
    (categoryDetails: CategoriesEntity) => ({
        categoryDetails,
    })
);

export const createCategoryFailure = createAction(
    '[Categories] Create Category Failure',
    props<{ error: Error }>()
);

export const deleteCategory = createAction(
    '[Categories] Delete Category',
    props<{ categoryId: string | number }>()
);

export const deleteCategorySuccess = createAction(
    '[Categories] Delete Category Success'
);

export const deleteCategoryFailure = createAction(
    '[Categories] Delete Category Failure',
    props<{ error: Error }>()
);

export const updateCategory = createAction(
    '[Categories] Update Category',
    (categoryDetails: CategoriesEntity) => ({
        categoryDetails,
    })
);

export const updateCategorySuccess = createAction(
    '[Categories] Update Category Success',
    (categoryDetails: CategoriesEntity) => ({
        categoryDetails,
    })
);

export const updateCategoryFailure = createAction(
    '[Categories] Update Category Failure',
    props<{ error: Error }>()
);

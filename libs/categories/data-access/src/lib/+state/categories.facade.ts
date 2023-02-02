import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store } from '@ngrx/store';

import * as fromCategories from './categories.reducer';
import * as CategoriesSelectors from './categories.selectors';
import * as CategoriesActions from './categories.actions';
import { CategoriesEntity } from './categories.models';
@Injectable()
export class CategoriesFacade {
    loaded$ = this.store.pipe(select(CategoriesSelectors.getCategoriesLoaded));
    allCategories$ = this.store.pipe(
        select(CategoriesSelectors.getAllCategories)
    );
    selectedCategory$ = this.store.pipe(
        select(CategoriesSelectors.getSelectedCategory)
    );
    loading$ = this.store.pipe(
        select(CategoriesSelectors.getCategoriesLoadingState)
    );
    totalCategories$ = this.store.pipe(
        select(CategoriesSelectors.getTotalCategories)
    );
    btnState$ = this.store.pipe(select(CategoriesSelectors.getBtnState));

    constructor(private store: Store<fromCategories.CategoriesPartialState>) {}

    getPaginatedCategories(state: ClrDatagridStateInterface) {
        this.store.dispatch(
            CategoriesActions.getPaginatedCategories({ state })
        );
    }

    getAllCategories() {
        this.store.dispatch(CategoriesActions.getAllCategories());
    }

    getCategory(categoryId: string | number | null) {
        if (categoryId)
            this.store.dispatch(
                CategoriesActions.getCategoryById({
                    categoryId,
                })
            );
    }

    createNewCategory(category: CategoriesEntity) {
        this.store.dispatch(CategoriesActions.createCategory(category));
    }

    updateCategory(category: CategoriesEntity) {
        this.store.dispatch(CategoriesActions.updateCategory(category));
    }

    deleteCategory(categoryId: string | number) {
        this.store.dispatch(
            CategoriesActions.deleteCategory({
                categoryId,
            })
        );
    }
}

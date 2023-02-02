import { SharedUiModule } from '@membership-application/shared/ui';
import { RouterModule } from '@angular/router';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesUiModule } from '@membership-application/categories/ui';
import { CategoriesDataAccessModule } from '@membership-application/categories/data-access';
import { ListCategoriesComponent } from './list-categories/list-categories.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    CategoriesDataAccessModule,
    CategoriesUiModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: ListCategoriesComponent }]),
  ],
  declarations: [
    CreateCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
    ListCategoriesComponent,
  ],
})
export class AdminFeatureCategoriesModule {}

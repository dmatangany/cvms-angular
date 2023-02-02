import { ClarityIcons, pencilIcon } from '@cds/core/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListUiComponent } from './categories-list-ui/categories-list-ui.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
ClarityIcons.addIcons(pencilIcon);
@NgModule({
    imports: [CommonModule, ClarityModule, ReactiveFormsModule],
    declarations: [
        CategoriesListUiComponent,
        CategoryFormComponent,
        CategoryDetailsComponent,
    ],
    exports: [
        CategoriesListUiComponent,
        CategoryFormComponent,
        CategoryDetailsComponent,
    ],
})
export class CategoriesUiModule {}

import { Component, Input, OnInit } from '@angular/core';
import { CategoriesEntity } from '@membership-application/categories/data-access';
import { Utilities } from '@membership-application/shared/utils';

@Component({
  selector: 'membership-application-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent {
  @Input() category!: CategoriesEntity;
  public decamelize = Utilities.decamelize;
  public nonDisplayableFields = [
    'createdBy',
    'createdDate',
    'deleted',
    'id',
    'thumbnailFileName',
    'subCategories',
    'version',
  ];

  public isHide(field: string | undefined) {
    return this.nonDisplayableFields.some((element) => element === field);
  }
}

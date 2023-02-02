import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';
import {
  CategoriesFacade,
  CategoriesEntity,
} from '@membership-application/categories/data-access';

@Component({
  selector: 'membership-application-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
})
export class ListCategoriesComponent implements OnInit, AfterViewChecked {
  public placeholderMessage: string | undefined;
  public isUpdate = false;
  public isCreate = false;
  public isDelete = false;
  selectedCategory!: CategoriesEntity;

  constructor(
    public categoriesFacade: CategoriesFacade,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  public getCategoryList(state: ClrDatagridStateInterface) {
    this.categoriesFacade.getPaginatedCategories(state);
    this.cdr.detectChanges();
  }

  refresh(isRefresh: boolean) {
    this.isUpdate = false;
    this.isCreate = false;
    this.isDelete = false;
    return isRefresh ? this.getCategoryList({}) : null;
  }

  updateCategory(category: CategoriesEntity) {
    this.selectedCategory = category;
    this.isUpdate = true;
  }

  deleteCategory(category: CategoriesEntity) {
    this.selectedCategory = category;
    this.isDelete = true;
  }
}

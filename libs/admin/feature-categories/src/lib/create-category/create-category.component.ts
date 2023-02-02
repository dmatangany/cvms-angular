import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  CategoriesFacade,
  CategoriesEntity,
} from '@membership-application/categories/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  private loadedSubscription = new Subscription();

  constructor(public categoriesFacade: CategoriesFacade) {}

  ngOnInit(): void {}

  onSubmit(category: CategoriesEntity) {
    this.categoriesFacade.createNewCategory(category);
    this.loadedSubscription = this.categoriesFacade.loaded$.subscribe((res) =>
      res ? this.closeModal.emit(true) : null
    );
  }

  ngOnDestroy() {
    this.loadedSubscription.unsubscribe();
  }
}

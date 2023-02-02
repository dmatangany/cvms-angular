import {
  Component,
  EventEmitter,
  Input,
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
  selector: 'membership-application-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() category!: CategoriesEntity;
  private loadedSubscription = new Subscription();

  constructor(public categoriesFacade: CategoriesFacade) {}

  ngOnInit(): void {}

  onSubmit(category: CategoriesEntity) {
    this.categoriesFacade.updateCategory(category);
    this.loadedSubscription = this.categoriesFacade.loaded$.subscribe((res) =>
      res ? this.closeModal.emit(true) : null
    );
  }

  ngOnDestroy() {
    this.loadedSubscription.unsubscribe();
  }
}

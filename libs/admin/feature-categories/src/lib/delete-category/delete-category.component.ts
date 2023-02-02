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
  selector: 'membership-application-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss'],
})
export class DeleteCategoryComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() category!: CategoriesEntity;
  private selectedCategorySubscription = new Subscription();
  private loadedCategorySubscription = new Subscription();

  constructor(public categoriesFacade: CategoriesFacade) {}

  ngOnInit(): void {}

  onSubmit() {
    this.categoriesFacade.deleteCategory(this.category.id);
    this.selectedCategorySubscription = this.categoriesFacade.loaded$.subscribe(
      (res) => {
        return res ? this.closeModal.emit(true) : null;
      }
    );
  }

  ngOnDestroy() {
    this.selectedCategorySubscription.unsubscribe();
    this.loadedCategorySubscription.unsubscribe();
  }
}

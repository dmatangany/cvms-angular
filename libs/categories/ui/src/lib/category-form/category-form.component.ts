import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import {
  CategoriesEntity,
  categoryStatus,
} from '@membership-application/categories/data-access';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'membership-application-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Output() formValue = new EventEmitter();
  @Input() category: CategoriesEntity | undefined;
  @Input() btnState$: Observable<ClrLoadingState> = of(ClrLoadingState.DEFAULT);
  @Input() title = '';
  @Input() message = '';
  statuses = categoryStatus;
  public categoryForm!: UntypedFormGroup;
  public opened = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    if (this.category) {
      this.categoryForm.patchValue(this.category);
      this.categoryForm.get('categoryStatus')?.patchValue(this.category.status);
    }
  }

  public createForm() {
    this.categoryForm = this.formBuilder.group({
      categoryStatus: '',
      name: '',
      id: '',
    });
  }
}

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { CurrenciesEntity } from '@membership-application/currencies/data-access';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'membership-application-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyFormComponent implements OnInit {
  @Input() currency: CurrenciesEntity | undefined;
  @Input() btnState$: Observable<ClrLoadingState> = of(ClrLoadingState.DEFAULT);
  @Input() title = '';
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public currencyForm = new UntypedFormGroup({});
  public confirmUpdate = false;
  public opened = true;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    if (this.currency) {
      this.currencyForm.patchValue(this.currency);
    }
  }

  public createForm() {
    this.currencyForm = this.formBuilder.group({
      active: ['', Validators.required],
      code: ['', Validators.required],
      defaultCurrency: ['', Validators.required],
      description: [''],
      name: ['', Validators.required],
      rateToDefault: ['', Validators.required],
      id: '',
    });
  }
  public onSubmit() {
    this.confirmUpdate = false;
    this.formValue.emit(this.currencyForm.value);
  }
}

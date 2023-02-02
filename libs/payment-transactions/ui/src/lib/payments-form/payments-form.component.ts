import { CurrenciesEntity } from '@membership-application/currencies/data-access';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'membership-application-payments-form',
  templateUrl: './payments-form.component.html',
  styleUrls: ['./payments-form.component.scss'],
})
export class PaymentsFormComponent implements OnInit, OnChanges {
  @Input() currencies!: CurrenciesEntity[];
  @Input() isLoggedIn = false;
  @Input() btnState$: Observable<ClrLoadingState> = of(ClrLoadingState.DEFAULT);
  @Input() title = '';
  @Input() memberId: any;
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public paymentsForm = new UntypedFormGroup({});
  public confirmUpdate = false;
  public opened = true;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['memberId']?.currentValue) {
      console.log(this.memberId);
      this.paymentsForm.get('memberNumber')?.patchValue(this.memberId);
    }
  }

  public createForm() {
    this.paymentsForm = this.formBuilder.group({
      amount: ['', Validators.required],
      currencyCode: ['', Validators.required],
      memberNumber: '',
      initiateSubscription: [''],
    });
  }

  public onSubmit() {
    if (this.memberId) {
      this.paymentsForm.get('memberNumber')?.patchValue(this.memberId);
    }
    this.formValue.emit(this.paymentsForm.value);
  }
}

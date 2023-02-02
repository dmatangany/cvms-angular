import { MemberTypesEntity } from '@membership-application/member-types/data-access';
import { CurrenciesEntity } from '@membership-application/currencies/data-access';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { MemberPackageEntity } from '@membership-application/member-packages/data-access';

import { Observable } from 'rxjs';

@Component({
  selector: 'membership-application-member-package-form',
  templateUrl: './member-package-form.component.html',
  styleUrls: ['./member-package-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberPackageFormComponent implements OnInit {
  @Input() memberPackage!: MemberPackageEntity;
  @Input() btnState!: ClrLoadingState;
  @Input() title = '';
  @Input() memberTypeId!: string | number;
  @Input() currencies$!: Observable<CurrenciesEntity[]>;
  @Input() memberTypes$!: Observable<MemberTypesEntity[]>;
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public memberPackageForm!: UntypedFormGroup;
  public opened = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    if (this.memberPackage) {
      this.memberPackageForm.patchValue(this.memberPackage);
      this.memberPackageForm
        .get('currencyCode')
        ?.patchValue(this.memberPackage.currency.code);
      this.memberPackageForm
        ?.get('memberType')
        ?.patchValue(this.memberPackage.memberType.name);
    }
  }

  public createForm() {
    this.memberPackageForm = this.formBuilder.group({
      amount: '',
      currencyCode: '',
      defaultPackage: '',
      description: '',
      memberType: '',
      name: '',
      id: '',
    });
  }

  onSubmit() {
    this.formValue.emit(this.memberPackageForm?.value);
  }
}

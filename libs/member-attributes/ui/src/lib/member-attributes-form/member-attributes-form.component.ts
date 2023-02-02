import { MemberAccountsEntity } from '@membership-application/member-accounts/data-access';
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
import {
  fieldTypes,
  MemberAttributesEntity,
} from '@membership-application/member-attributes/data-access';
import { MemberTypesEntity } from '@membership-application/member-types/data-access';

@Component({
  selector: 'membership-application-member-attributes-form',
  templateUrl: './member-attributes-form.component.html',
  styleUrls: ['./member-attributes-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberAttributesFormComponent implements OnInit {
  @Input() memberAttribute!: MemberAttributesEntity;
  @Input() memberTypes!: MemberTypesEntity[];
  @Input() btnState!: ClrLoadingState;
  @Input() title!: string;
  @Input() memberTypeId!: string | number;
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public memberAttributeForm!: UntypedFormGroup;
  public opened = true;
  public fieldTypes = fieldTypes;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();

    if (this.memberAttribute) {
      this.memberAttributeForm.patchValue(this.memberAttribute);
      this.memberAttributeForm
        .get('memberTypeId')
        ?.patchValue(this.memberAttribute.memberType.id);
    }
  }

  public createForm() {
    this.memberAttributeForm = this.formBuilder.group({
      displayName: '',
      fieldType: '',
      memberTypeId: '',
      name: '',
      optional: '',
      id: '',
    });
  }
}

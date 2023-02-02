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
import { MemberTypesEntity } from '@membership-application/member-types/data-access';

@Component({
  selector: 'membership-application-member-type-form',
  templateUrl: './member-type-form.component.html',
  styleUrls: ['./member-type-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberTypeFormComponent implements OnInit {
  @Input() memberType!: MemberTypesEntity;
  @Input() btnState!: ClrLoadingState;
  @Input() title!: string;
  @Input() memberTypeId!: string | number;
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public memberTypeForm!: UntypedFormGroup;
  public opened = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();

    if (this.memberType) {
      this.memberTypeForm.patchValue(this.memberType);
    }
  }

  public createForm() {
    this.memberTypeForm = this.formBuilder.group({
      name: '',
      id: '',
    });
  }
}

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  FormBuilder,
  FormGroup,
  FormArray,
} from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { of } from 'rxjs';
import { GroupsEntity } from '@membership-application/groups/data-access';
import { UsersEntity } from '@membership-application/users/data-access';
import { Observable } from 'rxjs';
@Component({
  selector: 'membership-application-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  @Input() user!: UsersEntity;
  @Input() btnState = ClrLoadingState.DEFAULT;
  @Input() title = '';
  @Output() formValue = new EventEmitter();
  @Input() btnTitle!: string;
  public registrationForm!: UntypedFormGroup;
  public opened = true;

 constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    if (this.user) {
      this.registrationForm.patchValue(this.user);
      //this.userForm.get('groupId')?.patchValue(this.user.group.id);
    }
  }

  public createForm() {
    this.registrationForm = this.formBuilder.group({
      dateOfBirth: [''],
      driverLicenseNumber: [''],
      email: ['', Validators.email],
      firstName: [''],
      gender: [''],
      groupId: '3',
      initials: [''],
      lastName: [''],
      nationalIdentificationNumber: [''],
      passportNumber: [''],
      title: [''],
      username: [''],
      id: '',
    });
  }
}

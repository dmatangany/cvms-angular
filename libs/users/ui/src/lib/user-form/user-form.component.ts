import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { GroupsEntity } from '@membership-application/groups/data-access';
import { UsersEntity } from '@membership-application/users/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'membership-application-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() user!: UsersEntity;
  @Input() btnState = ClrLoadingState.DEFAULT;
  @Input() title = '';
  @Output() formValue = new EventEmitter();
  @Input() allGroups$!: Observable<GroupsEntity[]>;
  @Input() btnTitle!: string;
  public userForm!: UntypedFormGroup;
  public opened = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    if (this.user) {
      this.userForm.patchValue(this.user);
      //this.userForm.get('groupId')?.patchValue(this.user.group.id);
    }
  }

  public createForm() {
    this.userForm = this.formBuilder.group({
      dateOfBirth: [''],
      driverLicenseNumber: [''],
      email: ['', Validators.email],
      firstName: [''],
      gender: [''],
      groupId: [''],
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

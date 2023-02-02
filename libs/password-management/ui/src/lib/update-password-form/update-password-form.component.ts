import { ClrLoadingState } from '@clr/angular';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'membership-application-update-password-form',
  templateUrl: './update-password-form.component.html',
  styleUrls: ['./update-password-form.component.scss'],
})
export class UpdatePasswordFormComponent implements OnInit {
  @Input() title = '';
  @Input() btnState$ = of(ClrLoadingState.DEFAULT);
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public updatePasswordForm = new UntypedFormGroup({});
  public opened = true;
  public confirmUpdate = false;

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.updatePasswordForm = this.fb.group({
      oldPassword: '',
      confirmPassword: '',
      password: '',
    });
  }
  onSubmit() {
    this.updatePasswordForm, this.formValue.emit(this.updatePasswordForm.value);
  }
}

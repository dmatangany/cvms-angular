import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { of } from 'rxjs';

@Component({
  selector: 'membership-application-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent implements OnInit {
  @Input() title = 'Reset Password';
  @Input() btnState$ = of(ClrLoadingState.DEFAULT);
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public resetPasswordForm = new UntypedFormGroup({});
  public opened = true;

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.resetPasswordForm = this.fb.group({
      token: '',
      confirmPassword: '',
      password: '',
    });
  }
}

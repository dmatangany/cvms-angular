import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import { Router } from '@angular/router';
import { PasswordManagementFacade } from '@membership-application/password-management/data-access';

@Component({
  selector: 'membership-application-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  public resetPassword: boolean | undefined;

  constructor(public passwordManagementFacade: PasswordManagementFacade) {}

  ngOnInit(): void {}

  onSubmit(details: any) {
    this.passwordManagementFacade.forgotPassword(details);
    this.passwordManagementFacade.loaded$.subscribe((res) =>
      res ? (this.resetPassword = true) : null
    );
  }

  submitToken() {
    this.resetPassword = true;
  }

  endProcess() {
    this.resetPassword = false;
  }
}

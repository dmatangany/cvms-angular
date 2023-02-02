import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PasswordManagementFacade } from '@membership-application/password-management/data-access';

@Component({
  selector: 'membership-application-forgot-password-feature',
  templateUrl: './forgot-password-feature.component.html',
  styleUrls: ['./forgot-password-feature.component.scss'],
})
export class ForgotPasswordFeatureComponent implements OnInit {
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

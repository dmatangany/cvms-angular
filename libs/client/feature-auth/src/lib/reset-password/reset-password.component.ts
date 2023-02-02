import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PasswordManagementFacade } from '@membership-application/password-management/data-access';

@Component({
  selector: 'membership-application-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  constructor(public passwordManagementFacade: PasswordManagementFacade) {}

  ngOnInit(): void {}

  onSubmit(resetPasswordDetails: any) {
    this.passwordManagementFacade.resetPassword(resetPasswordDetails);
    this.passwordManagementFacade.loaded$.subscribe((res) =>
      res ? this.closeModal.emit(true) : null
    );
  }
}

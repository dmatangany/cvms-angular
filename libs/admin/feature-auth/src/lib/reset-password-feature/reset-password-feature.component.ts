import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PasswordManagementFacade } from '@membership-application/password-management/data-access';

@Component({
  selector: 'membership-application-reset-password-feature',
  templateUrl: './reset-password-feature.component.html',
  styleUrls: ['./reset-password-feature.component.scss'],
})
export class ResetPasswordFeatureComponent implements OnInit {
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

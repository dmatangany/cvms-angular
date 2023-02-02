import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { of } from 'rxjs';

@Component({
  selector: 'membership-application-reports-form',
  templateUrl: './reports-form.component.html',
  styleUrls: ['./reports-form.component.scss'],
})
export class ReportsFormComponent implements OnInit {
  @Input() title = 'Reset Password';
  @Input() btnState$ = of(ClrLoadingState.DEFAULT);
  @Output() formValue = new EventEmitter();

  public resetPasswordForm = new UntypedFormGroup({});
  public opened = true;
  statuses = ['SUCCESS', 'FAILED', 'PENDING'];
  types = ['ACCOUNT', 'PAYMENT'];

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.resetPasswordForm = this.fb.group({
      type: '',
      fromDate: '',
      toDate: '',
      status: '',
      reportType: '',
    });
  }
}

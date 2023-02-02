import { ClrLoadingState } from '@clr/angular';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'membership-application-update-member-accounts-form',
  templateUrl: './update-member-accounts-form.component.html',
  styleUrls: ['./update-member-accounts-form.component.css'],
})
export class UpdateMemberAccountsFormComponent implements OnInit {
  @Input() details: any;
  @Input() btnState!: ClrLoadingState;
  @Output() formValue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public opened = true;
  overdraftForm!: UntypedFormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    if (this.details) {
      this.overdraftForm?.patchValue(this.details);
    }
  }

  createForm() {
    this.overdraftForm = this.fb.group({
      overdraft: '',
      overdraftAmount: '',
      id: '',
    });
  }
}

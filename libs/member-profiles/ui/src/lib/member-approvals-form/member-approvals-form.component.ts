import { MemberPackageEntity } from '@membership-application/member-packages/data-access';
import { ClrLoadingState } from '@clr/angular';
import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { MemberProfilesEntity } from '@membership-application/member-profiles/data-access';

@Component({
  selector: 'membership-application-member-approvals-form',
  templateUrl: './member-approvals-form.component.html',
  styleUrls: ['./member-approvals-form.component.css'],
})
export class MemberApprovalsFormComponent implements OnInit {
  @Input() memberPackage!: MemberPackageEntity;
  @Input() members: MemberProfilesEntity[] = [];
  @Input() btnState!: ClrLoadingState;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() formValue = new EventEmitter();
  opened = true;
  memberApprovalForm!: UntypedFormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createMemberApprovalForm();
  }

  private createMemberApprovalForm() {
    this.memberApprovalForm = this.fb.group({
      approved: ['', Validators.required],
      memberProfileId: ['', Validators.required],
      result: ['', Validators.required]
    });
  }
}

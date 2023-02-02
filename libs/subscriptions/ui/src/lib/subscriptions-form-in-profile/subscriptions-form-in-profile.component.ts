import { MemberPackageEntity } from '@membership-application/member-packages/data-access';
import { ClrLoadingState } from '@clr/angular';
import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { MemberProfilesEntity } from '@membership-application/member-profiles/data-access';

@Component({
  selector: 'membership-application-subscriptions-form-in-profile',
  templateUrl: './subscriptions-form-in-profile.component.html',
  styleUrls: ['./subscriptions-form-in-profile.component.scss'],
})
export class SubscriptionsInProfileFormComponent implements OnInit {
  @Input() memberPackage!: MemberPackageEntity;
  @Input() members: MemberProfilesEntity[] = [];
  @Input() btnState!: ClrLoadingState;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() formValue = new EventEmitter();
  opened = true;
  subscriptionForm!: UntypedFormGroup;
  //calculationType = ['FULLYEAR', 'PRORATA'];
  calculationType = ['FULLYEAR'];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createSubscriptionForm();
  }

  private createSubscriptionForm() {
    this.subscriptionForm = this.fb.group({
      amountPaid: ['', Validators.required],
	  calculationType: ['', Validators.required],
      memberId: ['', Validators.required],
      membershipPackageId: ['', Validators.required],
      startDate: ['', Validators.required],
    });
  }
}

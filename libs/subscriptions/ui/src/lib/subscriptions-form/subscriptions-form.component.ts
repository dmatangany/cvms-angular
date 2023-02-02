import { MemberPackageEntity } from '@membership-application/member-packages/data-access';
import { ClrLoadingState } from '@clr/angular';
import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { MemberProfilesEntity } from '@membership-application/member-profiles/data-access';

@Component({
  selector: 'membership-application-subscriptions-form',
  templateUrl: './subscriptions-form.component.html',
  styleUrls: ['./subscriptions-form.component.scss'],
})
export class SubscriptionsFormComponent implements OnInit {
  @Input() memberPackages: MemberPackageEntity[] = [];
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

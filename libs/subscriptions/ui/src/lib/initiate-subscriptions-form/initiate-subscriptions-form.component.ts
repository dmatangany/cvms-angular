import { ClrLoadingState } from '@clr/angular';

import { MemberPackageEntity } from '@membership-application/member-packages/data-access';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'membership-application-initiate-subscriptions-form',
  templateUrl: './initiate-subscriptions-form.component.html',
  styleUrls: ['./initiate-subscriptions-form.component.scss'],
})
export class InitiateSubscriptionsFormComponent implements OnInit, OnChanges {
  @Input() memberPackages!: MemberPackageEntity[];
  @Input() memberPackage!: MemberPackageEntity;
  @Input() btnState!: ClrLoadingState;
  @Output() formValue = new EventEmitter();
  @Output() eventPackages = new EventEmitter();
  @Input() memberId: any;
  selectedPackage: any;
  public paySubscriptionForm!: UntypedFormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['memberId']?.currentValue) {
      console.log(this.memberId);
      this.paySubscriptionForm?.get('memberId')?.patchValue(this.memberId);
    }
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.paySubscriptionForm = this.fb.group({
      amount: ['', Validators.required],
      membershipPackageId: ['', Validators.required],
      memberId: [''],
      initiateSubscription: [''],
    });
  }

  checkPackage() {
    this.selectedPackage = this.memberPackages.find(
      (membershipPackage) =>
        membershipPackage.id ==
        this.paySubscriptionForm.get('membershipPackageId')?.value
    );

    this.paySubscriptionForm
      .get('amount')
      ?.patchValue(this.selectedPackage?.amount);
    console.log(this.selectedPackage);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { ClrLoadingState } from '@clr/angular';
import { combineLatest } from 'rxjs';

import { Toast } from '@membership-application/shared';
import { MemberPackageService } from '@membership-application/admin/member';
import { MemberProfileService } from '@membership-application/admin/member-profile';
import { SubscriptionService } from '@membership-application/data-access';

@Component({
  selector: 'membership-application-update-subscription',
  templateUrl: './update-subscription.component.html',
  styleUrls: ['./update-subscription.component.css'],
})
export class UpdateSubscriptionComponent implements OnInit {
  keyword = 'name';
  public memberPackages: any;
  public members: any;
  public startDate: any;

  @Input() subscription;
  @Output() updatedSubscription = new EventEmitter();
  public subscriptionForm: FormGroup;
  public isAlert: boolean;
  public opened = true;
  public message: string;
  public editState = ClrLoadingState.DEFAULT;
  toast: Toast;
  subscriptionsubscriptions: any;

  constructor(
    private memberPackageService: MemberPackageService,
    private memberProfileService: MemberProfileService,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit() {
    this.createSubscriptionForm();
    this.initializeForm();
    this.getParams();
  }

  private getParams() {
    combineLatest(
      this.memberPackageService.getAllMemberPackages(),
      this.memberProfileService.getAllMembers()
    ).subscribe((data) => {
      this.memberPackages = data[0];
      this.members = data[1];
    });
  }

  transform(value: string) {
    var datePipe = new DatePipe('en-US');
    value = datePipe.transform(value, 'MM/dd/yyyy');
    return value;
  }

  private createSubscriptionForm() {
    this.subscriptionForm = new FormGroup({
      amountPaid: new FormControl('', Validators.required),
      memberId: new FormControl('', Validators.required),
      membershipPackageId: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
    });
  }

  private initializeForm() {
    // this.subscriptionForm.patchValue(
    //   this.subscription
    // );
    this.startDate = this.transform(this.subscription.startDate);
    this.subscriptionForm.setValue({
      amountPaid: this.subscription.amountPaid,
      memberId: this.subscription.member.id,
      membershipPackageId: this.subscription.membershipPackage.id,
      startDate: this.startDate,
    });
  }

  private displayAlert(displayMessage: string) {
    this.isAlert = true;
    this.message = displayMessage;
  }

  public updateSubscription() {
    this.editState = ClrLoadingState.LOADING;
    this.subscriptionService
      .updateSubscription(this.subscription.id, this.subscriptionForm.value)
      .subscribe(
        (res) => {
          this.editState = ClrLoadingState.SUCCESS;
          this.updatedSubscription.emit();
          Toast.displayToast('success', 'Record edited successfully.');
          this.onClose(res);
        },
        (err) => {
          this.editState = ClrLoadingState.ERROR;
          this.displayAlert(err ? err.error.message : 'An error has occurred');
        }
      );
  }

  selectEvent(item) {
    this.subscriptionForm.patchValue({
      memberId: item.id,
    });
  }

  onChangeSearch(search: string) {
    this.getParams();
  }

  onFocused(e) {}

  public onClose(subscription) {
    this.updatedSubscription.emit(subscription);
  }

  public removeUnderscore(str: string) {
    return str.replace(/_/g, ' ');
  }
}

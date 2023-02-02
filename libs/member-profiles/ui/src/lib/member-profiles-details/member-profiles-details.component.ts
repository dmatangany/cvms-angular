import {MemberProfilesEntity, MemberProfilesFacade} from '@membership-application/member-profiles/data-access';
import { SubscriptionsEntity } from '@membership-application/subscriptions/data-access';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MemberPackageEntity, MemberPackagesFacade} from "@membership-application/member-packages/data-access";
import {ClrLoadingState} from "@clr/angular";

@Component({
  selector: 'membership-application-member-profiles-details',
  templateUrl: './member-profiles-details.component.html',
  styleUrls: ['./member-profiles-details.component.css'],
})
export class MemberProfilesDetailsComponent implements OnInit {
  @Input() memberProfile!: MemberProfilesEntity;
  @Input() memberSubscriptions: SubscriptionsEntity[] = [];
  @Input() memberPackages: MemberPackageEntity[] = [];
  @Input() btnTitle!: string;
  @Input() btnState!: ClrLoadingState;
  @Output() formValue = new EventEmitter();
  callOnce: number = 0;
  constructor(public memberPackagesFacade: MemberPackagesFacade, public memberProfilesFacade: MemberProfilesFacade) {}
  ngOnInit(): void {
  }
  onSubmit() {
  }
}

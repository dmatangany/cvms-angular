import {MemberProfilesEntity, MemberProfileRequestEntity, MemberProfilesFacade} from '@membership-application/member-profiles/data-access';
import { SubscriptionsEntity } from '@membership-application/subscriptions/data-access';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MemberPackageEntity, MemberPackagesFacade} from "@membership-application/member-packages/data-access";
import {ClrLoadingState} from "@clr/angular";
import {Router} from "@angular/router";

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
  memberProfileRequest!: MemberProfileRequestEntity;
  callOnce: number = 0;
  constructor(public memberPackagesFacade: MemberPackagesFacade, private router: Router, public memberProfilesFacade: MemberProfilesFacade) {}
  ngOnInit(): void {
  }
  onSubmit(profile: any) {
    console.log("MemberProfilesDetailsComponent onSubmit2",this.memberProfile.memberType.id)
    this.memberProfileRequest = new class implements MemberProfileRequestEntity {
      id: number = 1;
      memberTypeId: number = 1;
    }
    this.memberProfileRequest!.memberTypeId = this.memberProfile?.memberType?.id;
    this.memberProfileRequest!.id = this.memberProfile?.id;
    this.memberProfilesFacade.createMemberPayment(this.memberProfileRequest);
    this.memberProfilesFacade.loaded$.subscribe((res) => {
      res ? this.router.navigate(['/subscriptions']) : null;
    });
  }
}

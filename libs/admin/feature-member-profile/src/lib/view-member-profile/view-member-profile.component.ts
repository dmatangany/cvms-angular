import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MemberProfilesEntity, MemberProfilesFacade} from '@membership-application/member-profiles/data-access';
import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';
import {ClrDatagridStateInterface} from "@clr/angular";
import {MemberPackageEntity, MemberPackagesFacade} from "@membership-application/member-packages/data-access";
@Component({
  selector: 'membership-application-view-member-profile',
  templateUrl: './view-member-profile.component.html',
  styleUrls: ['./view-member-profile.component.css'],
})
export class ViewMemberProfileComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  public isDelete = false;
  selectedSubscription: any;
  memberId!: string | number;
  constructor(
    public memberProfileFacade: MemberProfilesFacade,
    public memberPackagesFacade: MemberPackagesFacade,
    public subscriptionFacade: SubscriptionsFacade,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef

  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  public getSubscriptions(state: ClrDatagridStateInterface) {
    this.subscriptionFacade.getPaginatedSubscriptionsByMember(this.route.snapshot.paramMap.get('profileId')!, state);
  }

  getSubscriptionsByMember() {
    this.getSubscriptions({});
  }
  refresh() {
    this.isDelete = false;
    this.getSubscriptions({});
  }
  ngOnInit() {
    this.memberProfileFacade.getMemberProfile(
      this.route.snapshot.paramMap.get('profileId')!
    );
	this.subscriptionFacade.getMemberSubscriptionsByMemberId(
      this.route.snapshot.paramMap.get('profileId')!
    );
  }
}

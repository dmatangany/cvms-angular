import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';
import { Component, OnInit } from '@angular/core';
import { MemberProfilesFacade } from '@membership-application/member-profiles/data-access';

@Component({
  selector: 'membership-application-portal-container',
  templateUrl: './portal-container.component.html',
  styleUrls: ['./portal-container.component.scss'],
})
export class PortalContainerComponent implements OnInit {
  constructor(
    private memberProfileFacade: MemberProfilesFacade,
    private subscriptionsFacade: SubscriptionsFacade
  ) {}

  ngOnInit(): void {
    //this.memberProfileFacade.getMyMemberProfile();
    //this.subscriptionsFacade.getMyCurrentSubscription();
  }
}

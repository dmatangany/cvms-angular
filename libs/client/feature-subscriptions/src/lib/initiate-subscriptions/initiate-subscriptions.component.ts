import { Subscription } from 'rxjs';
import { MemberPackagesFacade } from '@membership-application/member-packages/data-access';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';
import { MemberProfilesFacade } from '@membership-application/member-profiles/data-access';

@Component({
  selector: 'membership-application-initiate-subscriptions',
  templateUrl: './initiate-subscriptions.component.html',
  styleUrls: ['./initiate-subscriptions.component.scss'],
})
export class InitiateSubscriptionsComponent implements OnInit, OnDestroy {
  sub1 = new Subscription();
  sub2 = new Subscription();
  constructor(
    public subscriptionFacade: SubscriptionsFacade,
    public memberPackagesFacade: MemberPackagesFacade,
    private router: Router,
    public memberProfilesFacade: MemberProfilesFacade
  ) {}

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

  ngOnInit(): void {
    this.sub1 = this.memberProfilesFacade.myProfileState$.subscribe((res) => {
      if (res) {
        this.memberPackagesFacade.getAllMemberPackagesByMemberType(
          res.memberType.id
        );
      }
    });
  }

  onSubmit(subscriptionContext: any) {
    this.subscriptionFacade.initiateSubscription(subscriptionContext);
    this.sub2 = this.subscriptionFacade.loaded$.subscribe((res) => {
      res ? this.router.navigate(['/subscriptions']) : null;
    });
  }
}

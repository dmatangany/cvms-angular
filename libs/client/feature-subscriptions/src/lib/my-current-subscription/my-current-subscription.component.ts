import { Component, OnInit } from '@angular/core';
import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';

@Component({
  selector: 'membership-application-my-current-subscription',
  templateUrl: './my-current-subscription.component.html',
  styleUrls: ['./my-current-subscription.component.scss'],
})
export class MyCurrentSubscriptionComponent implements OnInit {
  constructor(public subscriptionFacade: SubscriptionsFacade) {}

  ngOnInit(): void {
    this.subscriptionFacade.getMyCurrentSubscription();
  }
}

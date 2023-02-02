import { Component, OnInit } from '@angular/core';
import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';

@Component({
  selector: 'membership-application-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
})
export class HeaderTwoComponent implements OnInit {
  constructor(public subscriptionsFacade: SubscriptionsFacade) {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';

@Component({
  selector: 'membership-application-view-subscription',
  templateUrl: './view-subscription.component.html',
  styleUrls: ['./view-subscription.component.css'],
})
export class ViewSubscriptionComponent implements OnInit {
  public subscription: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subscriptionFacade: SubscriptionsFacade
  ) {}

  ngOnInit() {
    this.getParams();
  }

  private getParams() {
    this.route.params.subscribe((params) => {
      this.subscriptionFacade.getSubscription(params['subscriptionId']);
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { SubscriptionsEntity } from '@membership-application/subscriptions/data-access';

@Component({
  selector: 'membership-application-subscriptions-details',
  templateUrl: './subscriptions-details.component.html',
  styleUrls: ['./subscriptions-details.component.scss'],
})
export class SubscriptionsDetailsComponent implements OnInit {
  @Input() subscriptions!: SubscriptionsEntity[];

  constructor() {}

  ngOnInit(): void {}
}

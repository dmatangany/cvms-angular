import { Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MemberPackagesFacade } from '@membership-application/member-packages/data-access';
import { MemberProfilesFacade } from '@membership-application/member-profiles/data-access';
import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';

@Component({
  selector: 'membership-application-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css'],
})
export class CreateSubscriptionComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  sub = new Subscription();

  constructor(
    public memberPackageFacade: MemberPackagesFacade,
    public memberProfilesFacade: MemberProfilesFacade,
    public subscriptionFacade: SubscriptionsFacade
  ) {}

  ngOnInit() {
    this.memberPackageFacade.getAllMemberPackages();
    this.memberProfilesFacade.getAllMemberProfiles();
  }

  onSubmit(subscriptionContext: any) {
    this.subscriptionFacade.createNewSubscription(subscriptionContext);
    this.sub = this.subscriptionFacade.loaded$.subscribe((res) => {
      res ? this.closeModal.emit(true) : null;
    });
  }
}

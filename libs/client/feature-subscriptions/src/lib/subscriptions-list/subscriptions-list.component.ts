import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';
import { MemberProfilesFacade } from '@membership-application/member-profiles/data-access';
import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';
import { UserDataService } from '@membership-application/users/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-subscriptions-list',
  templateUrl: './subscriptions-list.component.html',
  styleUrls: ['./subscriptions-list.component.scss'],
})
export class SubscriptionsListComponent
  implements OnInit, AfterViewChecked, OnDestroy
{
  profileSubscription = new Subscription();

  constructor(
    public subscriptionFacade: SubscriptionsFacade,
    public router: Router,
    private cdr: ChangeDetectorRef,
    private userData: MemberProfilesFacade
  ) {}

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit() {}

  public getSubscriptions(state: ClrDatagridStateInterface) {
    this.profileSubscription = this.userData.myProfileState$.subscribe(
      (profile) =>
        this.subscriptionFacade.getMemberSubscriptions(profile?.memberId, state)
    );
  }

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
  }
}

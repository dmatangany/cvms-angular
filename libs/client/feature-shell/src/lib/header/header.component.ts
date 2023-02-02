import {Component, Input, OnInit} from '@angular/core';
import { AuthenticationService } from '@membership-application/auth/data-access';
import { MemberAccountsFacade } from '@membership-application/member-accounts/data-access';
import { SubscriptionsFacade } from '@membership-application/subscriptions/data-access';
import {MemberProfilesEntity, MemberProfilesFacade } from '@membership-application/member-profiles/data-access';

@Component({
  selector: 'membership-application-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() memberProfile!: MemberProfilesEntity;
  constructor(
    private authService: AuthenticationService,
    public memberAccount: MemberAccountsFacade,
    public subscriptionFacade: SubscriptionsFacade,
    public memberProfilesFacade: MemberProfilesFacade
  ) {}

  ngOnInit(): void {
    //this.memberAccount.getMyMemberAccount();
    //this.subscriptionFacade.getMyCurrentSubscription();
    //this.memberProfilesFacade.getMyMemberProfile();
  }

  logout() {
    this.authService.logout();
  }
}

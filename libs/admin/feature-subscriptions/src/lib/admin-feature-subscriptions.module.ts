import { RouterModule } from '@angular/router';
import { MemberPackagesDataAccessModule } from '@membership-application/member-packages/data-access';
import { MemberProfilesDataAccessModule } from '@membership-application/member-profiles/data-access';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsUiModule } from '@membership-application/subscriptions/ui';
import { ClarityModule } from '@clr/angular';
import { SubscriptionsDataAccessModule } from '@membership-application/subscriptions/data-access';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { ListSubscriptionsComponent } from './list-subscriptions/list-subscriptions.component';
import { ListSubscriptionsByMemberComponent } from './list-subscriptions-by-member/list-subscriptions-by-member.component';
import { ViewSubscriptionComponent } from './view-subscription/view-subscription.component';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionsDataAccessModule,
    SubscriptionsUiModule,
    ClarityModule,
    MemberProfilesDataAccessModule,
    MemberPackagesDataAccessModule,
    RouterModule.forChild([
      { path: '', component: ListSubscriptionsComponent },
	  { path: 'member-subscriptions', component: ListSubscriptionsByMemberComponent },
    ]),
  ],
  declarations: [
    CreateSubscriptionComponent,
    ListSubscriptionsComponent,
	ListSubscriptionsByMemberComponent,
    ViewSubscriptionComponent,
  ],
})
export class AdminFeatureSubscriptionsModule {}

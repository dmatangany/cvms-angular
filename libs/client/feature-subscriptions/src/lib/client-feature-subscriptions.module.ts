import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsDataAccessModule } from '@membership-application/subscriptions/data-access';
import { SubscriptionsUiModule } from '@membership-application/subscriptions/ui';
import { MemberProfilesDataAccessModule } from '@membership-application/member-profiles/data-access';
import { MemberPackagesDataAccessModule } from '@membership-application/member-packages/data-access';

import { SubscriptionsContainerComponent } from './subscriptions-container/subscriptions-container.component';
import { SubscriptionsListComponent } from './subscriptions-list/subscriptions-list.component';
import { InitiateSubscriptionsComponent } from './initiate-subscriptions/initiate-subscriptions.component';
import { MyCurrentSubscriptionComponent } from './my-current-subscription/my-current-subscription.component';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionsDataAccessModule,
    SubscriptionsUiModule,
    ClarityModule,
    MemberPackagesDataAccessModule,
    MemberProfilesDataAccessModule,
    RouterModule.forChild([
      { path: '', component: SubscriptionsContainerComponent },
      {
        path: 'initiate-subscription',
        component: InitiateSubscriptionsComponent,
      },
    ]),
  ],
  declarations: [
    SubscriptionsContainerComponent,
    SubscriptionsListComponent,
    InitiateSubscriptionsComponent,
    MyCurrentSubscriptionComponent,
  ],
})
export class ClientFeatureSubscriptionsModule {}

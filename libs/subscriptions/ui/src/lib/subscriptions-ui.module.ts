import { SubscriptionsListUiComponent } from './subscriptions-list-ui/subscriptions-list-ui.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsFormComponent } from './subscriptions-form/subscriptions-form.component'
import { SubscriptionsInProfileFormComponent } from './subscriptions-form-in-profile/subscriptions-form-in-profile.component';
import { InitiateSubscriptionsFormComponent } from './initiate-subscriptions-form/initiate-subscriptions-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { SubscriptionsDetailsComponent } from './subscriptions-details/subscriptions-details.component';
import { MemberPackagesUiModule } from '@membership-application/member-packages/ui';
import { EventPackageDetailsComponent } from './event-package-details/event-package-details.component';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
	FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    MemberPackagesUiModule,
  ],
  declarations: [
    SubscriptionsFormComponent,
    SubscriptionsInProfileFormComponent,
    InitiateSubscriptionsFormComponent,
    SubscriptionsListUiComponent,
    SubscriptionsDetailsComponent,
    EventPackageDetailsComponent,
	FilterPipe,
  ],

  exports: [
    SubscriptionsFormComponent,
    SubscriptionsInProfileFormComponent,
    InitiateSubscriptionsFormComponent,
    SubscriptionsListUiComponent,
    SubscriptionsDetailsComponent,
  ],
})
export class SubscriptionsUiModule {}

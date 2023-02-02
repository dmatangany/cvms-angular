import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store, Action } from '@ngrx/store';

import * as SubscriptionsActions from './subscriptions.actions';
import { SubscriptionsEntity } from './subscriptions.models';
import * as SubscriptionsFeature from './subscriptions.reducer';
import * as SubscriptionsSelectors from './subscriptions.selectors';
import {getMemberSubscriptionsByMemberId} from "./subscriptions.actions";

@Injectable()
export class SubscriptionsFacade {
  loaded$ = this.store.pipe(
    select(SubscriptionsSelectors.getSubscriptionsLoaded)
  );
  allSubscriptions$ = this.store.pipe(
    select(SubscriptionsSelectors.getAllSubscriptions)
  );
  selectedSubscription$ = this.store.pipe(
    select(SubscriptionsSelectors.getSelectedSubscription)
  );
  loading$ = this.store.pipe(
    select(SubscriptionsSelectors.getSubscriptionsLoadingState)
  );
  totalSubscriptions$ = this.store.pipe(
    select(SubscriptionsSelectors.getTotalSubscriptions)
  );
  btnState$ = this.store.pipe(select(SubscriptionsSelectors.getBtnState));

  constructor(
    private store: Store<SubscriptionsFeature.SubscriptionsPartialState>
  ) {}

  getPaginatedSubscriptions(state: ClrDatagridStateInterface) {
    this.store.dispatch(
      SubscriptionsActions.getPaginatedSubscriptions({ state })
    );
  }

   getPaginatedSubscriptionsByMember(memberId: any, state: ClrDatagridStateInterface) {
    this.store.dispatch(
      SubscriptionsActions.getPaginatedSubscriptionsByMember({ memberId, state })
    );
  }

  getAllSubscriptions() {
    this.store.dispatch(SubscriptionsActions.getAllSubscriptions());
  }

  getSubscription(subscriptionId: string | number) {
    this.store.dispatch(
      SubscriptionsActions.getSubscriptionById({ subscriptionId })
    );
  }

  createNewSubscription(subscription: SubscriptionsEntity) {
    this.store.dispatch(SubscriptionsActions.createSubscription(subscription));
  }

  updateSubscription(subscription: SubscriptionsEntity) {
    this.store.dispatch(SubscriptionsActions.updateSubscription(subscription));
  }

  getMyCurrentSubscription() {
    this.store.dispatch(SubscriptionsActions.getMyCurrentSubscription());
  }

  initiateSubscription(subscriptionContext: SubscriptionsEntity) {
    this.store.dispatch(
      SubscriptionsActions.initiateSubscription({ subscriptionContext })
    );
  }

  getMemberSubscriptions(memberId: any, state: ClrDatagridStateInterface) {
    this.store.dispatch(
      SubscriptionsActions.getMyMemberSubscriptions({ memberId, state })
    );
  }

    getMemberSubscriptionsByMemberId(memberId: string | number) {
    this.store.dispatch(
      SubscriptionsActions.getMemberSubscriptionsByMemberId({
        memberId,
      })
    );
  }
}

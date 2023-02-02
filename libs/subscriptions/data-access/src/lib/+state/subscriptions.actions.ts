import { createAction, props } from '@ngrx/store';
import { SubscriptionsEntity } from './subscriptions.models';
import { ClrDatagridStateInterface } from '@clr/angular';

export const getPaginatedSubscriptions = createAction(
  '[Subscriptions] Get Paginated Subscriptions',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedSubscriptionsSuccess = createAction(
  '[Subscriptions] Get Paginated Subscriptions Success',
  props<{ subscriptions: SubscriptionsEntity[]; total: number; page: number }>()
);

export const getPaginatedSubscriptionsFailure = createAction(
  '[Subscriptions] Get Paginated Subscriptions Failure',
  props<{ error: Error }>()
);

export const getPaginatedSubscriptionsByMember = createAction(
  '[User Manager/Subscriptions] Get Paginated Subscriptions ByMember',
  props<{ memberId: any; state: ClrDatagridStateInterface }>()
);

export const getPaginatedSubscriptionsByMemberSuccess = createAction(
  '[User Manager/Subscriptions] Get Paginated Subscriptions ByMember Success',
  props<{ subscriptions: SubscriptionsEntity[]; total: number; page: number }>()
);

export const getPaginatedSubscriptionsByMemberFailure = createAction(
  '[User Manager/Subscriptions] Get Paginated Subscriptions ByMember Failure',
  props<{ error: Error }>()
);

export const getAllSubscriptions = createAction(
  '[Subscriptions] Get All Subscriptions'
);

export const getAllSubscriptionsSuccess = createAction(
  '[Subscriptions] Get All Subscriptions Success',
  props<{ subscriptions: SubscriptionsEntity[] }>()
);

export const getAllSubscriptionsFailure = createAction(
  '[Subscriptions] Get All Subscriptions Failure',
  props<{ error: Error }>()
);

export const getSubscriptionById = createAction(
  '[Subscriptions] Get Subscription',
  props<{ subscriptionId: string | number }>()
);

export const getSubscriptionByIdSuccess = createAction(
  '[Subscriptions] Get Subscription Success',
  props<{ subscription: SubscriptionsEntity }>()
);

export const getSubscriptionByIdFailure = createAction(
  '[Subscriptions] Get Subscription Failure',
  props<{ error: any }>()
);

export const createSubscription = createAction(
  '[Subscriptions] Create Subscription',
  (subscriptionDetails: SubscriptionsEntity) => ({ subscriptionDetails })
);

export const createSubscriptionSuccess = createAction(
  '[Subscriptions] Create Subscription Success',
  (subscriptionDetails: SubscriptionsEntity) => ({ subscriptionDetails })
);

export const createSubscriptionFailure = createAction(
  '[Subscriptions] Create Subscription Failure',
  props<{ error: Error }>()
);

export const initiateSubscription = createAction(
  '[Subscriptions] Initiate Subscription',
  props<{ subscriptionContext: any }>()
);

export const initiateSubscriptionSuccess = createAction(
  '[Subscriptions] Initiate Subscription Success'
);

export const initiateSubscriptionFailure = createAction(
  '[Subscriptions] Initiate Subscription Failure',
  props<{ error: Error }>()
);

export const updateSubscription = createAction(
  '[Subscriptions] Update Subscription',
  (subscriptionDetails: SubscriptionsEntity) => ({ subscriptionDetails })
);

export const updateSubscriptionSuccess = createAction(
  '[Subscriptions] Update Subscription Success',
  (subscriptionDetails: SubscriptionsEntity) => ({ subscriptionDetails })
);

export const updateSubscriptionFailure = createAction(
  '[Subscriptions] Update Subscription Failure',
  props<{ error: Error }>()
);

export const getMyCurrentSubscription = createAction(
  '[Subscriptions] Get My Subscription'
);

export const getMyCurrentSubscriptionSuccess = createAction(
  '[Subscriptions] Get My Subscription Success',
  props<{ subscription: SubscriptionsEntity }>()
);

export const getMyCurrentSubscriptionFailure = createAction(
  '[Subscriptions] Get My Subscription Failure',
  props<{ error: Error }>()
);

export const getMyMemberSubscriptions = createAction(
  '[Subscriptions] Get Member Subscriptions',
  props<{ memberId: SubscriptionsEntity; state: ClrDatagridStateInterface }>()
);

export const getMyMemberSubscriptionsSuccess = createAction(
  '[Subscriptions] Get Member Subscriptions Success',
  props<{ subscriptions: SubscriptionsEntity[]; total: number; page: number }>()
);

export const getMyMemberSubscriptionsFailure = createAction(
  '[Subscriptions] Get Member Subscriptions Failure',
  props<{ error: Error }>()
);

export const getMemberSubscriptionsByMemberId = createAction(
  '[Subscriptions]Member Subscriptions',
  props<{ memberId: string | number }>()
);

export const getMemberSubscriptionsByMemberIdSuccess = createAction(
  '[Subscriptions] Member Subscriptions Success',
  props<{ subscriptions: SubscriptionsEntity[]; total: number; page: number }>()
);

export const getMemberSubscriptionsByMemberIdFailure = createAction(
  '[Subscriptions] Member Subscriptions Failure',
  props<{ error: any }>()
);

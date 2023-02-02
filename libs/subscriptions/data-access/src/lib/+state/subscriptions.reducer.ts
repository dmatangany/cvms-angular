import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as SubscriptionsActions from './subscriptions.actions';
import { SubscriptionsEntity } from './subscriptions.models';

export const SUBSCRIPTIONS_FEATURE_KEY = 'subscriptions';

export interface SubscriptionsState extends EntityState<SubscriptionsEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedSubscription: SubscriptionsEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface SubscriptionsPartialState {
  readonly [SUBSCRIPTIONS_FEATURE_KEY]: SubscriptionsState;
}

export const subscriptionsAdapter: EntityAdapter<SubscriptionsEntity> =
  createEntityAdapter<SubscriptionsEntity>();

export const initialSubscriptionsState: SubscriptionsState =
  subscriptionsAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: undefined,
    selectedSubscription: undefined,
    total: 0,
    btnState: ClrLoadingState.DEFAULT,
    currentPage: 0,
  });

const reducer = createReducer(
  initialSubscriptionsState,
  on(
    SubscriptionsActions.getSubscriptionById,
    SubscriptionsActions.getPaginatedSubscriptions,
	SubscriptionsActions.getPaginatedSubscriptionsByMember,
    SubscriptionsActions.getAllSubscriptions,
    SubscriptionsActions.getMyCurrentSubscription,
    SubscriptionsActions.getMyMemberSubscriptions,
    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(
    SubscriptionsActions.getSubscriptionByIdSuccess,
    SubscriptionsActions.getMyCurrentSubscriptionSuccess,
    (state, { subscription }) => ({
      ...state,
      loading: false,
      loaded: true,
      selectedSubscription: subscription,
    })
  ),

  on(
    SubscriptionsActions.getAllSubscriptionsSuccess,
    (state, { subscriptions }) =>
      subscriptionsAdapter.setAll(subscriptions, {
        ...state,
        loading: false,
        loaded: true,
      })
  ),

  on(
    SubscriptionsActions.getPaginatedSubscriptionsSuccess,
	SubscriptionsActions.getPaginatedSubscriptionsByMemberSuccess,
    SubscriptionsActions.getMyMemberSubscriptionsSuccess,
    (state, { subscriptions, total, page }) =>
      subscriptionsAdapter.setAll(subscriptions, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    SubscriptionsActions.getAllSubscriptionsFailure,
    SubscriptionsActions.getSubscriptionByIdFailure,
    SubscriptionsActions.getPaginatedSubscriptionsFailure,
	SubscriptionsActions.getPaginatedSubscriptionsByMemberFailure,
    SubscriptionsActions.getMyCurrentSubscriptionFailure,
    SubscriptionsActions.getMyMemberSubscriptionsFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    SubscriptionsActions.createSubscription,
    SubscriptionsActions.updateSubscription,
    SubscriptionsActions.initiateSubscription,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    SubscriptionsActions.createSubscriptionSuccess,
    SubscriptionsActions.updateSubscriptionSuccess,
    SubscriptionsActions.initiateSubscriptionSuccess,
    (state) => ({
      ...state,
      loaded: true,
      btnState: ClrLoadingState.SUCCESS,
    })
  ),

  on(
    SubscriptionsActions.createSubscriptionFailure,
    SubscriptionsActions.updateSubscriptionFailure,
    SubscriptionsActions.initiateSubscriptionFailure,
    (state, { error }) => ({
      ...state,
      error: error,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function subscriptionsReducer(
  state: SubscriptionsState | undefined,
  action: Action
) {
  return reducer(state, action);
}

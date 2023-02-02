import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SUBSCRIPTIONS_FEATURE_KEY,
  SubscriptionsState,
  subscriptionsAdapter,
} from './subscriptions.reducer';

// Lookup the 'Subscriptions' feature state managed by NgRx
export const getSubscriptionsState = createFeatureSelector<SubscriptionsState>(
  SUBSCRIPTIONS_FEATURE_KEY
);

const { selectAll, selectEntities } = subscriptionsAdapter.getSelectors();

export const getSubscriptionsLoaded = createSelector(
  getSubscriptionsState,
  (state: SubscriptionsState) => state.loaded
);

export const getSubscriptionsError = createSelector(
  getSubscriptionsState,
  (state: SubscriptionsState) => state.error
);

export const getAllSubscriptions = createSelector(
  getSubscriptionsState,
  (state: SubscriptionsState) => selectAll(state)
);

export const getSubscriptionsEntities = createSelector(
  getSubscriptionsState,
  (state: SubscriptionsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getSubscriptionsState,
  (state: SubscriptionsState) => state.selectedId
);

export const getSelected = (subscriptionId: string | number) =>
  createSelector(
    getSubscriptionsEntities,
    (entities) => entities[subscriptionId]
  );

export const getSelectedSubscription = createSelector(
  getSubscriptionsState,
  (state: SubscriptionsState) => state.selectedSubscription
);

export const getTotalSubscriptions = createSelector(
  getSubscriptionsState,
  (state: SubscriptionsState) => state.total
);

export const getCurrentPageState = createSelector(
  getSubscriptionsState,
  (state: SubscriptionsState) => state.currentPage
);

export const getSubscriptionsLoadingState = createSelector(
  getSubscriptionsState,
  (state: SubscriptionsState) => state.loading
);

export const getBtnState = createSelector(
  getSubscriptionsState,
  (state: SubscriptionsState) => state.btnState
);

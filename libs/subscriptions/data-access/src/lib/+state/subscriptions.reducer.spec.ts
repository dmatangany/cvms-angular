import { Action } from '@ngrx/store';

import * as SubscriptionsActions from './subscriptions.actions';
import { SubscriptionsEntity } from './subscriptions.models';
import {
  SubscriptionsState,
  initialSubscriptionsState,
  subscriptionsReducer,
} from './subscriptions.reducer';

describe('Subscriptions Reducer', () => {
  const createSubscriptionsEntity = (
    id: string,
    name = ''
  ): SubscriptionsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Subscriptions actions', () => {
    it('loadSubscriptionsSuccess should return the list of known Subscriptions', () => {
      const subscriptions = [
        createSubscriptionsEntity('PRODUCT-AAA'),
        createSubscriptionsEntity('PRODUCT-zzz'),
      ];
      const action = SubscriptionsActions.loadSubscriptionsSuccess({
        subscriptions,
      });

      const result: SubscriptionsState = subscriptionsReducer(
        initialSubscriptionsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = subscriptionsReducer(initialSubscriptionsState, action);

      expect(result).toBe(initialSubscriptionsState);
    });
  });
});

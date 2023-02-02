import { SubscriptionsEntity } from './subscriptions.models';
import {
  subscriptionsAdapter,
  SubscriptionsPartialState,
  initialSubscriptionsState,
} from './subscriptions.reducer';
import * as SubscriptionsSelectors from './subscriptions.selectors';

describe('Subscriptions Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSubscriptionsId = (it: SubscriptionsEntity) => it.id;
  const createSubscriptionsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SubscriptionsEntity);

  let state: SubscriptionsPartialState;

  beforeEach(() => {
    state = {
      subscriptions: subscriptionsAdapter.setAll(
        [
          createSubscriptionsEntity('PRODUCT-AAA'),
          createSubscriptionsEntity('PRODUCT-BBB'),
          createSubscriptionsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialSubscriptionsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Subscriptions Selectors', () => {
    it('getAllSubscriptions() should return the list of Subscriptions', () => {
      const results = SubscriptionsSelectors.getAllSubscriptions(state);
      const selId = getSubscriptionsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SubscriptionsSelectors.getSelected(
        state
      ) as SubscriptionsEntity;
      const selId = getSubscriptionsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSubscriptionsLoaded() should return the current "loaded" status', () => {
      const result = SubscriptionsSelectors.getSubscriptionsLoaded(state);

      expect(result).toBe(true);
    });

    it('getSubscriptionsError() should return the current "error" state', () => {
      const result = SubscriptionsSelectors.getSubscriptionsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

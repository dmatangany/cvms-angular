import { PaymentTransactionsEntity } from './payment-transactions.models';
import {
  paymentTransactionsAdapter,
  PaymentTransactionsPartialState,
  initialPaymentTransactionsState,
} from './payment-transactions.reducer';
import * as PaymentTransactionsSelectors from './payment-transactions.selectors';

describe('PaymentTransactions Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPaymentTransactionsId = (it: PaymentTransactionsEntity) => it.id;
  const createPaymentTransactionsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as PaymentTransactionsEntity);

  let state: PaymentTransactionsPartialState;

  beforeEach(() => {
    state = {
      paymentTransactions: paymentTransactionsAdapter.setAll(
        [
          createPaymentTransactionsEntity('PRODUCT-AAA'),
          createPaymentTransactionsEntity('PRODUCT-BBB'),
          createPaymentTransactionsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialPaymentTransactionsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('PaymentTransactions Selectors', () => {
    it('getAllPaymentTransactions() should return the list of PaymentTransactions', () => {
      const results =
        PaymentTransactionsSelectors.getAllPaymentTransactions(state);
      const selId = getPaymentTransactionsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = PaymentTransactionsSelectors.getSelected(
        state
      ) as PaymentTransactionsEntity;
      const selId = getPaymentTransactionsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getPaymentTransactionsLoaded() should return the current "loaded" status', () => {
      const result =
        PaymentTransactionsSelectors.getPaymentTransactionsLoaded(state);

      expect(result).toBe(true);
    });

    it('getPaymentTransactionsError() should return the current "error" state', () => {
      const result =
        PaymentTransactionsSelectors.getPaymentTransactionsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

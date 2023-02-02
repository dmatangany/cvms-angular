import { Action } from '@ngrx/store';

import * as PaymentTransactionsActions from './payment-transactions.actions';
import { PaymentTransactionsEntity } from './payment-transactions.models';
import {
  PaymentTransactionsState,
  initialPaymentTransactionsState,
  paymentTransactionsReducer,
} from './payment-transactions.reducer';

describe('PaymentTransactions Reducer', () => {
  const createPaymentTransactionsEntity = (
    id: string,
    name = ''
  ): PaymentTransactionsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid PaymentTransactions actions', () => {
    it('loadPaymentTransactionsSuccess should return the list of known PaymentTransactions', () => {
      const paymentTransactions = [
        createPaymentTransactionsEntity('PRODUCT-AAA'),
        createPaymentTransactionsEntity('PRODUCT-zzz'),
      ];
      const action = PaymentTransactionsActions.loadPaymentTransactionsSuccess({
        paymentTransactions,
      });

      const result: PaymentTransactionsState = paymentTransactionsReducer(
        initialPaymentTransactionsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = paymentTransactionsReducer(
        initialPaymentTransactionsState,
        action
      );

      expect(result).toBe(initialPaymentTransactionsState);
    });
  });
});

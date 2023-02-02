import { Action } from '@ngrx/store';

import * as AccountTransactionsActions from './account-transactions.actions';
import { AccountTransactionsEntity } from './account-transactions.models';
import {
  AccountTransactionsState,
  initialAccountTransactionsState,
  accountTransactionsReducer,
} from './account-transactions.reducer';

describe('AccountTransactions Reducer', () => {
  const createAccountTransactionsEntity = (
    id: string,
    name = ''
  ): AccountTransactionsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid AccountTransactions actions', () => {
    it('loadAccountTransactionsSuccess should return the list of known AccountTransactions', () => {
      const accountTransactions = [
        createAccountTransactionsEntity('PRODUCT-AAA'),
        createAccountTransactionsEntity('PRODUCT-zzz'),
      ];
      const action = AccountTransactionsActions.loadAccountTransactionsSuccess({
        accountTransactions,
      });

      const result: AccountTransactionsState = accountTransactionsReducer(
        initialAccountTransactionsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = accountTransactionsReducer(
        initialAccountTransactionsState,
        action
      );

      expect(result).toBe(initialAccountTransactionsState);
    });
  });
});

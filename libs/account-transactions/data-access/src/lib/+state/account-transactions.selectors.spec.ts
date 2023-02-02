import { AccountTransactionsEntity } from './account-transactions.models';
import {
  accountTransactionsAdapter,
  AccountTransactionsPartialState,
  initialAccountTransactionsState,
} from './account-transactions.reducer';
import * as AccountTransactionsSelectors from './account-transactions.selectors';

describe('AccountTransactions Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAccountTransactionsId = (it: AccountTransactionsEntity) => it.id;
  const createAccountTransactionsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AccountTransactionsEntity);

  let state: AccountTransactionsPartialState;

  beforeEach(() => {
    state = {
      accountTransactions: accountTransactionsAdapter.setAll(
        [
          createAccountTransactionsEntity('PRODUCT-AAA'),
          createAccountTransactionsEntity('PRODUCT-BBB'),
          createAccountTransactionsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialAccountTransactionsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('AccountTransactions Selectors', () => {
    it('getAllAccountTransactions() should return the list of AccountTransactions', () => {
      const results =
        AccountTransactionsSelectors.getAllAccountTransactions(state);
      const selId = getAccountTransactionsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AccountTransactionsSelectors.getSelected(
        state
      ) as AccountTransactionsEntity;
      const selId = getAccountTransactionsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getAccountTransactionsLoaded() should return the current "loaded" status', () => {
      const result =
        AccountTransactionsSelectors.getAccountTransactionsLoaded(state);

      expect(result).toBe(true);
    });

    it('getAccountTransactionsError() should return the current "error" state', () => {
      const result =
        AccountTransactionsSelectors.getAccountTransactionsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

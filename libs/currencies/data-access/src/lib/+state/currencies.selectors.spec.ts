import { CurrenciesEntity } from './currencies.models';
import { State, currenciesAdapter, initialState } from './currencies.reducer';
import * as CurrenciesSelectors from './currencies.selectors';

describe('Currencies Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCurrenciesId = (it) => it['id'];
  const createCurrenciesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CurrenciesEntity);

  let state;

  beforeEach(() => {
    state = {
      currencies: currenciesAdapter.addAll(
        [
          createCurrenciesEntity('PRODUCT-AAA'),
          createCurrenciesEntity('PRODUCT-BBB'),
          createCurrenciesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Currencies Selectors', () => {
    it('getAllCurrencies() should return the list of Currencies', () => {
      const results = CurrenciesSelectors.getAllCurrencies(state);
      const selId = getCurrenciesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CurrenciesSelectors.getSelected(state);
      const selId = getCurrenciesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getCurrenciesLoaded() should return the current 'loaded' status", () => {
      const result = CurrenciesSelectors.getCurrenciesLoaded(state);

      expect(result).toBe(true);
    });

    it("getCurrenciesError() should return the current 'error' state", () => {
      const result = CurrenciesSelectors.getCurrenciesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

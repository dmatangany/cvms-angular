import { AuthoritiesEntity } from './authorities.models';
import { State, authoritiesAdapter, initialState } from './authorities.reducer';
import * as AuthoritiesSelectors from './authorities.selectors';

describe('Authorities Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAuthoritiesId = (it) => it['id'];
  const createAuthoritiesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AuthoritiesEntity);

  let state;

  beforeEach(() => {
    state = {
      authorities: authoritiesAdapter.setAll(
        [
          createAuthoritiesEntity('PRODUCT-AAA'),
          createAuthoritiesEntity('PRODUCT-BBB'),
          createAuthoritiesEntity('PRODUCT-CCC'),
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

  describe('Authorities Selectors', () => {
    it('getAllAuthorities() should return the list of Authorities', () => {
      const results = AuthoritiesSelectors.getAllAuthorities(state);
      const selId = getAuthoritiesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AuthoritiesSelectors.getSelected(state);
      const selId = getAuthoritiesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getAuthoritiesLoaded() should return the current 'loaded' status", () => {
      const result = AuthoritiesSelectors.getAuthoritiesLoaded(state);

      expect(result).toBe(true);
    });

    it("getAuthoritiesError() should return the current 'error' state", () => {
      const result = AuthoritiesSelectors.getAuthoritiesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

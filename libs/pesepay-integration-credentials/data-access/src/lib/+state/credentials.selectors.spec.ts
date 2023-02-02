import { CredentialsEntity } from './credentials.models';
import {
  credentialsAdapter,
  CredentialsPartialState,
  initialCredentialsState,
} from './credentials.reducer';
import * as CredentialsSelectors from './credentials.selectors';

describe('Credentials Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCredentialsId = (it: CredentialsEntity) => it.id;
  const createCredentialsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CredentialsEntity);

  let state: CredentialsPartialState;

  beforeEach(() => {
    state = {
      credentials: credentialsAdapter.setAll(
        [
          createCredentialsEntity('PRODUCT-AAA'),
          createCredentialsEntity('PRODUCT-BBB'),
          createCredentialsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCredentialsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Credentials Selectors', () => {
    it('getAllCredentials() should return the list of Credentials', () => {
      const results = CredentialsSelectors.getAllCredentials(state);
      const selId = getCredentialsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CredentialsSelectors.getSelected(
        state
      ) as CredentialsEntity;
      const selId = getCredentialsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getCredentialsLoaded() should return the current "loaded" status', () => {
      const result = CredentialsSelectors.getCredentialsLoaded(state);

      expect(result).toBe(true);
    });

    it('getCredentialsError() should return the current "error" state', () => {
      const result = CredentialsSelectors.getCredentialsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

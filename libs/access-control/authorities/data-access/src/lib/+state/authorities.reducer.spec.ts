import { AuthoritiesEntity } from './authorities.models';
import * as AuthoritiesActions from './authorities.actions';
import { State, initialState, reducer } from './authorities.reducer';

describe('Authorities Reducer', () => {
  const createAuthoritiesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AuthoritiesEntity);

  beforeEach(() => {});

  describe('valid Authorities actions', () => {
    it('loadAuthoritiesSuccess should return set the list of known Authorities', () => {
      const authorities = [
        createAuthoritiesEntity('PRODUCT-AAA'),
        createAuthoritiesEntity('PRODUCT-zzz'),
      ];
      const action = AuthoritiesActions.loadAuthoritiesSuccess({ authorities });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

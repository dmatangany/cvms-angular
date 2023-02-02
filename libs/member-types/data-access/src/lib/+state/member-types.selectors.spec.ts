import { MemberTypesEntity } from './member-types.models';
import {
  memberTypesAdapter,
  MemberTypesPartialState,
  initialMemberTypesState,
} from './member-types.reducer';
import * as MemberTypesSelectors from './member-types.selectors';

describe('MemberTypes Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMemberTypesId = (it: MemberTypesEntity) => it.id;
  const createMemberTypesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as MemberTypesEntity);

  let state: MemberTypesPartialState;

  beforeEach(() => {
    state = {
      memberTypes: memberTypesAdapter.setAll(
        [
          createMemberTypesEntity('PRODUCT-AAA'),
          createMemberTypesEntity('PRODUCT-BBB'),
          createMemberTypesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialMemberTypesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('MemberTypes Selectors', () => {
    it('getAllMemberTypes() should return the list of MemberTypes', () => {
      const results = MemberTypesSelectors.getAllMemberTypes(state);
      const selId = getMemberTypesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = MemberTypesSelectors.getSelected(
        state
      ) as MemberTypesEntity;
      const selId = getMemberTypesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getMemberTypesLoaded() should return the current "loaded" status', () => {
      const result = MemberTypesSelectors.getMemberTypesLoaded(state);

      expect(result).toBe(true);
    });

    it('getMemberTypesError() should return the current "error" state', () => {
      const result = MemberTypesSelectors.getMemberTypesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

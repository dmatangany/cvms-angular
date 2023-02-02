import { MemberAttributesEntity } from './member-attributes.models';
import {
  memberAttributesAdapter,
  MemberAttributesPartialState,
  initialMemberAttributesState,
} from './member-attributes.reducer';
import * as MemberAttributesSelectors from './member-attributes.selectors';

describe('MemberAttributes Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMemberAttributesId = (it: MemberAttributesEntity) => it.id;
  const createMemberAttributesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as MemberAttributesEntity);

  let state: MemberAttributesPartialState;

  beforeEach(() => {
    state = {
      memberAttributes: memberAttributesAdapter.setAll(
        [
          createMemberAttributesEntity('PRODUCT-AAA'),
          createMemberAttributesEntity('PRODUCT-BBB'),
          createMemberAttributesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialMemberAttributesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('MemberAttributes Selectors', () => {
    it('getAllMemberAttributes() should return the list of MemberAttributes', () => {
      const results = MemberAttributesSelectors.getAllMemberAttributes(state);
      const selId = getMemberAttributesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = MemberAttributesSelectors.getSelected(
        state
      ) as MemberAttributesEntity;
      const selId = getMemberAttributesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getMemberAttributesLoaded() should return the current "loaded" status', () => {
      const result = MemberAttributesSelectors.getMemberAttributesLoaded(state);

      expect(result).toBe(true);
    });

    it('getMemberAttributesError() should return the current "error" state', () => {
      const result = MemberAttributesSelectors.getMemberAttributesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

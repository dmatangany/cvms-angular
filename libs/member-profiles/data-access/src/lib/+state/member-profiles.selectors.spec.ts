import { MemberProfilesEntity } from './member-profiles.models';
import {
  memberProfilesAdapter,
  MemberProfilesPartialState,
  initialMemberProfilesState,
} from './member-profiles.reducer';
import * as MemberProfilesSelectors from './member-profiles.selectors';

describe('MemberProfiles Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMemberProfilesId = (it: MemberProfilesEntity) => it.id;
  const createMemberProfilesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as MemberProfilesEntity);

  let state: MemberProfilesPartialState;

  beforeEach(() => {
    state = {
      memberProfiles: memberProfilesAdapter.setAll(
        [
          createMemberProfilesEntity('PRODUCT-AAA'),
          createMemberProfilesEntity('PRODUCT-BBB'),
          createMemberProfilesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialMemberProfilesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('MemberProfiles Selectors', () => {
    it('getAllMemberProfiles() should return the list of MemberProfiles', () => {
      const results = MemberProfilesSelectors.getAllMemberProfiles(state);
      const selId = getMemberProfilesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = MemberProfilesSelectors.getSelected(
        state
      ) as MemberProfilesEntity;
      const selId = getMemberProfilesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getMemberProfilesLoaded() should return the current "loaded" status', () => {
      const result = MemberProfilesSelectors.getMemberProfilesLoaded(state);

      expect(result).toBe(true);
    });

    it('getMemberProfilesError() should return the current "error" state', () => {
      const result = MemberProfilesSelectors.getMemberProfilesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

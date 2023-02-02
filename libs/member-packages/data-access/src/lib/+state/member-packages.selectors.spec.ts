import { MemberPackageEntity } from './member-packages.models';
import {
  memberPackagesAdapter,
  MemberPackagesPartialState,
  initialMemberPackagesState,
} from './member-packages.reducer';
import * as MemberPackagesSelectors from './member-packages.selectors';

describe('MemberPackages Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMemberPackagesId = (it: MemberPackageEntity) => it.id;
  const createMemberPackageEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as MemberPackageEntity);

  let state: MemberPackagesPartialState;

  beforeEach(() => {
    state = {
      memberPackages: memberPackagesAdapter.setAll(
        [
          createMemberPackageEntity('PRODUCT-AAA'),
          createMemberPackageEntity('PRODUCT-BBB'),
          createMemberPackageEntity('PRODUCT-CCC'),
        ],
        {
          ...initialMemberPackagesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('MemberPackages Selectors', () => {
    it('getAllMemberPackages() should return the list of MemberPackages', () => {
      const results = MemberPackagesSelectors.getAllMemberPackages(state);
      const selId = getMemberPackagesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = MemberPackagesSelectors.getSelected(
        state
      ) as MemberPackageEntity;
      const selId = getMemberPackagesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getMemberPackagesLoaded() should return the current "loaded" status', () => {
      const result = MemberPackagesSelectors.getMemberPackagesLoaded(state);

      expect(result).toBe(true);
    });

    it('getMemberPackagesError() should return the current "error" state', () => {
      const result = MemberPackagesSelectors.getMemberPackagesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

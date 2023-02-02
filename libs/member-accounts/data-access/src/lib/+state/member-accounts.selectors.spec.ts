import { MemberAccountsEntity } from './member-accounts.models';
import {
  memberAccountsAdapter,
  MemberAccountsPartialState,
  initialMemberAccountsState,
} from './member-accounts.reducer';
import * as MemberAccountsSelectors from './member-accounts.selectors';

describe('MemberAccounts Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMemberAccountsId = (it: MemberAccountsEntity) => it.id;
  const createMemberAccountsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as MemberAccountsEntity);

  let state: MemberAccountsPartialState;

  beforeEach(() => {
    state = {
      memberAccounts: memberAccountsAdapter.setAll(
        [
          createMemberAccountsEntity('PRODUCT-AAA'),
          createMemberAccountsEntity('PRODUCT-BBB'),
          createMemberAccountsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialMemberAccountsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('MemberAccounts Selectors', () => {
    it('getAllMemberAccounts() should return the list of MemberAccounts', () => {
      const results = MemberAccountsSelectors.getAllMemberAccounts(state);
      const selId = getMemberAccountsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = MemberAccountsSelectors.getSelected(
        state
      ) as MemberAccountsEntity;
      const selId = getMemberAccountsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getMemberAccountsLoaded() should return the current "loaded" status', () => {
      const result = MemberAccountsSelectors.getMemberAccountsLoaded(state);

      expect(result).toBe(true);
    });

    it('getMemberAccountsError() should return the current "error" state', () => {
      const result = MemberAccountsSelectors.getMemberAccountsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

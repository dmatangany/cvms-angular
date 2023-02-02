import { Action } from '@ngrx/store';

import * as MemberAccountsActions from './member-accounts.actions';
import { MemberAccountsEntity } from './member-accounts.models';
import {
  MemberAccountsState,
  initialMemberAccountsState,
  memberAccountsReducer,
} from './member-accounts.reducer';

describe('MemberAccounts Reducer', () => {
  const createMemberAccountsEntity = (
    id: string,
    name = ''
  ): MemberAccountsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid MemberAccounts actions', () => {
    it('loadMemberAccountsSuccess should return the list of known MemberAccounts', () => {
      const memberAccounts = [
        createMemberAccountsEntity('PRODUCT-AAA'),
        createMemberAccountsEntity('PRODUCT-zzz'),
      ];
      const action = MemberAccountsActions.loadMemberAccountsSuccess({
        memberAccounts,
      });

      const result: MemberAccountsState = memberAccountsReducer(
        initialMemberAccountsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = memberAccountsReducer(initialMemberAccountsState, action);

      expect(result).toBe(initialMemberAccountsState);
    });
  });
});

import { Action } from '@ngrx/store';

import * as MemberProfilesActions from './member-profiles.actions';
import { MemberProfilesEntity } from './member-profiles.models';
import {
  MemberProfilesState,
  initialMemberProfilesState,
  memberProfilesReducer,
} from './member-profiles.reducer';

describe('MemberProfiles Reducer', () => {
  const createMemberProfilesEntity = (
    id: string,
    name = ''
  ): MemberProfilesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid MemberProfiles actions', () => {
    it('loadMemberProfilesSuccess should return the list of known MemberProfiles', () => {
      const memberProfiles = [
        createMemberProfilesEntity('PRODUCT-AAA'),
        createMemberProfilesEntity('PRODUCT-zzz'),
      ];
      const action = MemberProfilesActions.loadMemberProfilesSuccess({
        memberProfiles,
      });

      const result: MemberProfilesState = memberProfilesReducer(
        initialMemberProfilesState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = memberProfilesReducer(initialMemberProfilesState, action);

      expect(result).toBe(initialMemberProfilesState);
    });
  });
});

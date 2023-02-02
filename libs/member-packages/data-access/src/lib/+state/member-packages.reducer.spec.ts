import { Action } from '@ngrx/store';

import * as MemberPackagesActions from './member-packages.actions';
import { MemberPackageEntity } from './member-packages.models';
import {
  MemberPackagesState,
  initialMemberPackagesState,
  memberPackagesReducer,
} from './member-packages.reducer';

describe('MemberPackages Reducer', () => {
  const createMemberPackageEntity = (
    id: string,
    name = ''
  ): MemberPackageEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid MemberPackages actions', () => {
    it('loadMemberPackagesSuccess should return the list of known MemberPackages', () => {
      const memberPackages = [
        createMemberPackageEntity('PRODUCT-AAA'),
        createMemberPackageEntity('PRODUCT-zzz'),
      ];
      const action = MemberPackagesActions.loadMemberPackagesSuccess({
        memberPackages,
      });

      const result: MemberPackagesState = memberPackagesReducer(
        initialMemberPackagesState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = memberPackagesReducer(initialMemberPackagesState, action);

      expect(result).toBe(initialMemberPackagesState);
    });
  });
});

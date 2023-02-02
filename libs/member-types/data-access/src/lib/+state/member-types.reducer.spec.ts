import { Action } from '@ngrx/store';

import * as MemberTypesActions from './member-types.actions';
import { MemberTypesEntity } from './member-types.models';
import {
  MemberTypesState,
  initialMemberTypesState,
  memberTypesReducer,
} from './member-types.reducer';

describe('MemberTypes Reducer', () => {
  const createMemberTypesEntity = (
    id: string,
    name = ''
  ): MemberTypesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid MemberTypes actions', () => {
    it('loadMemberTypesSuccess should return the list of known MemberTypes', () => {
      const memberTypes = [
        createMemberTypesEntity('PRODUCT-AAA'),
        createMemberTypesEntity('PRODUCT-zzz'),
      ];
      const action = MemberTypesActions.loadMemberTypesSuccess({ memberTypes });

      const result: MemberTypesState = memberTypesReducer(
        initialMemberTypesState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = memberTypesReducer(initialMemberTypesState, action);

      expect(result).toBe(initialMemberTypesState);
    });
  });
});

import { Action } from '@ngrx/store';

import * as MemberAttributesActions from './member-attributes.actions';
import { MemberAttributesEntity } from './member-attributes.models';
import {
  MemberAttributesState,
  initialMemberAttributesState,
  memberAttributesReducer,
} from './member-attributes.reducer';

describe('MemberAttributes Reducer', () => {
  const createMemberAttributesEntity = (
    id: string,
    name = ''
  ): MemberAttributesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid MemberAttributes actions', () => {
    it('loadMemberAttributesSuccess should return the list of known MemberAttributes', () => {
      const memberAttributes = [
        createMemberAttributesEntity('PRODUCT-AAA'),
        createMemberAttributesEntity('PRODUCT-zzz'),
      ];
      const action = MemberAttributesActions.loadMemberAttributesSuccess({
        memberAttributes,
      });

      const result: MemberAttributesState = memberAttributesReducer(
        initialMemberAttributesState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = memberAttributesReducer(
        initialMemberAttributesState,
        action
      );

      expect(result).toBe(initialMemberAttributesState);
    });
  });
});

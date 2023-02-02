import { Action } from '@ngrx/store';

import * as CredentialsActions from './credentials.actions';
import { CredentialsEntity } from './credentials.models';
import {
  CredentialsState,
  initialCredentialsState,
  credentialsReducer,
} from './credentials.reducer';

describe('Credentials Reducer', () => {
  const createCredentialsEntity = (
    id: string,
    name = ''
  ): CredentialsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Credentials actions', () => {
    it('loadCredentialsSuccess should return the list of known Credentials', () => {
      const credentials = [
        createCredentialsEntity('PRODUCT-AAA'),
        createCredentialsEntity('PRODUCT-zzz'),
      ];
      const action = CredentialsActions.loadCredentialsSuccess({ credentials });

      const result: CredentialsState = credentialsReducer(
        initialCredentialsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = credentialsReducer(initialCredentialsState, action);

      expect(result).toBe(initialCredentialsState);
    });
  });
});

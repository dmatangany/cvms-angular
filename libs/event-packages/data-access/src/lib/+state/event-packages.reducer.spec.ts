import { Action } from '@ngrx/store';

import * as EventPackagesActions from './event-packages.actions';
import { EventPackagesEntity } from './event-packages.models';
import {
  EventPackagesState,
  initialEventPackagesState,
  eventPackagesReducer,
} from './event-packages.reducer';

describe('EventPackages Reducer', () => {
  const createEventPackagesEntity = (
    id: string,
    name = ''
  ): EventPackagesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid EventPackages actions', () => {
    it('loadEventPackagesSuccess should return the list of known EventPackages', () => {
      const eventPackages = [
        createEventPackagesEntity('PRODUCT-AAA'),
        createEventPackagesEntity('PRODUCT-zzz'),
      ];
      const action = EventPackagesActions.loadEventPackagesSuccess({
        eventPackages,
      });

      const result: EventPackagesState = eventPackagesReducer(
        initialEventPackagesState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = eventPackagesReducer(initialEventPackagesState, action);

      expect(result).toBe(initialEventPackagesState);
    });
  });
});

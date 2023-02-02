import { EventPackagesEntity } from './event-packages.models';
import {
  eventPackagesAdapter,
  EventPackagesPartialState,
  initialEventPackagesState,
} from './event-packages.reducer';
import * as EventPackagesSelectors from './event-packages.selectors';

describe('EventPackages Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getEventPackagesId = (it: EventPackagesEntity) => it.id;
  const createEventPackagesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as EventPackagesEntity);

  let state: EventPackagesPartialState;

  beforeEach(() => {
    state = {
      eventPackages: eventPackagesAdapter.setAll(
        [
          createEventPackagesEntity('PRODUCT-AAA'),
          createEventPackagesEntity('PRODUCT-BBB'),
          createEventPackagesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialEventPackagesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('EventPackages Selectors', () => {
    it('getAllEventPackages() should return the list of EventPackages', () => {
      const results = EventPackagesSelectors.getAllEventPackages(state);
      const selId = getEventPackagesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = EventPackagesSelectors.getSelected(
        state
      ) as EventPackagesEntity;
      const selId = getEventPackagesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getEventPackagesLoaded() should return the current "loaded" status', () => {
      const result = EventPackagesSelectors.getEventPackagesLoaded(state);

      expect(result).toBe(true);
    });

    it('getEventPackagesError() should return the current "error" state', () => {
      const result = EventPackagesSelectors.getEventPackagesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

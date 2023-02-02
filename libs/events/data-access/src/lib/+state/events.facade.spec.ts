import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as EventsActions from './events.actions';
import { EventsEffects } from './events.effects';
import { EventsFacade } from './events.facade';
import { EventsEntity } from './events.models';
import {
  EVENTS_FEATURE_KEY,
  EventsState,
  initialEventsState,
  eventsReducer,
} from './events.reducer';
import * as EventsSelectors from './events.selectors';

interface TestSchema {
  events: EventsState;
}

describe('EventsFacade', () => {
  let facade: EventsFacade;
  let store: Store<TestSchema>;
  const createEventsEntity = (id: string, name = ''): EventsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(EVENTS_FEATURE_KEY, eventsReducer),
          EffectsModule.forFeature([EventsEffects]),
        ],
        providers: [EventsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(EventsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allEvents$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allEvents$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadEventsSuccess` to manually update list
     */
    it('allEvents$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allEvents$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        EventsActions.loadEventsSuccess({
          events: [createEventsEntity('AAA'), createEventsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allEvents$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});

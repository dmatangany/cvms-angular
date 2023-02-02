import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as EventPackagesActions from './event-packages.actions';
import { EventPackagesEffects } from './event-packages.effects';
import { EventPackagesFacade } from './event-packages.facade';
import { EventPackagesEntity } from './event-packages.models';
import {
  EVENT_PACKAGES_FEATURE_KEY,
  EventPackagesState,
  initialEventPackagesState,
  eventPackagesReducer,
} from './event-packages.reducer';
import * as EventPackagesSelectors from './event-packages.selectors';

interface TestSchema {
  eventPackages: EventPackagesState;
}

describe('EventPackagesFacade', () => {
  let facade: EventPackagesFacade;
  let store: Store<TestSchema>;
  const createEventPackagesEntity = (
    id: string,
    name = ''
  ): EventPackagesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            EVENT_PACKAGES_FEATURE_KEY,
            eventPackagesReducer
          ),
          EffectsModule.forFeature([EventPackagesEffects]),
        ],
        providers: [EventPackagesFacade],
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
      facade = TestBed.inject(EventPackagesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allEventPackages$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allEventPackages$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadEventPackagesSuccess` to manually update list
     */
    it('allEventPackages$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allEventPackages$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        EventPackagesActions.loadEventPackagesSuccess({
          eventPackages: [
            createEventPackagesEntity('AAA'),
            createEventPackagesEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allEventPackages$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});

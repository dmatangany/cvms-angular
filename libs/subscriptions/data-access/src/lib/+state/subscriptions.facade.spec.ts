import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as SubscriptionsActions from './subscriptions.actions';
import { SubscriptionsEffects } from './subscriptions.effects';
import { SubscriptionsFacade } from './subscriptions.facade';
import { SubscriptionsEntity } from './subscriptions.models';
import {
  SUBSCRIPTIONS_FEATURE_KEY,
  SubscriptionsState,
  initialSubscriptionsState,
  subscriptionsReducer,
} from './subscriptions.reducer';
import * as SubscriptionsSelectors from './subscriptions.selectors';

interface TestSchema {
  subscriptions: SubscriptionsState;
}

describe('SubscriptionsFacade', () => {
  let facade: SubscriptionsFacade;
  let store: Store<TestSchema>;
  const createSubscriptionsEntity = (
    id: string,
    name = ''
  ): SubscriptionsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            SUBSCRIPTIONS_FEATURE_KEY,
            subscriptionsReducer
          ),
          EffectsModule.forFeature([SubscriptionsEffects]),
        ],
        providers: [SubscriptionsFacade],
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
      facade = TestBed.inject(SubscriptionsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allSubscriptions$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allSubscriptions$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadSubscriptionsSuccess` to manually update list
     */
    it('allSubscriptions$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allSubscriptions$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        SubscriptionsActions.loadSubscriptionsSuccess({
          subscriptions: [
            createSubscriptionsEntity('AAA'),
            createSubscriptionsEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allSubscriptions$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});

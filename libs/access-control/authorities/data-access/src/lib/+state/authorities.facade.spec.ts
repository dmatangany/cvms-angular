import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { AuthoritiesEntity } from './authorities.models';
import { AuthoritiesEffects } from './authorities.effects';
import { AuthoritiesFacade } from './authorities.facade';

import * as AuthoritiesSelectors from './authorities.selectors';
import * as AuthoritiesActions from './authorities.actions';
import {
  AUTHORITIES_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './authorities.reducer';

interface TestSchema {
  authorities: State;
}

describe('AuthoritiesFacade', () => {
  let facade: AuthoritiesFacade;
  let store: Store<TestSchema>;
  const createAuthoritiesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AuthoritiesEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(AUTHORITIES_FEATURE_KEY, reducer),
          EffectsModule.forFeature([AuthoritiesEffects]),
        ],
        providers: [AuthoritiesFacade],
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

      store = TestBed.get(Store);
      facade = TestBed.get(AuthoritiesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allAuthorities$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(AuthoritiesActions.loadAuthorities());

        list = await readFirst(facade.allAuthorities$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadAuthoritiesSuccess` to manually update list
     */
    it('allAuthorities$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allAuthorities$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          AuthoritiesActions.loadAuthoritiesSuccess({
            authorities: [
              createAuthoritiesEntity('AAA'),
              createAuthoritiesEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allAuthorities$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});

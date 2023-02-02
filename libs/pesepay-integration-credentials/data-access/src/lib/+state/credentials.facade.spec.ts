import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as CredentialsActions from './credentials.actions';
import { CredentialsEffects } from './credentials.effects';
import { CredentialsFacade } from './credentials.facade';
import { CredentialsEntity } from './credentials.models';
import {
  CREDENTIALS_FEATURE_KEY,
  CredentialsState,
  initialCredentialsState,
  credentialsReducer,
} from './credentials.reducer';
import * as CredentialsSelectors from './credentials.selectors';

interface TestSchema {
  credentials: CredentialsState;
}

describe('CredentialsFacade', () => {
  let facade: CredentialsFacade;
  let store: Store<TestSchema>;
  const createCredentialsEntity = (
    id: string,
    name = ''
  ): CredentialsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CREDENTIALS_FEATURE_KEY, credentialsReducer),
          EffectsModule.forFeature([CredentialsEffects]),
        ],
        providers: [CredentialsFacade],
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
      facade = TestBed.inject(CredentialsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allCredentials$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allCredentials$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadCredentialsSuccess` to manually update list
     */
    it('allCredentials$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allCredentials$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        CredentialsActions.loadCredentialsSuccess({
          credentials: [
            createCredentialsEntity('AAA'),
            createCredentialsEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allCredentials$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});

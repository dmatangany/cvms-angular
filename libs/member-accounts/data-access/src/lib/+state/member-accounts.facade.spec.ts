import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as MemberAccountsActions from './member-accounts.actions';
import { MemberAccountsEffects } from './member-accounts.effects';
import { MemberAccountsFacade } from './member-accounts.facade';
import { MemberAccountsEntity } from './member-accounts.models';
import {
  MEMBER_ACCOUNTS_FEATURE_KEY,
  MemberAccountsState,
  initialMemberAccountsState,
  memberAccountsReducer,
} from './member-accounts.reducer';
import * as MemberAccountsSelectors from './member-accounts.selectors';

interface TestSchema {
  memberAccounts: MemberAccountsState;
}

describe('MemberAccountsFacade', () => {
  let facade: MemberAccountsFacade;
  let store: Store<TestSchema>;
  const createMemberAccountsEntity = (
    id: string,
    name = ''
  ): MemberAccountsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            MEMBER_ACCOUNTS_FEATURE_KEY,
            memberAccountsReducer
          ),
          EffectsModule.forFeature([MemberAccountsEffects]),
        ],
        providers: [MemberAccountsFacade],
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
      facade = TestBed.inject(MemberAccountsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allMemberAccounts$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allMemberAccounts$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadMemberAccountsSuccess` to manually update list
     */
    it('allMemberAccounts$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allMemberAccounts$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        MemberAccountsActions.loadMemberAccountsSuccess({
          memberAccounts: [
            createMemberAccountsEntity('AAA'),
            createMemberAccountsEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allMemberAccounts$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});

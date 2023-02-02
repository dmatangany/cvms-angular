import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as AccountTransactionsActions from './account-transactions.actions';
import { AccountTransactionsEffects } from './account-transactions.effects';
import { AccountTransactionsFacade } from './account-transactions.facade';
import { AccountTransactionsEntity } from './account-transactions.models';
import {
  ACCOUNT_TRANSACTIONS_FEATURE_KEY,
  AccountTransactionsState,
  initialAccountTransactionsState,
  accountTransactionsReducer,
} from './account-transactions.reducer';
import * as AccountTransactionsSelectors from './account-transactions.selectors';

interface TestSchema {
  accountTransactions: AccountTransactionsState;
}

describe('AccountTransactionsFacade', () => {
  let facade: AccountTransactionsFacade;
  let store: Store<TestSchema>;
  const createAccountTransactionsEntity = (
    id: string,
    name = ''
  ): AccountTransactionsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            ACCOUNT_TRANSACTIONS_FEATURE_KEY,
            accountTransactionsReducer
          ),
          EffectsModule.forFeature([AccountTransactionsEffects]),
        ],
        providers: [AccountTransactionsFacade],
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
      facade = TestBed.inject(AccountTransactionsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allAccountTransactions$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allAccountTransactions$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadAccountTransactionsSuccess` to manually update list
     */
    it('allAccountTransactions$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allAccountTransactions$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        AccountTransactionsActions.loadAccountTransactionsSuccess({
          accountTransactions: [
            createAccountTransactionsEntity('AAA'),
            createAccountTransactionsEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allAccountTransactions$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});

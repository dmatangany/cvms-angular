import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as PaymentTransactionsActions from './payment-transactions.actions';
import { PaymentTransactionsEffects } from './payment-transactions.effects';
import { PaymentTransactionsFacade } from './payment-transactions.facade';
import { PaymentTransactionsEntity } from './payment-transactions.models';
import {
  PAYMENT_TRANSACTIONS_FEATURE_KEY,
  PaymentTransactionsState,
  initialPaymentTransactionsState,
  paymentTransactionsReducer,
} from './payment-transactions.reducer';
import * as PaymentTransactionsSelectors from './payment-transactions.selectors';

interface TestSchema {
  paymentTransactions: PaymentTransactionsState;
}

describe('PaymentTransactionsFacade', () => {
  let facade: PaymentTransactionsFacade;
  let store: Store<TestSchema>;
  const createPaymentTransactionsEntity = (
    id: string,
    name = ''
  ): PaymentTransactionsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            PAYMENT_TRANSACTIONS_FEATURE_KEY,
            paymentTransactionsReducer
          ),
          EffectsModule.forFeature([PaymentTransactionsEffects]),
        ],
        providers: [PaymentTransactionsFacade],
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
      facade = TestBed.inject(PaymentTransactionsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allPaymentTransactions$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allPaymentTransactions$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadPaymentTransactionsSuccess` to manually update list
     */
    it('allPaymentTransactions$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allPaymentTransactions$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        PaymentTransactionsActions.loadPaymentTransactionsSuccess({
          paymentTransactions: [
            createPaymentTransactionsEntity('AAA'),
            createPaymentTransactionsEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allPaymentTransactions$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});

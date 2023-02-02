import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as PaymentTransactionsActions from './payment-transactions.actions';
import { PaymentTransactionsEffects } from './payment-transactions.effects';

describe('PaymentTransactionsEffects', () => {
  let actions: Observable<Action>;
  let effects: PaymentTransactionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        PaymentTransactionsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PaymentTransactionsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: PaymentTransactionsActions.initPaymentTransactions(),
      });

      const expected = hot('-a-|', {
        a: PaymentTransactionsActions.loadPaymentTransactionsSuccess({
          paymentTransactions: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

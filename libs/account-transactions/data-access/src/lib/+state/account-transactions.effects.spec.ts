import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as AccountTransactionsActions from './account-transactions.actions';
import { AccountTransactionsEffects } from './account-transactions.effects';

describe('AccountTransactionsEffects', () => {
  let actions: Observable<Action>;
  let effects: AccountTransactionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AccountTransactionsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AccountTransactionsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: AccountTransactionsActions.initAccountTransactions(),
      });

      const expected = hot('-a-|', {
        a: AccountTransactionsActions.loadAccountTransactionsSuccess({
          accountTransactions: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

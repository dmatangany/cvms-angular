import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as SubscriptionsActions from './subscriptions.actions';
import { SubscriptionsEffects } from './subscriptions.effects';

describe('SubscriptionsEffects', () => {
  let actions: Observable<Action>;
  let effects: SubscriptionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SubscriptionsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SubscriptionsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SubscriptionsActions.initSubscriptions() });

      const expected = hot('-a-|', {
        a: SubscriptionsActions.loadSubscriptionsSuccess({ subscriptions: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as MemberAccountsActions from './member-accounts.actions';
import { MemberAccountsEffects } from './member-accounts.effects';

describe('MemberAccountsEffects', () => {
  let actions: Observable<Action>;
  let effects: MemberAccountsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MemberAccountsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MemberAccountsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MemberAccountsActions.initMemberAccounts() });

      const expected = hot('-a-|', {
        a: MemberAccountsActions.loadMemberAccountsSuccess({
          memberAccounts: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

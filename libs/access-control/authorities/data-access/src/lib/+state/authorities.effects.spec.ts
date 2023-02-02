import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';

import { AuthoritiesEffects } from './authorities.effects';
import * as AuthoritiesActions from './authorities.actions';
import { hot } from 'jasmine-marbles';

describe('AuthoritiesEffects', () => {
  let actions: Observable<any>;
  let effects: AuthoritiesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AuthoritiesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(AuthoritiesEffects);
  });

  describe('loadAuthorities$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthoritiesActions.loadAuthorities() });

      const expected = hot('-a-|', {
        a: AuthoritiesActions.loadAuthoritiesSuccess({ authorities: [] }),
      });

      expect(effects.loadAuthorities$).toBeObservable(expected);
    });
  });
});

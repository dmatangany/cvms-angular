import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CredentialsActions from './credentials.actions';
import { CredentialsEffects } from './credentials.effects';

describe('CredentialsEffects', () => {
  let actions: Observable<Action>;
  let effects: CredentialsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CredentialsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CredentialsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CredentialsActions.initCredentials() });

      const expected = hot('-a-|', {
        a: CredentialsActions.loadCredentialsSuccess({ credentials: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

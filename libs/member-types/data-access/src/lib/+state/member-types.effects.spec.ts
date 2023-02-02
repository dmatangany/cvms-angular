import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as MemberTypesActions from './member-types.actions';
import { MemberTypesEffects } from './member-types.effects';

describe('MemberTypesEffects', () => {
  let actions: Observable<Action>;
  let effects: MemberTypesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MemberTypesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MemberTypesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MemberTypesActions.initMemberTypes() });

      const expected = hot('-a-|', {
        a: MemberTypesActions.loadMemberTypesSuccess({ memberTypes: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

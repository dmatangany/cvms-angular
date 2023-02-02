import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as MemberAttributesActions from './member-attributes.actions';
import { MemberAttributesEffects } from './member-attributes.effects';

describe('MemberAttributesEffects', () => {
  let actions: Observable<Action>;
  let effects: MemberAttributesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MemberAttributesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MemberAttributesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: MemberAttributesActions.initMemberAttributes(),
      });

      const expected = hot('-a-|', {
        a: MemberAttributesActions.loadMemberAttributesSuccess({
          memberAttributes: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

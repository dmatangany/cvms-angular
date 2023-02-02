import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as MemberProfilesActions from './member-profiles.actions';
import { MemberProfilesEffects } from './member-profiles.effects';

describe('MemberProfilesEffects', () => {
  let actions: Observable<Action>;
  let effects: MemberProfilesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MemberProfilesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MemberProfilesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MemberProfilesActions.initMemberProfiles() });

      const expected = hot('-a-|', {
        a: MemberProfilesActions.loadMemberProfilesSuccess({
          memberProfiles: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

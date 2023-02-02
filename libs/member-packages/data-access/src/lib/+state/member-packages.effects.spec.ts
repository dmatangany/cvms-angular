import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as MemberPackagesActions from './member-packages.actions';
import { MemberPackagesEffects } from './member-packages.effects';

describe('MemberPackagesEffects', () => {
  let actions: Observable<Action>;
  let effects: MemberPackagesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MemberPackagesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MemberPackagesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MemberPackagesActions.initMemberPackages() });

      const expected = hot('-a-|', {
        a: MemberPackagesActions.loadMemberPackagesSuccess({
          memberPackages: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

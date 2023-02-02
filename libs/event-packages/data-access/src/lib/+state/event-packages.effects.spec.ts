import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as EventPackagesActions from './event-packages.actions';
import { EventPackagesEffects } from './event-packages.effects';

describe('EventPackagesEffects', () => {
  let actions: Observable<Action>;
  let effects: EventPackagesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        EventPackagesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(EventPackagesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: EventPackagesActions.initEventPackages() });

      const expected = hot('-a-|', {
        a: EventPackagesActions.loadEventPackagesSuccess({ eventPackages: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

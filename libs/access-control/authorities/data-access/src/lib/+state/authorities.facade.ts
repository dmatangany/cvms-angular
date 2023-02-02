import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromAuthorities from './authorities.reducer';
import * as AuthoritiesSelectors from './authorities.selectors';
import * as AuthoritiesActions from './authorities.actions';

@Injectable()
export class AuthoritiesFacade {
  loaded$ = this.store.pipe(select(AuthoritiesSelectors.getAuthoritiesLoaded));
  allAuthorities$ = this.store.pipe(
    select(AuthoritiesSelectors.getAllAuthorities)
  );


  constructor(private store: Store<fromAuthorities.AuthoritiesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  getAllAuthorities() {
    this.store.dispatch(AuthoritiesActions.getAllAuthorities());
  }
}

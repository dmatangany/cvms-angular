import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { Authenticate } from './auth.models';
import * as AuthFeature from './auth.reducer';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  loaded$ = this.store.pipe(select(AuthSelectors.getAuthLoaded));
  authBtnState$ = this.store.pipe(select(AuthSelectors.getAuthBtnState));
  loading$ = this.store.pipe(select(AuthSelectors.getAuthLoading));

  constructor(private store: Store<AuthFeature.AuthPartialState>) {}

  clientLogin(credentials: Authenticate) {
    this.store.dispatch(AuthActions.clientLogin({ credentials }));
  }

  adminLogin(credentials: Authenticate) {
    this.store.dispatch(AuthActions.adminLogin({ credentials }));
  }

  logout() {
    this.store.dispatch(AuthActions.Logout());
  }

  isLoggedIn(): boolean {
    return Boolean(
      sessionStorage.getItem('accessToken') &&
        sessionStorage.getItem('isAuthenticated')
    );
  }

  register(credentials: any) {
    this.store.dispatch(AuthActions.register({ credentials }));
  }
}

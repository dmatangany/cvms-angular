import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { ClrDatagridStateInterface } from '@clr/angular';

import * as fromUserAuthorities from './user-authorities.reducer';
import * as UserAuthoritiesSelectors from './user-authorities.selectors';
import * as UserAuthoritiesActions from './user-authorities.actions';

@Injectable()
export class UserAuthoritiesFacade {
  loaded$ = this.store.pipe(
    select(UserAuthoritiesSelectors.getUserAuthoritiesLoaded)
  );
  allUserAuthorities$ = this.store.pipe(
    select(UserAuthoritiesSelectors.getAllUserAuthorities)
  );
  loading$ = this.store.pipe(
    select(UserAuthoritiesSelectors.getUserAuthoritiesLoadingState)
  );
  totalUserAuthorities$ = this.store.pipe(
    select(UserAuthoritiesSelectors.getTotalUserAuthorities)
  );
  btnState$ = this.store.pipe(select(UserAuthoritiesSelectors.getBtnState));
  unassignedAuthorities$ = this.store.pipe(
    select(UserAuthoritiesSelectors.getUnassignedAuthoritiesState)
  );

  constructor(
    private store: Store<fromUserAuthorities.UserAuthoritiesPartialState>
  ) {}

  getPaginatedUserAuthorities(
    userId: string | number,
    state: ClrDatagridStateInterface
  ) {
    this.store.dispatch(
      UserAuthoritiesActions.loadPaginatedUserAuthorities({ userId, state })
    );
  }

  getAllUserAuthorities(userId: string | number) {
    this.store.dispatch(UserAuthoritiesActions.loadAllUserAuthorities(userId));
  }

  createUserAuthoritiesBundled(request: any) {
    console.log('1' + request);
    this.store.dispatch(
      UserAuthoritiesActions.createUserAuthorities({ request })
    );
  }

  removeUserAuthorities(userAuthorityIds: number[]) {
    this.store.dispatch(
      UserAuthoritiesActions.deleteUserAuthorities(userAuthorityIds)
    );
  }

  getAdminUnassignedUserAuthorities(userId: string) {
    this.store.dispatch(
      UserAuthoritiesActions.loadAdminUnassignedUserAuthorities(userId)
    );
  }
}

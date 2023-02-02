import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { ClrDatagridStateInterface } from '@clr/angular';

import * as fromGroupAuthorities from './group-authorities.reducer';
import * as GroupAuthoritiesSelectors from './group-authorities.selectors';
import * as GroupAuthoritiesActions from './group-authorities.actions';

@Injectable()
export class GroupAuthoritiesFacade {
  loaded$ = this.store.pipe(
    select(GroupAuthoritiesSelectors.getGroupAuthoritiesLoaded)
  );
  allGroupAuthorities$ = this.store.pipe(
    select(GroupAuthoritiesSelectors.getAllGroupAuthorities)
  );
  loading$ = this.store.pipe(
    select(GroupAuthoritiesSelectors.getGroupAuthoritiesLoadingState)
  );
  totalGroupAuthorities$ = this.store.pipe(
    select(GroupAuthoritiesSelectors.getTotalGroupAuthorities)
  );
  btnState$ = this.store.pipe(select(GroupAuthoritiesSelectors.getBtnState));
  unassignedAuthorities$ = this.store.pipe(
    select(GroupAuthoritiesSelectors.getUnassignedAuthoritiesState)
  );

  constructor(
    private store: Store<fromGroupAuthorities.GroupAuthoritiesPartialState>
  ) {}

  getPaginatedGroupAuthorities(
    groupId: string | number,
    state: ClrDatagridStateInterface
  ) {
    this.store.dispatch(
      GroupAuthoritiesActions.loadPaginatedGroupAuthorities({ groupId, state })
    );
  }

  getAllGroupAuthorities(groupId: string | number) {
    this.store.dispatch(
      GroupAuthoritiesActions.loadAllGroupAuthorities(groupId)
    );
  }

  createGroupAuthoritiesBundled(request: any) {
    this.store.dispatch(
      GroupAuthoritiesActions.createGroupAuthorities(request)
    );
  }

  removeGroupAuthorities(groupAuthorityIds: number[]) {
    this.store.dispatch(
      GroupAuthoritiesActions.deleteGroupAuthorities(groupAuthorityIds)
    );
  }

  getAdminUnassignedGroupAuthorities(groupId: string) {
    this.store.dispatch(
      GroupAuthoritiesActions.loadAdminUnassignedGroupAuthorities(groupId)
    );
  }
}
